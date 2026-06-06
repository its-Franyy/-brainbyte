/**
 * ================================================================
 *  LOGIN CONTROLLER — Email + Password → Email OTP → Dashboard
 *  Uses: AuthEngine (js/auth-engine.js)
 *  HTML IDs: li-* (login.html)
 * ================================================================
 */
function initLoginController() {
  const liForm     = document.getElementById('li-form');
  const liStep1    = document.getElementById('li-step-1');
  const liStep2    = document.getElementById('li-step-2');
  if (!liForm) return;

  // ── Toggle password visibility ──────────────────────────────
  const liTogglePw = document.getElementById('li-toggle-pw');
  const liPwInput  = document.getElementById('li-password');
  if (liTogglePw && liPwInput) {
    liTogglePw.addEventListener('click', () => {
      const isHidden = liPwInput.type === 'password';
      liPwInput.type = isHidden ? 'text' : 'password';
      liTogglePw.querySelector('i').className = isHidden ? 'bi bi-eye-slash' : 'bi bi-eye';
    });
  }

  // ── UI helpers ───────────────────────────────────────────────
  const liShowError = (msg) => {
    const el = document.getElementById('li-error');
    const txt = document.getElementById('li-error-text');
    if (el && txt) { txt.textContent = msg; el.classList.add('show'); }
  };
  const liHideError = () => {
    const el = document.getElementById('li-error');
    if (el) el.classList.remove('show');
  };

  const setLoading = (btn, loading, label = '') => {
    if (!btn) return;
    if (loading) {
      btn.classList.add('loading');
      btn.innerHTML = `<span class="spinner-ring"></span> <span style="margin-left:0.5rem;">${label || 'Please wait…'}</span>`;
    } else {
      btn.classList.remove('loading');
    }
  };

  const goToOTPStep = () => {
    liStep1.classList.remove('active');
    liStep2.classList.add('active');
    // Update step nodes
    const n1 = document.getElementById('li-node-1');
    const c1 = document.getElementById('li-conn-1');
    const n2 = document.getElementById('li-node-2');
    if (n1) { n1.classList.remove('active'); n1.classList.add('done'); n1.textContent = '✓'; }
    if (c1) c1.classList.add('done');
    if (n2) n2.classList.add('active');
  };

  const goBackToStep1 = () => {
    liStep2.classList.remove('active');
    liStep1.classList.add('active');
    const n1 = document.getElementById('li-node-1');
    const c1 = document.getElementById('li-conn-1');
    const n2 = document.getElementById('li-node-2');
    if (n1) { n1.classList.add('active'); n1.classList.remove('done'); n1.textContent = '1'; }
    if (c1) c1.classList.remove('done');
    if (n2) n2.classList.remove('active');
    AuthEngine.stopTimer('li-expiry');
    AuthEngine.stopTimer('li-resend');
  };

  // ── Brute-force lockout banner ───────────────────────────────
  const liEmail = document.getElementById('li-email');
  if (liEmail) {
    liEmail.addEventListener('blur', () => {
      const email = liEmail.value.trim();
      if (!email) return;
      const bf = AuthEngine.checkBruteForce(email);
      const lockBar  = document.getElementById('li-lockout-bar');
      const lockText = document.getElementById('li-lockout-text');
      if (bf.locked && lockBar && lockText) {
        lockText.textContent = bf.message;
        lockBar.classList.add('show');
      } else if (lockBar) {
        lockBar.classList.remove('show');
      }
    });
  }

  // ── STEP 1: Form submit ──────────────────────────────────────
  liForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    liHideError();

    const email    = (liEmail?.value || '').trim();
    const password = (liPwInput?.value || '');

    if (!AuthEngine.validateEmail(email)) {
      liShowError('Please enter a valid email address.'); return;
    }
    if (password.length < 6) {
      liShowError('Please enter your password.'); return;
    }

    const btn = document.getElementById('li-btn-submit');
    setLoading(btn, true, 'Verifying credentials…');

    try {
      await AuthEngine.loginWithPassword(email, password);

      // Send Email OTP
      setLoading(btn, true, 'Sending OTP to email…');
      await AuthEngine.sendOTP(email, 'email');

      // Update OTP panel UI
      const display = document.getElementById('li-otp-email-display');
      if (display) display.textContent = AuthEngine.maskEmail(email);

      goToOTPStep();

      // Wire OTP boxes
      liBindOTPBoxes();

      // Start expiry countdown
      const timerEl = document.getElementById('li-otp-timer');
      AuthEngine.startExpiryCountdown('li-expiry', {
        displayEl: timerEl,
        onExpire: () => {
          if (timerEl) timerEl.classList.add('urgent');
          liShowOTPError('OTP expired. Click "Resend OTP" to get a new code.');
          document.getElementById('li-btn-verify').disabled = true;
        }
      });

      // Start resend timer
      liStartResend(email);

      // Focus first box
      setTimeout(() => document.getElementById('li-d1')?.focus(), 120);

      // Reset attempt counter
      const ac = document.getElementById('li-attempt-count');
      if (ac) ac.textContent = '0';

    } catch (err) {
      liShowError(err.message || 'Login failed. Please try again.');
      // Show lockout if applicable
      const bf = AuthEngine.checkBruteForce(email);
      if (bf.locked) {
        const lockBar  = document.getElementById('li-lockout-bar');
        const lockText = document.getElementById('li-lockout-text');
        if (lockBar && lockText) { lockText.textContent = bf.message; lockBar.classList.add('show'); }
      }
    } finally {
      btn.classList.remove('loading');
      btn.innerHTML = '<span>Continue <i class="bi bi-arrow-right-short fs-5"></i></span>';
    }
  });

  // ── STEP 2: OTP helpers ──────────────────────────────────────
  const liShowOTPError = (msg) => {
    const el  = document.getElementById('li-otp-error');
    const txt = document.getElementById('li-otp-error-text');
    if (el && txt) { txt.textContent = msg; el.classList.add('show'); }
    // Shake all boxes
    for (let i = 1; i <= 6; i++) {
      const b = document.getElementById(`li-d${i}`);
      if (b) { b.classList.remove('error'); void b.offsetWidth; b.classList.add('error'); }
    }
  };
  const liHideOTPError = () => {
    const el = document.getElementById('li-otp-error');
    if (el) el.classList.remove('show');
    for (let i = 1; i <= 6; i++) {
      const b = document.getElementById(`li-d${i}`);
      if (b) b.classList.remove('error');
    }
  };

  // OTP digit box binding
  function liBindOTPBoxes() {
    const boxes = [];
    for (let i = 1; i <= 6; i++) {
      const b = document.getElementById(`li-d${i}`);
      if (b) { b.value = ''; b.classList.remove('filled','error','success'); boxes.push(b); }
    }

    boxes.forEach((box, idx) => {
      box.addEventListener('input', (ev) => {
        const val = ev.target.value.replace(/\D/g, '').slice(-1);
        box.value = val;
        box.classList.toggle('filled', !!val);
        if (val && boxes[idx + 1]) boxes[idx + 1].focus();
      });
      box.addEventListener('keydown', (ev) => {
        if (ev.key === 'Backspace' && !box.value && boxes[idx - 1]) boxes[idx - 1].focus();
        if (ev.key === 'ArrowLeft'  && boxes[idx - 1]) boxes[idx - 1].focus();
        if (ev.key === 'ArrowRight' && boxes[idx + 1]) boxes[idx + 1].focus();
      });
      box.addEventListener('paste', (ev) => {
        ev.preventDefault();
        const pasted = (ev.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6);
        pasted.split('').forEach((ch, i) => {
          if (boxes[i]) { boxes[i].value = ch; boxes[i].classList.add('filled'); }
        });
        const next = boxes[Math.min(pasted.length, 5)];
        if (next) next.focus();
      });
    });
  }

  function liGetOTPCode() {
    let code = '';
    for (let i = 1; i <= 6; i++) {
      const b = document.getElementById(`li-d${i}`);
      code += (b?.value || '');
    }
    return code;
  }

  // Resend timer
  function liStartResend(email) {
    const btn      = document.getElementById('li-btn-resend');
    const timerRow = document.getElementById('li-resend-timer');
    const secEl    = document.getElementById('li-resend-sec');

    AuthEngine.startResendTimer('li-resend', {
      btn,
      timerEl: { style: {}, textContent: '' }, // handled manually below
      onExpire: null
    });

    // Manual countdown display
    if (timerRow) timerRow.style.display = 'inline';
    let sec = 30;
    if (secEl) secEl.textContent = sec;

    const interval = setInterval(() => {
      sec--;
      if (secEl) secEl.textContent = sec;
      if (sec <= 0) {
        clearInterval(interval);
        if (timerRow) timerRow.style.display = 'none';
      }
    }, 1000);

    if (btn) {
      btn.onclick = async () => {
        clearInterval(interval);
        try {
          await AuthEngine.sendOTP(email, 'email');
          liHideOTPError();
          // Reset expiry countdown
          AuthEngine.stopTimer('li-expiry');
          const timerEl = document.getElementById('li-otp-timer');
          if (timerEl) { timerEl.classList.remove('urgent'); }
          AuthEngine.startExpiryCountdown('li-expiry', {
            displayEl: timerEl,
            onExpire: () => {
              if (timerEl) timerEl.classList.add('urgent');
              liShowOTPError('OTP expired. Click "Resend OTP" for a new code.');
              document.getElementById('li-btn-verify').disabled = true;
            }
          });
          document.getElementById('li-btn-verify').disabled = false;
          const ac = document.getElementById('li-attempt-count');
          if (ac) ac.textContent = '0';
          liStartResend(email);
          liBindOTPBoxes();
          document.getElementById('li-d1')?.focus();
        } catch (err) {
          liShowOTPError('Failed to resend. Please try again.');
        }
      };
    }
  }

  // ── STEP 2: Verify OTP button ────────────────────────────────
  const liVerifyBtn = document.getElementById('li-btn-verify');
  if (liVerifyBtn) {
    liVerifyBtn.addEventListener('click', async () => {
      liHideOTPError();
      const code  = liGetOTPCode();
      const email = (liEmail?.value || '').trim();

      if (code.length !== 6) {
        liShowOTPError('Please enter all 6 digits.'); return;
      }

      setLoading(liVerifyBtn, true, 'Verifying…');

      const result = await AuthEngine.verifyOTP(email, 'email', code);

      if (!result.success) {
        const ac = document.getElementById('li-attempt-count');
        if (ac) {
          const cur = parseInt(ac.textContent) || 0;
          ac.textContent = cur + 1;
        }
        liShowOTPError(result.error);
        liVerifyBtn.classList.remove('loading');
        liVerifyBtn.innerHTML = '<span>Verify &amp; Sign In</span>';

        if (result.maxAttempts || result.remainingAttempts === 0) {
          liVerifyBtn.disabled = true;
        }
        return;
      }

      // Success — complete login
      const pending = JSON.parse(sessionStorage.getItem('bb_pending_login') || '{}');
      await AuthEngine.completeLogin(pending);

      // All boxes green
      for (let i = 1; i <= 6; i++) {
        const b = document.getElementById(`li-d${i}`);
        if (b) { b.classList.remove('error'); b.classList.add('success'); }
      }
      AuthEngine.stopTimer('li-expiry');
      AuthEngine.stopTimer('li-resend');

      liVerifyBtn.innerHTML = '<span>&#x2705; Verified! Redirecting…</span>';
      liVerifyBtn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';

      setTimeout(() => {
        const role = pending.role || 'student';
        window.location.href = (role === 'instructor' || role === 'teach') ? 'teach-verify.html' : 'dashboard.html';
      }, 900);
    });
  }

  // ── Back to step 1 ───────────────────────────────────────────
  const liBackBtn = document.getElementById('li-btn-back');
  if (liBackBtn) {
    liBackBtn.addEventListener('click', () => {
      liHideOTPError();
      goBackToStep1();
      sessionStorage.removeItem('bb_pending_login');
    });
  }

  // ── Google OAuth ─────────────────────────────────────────────
  const liGoogleBtn = document.getElementById('li-btn-google');
  if (liGoogleBtn) {
    liGoogleBtn.addEventListener('click', async () => {
      try {
        const client = window.supabaseClient;
        if (client) {
          await client.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo: window.location.origin + '/dashboard.html' }
          });
        }
      } catch (e) { liShowError('Google sign-in unavailable. Please use email login.'); }
    });
  }
}

/**
 * ================================================================
 *  SIGNUP CONTROLLER — Role → Details → Phone OTP → Success
 *  Uses: AuthEngine (js/auth-engine.js)
 *  HTML IDs: su-* (signup.html)
 * ================================================================
 */
function initSignupController() {
  const suStep1   = document.getElementById('su-step-1');
  const suStep2   = document.getElementById('su-step-2');
  const suStep3   = document.getElementById('su-step-3');
  const suSuccess = document.getElementById('su-step-success');
  if (!suStep1 || !suStep2) return;

  let selectedRole  = '';
  let pendingPhone  = '';
  let attemptCount  = 0;

  // ── UI helpers ───────────────────────────────────────────────
  const setNodeState = (nodeId, state /* 'active'|'done'|'idle' */) => {
    const n = document.getElementById(nodeId);
    if (!n) return;
    n.classList.remove('active', 'done');
    if (state === 'active') n.classList.add('active');
    if (state === 'done')   { n.classList.add('done'); n.textContent = '✓'; }
  };
  const setConnDone = (id, done) => {
    const c = document.getElementById(id);
    if (c) c.classList.toggle('done', done);
  };

  const showGlobalError = (msg) => {
    const el  = document.getElementById('su-global-error');
    const txt = document.getElementById('su-global-error-text');
    if (el && txt) { txt.textContent = msg; el.classList.add('show'); }
  };
  const hideGlobalError = () => {
    const el = document.getElementById('su-global-error');
    if (el) el.classList.remove('show');
  };

  const showFieldError = (fieldId, msg) => {
    const el = document.getElementById(fieldId);
    if (!el) return;
    el.classList.remove('d-none');
    const sp = el.querySelector('span') || el;
    sp.textContent = msg;
  };
  const hideFieldError = (fieldId) => {
    const el = document.getElementById(fieldId);
    if (el) el.classList.add('d-none');
  };

  const setLoading = (btn, loading, label = '') => {
    if (!btn) return;
    if (loading) {
      btn.classList.add('loading');
      btn.innerHTML = `<span class="spinner-ring"></span> <span style="margin-left:0.5rem;">${label}</span>`;
    } else {
      btn.classList.remove('loading');
    }
  };

  const transition = (fromEl, toEl) => {
    if (fromEl) fromEl.classList.remove('active');
    if (toEl)   toEl.classList.add('active');
  };

  // ── STEP 1: Role selection ───────────────────────────────────
  const roleCards = document.querySelectorAll('.role-card');
  roleCards.forEach(card => {
    card.addEventListener('click', () => {
      roleCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedRole = card.dataset.role || 'student';

      const note = document.getElementById('su-instructor-note');
      if (note) note.classList.toggle('show', selectedRole === 'teach');

      const continueBtn = document.getElementById('su-btn-continue-1');
      if (continueBtn) continueBtn.disabled = false;
    });
  });

  document.getElementById('su-btn-continue-1')?.addEventListener('click', () => {
    if (!selectedRole) return;

    setNodeState('su-node-1', 'done');
    setConnDone('su-conn-1', true);
    setNodeState('su-node-2', 'active');

    // Update step 2 heading for instructor
    const title = document.getElementById('su-step2-title');
    const sub   = document.getElementById('su-step2-sub');
    if (title) title.textContent = selectedRole === 'teach' ? 'Set up your instructor profile' : 'Set up your profile';
    if (sub)   sub.textContent   = 'Fill in your account details below';

    transition(suStep1, suStep2);
  });

  // ── STEP 2: Password toggle + strength ───────────────────────
  const suTogglePw = document.getElementById('su-toggle-pw');
  const suPwInput  = document.getElementById('su-password');
  if (suTogglePw && suPwInput) {
    suTogglePw.addEventListener('click', () => {
      const hide = suPwInput.type === 'password';
      suPwInput.type = hide ? 'text' : 'password';
      suTogglePw.querySelector('i').className = hide ? 'bi bi-eye-slash' : 'bi bi-eye';
    });
    suPwInput.addEventListener('input', () => {
      const { score, label } = AuthEngine.validatePassword(suPwInput.value);
      const bar    = document.getElementById('su-pw-bar');
      const lbl    = document.getElementById('su-pw-label');
      const colors = ['#EF4444','#EF4444','#F59E0B','#06B6D4','#10B981'];
      const widths = ['10%','35%','60%','80%','100%'];
      const classes = ['','weak','fair','good','strong'];
      if (bar) { bar.style.width = widths[score] || '0%'; bar.style.background = colors[score] || ''; }
      if (lbl) { lbl.className = `pw-strength-label ${classes[score] || ''}`; lbl.textContent = score === 0 ? 'Password strength' : label; }
    });
  }

  const suToggleConfirm = document.getElementById('su-toggle-confirm');
  const suConfirmInput  = document.getElementById('su-confirm');
  if (suToggleConfirm && suConfirmInput) {
    suToggleConfirm.addEventListener('click', () => {
      const hide = suConfirmInput.type === 'password';
      suConfirmInput.type = hide ? 'text' : 'password';
      suToggleConfirm.querySelector('i').className = hide ? 'bi bi-eye-slash' : 'bi bi-eye';
    });
  }

  // Enable submit when terms checked
  const suTerms = document.getElementById('su-terms');
  const suSubmit = document.getElementById('su-btn-submit');
  if (suTerms && suSubmit) {
    suTerms.addEventListener('change', () => { suSubmit.disabled = !suTerms.checked; });
  }

  // Back to step 1
  document.getElementById('su-btn-back-1')?.addEventListener('click', () => {
    transition(suStep2, suStep1);
    setNodeState('su-node-1', 'active');
    setConnDone('su-conn-1', false);
    setNodeState('su-node-2', 'idle');
    hideGlobalError();
  });

  // ── STEP 2: Form submit ──────────────────────────────────────
  document.getElementById('su-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideGlobalError();
    hideFieldError('su-err-name');
    hideFieldError('su-err-email');
    hideFieldError('su-err-phone');
    hideFieldError('su-err-confirm');

    const fullName = (document.getElementById('su-fullname')?.value || '').trim();
    const email    = (document.getElementById('su-email')?.value || '').trim();
    const cc       = (document.getElementById('su-country-code')?.value || '+91');
    const phoneRaw = (document.getElementById('su-phone')?.value || '').replace(/[\s\-\(\)]/g, '');
    const phone    = cc + phoneRaw;
    const password = (suPwInput?.value || '');
    const confirm  = (suConfirmInput?.value || '');

    // Validate
    let valid = true;
    if (!AuthEngine.validateFullName(fullName)) {
      showFieldError('su-err-name', 'Please enter your full name (min 2 characters).'); valid = false;
    }
    if (!AuthEngine.validateEmail(email)) {
      showFieldError('su-err-email', 'Please enter a valid email address.'); valid = false;
    }
    if (!phoneRaw || !AuthEngine.validatePhone(phone)) {
      showFieldError('su-err-phone', 'Enter a valid phone number (7–15 digits).'); valid = false;
    }
    if (password.length < 8) {
      showGlobalError('Password must be at least 8 characters.'); valid = false;
    }
    if (password !== confirm) {
      showFieldError('su-err-confirm', ''); // Label already shows in HTML
      document.getElementById('su-err-confirm')?.classList.remove('d-none');
      valid = false;
    }
    if (!valid) return;

    const btn = document.getElementById('su-btn-submit');
    setLoading(btn, true, 'Checking availability…');

    try {
      // Check duplicates
      const dup = await AuthEngine.checkDuplicates(email, phone);
      if (dup.isDuplicate) {
        if (dup.field === 'email') showFieldError('su-err-email', dup.message);
        else showFieldError('su-err-phone', dup.message);
        btn.classList.remove('loading');
        btn.innerHTML = '<span>Send Phone OTP <i class="bi bi-arrow-right-short fs-5"></i></span>';
        return;
      }

      // Store data for step 3
      pendingPhone = phone;
      sessionStorage.setItem('bb_signup_pending', JSON.stringify({
        fullName, email, phone, password, role: selectedRole
      }));

      // Send phone OTP
      setLoading(btn, true, 'Sending OTP to phone…');
      await AuthEngine.sendOTP(phone, 'phone');

      // Update OTP display
      const display = document.getElementById('su-otp-phone-display');
      if (display) display.textContent = AuthEngine.maskPhone(phone);

      // Advance to step 3
      setNodeState('su-node-2', 'done');
      setConnDone('su-conn-2', true);
      setNodeState('su-node-3', 'active');
      transition(suStep2, suStep3);

      // Wire OTP boxes
      suBindOTPBoxes();
      attemptCount = 0;
      const ac = document.getElementById('su-attempt-count');
      if (ac) ac.textContent = '0';
      document.getElementById('su-btn-verify').disabled = false;

      // Start expiry countdown
      const timerEl = document.getElementById('su-otp-timer');
      AuthEngine.startExpiryCountdown('su-expiry', {
        displayEl: timerEl,
        onExpire: () => {
          if (timerEl) timerEl.classList.add('urgent');
          suShowOTPError('OTP expired. Click "Resend OTP" to get a new code.');
          document.getElementById('su-btn-verify').disabled = true;
        }
      });

      // Start resend timer
      suStartResend(phone);
      setTimeout(() => document.getElementById('su-d1')?.focus(), 120);

    } catch (err) {
      showGlobalError(err.message || 'Something went wrong. Please try again.');
    } finally {
      btn.classList.remove('loading');
      btn.innerHTML = '<span>Send Phone OTP <i class="bi bi-arrow-right-short fs-5"></i></span>';
    }
  });

  // ── STEP 3: OTP helpers ──────────────────────────────────────
  const suShowOTPError = (msg) => {
    const el  = document.getElementById('su-otp-error');
    const txt = document.getElementById('su-otp-error-text');
    if (el && txt) { txt.textContent = msg; el.classList.add('show'); }
    for (let i = 1; i <= 6; i++) {
      const b = document.getElementById(`su-d${i}`);
      if (b) { b.classList.remove('error'); void b.offsetWidth; b.classList.add('error'); }
    }
  };
  const suHideOTPError = () => {
    const el = document.getElementById('su-otp-error');
    if (el) el.classList.remove('show');
    for (let i = 1; i <= 6; i++) {
      const b = document.getElementById(`su-d${i}`);
      if (b) b.classList.remove('error');
    }
  };

  function suBindOTPBoxes() {
    const boxes = [];
    for (let i = 1; i <= 6; i++) {
      const b = document.getElementById(`su-d${i}`);
      if (b) { b.value = ''; b.classList.remove('filled','error','success'); boxes.push(b); }
    }
    boxes.forEach((box, idx) => {
      box.addEventListener('input', (ev) => {
        const val = ev.target.value.replace(/\D/g, '').slice(-1);
        box.value = val;
        box.classList.toggle('filled', !!val);
        if (val && boxes[idx + 1]) boxes[idx + 1].focus();
      });
      box.addEventListener('keydown', (ev) => {
        if (ev.key === 'Backspace' && !box.value && boxes[idx - 1]) boxes[idx - 1].focus();
        if (ev.key === 'ArrowLeft'  && boxes[idx - 1]) boxes[idx - 1].focus();
        if (ev.key === 'ArrowRight' && boxes[idx + 1]) boxes[idx + 1].focus();
      });
      box.addEventListener('paste', (ev) => {
        ev.preventDefault();
        const pasted = (ev.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6);
        pasted.split('').forEach((ch, i) => {
          if (boxes[i]) { boxes[i].value = ch; boxes[i].classList.add('filled'); }
        });
        const next = boxes[Math.min(pasted.length, 5)];
        if (next) next.focus();
      });
    });
  }

  function suGetOTPCode() {
    let code = '';
    for (let i = 1; i <= 6; i++) code += (document.getElementById(`su-d${i}`)?.value || '');
    return code;
  }

  function suStartResend(phone) {
    const btn      = document.getElementById('su-btn-resend');
    const timerRow = document.getElementById('su-resend-timer');
    const secEl    = document.getElementById('su-resend-sec');

    if (btn) { btn.disabled = true; btn.style.opacity = '0.4'; btn.style.cursor = 'not-allowed'; }
    if (timerRow) timerRow.style.display = 'inline';
    let sec = 30;
    if (secEl) secEl.textContent = sec;

    const interval = setInterval(() => {
      sec--;
      if (secEl) secEl.textContent = sec;
      if (sec <= 0) {
        clearInterval(interval);
        if (timerRow) timerRow.style.display = 'none';
        if (btn) { btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer'; }
      }
    }, 1000);

    if (btn) {
      btn.onclick = async () => {
        clearInterval(interval);
        try {
          await AuthEngine.sendOTP(phone, 'phone');
          suHideOTPError();
          AuthEngine.stopTimer('su-expiry');
          const timerEl = document.getElementById('su-otp-timer');
          if (timerEl) timerEl.classList.remove('urgent');
          AuthEngine.startExpiryCountdown('su-expiry', {
            displayEl: timerEl,
            onExpire: () => {
              if (timerEl) timerEl.classList.add('urgent');
              suShowOTPError('OTP expired. Click "Resend OTP" to get a new code.');
              document.getElementById('su-btn-verify').disabled = true;
            }
          });
          document.getElementById('su-btn-verify').disabled = false;
          attemptCount = 0;
          const ac = document.getElementById('su-attempt-count');
          if (ac) ac.textContent = '0';
          suStartResend(phone);
          suBindOTPBoxes();
          document.getElementById('su-d1')?.focus();
        } catch { suShowOTPError('Failed to resend. Please try again.'); }
      };
    }
  }

  // Back to step 2
  document.getElementById('su-btn-back-2')?.addEventListener('click', () => {
    AuthEngine.stopTimer('su-expiry');
    AuthEngine.stopTimer('su-resend');
    suHideOTPError();
    setNodeState('su-node-3', 'idle');
    setConnDone('su-conn-2', false);
    setNodeState('su-node-2', 'active');
    transition(suStep3, suStep2);
  });

  // ── STEP 3: Verify OTP ───────────────────────────────────────
  document.getElementById('su-btn-verify')?.addEventListener('click', async () => {
    suHideOTPError();
    const code = suGetOTPCode();

    if (code.length !== 6) {
      suShowOTPError('Please enter all 6 digits.'); return;
    }

    const verifyBtn = document.getElementById('su-btn-verify');
    setLoading(verifyBtn, true, 'Verifying OTP…');

    const result = await AuthEngine.verifyOTP(pendingPhone, 'phone', code);

    if (!result.success) {
      attemptCount++;
      const ac = document.getElementById('su-attempt-count');
      if (ac) ac.textContent = String(attemptCount);
      suShowOTPError(result.error);
      verifyBtn.classList.remove('loading');
      verifyBtn.innerHTML = '<span>Verify &amp; Create Account</span>';
      if (result.maxAttempts || result.remainingAttempts === 0) {
        verifyBtn.disabled = true;
      }
      return;
    }

    // OTP verified — create account
    setLoading(verifyBtn, true, 'Creating your account…');

    try {
      const pending = JSON.parse(sessionStorage.getItem('bb_signup_pending') || '{}');
      await AuthEngine.signup(
        pending.fullName, pending.email, pending.phone, pending.password, pending.role
      );

      // All boxes green
      for (let i = 1; i <= 6; i++) {
        const b = document.getElementById(`su-d${i}`);
        if (b) { b.classList.remove('error'); b.classList.add('success'); }
      }

      AuthEngine.stopTimer('su-expiry');
      AuthEngine.stopTimer('su-resend');
      sessionStorage.removeItem('bb_signup_pending');

      // Show success step
      setTimeout(() => { transition(suStep3, suSuccess); }, 400);

    } catch (err) {
      suShowOTPError(err.message || 'Account creation failed. Please try again.');
      verifyBtn.classList.remove('loading');
      verifyBtn.innerHTML = '<span>Verify &amp; Create Account</span>';
    }
  });

  // ── Success: go to dashboard ─────────────────────────────────
  document.getElementById('su-btn-go-dashboard')?.addEventListener('click', () => {
    const user = JSON.parse(localStorage.getItem('brainbyte_user') || '{}');
    const role = user.role || 'student';
    window.location.href = (role === 'teach' || role === 'instructor') ? 'teach-verify.html' : 'dashboard.html';
  });

  // ── Google OAuth (signup) ────────────────────────────────────
  document.getElementById('su-btn-google')?.addEventListener('click', async () => {
    try {
      const client = window.supabaseClient;
      if (client) {
        await client.auth.signInWithOAuth({
          provider: 'google',
          options: { redirectTo: window.location.origin + '/dashboard.html' }
        });
      }
    } catch (e) { showGlobalError('Google sign-up unavailable. Please use email registration.'); }
  });
}

