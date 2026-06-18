/**
 * BrainByte — Supabase Central Configuration & Global Event Bindings
 * 
 * Provides global access to the initialized `supabaseClient` and binds
 * shared event listeners such as logout click actions across all system pages.
 */

// 1. Supabase Project Credentials (User editable placeholders)
const SUPABASE_URL = "https://xtbznjtwppchjsprnylt.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_sjJvee1lOEPjm5kOkejIEg_8IVc-KQD";

let supabaseClient = null;

// Initialize Supabase Client if the browser CDN is loaded
if (typeof window !== 'undefined' && window.supabase && typeof window.supabase.createClient === 'function') {
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window.supabaseClient = supabaseClient;
    console.log("%c[Supabase] Client initialized successfully.", "color: #10B981; font-weight: bold;");
  } catch (err) {
    console.error("[Supabase] Initialization failed:", err);
  }
} else {
  console.warn("[Supabase] CDN library not found. Initialize client as mocked.");
}

// 2. Global Event Bindings & Session States
const initSupabaseConfig = () => {
  // A. Dynamic Page Fade-In Effect CSS Injector
  const injectPageFadeIn = () => {
    // Disabled to prevent page loading flickering/flashing in MPA
  };
  injectPageFadeIn();

  // B. Active Session Check (Both Supabase and LocalMock) & Navbar Swapper
  const initNavbarSessionSwap = async () => {
    let activeSession = null;
    let userEmail = '';
    let userRole = 'student';

    // 1. First check Local Mock Session
    const savedUserStr = localStorage.getItem('brainbyte_user');
    if (savedUserStr) {
      try {
        const localUser = JSON.parse(savedUserStr);
        if (localUser && localUser.isLoggedIn) {
          activeSession = localUser;
          userEmail = localUser.email || '';
          userRole = localUser.role || 'student';
        }
      } catch (e) {
        console.error("[Session Swap] Error parsing mock session:", e);
      }
    }

    // 2. Fallback check to Supabase Auth Session
    if (!activeSession && supabaseClient) {
      try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) {
          activeSession = session.user;
          userEmail = session.user.email || '';
          userRole = session.user.user_metadata?.role || 'student';
        }
      } catch (err) {
        console.warn("[Session Swap] Supabase getSession failed:", err);
      }
    }

    if (activeSession) {
      const authContainer = document.querySelector('.d-flex.align-items-center.gap-2.mt-3.mt-lg-0') || 
                            document.querySelector('.d-flex.align-items-center.gap-3') ||
                            document.getElementById('auth-buttons-container');
      if (authContainer) {
        let dashboardHref = 'dashboard.html';
        if (userRole === 'admin' || userEmail.toLowerCase() === 'admin@brainbyte.in') {
          dashboardHref = 'admin-dashboard.html';
        } else if (userRole === 'instructor' || userRole === 'teach') {
          dashboardHref = 'teach.html';
        }
        
        authContainer.innerHTML = `
          <a href="${dashboardHref}" class="btn btn-bb-ghost px-3 py-2" id="nav-btn-dashboard" style="font-size: 0.85rem; font-weight: bold; border-radius: 50px; text-decoration: none;"><i class="bi bi-grid-1x2-fill me-1.5"></i> Dashboard</a>
          <button type="button" class="btn btn-bb-primary px-4 py-2" id="nav-btn-logout-header" style="font-size: 0.82rem; border-radius: 50px; font-weight: bold; background: #7C3AED; box-shadow: 0 0 15px rgba(124, 58, 237, 0.4);">Logout</button>
        `;
        
        // Bind event to the newly injected header logout button
        const newLogoutBtn = document.getElementById('nav-btn-logout-header');
        if (newLogoutBtn) {
          newLogoutBtn.addEventListener('click', (e) => handleGlobalLogout(e, newLogoutBtn, 'index.html'));
        }
      }
    }
  };
  initNavbarSessionSwap();

  // C. Centralized Logout Handler
  const handleGlobalLogout = async (e, button, redirectUrl) => {
    if (e) e.preventDefault();
    button.disabled = true;
    const originalText = button.innerHTML;
    
    if (button.tagName === 'BUTTON' || button.tagName === 'A') {
      button.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style="margin-right: 0.4rem;"></span> <span>Logging out...</span>`;
    }
    
    try {
      if (supabaseClient) {
        await supabaseClient.auth.signOut();
      }
    } catch (err) {
      console.warn("[Logout] Supabase signOut error:", err);
    }
    
    localStorage.removeItem('brainbyte_user');
    localStorage.removeItem('bb_admin_session');
    
    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
      
      // Page fade-out transition before redirect
      document.body.style.transition = 'opacity 0.25s ease';
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 250);
    }, 1000);
  };

  // D. Bind Standard Logout Triggers
  const sidebarLogoutBtn = document.getElementById('btn-sidebar-logout');
  if (sidebarLogoutBtn) {
    const newBtn = sidebarLogoutBtn.cloneNode(true);
    sidebarLogoutBtn.parentNode.replaceChild(newBtn, sidebarLogoutBtn);
    newBtn.addEventListener('click', (e) => handleGlobalLogout(e, newBtn, 'index.html'));
  }

  const headerLogoutBtn = document.getElementById('nav-btn-logout-header');
  if (headerLogoutBtn) {
    const newBtn = headerLogoutBtn.cloneNode(true);
    headerLogoutBtn.parentNode.replaceChild(newBtn, headerLogoutBtn);
    newBtn.addEventListener('click', (e) => handleGlobalLogout(e, newBtn, 'index.html'));
  }

  const adminLogoutBtn = document.getElementById('btn-admin-logout');
  if (adminLogoutBtn) {
    const newBtn = adminLogoutBtn.cloneNode(true);
    adminLogoutBtn.parentNode.replaceChild(newBtn, adminLogoutBtn);
    newBtn.addEventListener('click', (e) => handleGlobalLogout(e, newBtn, 'admin.html'));
  }

  // E. Dynamic Navbar Active State Highlighter
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  let activeId = '';
  
  if (currentPath === 'courses.html' || currentPath === 'course-detail.html') {
    activeId = 'nav-home'; // Explore tab
  } else if (currentPath === 'library.html' || currentPath === 'resource-detail.html') {
    activeId = 'nav-library'; // Library tab
  } else if (currentPath === 'pricing.html') {
    activeId = 'nav-pricing'; // Pricing tab
  } else if (currentPath === 'about.html') {
    activeId = 'nav-about'; // About tab
  } else if (currentPath === 'teach.html' || currentPath === 'teach-verify.html' || currentPath === 'verify-status.html') {
    activeId = 'nav-teach'; // Teach tab
  }

  // Clear existing active highlights
  document.querySelectorAll('.bb-nav-link, .nav-link').forEach(el => {
    el.classList.remove('active');
  });

  if (activeId) {
    const activeEl = document.getElementById(activeId);
    if (activeEl) {
      activeEl.classList.add('active');
    } else {
      document.querySelectorAll('.bb-nav-link, .nav-link').forEach(el => {
        let href = el.getAttribute('href');
        if (href && (href === currentPath || href.includes(currentPath))) {
          el.classList.add('active');
        }
      });
    }
  } else {
    document.querySelectorAll('.bb-nav-link, .nav-link').forEach(el => {
      let href = el.getAttribute('href');
      if (href && (href === currentPath || href.includes(currentPath))) {
        el.classList.add('active');
      }
    });
  }

  // F. 404 Catch-All & Smooth Page Transitions Link Interceptor
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');
    if (anchor) {
      const href = anchor.getAttribute('href');
      const target = anchor.getAttribute('target');
      
      // Exclude absolute, external, mailto, tel, hashes, and blank target links
      if (href && 
          !href.startsWith('http') && 
          !href.startsWith('mailto:') && 
          !href.startsWith('tel:') && 
          !href.startsWith('#') && 
          !href.startsWith('javascript:') && 
          target !== '_blank') {
        
        const pageName = href.split('/').pop().split('?')[0].split('#')[0];
        const validPages = [
          'index.html', 'courses.html', 'course-detail.html', 'login.html', 'signup.html',
          'library.html', 'resource-detail.html', '404.html', 'dashboard.html', 'teach.html',
          'teach-verify.html', 'verify-status.html', 'admin.html', 'admin-dashboard.html',
          'admin-verify.html', 'admin-library.html', 'admin-upload.html', 'about.html', 'pricing.html', ''
        ];
        
        if (pageName && !validPages.includes(pageName)) {
          e.preventDefault();
          window.location.href = '404.html';
          return;
        }
      }
    }
  });

  // G. Dynamic Volcanic Dark-Glass Back-to-Top Button Injector
  const injectBackToTop = () => {
    if (document.getElementById('btn-back-to-top')) return;
    
    // Injected style
    const style = document.createElement('style');
    style.textContent = `
      .bb-back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: rgba(13, 14, 26, 0.7);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(139, 92, 246, 0.2);
        color: #A78BFA;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 9999;
        box-shadow: 0 0 20px rgba(139, 92, 246, 0.2);
      }
      .bb-back-to-top:hover {
        background: rgba(139, 92, 246, 0.25);
        border-color: rgba(168, 85, 247, 0.5);
        box-shadow: 0 0 25px rgba(139, 92, 246, 0.45);
        transform: translateY(-3px);
        color: #FFFFFF;
      }
      .bb-back-to-top.show {
        opacity: 1;
        visibility: visible;
      }
    `;
    document.head.appendChild(style);

    // Injected button DOM element
    const btn = document.createElement('button');
    btn.id = 'btn-back-to-top';
    btn.className = 'bb-back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<i class="bi bi-arrow-up fs-5"></i>';
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          btn.classList.add('show');
        } else {
          btn.classList.remove('show');
        }
      });
    };
    
    // Inject back-to-top on next tick so it doesn't block the initial page render
    setTimeout(injectBackToTop, 50);

    // Global Toast Helper
    function showGlobalToast(title, message, type = 'success') {
      const existing = document.getElementById('bb-global-toast');
      if (existing) existing.remove();

      const toast = document.createElement('div');
      toast.id = 'bb-global-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: rgba(13, 12, 29, 0.9);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(16, 185, 129, 0.3);
        border-radius: 12px;
        padding: 1rem 1.5rem;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.02);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        color: #FFFFFF;
        font-family: 'Plus Jakarta Sans', sans-serif;
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      `;

      if (type === 'error') {
        toast.style.borderColor = 'rgba(239, 68, 68, 0.3)';
      }

      let emoji = '✅';
      if (type === 'error') emoji = '❌';

      toast.innerHTML = `
        <div style="width: 34px; height: 34px; border-radius: 50%; background: rgba(16, 185, 129, 0.15); display: flex; align-items: center; justify-content: center; font-size: 1.15rem;">
          ${emoji}
        </div>
        <div>
          <span style="font-weight: 700; font-size: 0.85rem; display: block; letter-spacing: -0.015em; color: #FFFFFF;">${title}</span>
          <span style="color: #9CA3AF; font-size: 0.74rem; font-weight: 500; display: block; margin-top: 1px;">${message}</span>
        </div>
      `;

      document.body.appendChild(toast);

      // Trigger animation
      setTimeout(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
      }, 100);

      // Auto dismiss
      setTimeout(() => {
        toast.style.transform = 'translateY(30px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
      }, 4000);
    }
    window.showGlobalToast = showGlobalToast;

    // H. Newsletter Form Interceptor
    const newsletterForms = document.querySelectorAll('.footer-newsletter-box');
    newsletterForms.forEach(form => {
      form.removeAttribute('onsubmit');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('.footer-newsletter-input');
        const email = emailInput ? emailInput.value.trim() : '';
        if (email) {
          showGlobalToast('Subscribed!', `Thank you for subscribing with ${email}`, 'success');
          if (emailInput) emailInput.value = '';
        }
      });
    });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSupabaseConfig);
} else {
  initSupabaseConfig();
}
