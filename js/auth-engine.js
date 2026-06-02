/**
 * BrainByte — Authentication Engine v3.0
 * ================================================================
 * Complete auth system: Phone OTP (signup) + Email OTP (login)
 * Supabase-backed OTP storage with SHA-256 hashing
 * Brute-force protection, 5-min expiry, 5 max attempts
 * ================================================================
 */

const AuthEngine = (() => {

  // ── Constants ──────────────────────────────────────────────────
  const OTP_EXPIRY_MS        = 5 * 60 * 1000;   // 5 minutes
  const RESEND_COOLDOWN_SEC  = 30;
  const MAX_OTP_ATTEMPTS     = 5;
  const BF_LIMIT             = 5;                // Login failures before lockout
  const BF_LOCKOUT_MS        = 15 * 60 * 1000;  // 15-minute lockout
  const OTP_SALT             = 'bb_otp_v3_2025';

  // ── Active timers store ────────────────────────────────────────
  const timers = {};

  // ── Supabase client ────────────────────────────────────────────
  function db() {
    const client = window.supabaseClient;
    if (!client) throw new Error('Supabase not initialized. Check js/supabase-config.js');
    return client;
  }

  // ================================================================
  // CRYPTO — SHA-256 hash for OTP codes
  // ================================================================
  async function hashCode(code) {
    const buf  = new TextEncoder().encode(code + OTP_SALT);
    const hash = await crypto.subtle.digest('SHA-256', buf);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  function generateOTP() {
    // Cryptographically random 6-digit code
    const arr = new Uint32Array(1);
    crypto.getRandomValues(arr);
    return String(100000 + (arr[0] % 900000));
  }

  // ================================================================
  // VALIDATORS
  // ================================================================
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
  }

  function validatePhone(phone) {
    // Strip spaces/dashes/parens, must be 7–15 digits optionally starting with +
    const clean = String(phone).replace(/[\s\-\(\)]/g, '');
    return /^\+?[1-9]\d{7,14}$/.test(clean);
  }

  function validatePassword(password) {
    const p = String(password);
    const checks = {
      length:    p.length >= 8,
      uppercase: /[A-Z]/.test(p),
      lowercase: /[a-z]/.test(p),
      number:    /[0-9]/.test(p)
    };
    const score = Object.values(checks).filter(Boolean).length;
    const label = score <= 1 ? 'Weak' : score === 2 ? 'Fair' : score === 3 ? 'Good' : 'Strong';
    return { valid: checks.length, score, label, checks };
  }

  function validateFullName(name) {
    return String(name).trim().length >= 2;
  }

  // ================================================================
  // MASKING helpers
  // ================================================================
  function maskEmail(email) {
    const [local, domain] = String(email).split('@');
    if (!domain) return email;
    const m = local.length <= 2
      ? local[0] + '**'
      : local[0] + '*'.repeat(Math.min(local.length - 2, 4)) + local.slice(-1);
    return `${m}@${domain}`;
  }

  function maskPhone(phone) {
    const s = String(phone);
    if (s.length < 5) return s;
    return s.slice(0, -4).replace(/\d/g, '*') + s.slice(-4);
  }

  // ================================================================
  // BRUTE-FORCE PROTECTION (localStorage-based)
  // ================================================================
  function bfKey(id) { return `bb_bf_${btoa(String(id)).slice(0, 16)}`; }

  function checkBruteForce(identifier) {
    const data = JSON.parse(localStorage.getItem(bfKey(identifier)) || '{"count":0,"lockedUntil":0}');
    if (data.lockedUntil && Date.now() < data.lockedUntil) {
      const min = Math.ceil((data.lockedUntil - Date.now()) / 60000);
      return { locked: true, message: `Account temporarily locked. Try again in ${min} min.` };
    }
    if (data.lockedUntil && Date.now() >= data.lockedUntil) {
      localStorage.removeItem(bfKey(identifier));
    }
    return { locked: false, count: data.count || 0 };
  }

  function recordFailedLogin(identifier) {
    const data = JSON.parse(localStorage.getItem(bfKey(identifier)) || '{"count":0,"lockedUntil":0}');
    data.count = (data.count || 0) + 1;
    if (data.count >= BF_LIMIT) data.lockedUntil = Date.now() + BF_LOCKOUT_MS;
    localStorage.setItem(bfKey(identifier), JSON.stringify(data));
    return { count: data.count, locked: data.count >= BF_LIMIT };
  }

  function clearBruteForce(identifier) {
    localStorage.removeItem(bfKey(identifier));
  }

  // ================================================================
  // DUPLICATE CHECK
  // ================================================================
  async function checkDuplicates(email, phone) {
    const client = db();
    try {
      const [{ data: eu }, { data: pu }] = await Promise.all([
        client.from('bb_users').select('id').eq('email', email.toLowerCase()).maybeSingle(),
        client.from('bb_users').select('id').eq('phone_number', phone).maybeSingle()
      ]);
      if (eu) return { isDuplicate: true, field: 'email',  message: 'Email already registered. Please log in.' };
      if (pu) return { isDuplicate: true, field: 'phone',  message: 'Phone number already registered.' };
    } catch (e) {
      // Supabase unavailable — fall back to mock check
      const mocks = JSON.parse(localStorage.getItem('bb_mock_users') || '[]');
      if (mocks.find(u => u.email === email.toLowerCase())) return { isDuplicate: true, field: 'email', message: 'Email already registered.' };
      if (mocks.find(u => u.phone_number === phone))        return { isDuplicate: true, field: 'phone', message: 'Phone already registered.' };
    }
    return { isDuplicate: false };
  }

  // ================================================================
  // OTP — SEND
  // Stores hashed OTP in Supabase bb_otp_verifications table
  // Falls back to sessionStorage if Supabase unavailable
  // ================================================================
  async function sendOTP(recipient, type) {
    const code      = generateOTP();
    const codeHash  = await hashCode(code);
    const expiresAt = new Date(Date.now() + OTP_EXPIRY_MS).toISOString();
    const key       = String(recipient).toLowerCase();

    let usedSupabase = false;

    try {
      const client = db();
      // Remove any old OTPs for this recipient+type
      await client.from('bb_otp_verifications')
        .delete()
        .eq('recipient', key)
        .eq('otp_type', type);

      const { error } = await client.from('bb_otp_verifications').insert({
        recipient:    key,
        otp_type:     type,
        code_hash:    codeHash,
        expires_at:   expiresAt,
        attempts:     0,
        max_attempts: MAX_OTP_ATTEMPTS,
        verified:     false
      });

      if (!error) usedSupabase = true;
    } catch (e) {
      console.warn('[AuthEngine] Supabase OTP store failed, using sessionStorage fallback');
    }

    // Fallback: sessionStorage
    if (!usedSupabase) {
      const fallback = { code_hash: codeHash, expires_at: expiresAt, attempts: 0, verified: false };
      sessionStorage.setItem(`bb_otp_${type}_${key}`, JSON.stringify(fallback));
    }

    // ── Display OTP in console (replace with Twilio/SendGrid in production) ──
    const channel = type === 'phone' ? '📱 SMS' : '📧 Email';
    console.groupCollapsed(`%c[BrainByte OTP] ${channel} code sent to ${recipient}`, 'color:#A855F7;font-weight:bold;');
    console.log(`%c${code}`, 'color:#10B981;font-size:2rem;font-weight:900;background:#0D0E1A;padding:6px 20px;border-radius:8px;letter-spacing:8px;');
    console.log(`%cExpires in 5 minutes. Attempts allowed: ${MAX_OTP_ATTEMPTS}`, 'color:#94A3B8;');
    console.groupEnd();

    return { success: true };
  }

  // ================================================================
  // OTP — VERIFY
  // ================================================================
  async function verifyOTP(recipient, type, enteredCode) {
    const key      = String(recipient).toLowerCase();
    const fullCode = String(enteredCode).trim().replace(/\s/g, '');

    if (fullCode.length !== 6 || !/^\d{6}$/.test(fullCode)) {
      return { success: false, error: 'Enter the complete 6-digit code.' };
    }

    const codeHash = await hashCode(fullCode);

    // ── Try Supabase ──
    try {
      const client = db();
      const { data: record, error } = await client
        .from('bb_otp_verifications')
        .select('*')
        .eq('recipient', key)
        .eq('otp_type', type)
        .eq('verified', false)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!error && record) {
        return await _verifyRecord(client, record, codeHash);
      }
    } catch (e) {
      console.warn('[AuthEngine] Supabase verify failed, trying fallback');
    }

    // ── Fallback: sessionStorage ──
    const raw = sessionStorage.getItem(`bb_otp_${type}_${key}`);
    if (!raw) return { success: false, error: 'No OTP found. Request a new code.' };
    const record = JSON.parse(raw);

    if (Date.now() > new Date(record.expires_at).getTime()) {
      sessionStorage.removeItem(`bb_otp_${type}_${key}`);
      return { success: false, error: 'OTP expired. Request a new code.', expired: true };
    }
    if (record.attempts >= MAX_OTP_ATTEMPTS) {
      sessionStorage.removeItem(`bb_otp_${type}_${key}`);
      return { success: false, error: 'Max attempts exceeded. Request a new code.', maxAttempts: true };
    }

    record.attempts++;
    if (codeHash !== record.code_hash) {
      sessionStorage.setItem(`bb_otp_${type}_${key}`, JSON.stringify(record));
      const remaining = MAX_OTP_ATTEMPTS - record.attempts;
      return {
        success: false,
        error: remaining > 0
          ? `Wrong OTP. ${remaining} attempt${remaining !== 1 ? 's' : ''} left.`
          : 'Max attempts exceeded. Request a new code.',
        remainingAttempts: remaining
      };
    }

    record.verified = true;
    sessionStorage.setItem(`bb_otp_${type}_${key}`, JSON.stringify(record));
    return { success: true };
  }

  async function _verifyRecord(client, record, codeHash) {
    if (Date.now() > new Date(record.expires_at).getTime()) {
      await client.from('bb_otp_verifications').delete().eq('id', record.id);
      return { success: false, error: 'OTP expired. Request a new code.', expired: true };
    }
    if (record.attempts >= record.max_attempts) {
      await client.from('bb_otp_verifications').delete().eq('id', record.id);
      return { success: false, error: 'Max attempts exceeded. Request a new code.', maxAttempts: true };
    }

    const newAttempts = record.attempts + 1;
    await client.from('bb_otp_verifications').update({ attempts: newAttempts }).eq('id', record.id);

    if (codeHash !== record.code_hash) {
      const remaining = record.max_attempts - newAttempts;
      return {
        success: false,
        error: remaining > 0
          ? `Wrong OTP. ${remaining} attempt${remaining !== 1 ? 's' : ''} left.`
          : 'Max attempts exceeded. Request a new code.',
        remainingAttempts: remaining
      };
    }

    await client.from('bb_otp_verifications').update({ verified: true }).eq('id', record.id);
    return { success: true };
  }

  // ================================================================
  // SIGNUP — create account after phone OTP verified
  // ================================================================
  async function signup(fullName, email, phone, password, role) {
    const client = db();
    let authUserId = null;

    try {
      const { data, error } = await client.auth.signUp({
        email:    email.toLowerCase(),
        password,
        options:  { data: { full_name: fullName, phone_number: phone } }
      });

      if (error && !error.message.includes('already registered')) throw error;
      if (data?.user) authUserId = data.user.id;

      // Create profile row
      await client.from('bb_users').insert({
        auth_id:        authUserId,
        full_name:      fullName,
        email:          email.toLowerCase(),
        phone_number:   phone,
        phone_verified: true,
        role:           role || 'student',
        created_at:     new Date().toISOString()
      }).then(({ error: pe }) => { if (pe) console.warn('[AuthEngine] Profile insert:', pe.message); });

    } catch (e) {
      console.warn('[AuthEngine] Supabase signup error:', e.message);
    }

    // Local session
    const session = {
      id:             authUserId || `local_${Date.now()}`,
      full_name:      fullName,
      email:          email.toLowerCase(),
      phone_number:   phone,
      role:           role || 'student',
      phone_verified: true,
      isLoggedIn:     true,
      created_at:     new Date().toISOString()
    };
    localStorage.setItem('brainbyte_user', JSON.stringify(session));

    // Mock user store (for local auth fallback)
    const mocks = JSON.parse(localStorage.getItem('bb_mock_users') || '[]');
    if (!mocks.find(u => u.email === email.toLowerCase())) {
      mocks.push({ ...session, password });
      localStorage.setItem('bb_mock_users', JSON.stringify(mocks));
    }

    return { success: true, session };
  }

  // ================================================================
  // LOGIN — Step 1: validate password → returns profile
  // ================================================================
  async function loginWithPassword(email, password) {
    // Brute-force check
    const bf = checkBruteForce(email);
    if (bf.locked) throw new Error(bf.message);

    let profile = null;
    let supabaseOk = false;

    try {
      const client = db();
      const { data, error } = await client.auth.signInWithPassword({
        email: email.toLowerCase(), password
      });

      if (!error && data?.user) {
        supabaseOk = true;
        clearBruteForce(email);

        // Get or build profile
        const { data: prof } = await client
          .from('bb_users').select('*').eq('auth_id', data.user.id).maybeSingle();

        profile = prof || {
          id:           data.user.id,
          auth_id:      data.user.id,
          full_name:    data.user.user_metadata?.full_name || email.split('@')[0],
          email:        email.toLowerCase(),
          phone_number: data.user.user_metadata?.phone_number || '',
          role:         'student',
          isLoggedIn:   false
        };
      }
    } catch (e) {
      console.warn('[AuthEngine] Supabase login error:', e.message);
    }

    // Local fallback
    if (!supabaseOk) {
      const mocks = JSON.parse(localStorage.getItem('bb_mock_users') || '[]');
      const found = mocks.find(u => u.email === email.toLowerCase() && u.password === password);

      if (!found) {
        const rec = recordFailedLogin(email);
        const remaining = BF_LIMIT - rec.count;
        if (rec.locked) {
          throw new Error('Account locked for 15 minutes due to too many failed attempts.');
        }
        const hint = remaining <= 2 ? ` (${remaining} attempt${remaining !== 1 ? 's' : ''} left before lockout)` : '';
        throw new Error(`Invalid email or password.${hint}`);
      }

      profile = { ...found };
      clearBruteForce(email);
    }

    // Store pending session (not fully logged in until email OTP verified)
    sessionStorage.setItem('bb_pending_login', JSON.stringify({ ...profile, isLoggedIn: false, pendingOTP: true }));
    return { success: true, profile };
  }

  // ================================================================
  // LOGIN — Step 2: complete login after email OTP verified
  // ================================================================
  async function completeLogin(profile) {
    try {
      const client = db();
      await client.from('bb_users')
        .update({ last_login: new Date().toISOString() })
        .eq('email', String(profile.email).toLowerCase());
    } catch (e) { /* non-fatal */ }

    const session = { ...profile, isLoggedIn: true, pendingOTP: false, last_login: new Date().toISOString() };
    localStorage.setItem('brainbyte_user', JSON.stringify(session));
    sessionStorage.removeItem('bb_pending_login');
    return { success: true };
  }

  // ================================================================
  // RESEND TIMER  (reusable across login + signup)
  // ================================================================
  function startResendTimer(id, { btn, timerEl, onExpire }) {
    if (timers[id]) clearInterval(timers[id]);
    let sec = RESEND_COOLDOWN_SEC;
    if (btn) { btn.disabled = true; btn.style.opacity = '0.45'; btn.style.cursor = 'not-allowed'; }
    if (timerEl) { timerEl.textContent = `${sec}s`; timerEl.style.display = 'inline'; }

    timers[id] = setInterval(() => {
      sec--;
      if (timerEl) timerEl.textContent = `${sec}s`;
      if (sec <= 0) {
        clearInterval(timers[id]);
        delete timers[id];
        if (btn)     { btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer'; }
        if (timerEl) { timerEl.textContent = ''; timerEl.style.display = 'none'; }
        if (typeof onExpire === 'function') onExpire();
      }
    }, 1000);
  }

  // ================================================================
  // OTP EXPIRY COUNTDOWN (mm:ss display)
  // ================================================================
  function startExpiryCountdown(id, { displayEl, onExpire }) {
    if (timers[id]) clearInterval(timers[id]);
    let ms = OTP_EXPIRY_MS;

    const fmt = () => {
      const m = Math.floor(ms / 60000);
      const s = Math.floor((ms % 60000) / 1000);
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    if (displayEl) displayEl.textContent = fmt();

    timers[id] = setInterval(() => {
      ms -= 1000;
      if (displayEl) displayEl.textContent = fmt();
      if (ms <= 0) {
        clearInterval(timers[id]);
        delete timers[id];
        if (displayEl) displayEl.textContent = '00:00';
        if (typeof onExpire === 'function') onExpire();
      }
    }, 1000);
  }

  function stopTimer(id) {
    if (timers[id]) { clearInterval(timers[id]); delete timers[id]; }
  }

  // ================================================================
  // EXPORTS
  // ================================================================
  return {
    // Core
    sendOTP, verifyOTP, checkDuplicates, signup,
    loginWithPassword, completeLogin,
    // Validation
    validateEmail, validatePhone, validatePassword, validateFullName,
    // Helpers
    maskEmail, maskPhone, checkBruteForce,
    // Timers
    startResendTimer, startExpiryCountdown, stopTimer
  };
})();

window.AuthEngine = AuthEngine;

// Backward compat shim for any code referencing BrainByteOTP
window.BrainByteOTP = {
  sendOTP:         AuthEngine.sendOTP,
  verifyOTP:       AuthEngine.verifyOTP,
  clearOTP:        () => {},
  startResendTimer:(btn, timerEl, cb) => AuthEngine.startResendTimer('compat', { btn, timerEl, onExpire: cb }),
  getMasked:       (r, t) => t === 'phone' ? AuthEngine.maskPhone(r) : AuthEngine.maskEmail(r)
};
