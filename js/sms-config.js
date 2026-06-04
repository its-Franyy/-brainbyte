/**
 * ================================================================
 *  BrainByte — SMS Provider Configuration
 * ================================================================
 *  SETUP STEPS (5 minutes):
 *
 *  1. Go to: https://www.fast2sms.com
 *  2. Sign Up (free) → Verify your mobile
 *  3. Dashboard → Dev API → Copy your API Key
 *  4. Paste it below in FAST2SMS_KEY
 *  5. Change enabled: true
 *
 *  Free plan: 100 SMS/day for testing
 *  Works with: All Indian (+91) numbers
 * ================================================================
 */

const BB_SMS_CONFIG = {

  // ── Fast2SMS (Recommended for India) ───────────────────────
  // Get free API key: https://www.fast2sms.com/dashboard/dev-api
  FAST2SMS_KEY: '',     // <-- Paste your Fast2SMS API key here

  // ── Enable real SMS sending ─────────────────────────────────
  // Set to true only after you've added your API key above
  enabled: false,

  // ── Country code handling ────────────────────────────────────
  // Fast2SMS works with Indian (+91) numbers only
  // For international numbers, use Twilio (needs backend)
  defaultCountry: '+91'
};

window.BB_SMS_CONFIG = BB_SMS_CONFIG;

// Log status on load
if (BB_SMS_CONFIG.enabled && BB_SMS_CONFIG.FAST2SMS_KEY) {
  console.log('%c[BrainByte SMS] Real SMS enabled via Fast2SMS', 'color:#10B981;font-weight:bold;');
} else {
  console.log('%c[BrainByte SMS] Dev mode — OTP shown on screen. To enable real SMS: add Fast2SMS key in js/sms-config.js', 'color:#F59E0B;font-weight:bold;');
}
