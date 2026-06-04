/**
 * ================================================================
 *  BrainByte — Firebase Phone Authentication Config
 * ================================================================
 *
 *  WHY FIREBASE?
 *  ✅ Completely FREE (10,000 SMS/month)
 *  ✅ Works for ALL countries — India, USA, UK, UAE, everywhere
 *  ✅ No credit card needed
 *  ✅ Google's reliable infrastructure
 *
 *  SETUP (5 minutes):
 *
 *  1. Go to: https://console.firebase.google.com
 *  2. Click "Add project" → name it (e.g., BrainByte) → Continue
 *  3. Disable Google Analytics (optional) → Create project
 *  4. Left menu: Build → Authentication → Get Started
 *  5. Sign-in method → Phone → Enable → Save
 *  6. Top left: Project settings (gear icon)
 *  7. "Your apps" section → Web app icon </>
 *  8. Register app → Copy the firebaseConfig object values below
 *
 * ================================================================
 */

const BB_FIREBASE_CONFIG = {

  // Paste your Firebase project config values here:
  apiKey:            '',       // e.g. "AIzaSyXXXXXXXXXXXXXXXX"
  authDomain:        '',       // e.g. "yourapp.firebaseapp.com"
  projectId:         '',       // e.g. "yourapp-12345"
  storageBucket:     '',       // e.g. "yourapp-12345.appspot.com"
  messagingSenderId: '',       // e.g. "123456789012"
  appId:             '',       // e.g. "1:123456789012:web:abcdefgh"

  // Set to true once you've added your config above
  enabled: false
};

window.BB_FIREBASE_CONFIG = BB_FIREBASE_CONFIG;

// Initialize Firebase if enabled
(function initFirebasePhoneAuth() {
  if (!BB_FIREBASE_CONFIG.enabled || !BB_FIREBASE_CONFIG.apiKey) {
    console.log(
      '%c[BrainByte Firebase] Phone auth disabled. Add config in js/firebase-config.js to send real OTPs.',
      'color:#F59E0B;font-weight:bold;'
    );
    return;
  }

  // Check if Firebase SDK is loaded
  if (typeof firebase === 'undefined') {
    console.error('[BrainByte Firebase] Firebase SDK not loaded. Check script tags in HTML.');
    return;
  }

  try {
    // Initialize only once
    if (!firebase.apps.length) {
      firebase.initializeApp(BB_FIREBASE_CONFIG);
    }
    window._bbFirebaseAuth = firebase.auth();
    console.log(
      '%c[BrainByte Firebase] Phone Auth ready — real SMS enabled worldwide 🌍',
      'color:#10B981;font-weight:bold;'
    );
  } catch (e) {
    console.error('[BrainByte Firebase] Init failed:', e.message);
  }
})();
