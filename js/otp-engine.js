/**
 * BrainByte — OTP Verification Engine
 * =====================================================
 * Client-side OTP simulation for login and signup flows.
 * Generates, stores, verifies, and manages 6-digit codes.
 * 
 * In production, replace sendOTP() with:
 *   supabase.auth.signInWithOtp({ email })
 * 
 * @module otp-engine
 */

const BrainByteOTP = (() => {
  const OTP_STORAGE_KEY  = 'bb_otp_pending';
  const OTP_EXPIRY_MS    = 5 * 60 * 1000; // 5 minutes
  const RESEND_COOLDOWN  = 30; // seconds

  /**
   * Generate a secure 6-digit OTP code
   * @returns {string} 6-digit string e.g. "482913"
   */
  function generateOTP() {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    return code;
  }

  /**
   * Send an OTP (simulate delivery — logs to console, stores in localStorage)
   * @param {string} recipient - Email address or phone number
   * @param {'email'|'phone'} type
   * @returns {string} The generated OTP code
   */
  function sendOTP(recipient, type = 'email') {
    const code = generateOTP();
    const expiry = Date.now() + OTP_EXPIRY_MS;

    const payload = { code, recipient, type, expiry, verified: false };
    localStorage.setItem(OTP_STORAGE_KEY, JSON.stringify(payload));

    // Simulate delivery — in production this would call your email/SMS API
    console.log(
      `%c[BrainByte OTP] Code sent to ${type === 'phone' ? '📱' : '📧'} ${recipient}: %c${code}`,
      'color: #A855F7; font-weight: bold;',
      'color: #10B981; font-size: 1.2rem; font-weight: 900; background: #0D0E1A; padding: 2px 8px; border-radius: 4px;'
    );

    return code;
  }

  /**
   * Verify an entered OTP code against the stored pending code
   * @param {string} enteredCode - What the user typed
   * @returns {{ success: boolean, error: string|null }}
   */
  function verifyOTP(enteredCode) {
    const storedStr = localStorage.getItem(OTP_STORAGE_KEY);
    if (!storedStr) {
      return { success: false, error: 'No OTP was sent. Please request a new code.' };
    }

    let payload;
    try {
      payload = JSON.parse(storedStr);
    } catch (e) {
      return { success: false, error: 'Invalid OTP session. Please try again.' };
    }

    if (Date.now() > payload.expiry) {
      localStorage.removeItem(OTP_STORAGE_KEY);
      return { success: false, error: 'OTP expired. Please request a new code.' };
    }

    if (enteredCode.trim() !== payload.code) {
      return { success: false, error: 'Incorrect OTP. Please check and try again.' };
    }

    // Mark as verified and clean up
    payload.verified = true;
    localStorage.setItem(OTP_STORAGE_KEY, JSON.stringify(payload));

    return { success: true, error: null };
  }

  /**
   * Clear OTP session data
   */
  function clearOTP() {
    localStorage.removeItem(OTP_STORAGE_KEY);
  }

  /**
   * Start a resend countdown timer
   * @param {HTMLElement} btn - The resend button element
   * @param {HTMLElement} timerEl - The timer display element
   * @param {Function} onComplete - Callback when timer expires
   */
  function startResendTimer(btn, timerEl, onComplete) {
    let remaining = RESEND_COOLDOWN;
    btn.disabled = true;
    btn.style.opacity = '0.5';

    if (timerEl) {
      timerEl.textContent = `Resend in ${remaining}s`;
      timerEl.style.display = 'inline-block';
    }

    const interval = setInterval(() => {
      remaining--;
      if (timerEl) timerEl.textContent = `Resend in ${remaining}s`;

      if (remaining <= 0) {
        clearInterval(interval);
        btn.disabled = false;
        btn.style.opacity = '1';
        if (timerEl) {
          timerEl.textContent = '';
          timerEl.style.display = 'none';
        }
        if (typeof onComplete === 'function') onComplete();
      }
    }, 1000);

    return interval;
  }

  /**
   * Get the masked recipient (e.g. "r***l@domain.com" or "+91 *** *** 90")
   * @param {string} recipient
   * @param {'email'|'phone'} type
   * @returns {string}
   */
  function getMasked(recipient, type = 'email') {
    if (type === 'phone') {
      const visible = recipient.slice(-2);
      return `+91 *** *** **${visible}`;
    }
    // email masking
    const [local, domain] = recipient.split('@');
    if (!domain) return recipient;
    const masked = local.length <= 2
      ? local[0] + '***'
      : local[0] + '***' + local[local.length - 1];
    return `${masked}@${domain}`;
  }

  return { generateOTP, sendOTP, verifyOTP, clearOTP, startResendTimer, getMasked };
})();

// Make available globally
window.BrainByteOTP = BrainByteOTP;
