/*
================================================================
  BRAINBYTE — INTERACTIVE LOGIC
  Smooth Transitions, Floating Micro-interactions, and Counters
================================================================
*/

// ================================================================
// SHARED HIGH-FIDELITY DATABASE ARRAYS (File-level Scope)
// ================================================================
const coursesData = [
  {
    id: 1,
    title: "Next.js 14 & Supabase: The Full-Stack SaaS Blueprint",
    instructor: "Sarah Jenkins",
    initials: "SJ",
    verified: true,
    category: "web-dev",
    categoryLabel: "Web Dev",
    rating: 4.9,
    ratingCount: 420,
    enrolled: 8240,
    price: 499,
    level: "advanced",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    newest: true,
    popular: 8240
  },
  {
    id: 2,
    title: "Modern HTML5, CSS3 & Responsive Architecture",
    instructor: "Dave Miller",
    initials: "DM",
    verified: true,
    category: "web-dev",
    categoryLabel: "Web Dev",
    rating: 4.6,
    ratingCount: 124,
    enrolled: 3120,
    price: 0,
    level: "beginner",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    newest: false,
    popular: 3120
  },
  {
    id: 3,
    title: "UI/UX Advanced Prototyping & Figma Design Systems",
    instructor: "Elena Rostova",
    initials: "ER",
    verified: true,
    category: "design",
    categoryLabel: "Design",
    rating: 4.8,
    ratingCount: 215,
    enrolled: 5430,
    price: 699,
    level: "intermediate",
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    newest: true,
    popular: 5430
  },
  {
    id: 4,
    title: "Typography, Grid Systems & Branding Masterclass",
    instructor: "Marc Aurel",
    initials: "MA",
    verified: false,
    category: "design",
    categoryLabel: "Design",
    rating: 4.5,
    ratingCount: 82,
    enrolled: 1200,
    price: 0,
    level: "beginner",
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    newest: false,
    popular: 1200
  },
  {
    id: 5,
    title: "Python for Data Science, Pandas & Visualization",
    instructor: "Dr. Angela Yu",
    initials: "AY",
    verified: true,
    category: "data-science",
    categoryLabel: "Data Science",
    rating: 4.7,
    ratingCount: 510,
    enrolled: 12850,
    price: 799,
    level: "intermediate",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    newest: true,
    popular: 12850
  },
  {
    id: 6,
    title: "SQL & Relational Databases for Analytics",
    instructor: "Kenji Gorom",
    initials: "KG",
    verified: false,
    category: "data-science",
    categoryLabel: "Data Science",
    rating: 4.2,
    ratingCount: 60,
    enrolled: 1840,
    price: 0,
    level: "beginner",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    newest: false,
    popular: 1840
  },
  {
    id: 7,
    title: "Flutter & Dart: Build iOS & Android Applications",
    instructor: "Maximilian Schwarz",
    initials: "MS",
    verified: true,
    category: "mobile",
    categoryLabel: "Mobile Dev",
    rating: 4.9,
    ratingCount: 880,
    enrolled: 18920,
    price: 899,
    level: "intermediate",
    gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    newest: true,
    popular: 18920
  },
  {
    id: 8,
    title: "SwiftUI Fundamentals: Declarative iOS Design",
    instructor: "Paul Hudson",
    initials: "PH",
    verified: true,
    category: "mobile",
    categoryLabel: "Mobile Dev",
    rating: 4.8,
    ratingCount: 340,
    enrolled: 9150,
    price: 0,
    level: "beginner",
    gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    newest: false,
    popular: 9150
  },
  {
    id: 9,
    title: "Deep Learning, PyTorch & Neural Networks Masterclass",
    instructor: "Dr. Andrew Ng",
    initials: "AN",
    verified: true,
    category: "ai-ml",
    categoryLabel: "AI & ML",
    rating: 5.0,
    ratingCount: 1230,
    enrolled: 32450,
    price: 999,
    level: "advanced",
    gradient: "linear-gradient(135deg, #fa709a, #fee140)",
    newest: true,
    popular: 32450
  },
  {
    id: 10,
    title: "Intro to Machine Learning Models & Scikit-Learn",
    instructor: "Alice Vance",
    initials: "AV",
    verified: true,
    category: "ai-ml",
    categoryLabel: "AI & ML",
    rating: 4.4,
    ratingCount: 110,
    enrolled: 4310,
    price: 0,
    level: "beginner",
    gradient: "linear-gradient(135deg, #fa709a, #fee140)",
    newest: false,
    popular: 4310
  },
  {
    id: 11,
    title: "TypeScript Deep Dive: Type Safety & Architecture",
    instructor: "Sarah Jenkins",
    initials: "SJ",
    verified: true,
    category: "web-dev",
    categoryLabel: "Web Dev",
    rating: 4.9,
    ratingCount: 185,
    enrolled: 3890,
    price: 399,
    level: "advanced",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    newest: true,
    popular: 3890
  },
  {
    id: 12,
    title: "Figma to Webflow Production: Professional Development",
    instructor: "Elena Rostova",
    initials: "ER",
    verified: true,
    category: "design",
    categoryLabel: "Design",
    rating: 4.7,
    ratingCount: 95,
    enrolled: 2340,
    price: 499,
    level: "intermediate",
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    newest: false,
    popular: 2340
  }
];

const libraryData = [
  {
    id: 1,
    type: "video",
    title: "Docker Containers & Kubernetes Pods: Complete Hands-on Walkthrough",
    category: "web-dev",
    categoryLabel: "Docker & Devops",
    rating: 4.9,
    views: 14200,
    duration: "45 Min",
    level: "advanced",
    levelLabel: "Advanced",
    gradient: "linear-gradient(135deg, #0c1a2e, #0a2540)",
    initials: "DK"
  },
  {
    id: 2,
    type: "pdf",
    title: "System Design Interview Blueprint: Patterns & Cache Scaling",
    category: "web-dev",
    categoryLabel: "Software Architecture",
    downloads: 8450,
    pages: "18 pages",
    size: "2.4 MB",
    level: "advanced",
    levelLabel: "Advanced",
    initials: "SD"
  },
  {
    id: 3,
    type: "video",
    title: "OWASP Top 10 Web Vulnerabilities & Prevention Live Demo",
    category: "web-dev",
    categoryLabel: "Security",
    rating: 4.8,
    views: 6900,
    duration: "1h 15m",
    level: "advanced",
    levelLabel: "Advanced",
    gradient: "linear-gradient(135deg, #1a0a0a, #2d0f0f)",
    initials: "SEC"
  },
  {
    id: 4,
    type: "pdf",
    title: "SQL Joins & Relational Database Design Reference Book",
    category: "data-science",
    categoryLabel: "Data Science",
    downloads: 14200,
    pages: "12 pages",
    size: "5.8 MB",
    level: "beginner",
    levelLabel: "Beginner",
    initials: "SQL"
  },
  {
    id: 5,
    type: "video",
    title: "Introduction to PyTorch Models & Deep Learning Nodes",
    category: "ai-ml",
    categoryLabel: "AI & ML",
    rating: 5.0,
    views: 32500,
    duration: "45:30",
    level: "advanced",
    levelLabel: "Advanced",
    gradient: "linear-gradient(135deg, #fa709a, #fee140)",
    initials: "AI"
  },
  {
    id: 6,
    type: "pdf",
    title: "SwiftUI Declarative Animation & Physics State Blueprint",
    category: "mobile",
    categoryLabel: "Mobile Dev",
    downloads: 9150,
    pages: "8 pages",
    size: "3.2 MB",
    level: "advanced",
    levelLabel: "Advanced",
    initials: "iOS"
  },
  {
    id: 7,
    type: "video",
    title: "TypeScript Strict Mode Configuration & Advanced Mappings",
    category: "web-dev",
    categoryLabel: "Web Dev",
    rating: 4.9,
    views: 11400,
    duration: "18:40",
    level: "advanced",
    levelLabel: "Advanced",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    initials: "TS"
  },
  {
    id: 8,
    type: "pdf",
    title: "Data Visualization Best Practices & Seaborn Guides",
    category: "data-science",
    categoryLabel: "Data Science",
    downloads: 16100,
    pages: "6 pages",
    size: "1.9 MB",
    level: "beginner",
    levelLabel: "Beginner",
    initials: "DS"
  },
  {
    id: 9,
    type: "video",
    title: "Responsive Media Queries & Fluid Typography Architectures",
    category: "web-dev",
    categoryLabel: "Web Dev",
    rating: 4.7,
    views: 9400,
    duration: "12:05",
    level: "beginner",
    levelLabel: "Beginner",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    initials: "CSS"
  },
  {
    id: 10,
    type: "pdf",
    title: "Machine Learning Regression Models & Scikit-Learn Sheets",
    category: "ai-ml",
    categoryLabel: "AI & ML",
    downloads: 11300,
    pages: "10 pages",
    size: "4.1 MB",
    level: "beginner",
    levelLabel: "Beginner",
    initials: "ML"
  },
  {
    id: 11,
    type: "video",
    title: "Flutter Declarative Theme Configs & Dynamic Dark Modes",
    category: "mobile",
    categoryLabel: "Mobile Dev",
    rating: 4.8,
    views: 7120,
    duration: "15:10",
    level: "beginner",
    levelLabel: "Beginner",
    gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    initials: "FL"
  },
  {
    id: 12,
    type: "pdf",
    title: "Webflow Production Best Practices & Page Speeds Protocols",
    category: "design",
    categoryLabel: "Design",
    downloads: 8200,
    pages: "5 pages",
    size: "2.8 MB",
    level: "advanced",
    levelLabel: "Advanced",
    initials: "WF"
  }
];

const parseCustomResource = (item) => {
  let viewsCount = 0;
  if (item.views) {
    if (typeof item.views === 'string') {
      if (item.views.endsWith('K')) {
        viewsCount = parseFloat(item.views) * 1000;
      } else {
        viewsCount = parseInt(item.views) || 0;
      }
    } else {
      viewsCount = item.views;
    }
  }

  let downloadsCount = 0;
  if (item.downloads) {
    if (typeof item.downloads === 'string') {
      if (item.downloads.endsWith('K')) {
        downloadsCount = parseFloat(item.downloads) * 1000;
      } else {
        downloadsCount = parseInt(item.downloads) || 0;
      }
    } else {
      downloadsCount = item.downloads;
    }
  }

  return {
    id: item.id,
    type: item.type,
    title: item.title,
    category: item.category ? item.category.toLowerCase().replace(/ /g, '-') : 'web-dev',
    categoryLabel: item.category || 'Web Dev',
    rating: 4.8,
    views: viewsCount,
    downloads: downloadsCount,
    duration: item.type === 'video' ? "15:00" : undefined,
    pages: item.type === 'pdf' ? "6 pages" : undefined,
    size: item.type === 'pdf' ? (item.filesize || "1.2 MB") : undefined,
    level: item.difficulty ? item.difficulty.toLowerCase() : 'beginner',
    levelLabel: item.difficulty || 'Beginner',
    initials: item.title.split(' ').map(w => w[0]).slice(0, 3).join('').toUpperCase(),
    isCustom: true,
    description: item.description || ''
  };
};

const syncLibraryDataWithCustom = async () => {
  try {
    const custom = JSON.parse(localStorage.getItem('bb_custom_resources') || '[]');
    if (Array.isArray(custom)) {
      custom.forEach(item => {
        if (item.status === 'published') {
          if (!libraryData.some(r => r.id === item.id)) {
            libraryData.push(parseCustomResource(item));
          }
        }
      });
    }
  } catch (e) {
    console.error("Error loading offline custom resources:", e);
  }

  if (window.supabaseClient) {
    try {
      const { data, error } = await window.supabaseClient
        .from('free_resources')
        .select('*')
        .eq('status', 'published');
      
      if (!error && data && Array.isArray(data)) {
        data.forEach(item => {
          if (!libraryData.some(r => r.id === item.id)) {
            libraryData.push(parseCustomResource(item));
          }
        });
        const currentCustom = JSON.parse(localStorage.getItem('bb_custom_resources') || '[]');
        data.forEach(item => {
          if (!currentCustom.some(c => c.id === item.id)) {
            currentCustom.push(item);
          }
        });
        localStorage.setItem('bb_custom_resources', JSON.stringify(currentCustom));

        if (typeof window.applyLibraryFilters === 'function') {
          window.applyLibraryFilters();
        }
      }
    } catch (err) {
      console.warn("Supabase fetch failed:", err);
    }
  }
};

const initAllControllers = () => {
  syncLibraryDataWithCustom();
  initStickyNavbar();
  initStatsCounter();
  initInteractiveRating();
  initSmoothScroll();
  initLoginController();
  initSignupController();
  initCoursesController();
  initCourseDetailController();
  initLibraryController();
  initResourceDetailController();
  initDashboardController();
  initInstructorController();
  initVerificationController();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllControllers);
} else {
  initAllControllers();
}

/**
 * Sticky Glass Navbar Controller
 * Adds/removes visual backdrop-blur classes on scroll
 */
function initStickyNavbar() {
  const navbar = document.querySelector('.bb-navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  // Run on load to set initial state
  handleScroll();
  window.addEventListener('scroll', handleScroll);
}

/**
 * Animated Stats Numbers
 * Uses IntersectionObserver to trigger smooth ascending count animation
 */
function initStatsCounter() {
  const statsSection = document.querySelector('.stats-section');
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statsSection || statNumbers.length === 0) return;

  let animated = false;

  const animateCounters = () => {
    statNumbers.forEach(element => {
      const targetStr = element.getAttribute('data-target');
      const prefix = element.getAttribute('data-prefix') || '';
      const suffix = element.getAttribute('data-suffix') || '';
      
      // Parse targets like "50000" or "4.9"
      const targetVal = parseFloat(targetStr);
      const isDecimal = targetStr.includes('.');
      
      let current = 0;
      const duration = 1600; // Smooth 1.6s animation duration
      const frameRate = 1000 / 60; // 60fps
      const steps = duration / frameRate;
      const increment = targetVal / steps;

      // Add counting class for glow styling during ascent
      element.classList.add('counting');

      const updateCounter = () => {
        current += increment;
        if (current >= targetVal) {
          element.innerHTML = `${prefix}${formatNumber(targetVal, isDecimal)}${suffix}`;
          element.classList.remove('counting');
          element.classList.add('count-complete');
        } else {
          element.innerHTML = `${prefix}${formatNumber(current, isDecimal)}${suffix}`;
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    });
  };

  const formatNumber = (num, isDecimal) => {
    if (isDecimal) {
      return num.toFixed(1);
    }
    
    // Format large numbers (e.g. 50000 -> 50,000)
    if (num >= 1000) {
      return Math.floor(num).toLocaleString('en-US');
    }
    return Math.floor(num);
  };

  // 1. Reliable IntersectionObserver with lower threshold
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  observer.observe(statsSection);

  // 2. High-Fidelity Scroll & Viewport Fail-Safe
  setTimeout(() => {
    if (!animated) {
      const rect = statsSection.getBoundingClientRect();
      const inViewport = (rect.top <= window.innerHeight && rect.bottom >= 0);
      if (inViewport) {
        animated = true;
        animateCounters();
      }
    }
  }, 400);
}

/**
 * Interactive Star Rating Preview
 * Simulates real rating input experience when users interact with the review preview
 */
function initInteractiveRating() {
  const ratingWidget = document.querySelector('.interactive-stars');
  if (!ratingWidget) return;

  const stars = ratingWidget.querySelectorAll('i');
  const valueDisplay = document.querySelector('.interactive-rating-value');

  stars.forEach((star, index) => {
    // Hover event: Fill stars up to current index
    star.addEventListener('mouseover', () => {
      highlightStars(index);
    });

    // Mouseout event: Revert back to selected value
    star.addEventListener('mouseout', () => {
      const activeRating = parseInt(ratingWidget.getAttribute('data-rating') || '0');
      highlightStars(activeRating - 1);
    });

    // Click event: Select current rating permanently
    star.addEventListener('click', () => {
      const rating = index + 1;
      ratingWidget.setAttribute('data-rating', rating);
      if (valueDisplay) {
        valueDisplay.textContent = `${rating}.0`;
      }
      // Add subtle scale pop animation
      star.classList.add('scale-pop');
      setTimeout(() => star.classList.remove('scale-pop'), 200);

      // UI-UX PRO MAX: Recalculate average rating & show custom glassmorphic toast
      updateGlobalRating(rating);
      showToastAlert(rating);
    });
  });

  const highlightStars = (limitIndex) => {
    stars.forEach((star, idx) => {
      if (idx <= limitIndex) {
        star.className = 'bi bi-star-fill text-warning';
      } else {
        star.className = 'bi bi-star text-muted';
      }
    });
  };

  // Helper to dynamically calculate and update the global rating stat card
  const updateGlobalRating = (userRating) => {
    const ratingElement = document.getElementById('val-rating');
    if (!ratingElement) return;

    // Simulate authentic weighted average: 2,480 existing ratings at 4.90 avg
    const baseCount = 2480;
    const baseAvg = 4.90;
    const newAvg = ((baseCount * baseAvg) + userRating) / (baseCount + 1);

    // Update data-target so any active counters grab the new value, and inject display
    ratingElement.setAttribute('data-target', newAvg.toFixed(2));
    ratingElement.innerHTML = `${newAvg.toFixed(2)}/5`;

    // Visual snap pop animation to show real-time update success
    ratingElement.classList.add('count-complete');
    setTimeout(() => ratingElement.classList.remove('count-complete'), 600);
  };

  // Helper to construct and show a modern glassmorphic floating toast notification
  const showToastAlert = (rating) => {
    const existing = document.getElementById('bb-rating-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'bb-rating-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: rgba(13, 12, 29, 0.9);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(139, 92, 246, 0.3);
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

    let emoji = 'â­ï¸';
    if (rating === 5) emoji = 'ðŸ”¥';
    if (rating <= 2) emoji = 'âš ï¸';

    toast.innerHTML = `
      <div style="width: 34px; height: 34px; border-radius: 50%; background: rgba(139, 92, 246, 0.15); display: flex; align-items: center; justify-content: center; color: #FBBF24; font-size: 1.15rem;">
        ${emoji}
      </div>
      <div>
        <span style="font-weight: 700; font-size: 0.85rem; display: block; letter-spacing: -0.015em; color: #FFFFFF;">Thank You!</span>
        <span style="color: #9CA3AF; font-size: 0.74rem; font-weight: 500; display: block; margin-top: 1px;">Logged your ${rating}.0/5.0 rating in real-time.</span>
      </div>
    `;

    document.body.appendChild(toast);

    // Slide-in animation trigger
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
  };
}

/**
 * Smooth Scroll Link Behavior
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Offset for sticky header
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // If mobile navbar drawer is open, close it
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      }
    });
  });
}

/**
 * Login Screen Controller (PAGE 04)
 * Handles simulated Supabase authentication workflows, toggles, loading alerts, and redirects
 */
/**
 * ================================================================
 *  LOGIN CONTROLLER — Email + Password → Email OTP → Dashboard
 *  Uses: AuthEngine (js/auth-engine.js)
 *  HTML IDs: li-* (login.html)
 * ================================================================
 */
function initLoginController() {
  const loginForm = document.getElementById('login-form');
  const togglePassBtn = document.getElementById('toggle-password-btn');
  const passwordInput = document.getElementById('password');
  const errorAlert = document.getElementById('login-error-alert');
  const errorMessageText = document.getElementById('error-message-text');
  const submitBtn = document.getElementById('submit-login-btn');
  const googleBtn = document.getElementById('btn-oauth-google');
  
  if (!loginForm) return; // Only execute on the login page

  // 1. Password Visibility Eye Toggle
  if (togglePassBtn && passwordInput) {
    togglePassBtn.addEventListener('click', () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      
      const icon = togglePassBtn.querySelector('i');
      if (icon) {
        icon.className = isPassword ? 'bi bi-eye-slash' : 'bi bi-eye';
      }
    });
  }

  // 2. Real Supabase Auth Email Login Flow
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = passwordInput.value.trim();
    
    // Hide previous error state
    errorAlert.classList.add('d-none');
    
    // Quick validation
    if (!email || !password) {
      showError("Please enter both your email address and password.");
      return;
    }
    
    // Start Submit Loading Indicator State
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="alert-spinner"></span> <span>Verifying...</span>`;
    
    try {
      const client = window.supabaseClient || supabaseClient;
      if (!client) {
        throw new Error("Supabase client is not initialized.");
      }

      // Live Supabase SignIn
      const { data, error } = await client.auth.signInWithPassword({
        email: email,
        password: password
      });

      if (error) {
        // Fallback mock admin account direct checking to preserve sandbox administration access if live user is not configured
        if (email.toLowerCase() === 'admin@brainbyte.in' && password === 'admin123') {
          submitBtn.innerHTML = `<i class="bi bi-check-circle-fill"></i> <span>Success! Redirecting...</span>`;
          submitBtn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
          submitBtn.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.4)';
          
          localStorage.setItem('brainbyte_user', JSON.stringify({
            id: 'mock-admin-uuid',
            full_name: "Super Admin",
            email: "admin@brainbyte.in",
            role: "admin",
            isLoggedIn: true
          }));
          
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.style.boxShadow = '';
            window.location.href = 'admin-dashboard.html';
          }, 1200);
          return;
        }
        
        throw new Error("Invalid email or password");
      }

      if (!data || !data.user) {
        throw new Error("Invalid email or password");
      }

      // Fetch user profile
      const { data: profile, error: profileErr } = await client
        .from('users')
        .select('*')
        .eq('id', data.user.id)
        .single();

      if (profileErr || !profile) {
        console.warn("[Login] User Auth exists but Profile database entry not found. Auto-generating dynamic default profile row.");
        
        // Auto-generation fallback so that signUp profile sync issues don't lock accounts!
        const defaultName = data.user.user_metadata?.full_name || email.split('@')[0];
        const defaultRole = data.user.user_metadata?.role || 'student';
        
        await client.from('users').insert({
          id: data.user.id,
          email: email,
          full_name: defaultName,
          role: defaultRole
        });

        // Retrying fetch
        const { data: retriedProfile } = await client
          .from('users')
          .select('*')
          .eq('id', data.user.id)
          .single();
          
        var activeProfile = retriedProfile || {
          id: data.user.id,
          email: email,
          full_name: defaultName,
          role: defaultRole,
          avatar_url: null,
          bio: ''
        };
      } else {
        var activeProfile = profile;
      }

      // Save to localStorage
      localStorage.setItem('brainbyte_user', JSON.stringify({
        id: activeProfile.id,
        email: activeProfile.email,
        full_name: activeProfile.full_name,
        role: activeProfile.role,
        avatar_url: activeProfile.avatar_url,
        bio: activeProfile.bio || '',
        isLoggedIn: true
      }));

      submitBtn.innerHTML = `<i class="bi bi-check-circle-fill"></i> <span>Success! Redirecting...</span>`;
      submitBtn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
      submitBtn.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.4)';
      
      console.log("%c[Supabase Auth] Success: Session established for " + email, 'color: #10B981; font-weight: bold;');
      
      const role = activeProfile.role || 'student';
      
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        submitBtn.style.boxShadow = '';
        
        if (role === 'admin' || email.toLowerCase() === 'admin@brainbyte.in') {
          window.location.href = 'admin-dashboard.html';
        } else if (role === 'instructor' || role === 'teach') {
          window.location.href = 'teach.html';
        } else {
          window.location.href = 'dashboard.html';
        }
      }, 1200);

    } catch (err) {
      console.error("[Supabase Auth] Login failure:", err);
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      showError(err.message || "Invalid email or password");
    }
  });

  // 3. Real Google OAuth Trigger
  if (googleBtn) {
    googleBtn.addEventListener('click', async () => {
      const originalGoogleContent = googleBtn.innerHTML;
      googleBtn.disabled = true;
      googleBtn.innerHTML = `<span class="alert-spinner"></span> <span>Connecting to Google...</span>`;
      
      try {
        const client = window.supabaseClient || supabaseClient;
        if (!client) {
          throw new Error("Supabase client is not initialized.");
        }
        
        const { error } = await client.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: window.location.origin + '/dashboard.html'
          }
        });

        if (error) throw error;
        
      } catch (err) {
        console.error("[Supabase OAuth] Google login error:", err);
        googleBtn.disabled = false;
        googleBtn.innerHTML = originalGoogleContent;
        showError(err.message || "Could not connect to Google OAuth.");
      }
    });
  }

  function showError(msg) {
    if (errorAlert && errorMessageText) {
      errorMessageText.textContent = msg;
      errorAlert.classList.remove('d-none');
    }
  }
}

/**
 * Signup Screen Controller (PAGE 05)
 * Handles role selection, password strength meters, multi-step wizarding, and redirects
 */
function initSignupController() {
  const step1 = document.getElementById('step-1-container');
  const step2 = document.getElementById('step-2-container');
  
  if (!step1 || !step2) return; // Only execute on the signup page

  const roleStudent = document.getElementById('role-card-student');
  const roleInstructor = document.getElementById('role-card-instructor');
  const btnContinue = document.getElementById('btn-signup-continue');
  const btnBack = document.getElementById('btn-signup-back');
  const instructorNote = document.getElementById('instructor-verify-note');
  const instructorEmailBox = document.getElementById('instructor-email-info-box');
  
  const signupForm = document.getElementById('signup-form');
  const fullNameInput = document.getElementById('fullname');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  
  const togglePassBtn = document.getElementById('toggle-password-btn');
  const toggleConfirmBtn = document.getElementById('toggle-confirm-btn');
  const strengthBar = document.getElementById('strength-bar-bar');
  const strengthLabel = document.getElementById('strength-bar-label');
  const matchErrorText = document.getElementById('match-error-text');
  
  const termsCheck = document.getElementById('terms-check');
  const submitBtn = document.getElementById('submit-signup-btn');
  const errorAlert = document.getElementById('signup-error-alert');
  const errorTextDisplay = document.getElementById('signup-error-text');
  const googleBtn = document.getElementById('btn-oauth-signup-google');
  
  const indicatorStepText = document.getElementById('indicator-step-text');
  const indicatorStepDots = document.getElementById('indicator-step-dots');
  
  let selectedRole = ''; // Can be 'student' or 'teach'

  // ================================================================
  // STEP 1 - ROLE SELECTION CONTROLLER (Support card selection and fades)
  // ================================================================
  const roleCards = document.querySelectorAll('.role-card');
  const continueBtn = document.getElementById('btn-signup-continue');
  const backBtn = document.getElementById('btn-signup-back');

  // Enforce initially disabled Continue button styling
  if (continueBtn) {
    continueBtn.disabled = true;
    continueBtn.style.opacity = '0.4';
    continueBtn.style.transition = 'all 0.3s ease';
  }

  roleCards.forEach(card => {
    card.addEventListener('click', () => {
      roleCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedRole = card.dataset.role || ''; // 'student' or 'teach'
      
      if (continueBtn) {
        continueBtn.disabled = false;
        continueBtn.style.opacity = '1';
        continueBtn.style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.4)'; // glowing state
      }

      // Sync specific instructor warning note view
      if (instructorNote) {
        if (selectedRole === 'teach') {
          instructorNote.classList.remove('d-none');
        } else {
          instructorNote.classList.add('d-none');
        }
      }

      console.log(`%c[BrainByte Signup] Selected Role: ${selectedRole}`, 'color: #A855F7; font-weight: bold;');
    });
  });

  // Next Wizard Page Transition (Smooth fadeOut -> fadeIn)
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      if (!selectedRole) return;

      // Smooth transition: fadeOut step 1 -> fadeIn step 2
      step1.style.transition = 'opacity 0.25s ease';
      step1.style.opacity = '0';
      
      setTimeout(() => {
        step1.style.display = 'none';
        step1.classList.remove('active');
        
        step2.style.display = 'block';
        step2.style.opacity = '0';
        step2.style.transition = 'opacity 0.25s ease';
        
        // Trigger reflow
        step2.offsetHeight;
        
        step2.style.opacity = '1';
        step2.classList.add('active');
        
        // Update top wizard indicator state to Step 2
        if (indicatorStepText) indicatorStepText.textContent = "Step 2";
        if (indicatorStepDots) {
          indicatorStepDots.innerHTML = `<span style="color: var(--violet-primary);">ΓùÅΓùÅΓùÅ</span><span style="color: rgba(255,255,255,0.12);">Γùï</span>`;
        }
        
        // Update subheader messages
        const subhead = document.getElementById('signup-subtext-header');
        if (subhead) {
          subhead.textContent = `Set up your profile as a ${selectedRole === 'student' ? 'Student' : 'Instructor'}`;
        }
        
        // Toggle the conditional instructor info/warning box
        if (instructorEmailBox) {
          if (selectedRole === 'teach') {
            instructorEmailBox.classList.remove('d-none');
            const infoText = instructorEmailBox.querySelector('span');
            if (infoText) {
              infoText.innerHTML = "ΓÜí Verification required before publishing courses";
            }
          } else {
            instructorEmailBox.classList.add('d-none');
          }
        }
      }, 250);
    });
  }

  // Back Wizard Page Transition (Smooth fadeOut -> fadeIn)
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      step2.style.transition = 'opacity 0.25s ease';
      step2.style.opacity = '0';
      
      setTimeout(() => {
        step2.style.display = 'none';
        step2.classList.remove('active');
        
        step1.style.display = 'block';
        step1.style.opacity = '0';
        step1.style.transition = 'opacity 0.25s ease';
        
        // Trigger reflow
        step1.offsetHeight;
        
        step1.style.opacity = '1';
        step1.classList.add('active');
        
        // Revert top indicators to Step 1
        if (indicatorStepText) indicatorStepText.textContent = "Step 1";
        if (indicatorStepDots) {
          indicatorStepDots.innerHTML = `<span style="color: var(--violet-primary);">ΓùÅΓùÅ</span><span style="color: rgba(255,255,255,0.12);">ΓùïΓùï</span>`;
        }
        
        const subhead = document.getElementById('signup-subtext-header');
        if (subhead) {
          subhead.textContent = "Create your free account";
        }
      }, 250);
    });
  }

  // ================================================================
  // STEP 2 - ACCOUNT DETAILS CONTROLLER
  // ================================================================
  
  // A. Eye Toggles for Visibility
  if (togglePassBtn && passwordInput) {
    togglePassBtn.addEventListener('click', () => {
      const isPass = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPass ? 'text' : 'password');
      
      const icon = togglePassBtn.querySelector('i');
      if (icon) icon.className = isPass ? 'bi bi-eye-slash' : 'bi bi-eye';
    });
  }

  if (toggleConfirmBtn && confirmPasswordInput) {
    toggleConfirmBtn.addEventListener('click', () => {
      const isPass = confirmPasswordInput.getAttribute('type') === 'password';
      confirmPasswordInput.setAttribute('type', isPass ? 'text' : 'password');
      
      const icon = toggleConfirmBtn.querySelector('i');
      if (icon) icon.className = isPass ? 'bi bi-eye-slash' : 'bi bi-eye';
    });
  }

  // B. Dynamic Password Strength Meter
  if (passwordInput && strengthBar && strengthLabel) {
    passwordInput.addEventListener('input', () => {
      const val = passwordInput.value;
      let strength = 0;
      
      if (val.length === 0) {
        resetStrength();
        return;
      }
      
      if (val.length >= 6) strength++;
      if (/[0-9]/.test(val) || /[^A-Za-z0-9]/.test(val)) strength++;
      if (val.length >= 8 && /[A-Z]/.test(val)) strength++;
      
      // Render strength values
      strengthBar.className = 'strength-bar-fill';
      strengthLabel.className = 'strength-label';
      
      if (strength === 1 || val.length < 6) {
        strengthBar.classList.add('weak');
        strengthLabel.classList.add('weak');
        strengthLabel.textContent = "Weak Password";
      } else if (strength === 2) {
        strengthBar.classList.add('medium');
        strengthLabel.classList.add('medium');
        strengthLabel.textContent = "Medium Password";
      } else if (strength >= 3) {
        strengthBar.classList.add('strong');
        strengthLabel.classList.add('strong');
        strengthLabel.textContent = "Strong Password (Perfect)";
      }
    });
  }

  function resetStrength() {
    strengthBar.className = 'strength-bar-fill';
    strengthBar.style.width = '0%';
    strengthLabel.className = 'strength-label';
    strengthLabel.textContent = "Password Strength";
  }

  // C. Confirm Password Match Checker
  if (confirmPasswordInput && passwordInput && matchErrorText) {
    const checkMatch = () => {
      const pass = passwordInput.value;
      const confirm = confirmPasswordInput.value;
      
      if (confirm.length > 0 && pass !== confirm) {
        matchErrorText.classList.remove('d-none');
        confirmPasswordInput.style.borderColor = 'var(--error)';
      } else {
        matchErrorText.classList.add('d-none');
        confirmPasswordInput.style.borderColor = '';
      }
    };
    
    confirmPasswordInput.addEventListener('input', checkMatch);
    passwordInput.addEventListener('input', checkMatch);
  }

  // D. Terms Checkbox Toggle
  if (termsCheck && submitBtn) {
    termsCheck.addEventListener('change', () => {
      submitBtn.disabled = !termsCheck.checked;
    });
  }

  // E. Form submission to real Supabase database
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = fullNameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const confirm = confirmPasswordInput.value;
      
      errorAlert.classList.add('d-none');
      
      // 1. Validation Checks
      if (!name) {
        showError("Full Name cannot be empty.");
        return;
      }
      
      // Valid email check (regex validation)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        showError("Please enter a valid email address.");
        return;
      }
      
      // Password length check
      if (password.length < 6) {
        showError("Password must be at least 6 characters.");
        return;
      }
      
      // Password match check
      if (password !== confirm) {
        showError("Passwords do not match. Verify fields and submit again.");
        return;
      }
      
      // Terms checked
      if (!termsCheck || !termsCheck.checked) {
        showError("You must agree to the Terms of Service & Privacy Policy.");
        return;
      }
      
      // Start Loading indicator state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="alert-spinner"></span> <span>Creating Account...</span>`;
      
      try {
        const client = window.supabaseClient || supabaseClient;
        if (!client) {
          throw new Error("Supabase client is not initialized. Please verify your connection settings.");
        }
        
        // 2. Real Supabase SignUp
        const { data, error } = await client.auth.signUp({
          email: email,
          password: password,
          options: {
            data: {
              full_name: name,
              role: selectedRole || 'student'
            }
          }
        });

        if (error) throw error;
        if (!data || !data.user) {
          throw new Error("Authentication failed. No user details returned.");
        }

        // 3. Insert user profile into public.users table
        const { error: dbError } = await client.from('users').insert({
          id: data.user.id,
          email: email,
          full_name: name,
          role: selectedRole || 'student'
        });

        if (dbError) {
          console.warn("[Signup] Profile table insert warning (might already exist):", dbError);
        }

        // 4. Cache credentials locally as backup
        localStorage.setItem('brainbyte_user', JSON.stringify({
          id: data.user.id,
          email: email,
          full_name: name,
          role: selectedRole || 'student',
          isLoggedIn: true
        }));
        
        // 5. Show success message in green glass card
        submitBtn.innerHTML = `<i class="bi bi-check-circle-fill"></i> <span>Account created successfully! ≡ƒÄë</span>`;
        submitBtn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
        submitBtn.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.4)';
        
        console.log("%c[Supabase Auth] Success: Account registered for " + email, 'color: #10B981; font-weight: bold;');
        
        // 6. Redirect after 2 seconds
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.style.boxShadow = '';
          
          if (selectedRole === 'instructor' || selectedRole === 'teach') {
            window.location.href = 'teach-verify.html'; 
          } else {
            window.location.href = 'dashboard.html';
          }
        }, 2000);

      } catch (err) {
        console.error("[Supabase Auth] SignUp failure:", err);
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showError(err.message || "An unexpected registration error occurred.");
      }
    });
  }

  // F. Google OAuth Signup triggers
  if (googleBtn) {
    googleBtn.addEventListener('click', async () => {
      const originalGoogleContent = googleBtn.innerHTML;
      googleBtn.disabled = true;
      googleBtn.innerHTML = `<span class="alert-spinner"></span> <span>Connecting to Google...</span>`;
      
      try {
        const client = window.supabaseClient || supabaseClient;
        if (!client) {
          throw new Error("Supabase client is not initialized.");
        }
        
        const { error } = await client.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: window.location.origin + '/dashboard.html'
          }
        });

        if (error) throw error;
        
      } catch (err) {
        console.error("[Supabase OAuth] Google signup error:", err);
        googleBtn.disabled = false;
        googleBtn.innerHTML = originalGoogleContent;
        showError(err.message || "Could not connect to Google OAuth.");
      }
    });
  }

  function showError(msg) {
    if (errorAlert && errorTextDisplay) {
      errorTextDisplay.textContent = msg;
      errorAlert.classList.remove('d-none');
      
      // Alert wiggle animation
      errorAlert.classList.add('scale-pop');
      setTimeout(() => errorAlert.classList.remove('scale-pop'), 200);
    }
  }
}


function initCoursesController() {
  const gridContainer = document.getElementById('courses-grid-container');
  if (!gridContainer) return; // Only execute on the course browse page

  // coursesData is now referenceable globally from the top of main.js

  // 2. State Indicators
  const itemsPerPage = 6;
  let currentPage = 1;
  let currentFilters = {
    search: '',
    categories: ['all'],
    price: 'all',
    rating: 'all',
    level: 'all',
    sort: 'popular'
  };

  // 3. Select DOM Elements
  const searchInputD = document.getElementById('search-courses');
  const searchInputM = document.getElementById('search-courses-mobile');
  
  const sortSelect = document.getElementById('courses-sort-select');
  const countLabel = document.getElementById('courses-count-label');
  const emptyState = document.getElementById('courses-empty-state');
  const paginationContainer = document.getElementById('pagination-nav-container');

  // Desktop check tags
  const catChecksD = document.querySelectorAll('.category-checkbox');
  const priceRadiosD = document.getElementsByName('price');
  const ratingRadiosD = document.getElementsByName('rating');
  const levelRadiosD = document.getElementsByName('level');

  // Mobile check tags
  const catChecksM = document.querySelectorAll('.category-checkbox-m');
  const priceRadiosM = document.getElementsByName('price-m');
  const ratingRadiosM = document.getElementsByName('rating-m');
  const levelRadiosM = document.getElementsByName('level-m');

  // Buttons triggers
  const btnClearD = document.getElementById('btn-clear-desktop');
  const btnClearM = document.getElementById('btn-clear-mobile');
  const btnClearEmpty = document.getElementById('btn-empty-clear-filters');

  // Mobile Drawer panels
  const mobileDrawerTrigger = document.getElementById('btn-mobile-drawer-trigger');
  const mobileDrawerClose = document.getElementById('btn-close-drawer-trigger');
  const mobileDrawerPanel = document.getElementById('mobile-drawer-panel');
  const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
  const mobileDrawerApply = document.getElementById('btn-apply-mobile');

  // ================================================================
  // SEARCH & INPUT SYNCHRONIZATIONS
  // ================================================================
  
  // Search inputs
  if (searchInputD && searchInputM) {
    const handleSearchInput = (e) => {
      const val = e.target.value;
      searchInputD.value = val;
      searchInputM.value = val;
      currentFilters.search = val.trim();
      currentPage = 1;
      applyFilters();
    };
    searchInputD.addEventListener('input', handleSearchInput);
    searchInputM.addEventListener('input', handleSearchInput);
  }

  // Categories Selection Sync
  const handleCategorySync = (isMobile, checkbox) => {
    const clickedVal = checkbox.value;
    const isChecked = checkbox.checked;
    
    const siblingClass = isMobile ? '.category-checkbox' : '.category-checkbox-m';
    const siblings = document.querySelectorAll(siblingClass);
    
    // 1. Sync corresponding checkbox on other panel
    siblings.forEach(sib => {
      if (sib.value === clickedVal) {
        sib.checked = isChecked;
      }
    });

    // 2. Logic Rules:
    // Case A: clicked "all"
    if (clickedVal === 'all') {
      if (isChecked) {
        // Deselect all others
        catChecksD.forEach(c => { if (c.value !== 'all') c.checked = false; });
        catChecksM.forEach(c => { if (c.value !== 'all') c.checked = false; });
      } else {
        // Force checked if nothing else is checked
        checkbox.checked = true;
        siblings.forEach(s => { if (s.value === 'all') s.checked = true; });
      }
    } 
    // Case B: clicked standard category
    else {
      if (isChecked) {
        // Deselect "all"
        catChecksD.forEach(c => { if (c.value === 'all') c.checked = false; });
        catChecksM.forEach(c => { if (c.value === 'all') c.checked = false; });
      } else {
        // Check if anything else remains checked
        const anyCheckedD = Array.from(catChecksD).some(c => c.value !== 'all' && c.checked);
        if (!anyCheckedD) {
          // Re-select "all"
          catChecksD.forEach(c => { if (c.value === 'all') c.checked = true; });
          catChecksM.forEach(c => { if (c.value === 'all') c.checked = true; });
        }
      }
    }

    // 3. Compile list of active categories
    const activeCats = [];
    catChecksD.forEach(c => {
      if (c.checked) activeCats.push(c.value);
    });

    currentFilters.categories = activeCats;
    currentPage = 1;
    applyFilters();
  };

  catChecksD.forEach(c => {
    c.addEventListener('change', () => handleCategorySync(false, c));
  });
  catChecksM.forEach(c => {
    c.addEventListener('change', () => handleCategorySync(true, c));
  });

  // Price Radios Sync
  const handleRadioSync = (desktopName, mobileName, val, filterKey) => {
    // Sync desktop inputs
    const dInputs = document.getElementsByName(desktopName);
    dInputs.forEach(i => { i.checked = (i.value === val); });

    // Sync mobile inputs
    const mInputs = document.getElementsByName(mobileName);
    mInputs.forEach(i => { i.checked = (i.value === val); });

    currentFilters[filterKey] = val;
    currentPage = 1;
    applyFilters();
  };

  const wireRadios = (desktopName, mobileName, filterKey) => {
    const dInputs = document.getElementsByName(desktopName);
    dInputs.forEach(i => {
      i.addEventListener('change', () => handleRadioSync(desktopName, mobileName, i.value, filterKey));
    });

    const mInputs = document.getElementsByName(mobileName);
    mInputs.forEach(i => {
      i.addEventListener('change', () => handleRadioSync(desktopName, mobileName, i.value, filterKey));
    });
  };

  wireRadios('price', 'price-m', 'price');
  wireRadios('rating', 'rating-m', 'rating');
  wireRadios('level', 'level-m', 'level');

  // Sort Selector Change
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      currentFilters.sort = sortSelect.value;
      applyFilters();
    });
  }

  // ================================================================
  // COLLAPSIBLE HEADERS BEHAVIORS
  // ================================================================
  document.querySelectorAll('.filter-section-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.closest('.filter-section-block');
      if (parent) {
        parent.classList.toggle('collapsed');
      }
    });
  });

  // ================================================================
  // MOBILE DRAWER panel CONTROLS
  // ================================================================
  if (mobileDrawerTrigger && mobileDrawerPanel && mobileDrawerOverlay) {
    mobileDrawerTrigger.addEventListener('click', () => {
      mobileDrawerPanel.classList.add('open');
      mobileDrawerOverlay.classList.add('open');
      document.body.style.overflow = 'hidden'; // Lock background scrolling
    });
  }

  const closeDrawer = () => {
    if (mobileDrawerPanel) mobileDrawerPanel.classList.remove('open');
    if (mobileDrawerOverlay) mobileDrawerOverlay.classList.remove('open');
    document.body.style.overflow = ''; // Restore scroll
  };

  if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeDrawer);
  if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener('click', closeDrawer);
  if (mobileDrawerApply) mobileDrawerApply.addEventListener('click', closeDrawer);

  // ================================================================
  // FILTERING, SORTING, PAGINATION & RENDERING ENGINE
  // ================================================================
  
  function applyFilters() {
    let result = [...coursesData];

    // 1. Search Query
    if (currentFilters.search) {
      const query = currentFilters.search.toLowerCase();
      result = result.filter(c => 
        c.title.toLowerCase().includes(query) || 
        c.instructor.toLowerCase().includes(query)
      );
    }

    // 2. Categories Checked (if "all" is checked, ignore categories filters)
    if (!currentFilters.categories.includes('all') && currentFilters.categories.length > 0) {
      result = result.filter(c => currentFilters.categories.includes(c.category));
    }

    // 3. Price Radios
    if (currentFilters.price !== 'all') {
      if (currentFilters.price === 'free') {
        result = result.filter(c => c.price === 0);
      } else if (currentFilters.price === 'under-500') {
        result = result.filter(c => c.price > 0 && c.price < 500);
      } else if (currentFilters.price === '500-999') {
        result = result.filter(c => c.price >= 500 && c.price <= 999);
      }
    }

    // 4. Rating checks
    if (currentFilters.rating !== 'all') {
      const minRating = parseFloat(currentFilters.rating);
      result = result.filter(c => c.rating >= minRating);
    }

    // 5. Level checks
    if (currentFilters.level !== 'all') {
      result = result.filter(c => c.level === currentFilters.level);
    }

    // 6. Sorting catalog options
    if (currentFilters.sort === 'popular') {
      result.sort((a, b) => b.popular - a.popular);
    } else if (currentFilters.sort === 'newest') {
      result.sort((a, b) => b.newest - a.newest || b.id - a.id);
    } else if (currentFilters.sort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (currentFilters.sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    // 7. Render dynamic metrics count label
    if (countLabel) {
      countLabel.textContent = `Showing ${result.length} ${result.length === 1 ? 'course' : 'courses'}`;
    }

    // 8. Dynamic Empty-State Display
    if (result.length === 0) {
      gridContainer.innerHTML = '';
      if (emptyState) emptyState.classList.remove('d-none');
      if (paginationContainer) paginationContainer.innerHTML = '';
      return;
    } else {
      if (emptyState) emptyState.classList.add('d-none');
    }

    // 9. Pagination math limits
    const totalPages = Math.ceil(result.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages || 1;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = result.slice(startIndex, endIndex);

    // 10. Render Grid Content
    renderGrid(paginatedItems);

    // 11. Render Pagination controllers
    renderPagination(totalPages);
  }

  function renderGrid(courses) {
    gridContainer.innerHTML = '';

    courses.forEach(course => {
      const priceText = course.price === 0 ? "FREE" : `â‚¹${course.price}`;
      const priceClass = course.price === 0 ? "free" : "paid";
      const isVerified = course.verified ? `<i class="bi bi-patch-check-fill text-primary ms-1" style="color: var(--violet-mid) !important;" title="Verified Author"></i>` : '';

      // Create details query string for detailed stub redirects containing the exact ID
      const queryParams = `?id=${course.id}&title=${encodeURIComponent(course.title)}&instructor=${encodeURIComponent(course.instructor)}&level=${course.level}&price=${course.price}`;

      // Star graphics builders
      let starsHTML = '';
      const fullStars = Math.floor(course.rating);
      const hasHalf = course.rating % 1 !== 0;
      
      for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
          starsHTML += `<i class="bi bi-star-fill text-warning"></i>`;
        } else if (i === fullStars + 1 && hasHalf) {
          starsHTML += `<i class="bi bi-star-half text-warning"></i>`;
        } else {
          starsHTML += `<i class="bi bi-star text-muted"></i>`;
        }
      }

      let thumbImg = 'assets/thumbnails/nextjs_supabase.png'; // default
      if (course.category === 'design') {
        thumbImg = 'assets/thumbnails/figma_uiux.png';
      } else if (course.category === 'data-science' || course.category === 'ai-ml') {
        thumbImg = 'assets/thumbnails/pytorch_ai.png';
      } else if (course.category === 'mobile') {
        thumbImg = 'assets/thumbnails/nextjs_supabase.png';
      }

      const cardCol = document.createElement('div');
      cardCol.className = 'col-md-6 col-xl-4 col-12';
      cardCol.innerHTML = `
        <div class="course-browse-card ${priceClass}">
          <!-- Thumbnail header -->
          <div class="course-card-thumbnail-container">
            <span class="course-card-category-badge">${course.categoryLabel}</span>
            <img src="${thumbImg}" alt="${course.title}" class="course-thumb-img">
          </div>
          
          <!-- Card content -->
          <div class="course-card-body">
            <div class="instructor-row">
              <div class="instructor-circle-avatar">${course.initials}</div>
              <span class="instructor-name-label">${course.instructor}</span>
              ${isVerified}
            </div>
            
            <h4 class="course-card-clamp-title">${course.title}</h4>
            
            <div class="rating-card-row">
              <div class="stars-subline">${starsHTML}</div>
              <span class="fw-bold text-white ms-1">${course.rating.toFixed(1)}</span>
              <span class="text-muted">(${course.ratingCount})</span>
              <span class="enrolled-card-count">${course.enrolled.toLocaleString()} Studs</span>
            </div>
            
            <!-- Default Bottom row -->
            <div class="course-card-bottom-bar">
              <span class="price-glass-badge ${priceClass}">${priceText}</span>
              <span class="text-muted fw-bold text-uppercase" style="font-size: 0.68rem; letter-spacing: 0.05em;">
                <i class="bi bi-bar-chart-steps me-1"></i> ${course.level}
              </span>
            </div>
            
            <!-- Hover Enroll Now Slide button -->
            <a href="course-detail.html${queryParams}" class="btn-bb-login course-card-hover-enroll-btn">
              <span>Enroll Now <i class="bi bi-arrow-right-short fs-5"></i></span>
            </a>
          </div>
        </div>
      `;
      gridContainer.appendChild(cardCol);
    });
  }

  function renderPagination(totalPages) {
    if (!paginationContainer) return;
    paginationContainer.innerHTML = '';

    if (totalPages <= 1) return; // No pagination required for single page

    // 1. Detect if screen width is mobile (<576px) to render simplified Prev/Next only
    const isMobile = window.innerWidth < 576;

    if (isMobile) {
      // Simplified pagination
      const prevBtn = document.createElement('button');
      prevBtn.className = `glass-pagination-pill flex-grow-1 me-2 ${currentPage === 1 ? 'disabled' : ''}`;
      prevBtn.innerHTML = `<i class="bi bi-arrow-left me-1"></i> Prev`;
      prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          applyFilters();
          scrollToTop();
        }
      });

      const nextBtn = document.createElement('button');
      nextBtn.className = `glass-pagination-pill flex-grow-1 ms-2 ${currentPage === totalPages ? 'disabled' : ''}`;
      nextBtn.innerHTML = `Next <i class="bi bi-arrow-right ms-1"></i>`;
      nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
          currentPage++;
          applyFilters();
          scrollToTop();
        }
      });

      paginationContainer.appendChild(prevBtn);
      paginationContainer.appendChild(nextBtn);
    } else {
      // Standard numbering pagination
      
      // Prev arrow
      const prevBtn = document.createElement('button');
      prevBtn.className = `glass-pagination-pill ${currentPage === 1 ? 'disabled' : ''}`;
      prevBtn.innerHTML = `<i class="bi bi-chevron-left"></i>`;
      prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          applyFilters();
          scrollToTop();
        }
      });
      paginationContainer.appendChild(prevBtn);

      // Page numbers
      for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `glass-pagination-pill ${currentPage === i ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
          if (currentPage !== i) {
            currentPage = i;
            applyFilters();
            scrollToTop();
          }
        });
        paginationContainer.appendChild(pageBtn);
      }

      // Next arrow
      const nextBtn = document.createElement('button');
      nextBtn.className = `glass-pagination-pill ${currentPage === totalPages ? 'disabled' : ''}`;
      nextBtn.innerHTML = `<i class="bi bi-chevron-right"></i>`;
      nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
          currentPage++;
          applyFilters();
          scrollToTop();
        }
      });
      paginationContainer.appendChild(nextBtn);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 100,
      behavior: 'smooth'
    });
  }

  // ================================================================
  // CLEAR ALL FILTER HANDLERS
  // ================================================================
  const resetFiltersState = () => {
    // 1. Reset text inputs
    if (searchInputD) searchInputD.value = '';
    if (searchInputM) searchInputM.value = '';

    // 2. Reset category checkboxes
    catChecksD.forEach(c => { c.checked = (c.value === 'all'); });
    catChecksM.forEach(c => { c.checked = (c.value === 'all'); });

    // 3. Reset price radios
    const pRadiosD = document.getElementsByName('price');
    pRadiosD.forEach(r => { r.checked = (r.value === 'all'); });
    const pRadiosM = document.getElementsByName('price-m');
    pRadiosM.forEach(r => { r.checked = (r.value === 'all'); });

    // 4. Reset rating radios
    const rRadiosD = document.getElementsByName('rating');
    rRadiosD.forEach(r => { r.checked = (r.value === 'all'); });
    const rRadiosM = document.getElementsByName('rating-m');
    rRadiosM.forEach(r => { r.checked = (r.value === 'all'); });

    // 5. Reset level radios
    const lRadiosD = document.getElementsByName('level');
    lRadiosD.forEach(r => { r.checked = (r.value === 'all'); });
    const lRadiosM = document.getElementsByName('level-m');
    lRadiosM.forEach(r => { r.checked = (r.value === 'all'); });

    // 6. Reset filters object
    currentFilters = {
      search: '',
      categories: ['all'],
      price: 'all',
      rating: 'all',
      level: 'all',
      sort: sortSelect ? sortSelect.value : 'popular'
    };

    currentPage = 1;
    applyFilters();
  };

  if (btnClearD) btnClearD.addEventListener('click', resetFiltersState);
  if (btnClearM) btnClearM.addEventListener('click', resetFiltersState);
  if (btnClearEmpty) btnClearEmpty.addEventListener('click', resetFiltersState);

  // Resize listener to adapt pagination dynamically
  window.addEventListener('resize', () => {
    const totalPages = Math.ceil(coursesData.length / itemsPerPage); // approximate
    applyFilters(); // Re-renders pagination cleanly
  });

  // On load: Parse category URL query parameter and pre-toggle filters
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    const allCheckboxD = Array.from(catChecksD).find(c => c.value === 'all');
    if (allCheckboxD) allCheckboxD.checked = false;
    const allCheckboxM = Array.from(catChecksM).find(c => c.value === 'all');
    if (allCheckboxM) allCheckboxM.checked = false;

    let found = false;
    catChecksD.forEach(cb => {
      if (cb.value === catParam) {
        cb.checked = true;
        found = true;
      }
    });
    catChecksM.forEach(cb => {
      if (cb.value === catParam) {
        cb.checked = true;
      }
    });

    if (found) {
      currentFilters.categories = [catParam];
    }
  }

  // Initial trigger call on load
  applyFilters();
}

/**
 * PAGE 03 — Course Detail Page Controller
 * Dynamically parses URL search query metadata to populate headings, prices, levels,
 * category badges, and gradient thumbnails. Programmatically controls tabs switching,
 * collapsible syllabus accordions, and click-enroll loaders.
 */
function initCourseDetailController() {
  const detailBannerTitle = document.getElementById('banner-course-title');
  if (!detailBannerTitle) return; // Only execute on the course detail page

  // Star graphics helper
  const getStarsHTML = (rating) => {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        starsHTML += `<i class="bi bi-star-fill text-warning"></i>`;
      } else if (i === fullStars + 1 && hasHalf) {
        starsHTML += `<i class="bi bi-star-half text-warning"></i>`;
      } else {
        starsHTML += `<i class="bi bi-star text-muted"></i>`;
      }
    }
    return starsHTML;
  };

  // 1. Dynamic URL Query Parameters Parser & Shared Data Array Migration
  const params = new URLSearchParams(window.location.search);
  let course = null;
  const urlId = params.get('id');
  if (urlId) {
    const parsedId = parseInt(urlId);
    course = coursesData.find(c => c.id === parsedId);
  }
  if (!course) {
    const urlTitle = params.get('title');
    if (urlTitle) {
      const titleLower = urlTitle.toLowerCase();
      course = coursesData.find(c => c.title.toLowerCase() === titleLower || titleLower.includes(c.title.toLowerCase()) || c.title.toLowerCase().includes(titleLower));
    }
  }
  // Fallback to the first course if not found
  if (!course) {
    course = coursesData[0];
  }

  const title = course.title;
  const instructor = course.instructor;
  const level = course.level;
  const priceVal = course.price.toString();
  const categoryLabel = course.categoryLabel;
  const categorySlug = course.category;
  const gradient = course.gradient;
  const initials = course.initials;

  // Author name initials maps
  const getInitials = (name) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    } else if (name.length > 0) {
      return name.slice(0, 2).toUpperCase();
    }
    return "BB";
  };

  // Instructor bios map
  let instructorBio = "An industry-expert cloud solution architect and software veteran with extensive experience structuring clean architectures at tech organizations.";
  if (instructor.includes('Sarah') || instructor.includes('Jenkins')) {
    instructorBio = "Sarah Jenkins is a Senior Solutions Architect with over 12 years of hands-on experience structuring SaaS database models and serverless APIs at leading web platforms. Her unique, logical, line-by-line developer teaching methods have helped thousands of students worldwide transition cleanly into high-growth software engineering career tracks.";
  } else if (instructor.includes('Elena') || instructor.includes('Rostova')) {
    instructorBio = "Elena Rostova is a lead designer, branding strategist, and prototyping consultant. She has led digital design systems refactors at high-growth organizations and guides creatives on mastering Figma tools, typography standards, web development models, and micro-interactions architectures.";
  } else if (instructor.includes('Angela') || instructor.includes('Yu')) {
    instructorBio = "Dr. Angela Yu is a renowned data scientist, machine learning model programmer, and developer curriculum director. Her structured lectures and visuals make pandas architectures, analytics charts, scikit-learn models, and PyTorch deep neural networks easily understandable for developers of all backgrounds.";
  } else if (instructor.includes('Dave') || instructor.includes('Miller')) {
    instructorBio = "Dave Miller is a senior frontend web developer and standards engineer specializing in semantic HTML5 layout structures, CSS grid frameworks, responsive media queries, and clean components workflows. He focuses on accessibility, visibility ratios, and pixel-perfect design system compilations.";
  } else if (instructor.includes('Arjun') || instructor.includes('Sharma')) {
    instructorBio = "Arjun Sharma is a Co-Founder and senior systems architect with ex-Google and ex-Meta credentials. He has spent 8+ years designing high-scale API gateways and sharding PostgreSQL databases, helping developers master SaaS engineering blueprints.";
  } else if (instructor.includes('Neha') || instructor.includes('Kapoor')) {
    instructorBio = "Neha Kapoor is a Co-Founder and product designer committed to responsive heuristics and micro-interactions. She designs our premium Glassmorphic web components and guides designers on building professional UI/UX systems.";
  } else if (instructor.includes('Rohan') || instructor.includes('Verma')) {
    instructorBio = "Rohan Verma is a Co-Founder and lead full-stack developer specializing in Supabase database structures. He orchestrates secure database queries, webhook triggers, and cloud file uploading systems.";
  }

  // ================================================================
  // DYNAMIC COMPONENT POPULATIONS
  // ================================================================
  
  // Banner details
  const breadcrumbTitle = document.getElementById('banner-title-breadcrumb');
  const breadcrumbCategory = document.getElementById('banner-category-link');
  const bannerDesc = document.getElementById('banner-course-description');
  const bannerLevel = document.getElementById('banner-level-badge');
  const bannerAvatar = document.getElementById('banner-instructor-avatar');
  const bannerName = document.getElementById('banner-instructor-name');
  
  if (detailBannerTitle) detailBannerTitle.textContent = title;
  if (breadcrumbTitle) breadcrumbTitle.textContent = title;
  if (breadcrumbCategory) {
    breadcrumbCategory.textContent = categoryLabel;
    breadcrumbCategory.href = `courses.html?category=${categorySlug}`;
  }
  if (bannerLevel) bannerLevel.textContent = level.charAt(0).toUpperCase() + level.slice(1);
  if (bannerAvatar) {
    bannerAvatar.textContent = initials;
    bannerAvatar.style.background = gradient;
  }
  if (bannerName) bannerName.textContent = instructor;

  // Render course ratings & stats dynamically
  const bannerRatingScore = document.getElementById('banner-rating-score');
  const bannerRatingStars = document.getElementById('banner-rating-stars');
  const bannerRatingCount = document.getElementById('banner-rating-count');
  const bannerEnrolledCount = document.getElementById('banner-enrolled-count');
  const reviewsSummaryScore = document.getElementById('reviews-summary-score');

  if (bannerRatingScore) bannerRatingScore.textContent = course.rating.toFixed(1);
  if (bannerRatingStars) bannerRatingStars.innerHTML = getStarsHTML(course.rating);
  if (bannerRatingCount) bannerRatingCount.textContent = `(${course.ratingCount.toLocaleString()} ratings)`;
  if (bannerEnrolledCount) bannerEnrolledCount.textContent = course.enrolled.toLocaleString();
  if (reviewsSummaryScore) reviewsSummaryScore.textContent = course.rating.toFixed(1);

  // Render course-specific descriptions dynamically
  if (bannerDesc) {
    if (title.toLowerCase().includes('typescript')) {
      bannerDesc.textContent = "Dive deep into safety paradigms, strict typing architectures, abstract compilation targets, and scalable modular interfaces inside TypeScript.";
    } else if (title.toLowerCase().includes('ui/ux') || title.toLowerCase().includes('design')) {
      bannerDesc.textContent = "Architect beautiful design systems, responsive layout structures, premium glass typography, and complex interactive prototypes inside Figma.";
    } else if (title.toLowerCase().includes('python')) {
      bannerDesc.textContent = "Master statistical analysis pipelines, raw data models, charts configurations, and advanced mathematical scripting with pandas and matplotlib.";
    } else if (title.toLowerCase().includes('deep learning') || title.toLowerCase().includes('pytorch')) {
      bannerDesc.textContent = "Construct neural layers, reverse-propagation models, neural weights optimizations, and transformer networks with PyTorch structures.";
    } else if (title.toLowerCase().includes('next.js') || title.toLowerCase().includes('supabase')) {
      bannerDesc.textContent = "Build serverless high-performance SaaS applications from scratch. Wire subscription models, database Row-Level Security, real-time channels, and gorgeous Tailwind CSS glassmorphisms.";
    } else {
      bannerDesc.textContent = "Master modern programming practices, compile scalable architectures, and build real-world applications with expert guidance.";
    }
  }

  // Sticky Card details
  const cardBadge = document.getElementById('card-badge-category');
  const cardGradient = document.getElementById('card-gradient-avatar');
  const cardPrice = document.getElementById('card-price-label');
  const cardOriginal = document.getElementById('card-original-price');
  const cardDiscount = document.getElementById('card-discount-tag');
  const cardGuarantee = document.getElementById('card-guarantee-subtext');

  if (cardBadge) cardBadge.textContent = categoryLabel;
  if (cardGradient) {
    let thumbImg = 'assets/thumbnails/nextjs_supabase.png'; // default
    if (categorySlug === 'design') {
      thumbImg = 'assets/thumbnails/figma_uiux.png';
    } else if (categorySlug === 'data-science' || categorySlug === 'ai-ml') {
      thumbImg = 'assets/thumbnails/pytorch_ai.png';
    } else if (categorySlug === 'mobile') {
      thumbImg = 'assets/thumbnails/nextjs_supabase.png';
    }
    
    // Replace gradient placeholder div with a gorgeous dynamic thumbnail image tag
    const parentContainer = cardGradient.parentNode;
    if (parentContainer) {
      cardGradient.outerHTML = `<img src="${thumbImg}" alt="${title}" class="course-thumb-img" id="card-gradient-avatar">`;
    }
  }

  const isFree = (course.price === 0);
  if (cardPrice) {
    cardPrice.textContent = isFree ? "FREE" : `₹${course.price}`;
  }

  if (isFree) {
    if (cardOriginal) cardOriginal.classList.add('d-none');
    if (cardDiscount) cardDiscount.classList.add('d-none');
    if (cardGuarantee) {
      cardGuarantee.innerHTML = `<i class="bi bi-shield-check text-success me-1 fs-6 align-middle" style="color: var(--teal-mid) !important;"></i> Unrestricted Lifetime Access`;
    }
  } else {
    if (cardOriginal) {
      cardOriginal.classList.remove('d-none');
      const origPrice = parseInt(priceVal) * 10;
      cardOriginal.textContent = `â‚¹${origPrice.toLocaleString()}`;
    }
    if (cardDiscount) cardDiscount.classList.remove('d-none');
    if (cardGuarantee) {
      cardGuarantee.innerHTML = `<i class="bi bi-shield-check text-success me-1 fs-6 align-middle" style="color: var(--teal-mid) !important;"></i> 30-Day Money-Back Guarantee`;
    }
  }

  // Instructor Tab details
  const instTabAvatar = document.getElementById('instructor-tab-avatar');
  const instTabName = document.getElementById('instructor-tab-name');
  const instTabBio = document.getElementById('instructor-tab-bio');
  
  if (instTabAvatar) {
    instTabAvatar.textContent = initials;
    instTabAvatar.style.background = gradient;
  }
  if (instTabName) instTabName.textContent = instructor;
  if (instTabBio) instTabBio.textContent = instructorBio;

  // ================================================================
  // PREMIUM TABS BAR CONTROLLERS
  // ================================================================
  const tabButtons = document.querySelectorAll('.course-tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedTab = btn.getAttribute('data-tab');

      // Toggle active states on buttons
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Toggle active states on panels
      tabPanels.forEach(panel => {
        if (panel.getAttribute('id') === `panel-${selectedTab}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // ================================================================
  // SYLLABUS CURRICULUM ACCORDION TRIGGER BEHAVIORS
  // ================================================================
  document.querySelectorAll('.curriculum-header-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const block = trigger.closest('.curriculum-accordion-block');
      if (block) {
        block.classList.toggle('collapsed');
      }
    });
  });

  // ================================================================
  // CLICK ENROLL SIMULATED CONTROLLER
  // ================================================================
  const btnEnroll = document.getElementById('btn-enroll-submit');
  if (btnEnroll) {
    // Check login status first
    const savedUserStr = localStorage.getItem('brainbyte_user');
    let isLoggedIn = false;
    if (savedUserStr) {
      try {
        const user = JSON.parse(savedUserStr);
        if (user && user.isLoggedIn) {
          isLoggedIn = true;
        }
      } catch (e) {}
    }
    if (isLoggedIn) {
      btnEnroll.textContent = "Start Learning";
    }

    btnEnroll.addEventListener('click', () => {
      if (!isLoggedIn) {
        // Redirection alert effect
        btnEnroll.disabled = true;
        btnEnroll.innerHTML = `<span class="alert-spinner"></span> <span>Securing Access...</span>`;
        setTimeout(() => {
          btnEnroll.disabled = false;
          btnEnroll.innerHTML = `<i class="bi bi-shield-lock-fill"></i> <span>Redirecting to Login...</span>`;
          btnEnroll.style.background = 'linear-gradient(135deg, var(--brand-pink) 0%, #DB2777 100%)';
          setTimeout(() => {
            window.location.href = 'login.html';
          }, 800);
        }, 600);
        return;
      }

      btnEnroll.disabled = true;
      btnEnroll.innerHTML = `<span class="alert-spinner"></span> <span>Enrolling...</span>`;
      
      console.log(`%c[BrainByte Enrollment] Enrolling user inside course: "${title}"`, 'color: #8B5CF6; font-weight: bold;');
      
      setTimeout(() => {
        btnEnroll.innerHTML = `<i class="bi bi-check-circle-fill"></i> <span>Success! Opening Player...</span>`;
        btnEnroll.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
        btnEnroll.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.4)';
        
        setTimeout(() => {
          window.location.href = 'course-player.html';
        }, 1200);
      }, 1500);
    });
  }

  // ================================================================
  // SHARE BUTTON MODAL SIMULATOR
  // ================================================================
  const btnShare = document.getElementById('btn-share-course');
  if (btnShare) {
    btnShare.addEventListener('click', () => {
      const originalShareContent = btnShare.innerHTML;
      btnShare.innerHTML = `<i class="bi bi-check-circle-fill text-success" style="color: var(--teal-mid) !important;"></i> Copied!`;
      
      // Copy URL to clipboard simulation
      const mockURL = window.location.href;
      navigator.clipboard.writeText(mockURL).then(() => {
        console.log(`%c[BrainByte Share] Copied course url: ${mockURL}`, 'color: #06B6D4; font-weight: bold;');
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
      
      setTimeout(() => {
        btnShare.innerHTML = originalShareContent;
      }, 2000);
    });
  }
}

/**
 * PAGE 06 â€” Free Learning Library Controller
 * Full dynamic catalog filter engine for videos & PDFs, scrollable pills,
 * real-time session switchers (blurring/locking cards in guest state), 
 * incremental load-more offsets, and stub page integrations.
 */
function initLibraryController() {
  const gridContainer = document.getElementById('library-grid-container');
  if (!gridContainer) return; // Only execute on the library page

  // libraryData is now referenceable globally from the top of main.js

  // 2. State Indicators
  let currentFilter = 'all';
  let searchQuery = '';
  let sortOption = 'views';
  
  let sessionLogged = false; // Guest state by default
  let visibleCount = 6; // Load-more incremental offset

  // 3. Select DOM Elements
  const searchInput = document.getElementById('library-search-input');
  const sortSelect = document.getElementById('library-sort-select');
  const emptyState = document.getElementById('library-empty-state');
  const btnEmptyClear = document.getElementById('btn-library-empty-clear');
  
  const btnLoadMore = document.getElementById('btn-library-loadmore');
  const loadMoreContainer = document.getElementById('library-loadmore-container');
  const guestLockBanner = document.getElementById('guest-lock-banner');
  const navbarLockIcon = document.getElementById('navbar-library-lock-icon');

  // Session toggles
  const toggleBtnGuest = document.getElementById('toggle-session-guest');
  const toggleBtnMember = document.getElementById('toggle-session-member');

  // ================================================================
  // SESSION LOCK SWITCHER CONTROLS
  // ================================================================
  
  function updateSessionView() {
    if (sessionLogged) {
      // 1. Logged In Mode
      if (guestLockBanner) guestLockBanner.classList.add('d-none');
      if (navbarLockIcon) {
        navbarLockIcon.className = 'bi bi-unlock-fill ms-1';
        navbarLockIcon.style.color = '#10B981'; // Green unlocked state
      }
      if (toggleBtnMember) toggleBtnMember.classList.add('active');
      if (toggleBtnGuest) toggleBtnGuest.classList.remove('active');
      
      console.log("%c[BrainByte Session] State updated: Logged In (Unlocked)", "color: #10B981; font-weight: bold;");
    } else {
      // 2. Guest Lock Mode
      if (guestLockBanner) guestLockBanner.classList.remove('d-none');
      if (navbarLockIcon) {
        navbarLockIcon.className = 'bi bi-lock-fill ms-1';
        navbarLockIcon.style.color = '#06B6D4'; // Cyan locked state
      }
      if (toggleBtnGuest) toggleBtnGuest.classList.add('active');
      if (toggleBtnMember) toggleBtnMember.classList.remove('active');
      
      console.log("%c[BrainByte Session] State updated: Guest Lock (Blurred catalog)", "color: #06B6D4; font-weight: bold;");
    }
    // Re-render items to apply blurred lock overlays
    applyLibraryFilters();
  }

  if (toggleBtnGuest) {
    toggleBtnGuest.addEventListener('click', () => {
      sessionLogged = false;
      updateSessionView();
    });
  }

  if (toggleBtnMember) {
    toggleBtnMember.addEventListener('click', () => {
      sessionLogged = true;
      updateSessionView();
    });
  }

  // ================================================================
  // FILTERING, SORTING & INCREMENTAL RENDER ENGINE
  // ================================================================

  // Search input change
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      visibleCount = 6; // Reset load count
      applyLibraryFilters();
    });
  }

  // Horizontal scroll pills select
  const tagButtons = document.querySelectorAll('.btn-library-pill');
  tagButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tagButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      currentFilter = btn.getAttribute('data-filter');
      visibleCount = 6; // Reset load count
      applyLibraryFilters();
    });
  });

  // Sort dropdown change
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      sortOption = sortSelect.value;
      applyLibraryFilters();
    });
  }

  function applyLibraryFilters() {
    let result = [...libraryData];

    // 1. Text Search matching
    if (searchQuery) {
      result = result.filter(r => 
        r.title.toLowerCase().includes(searchQuery) ||
        r.categoryLabel.toLowerCase().includes(searchQuery) ||
        r.initials.toLowerCase().includes(searchQuery)
      );
    }

    // 2. Category / Type Horizontal Tag pills
    if (currentFilter !== 'all') {
      if (currentFilter === 'video') {
        result = result.filter(r => r.type === 'video');
      } else if (currentFilter === 'pdf') {
        result = result.filter(r => r.type === 'pdf');
      } else if (currentFilter === 'beginner') {
        result = result.filter(r => r.level === 'beginner');
      } else if (currentFilter === 'advanced') {
        result = result.filter(r => r.level === 'advanced');
      } else {
        result = result.filter(r => r.category === currentFilter);
      }
    }

    // 3. Sorting options
    if (sortOption === 'views') {
      result.sort((a, b) => {
        const vA = a.views || a.downloads || 0;
        const vB = b.views || b.downloads || 0;
        return vB - vA;
      });
    } else if (sortOption === 'newest') {
      result.sort((a, b) => b.id - a.id);
    } else if (sortOption === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    // 4. Dynamic Empty-State toggle
    if (result.length === 0) {
      gridContainer.innerHTML = '';
      if (emptyState) emptyState.classList.remove('d-none');
      if (loadMoreContainer) loadMoreContainer.classList.add('d-none');
      return;
    } else {
      if (emptyState) emptyState.classList.add('d-none');
    }

    // 5. Handle Load More pagination bounds
    if (visibleCount >= result.length) {
      if (loadMoreContainer) loadMoreContainer.classList.add('d-none');
    } else {
      if (loadMoreContainer) loadMoreContainer.classList.remove('d-none');
    }

    const itemsToRender = result.slice(0, visibleCount);
    renderLibraryGrid(itemsToRender);
  }
  window.applyLibraryFilters = applyLibraryFilters;

  function renderLibraryGrid(items) {
    gridContainer.innerHTML = '';

    items.forEach(item => {
      const isVideo = item.type === 'video';
      const colDiv = document.createElement('div');
      colDiv.className = 'col-md-6 col-lg-4 col-12 position-relative';
      
      // Card metadata query parameters containing the exact ID
      const statsValue = isVideo ? `${(item.views/1000).toFixed(1)}K Views` : `${(item.downloads/1000).toFixed(1)}K Downloads`;
      const queryParams = `?id=${item.id}&title=${encodeURIComponent(item.title)}&type=${item.type}&metrics=${encodeURIComponent(statsValue + ' &bull; ' + (isVideo ? item.rating.toFixed(1) + '★' : item.size))}`;
      
      const clickTarget = sessionLogged ? `href="resource-detail.html${queryParams}"` : `href="login.html"`;

      let thumbnailHTML = '';
      let cardClass = '';

      if (isVideo) {
        cardClass = 'free';
        thumbnailHTML = `
          <div class="course-card-thumbnail-container">
            <span class="course-card-category-badge" style="background: rgba(6,182,212,0.20) !important; border-color: rgba(6,182,212,0.30) !important; color: #06B6D4 !important;">ðŸ“¹ Video</span>
            <span class="badge position-absolute" style="top: 12px; right: 12px; z-index: 5; background: rgba(0,0,0,0.60); color: white; font-size: 0.7rem; font-weight: bold; border: none; padding: 0.3rem 0.5rem;">${item.duration}</span>
            <div class="video-play-center-btn">
              <i class="bi bi-play-fill" style="margin-left: 2px;"></i>
            </div>
            <div class="course-card-thumbnail-gradient" style="background: ${item.gradient};">
              ${item.initials}
            </div>
          </div>
        `;
      } else {
        cardClass = 'paid'; // Style matching purple gradient hover borders
        thumbnailHTML = `
          <div class="course-card-thumbnail-container" style="height: 180px;">
            <span class="course-card-category-badge" style="background: rgba(139, 92, 246, 0.15) !important; border-color: rgba(139, 92, 246, 0.3) !important; color: #A78BFA !important;">ðŸ“„ PDF</span>
            <span class="badge position-absolute" style="top: 12px; right: 12px; z-index: 5; background: rgba(0,0,0,0.60); color: white; font-size: 0.7rem; font-weight: bold; border: none; padding: 0.3rem 0.5rem;">${item.pages}</span>
            <div class="pdf-thumbnail-icon-box">
              <i class="bi bi-file-earmark-pdf-fill"></i>
            </div>
          </div>
        `;
      }

      // Add padlock overlay inside HTML structure if Guest mode is locked
      const lockOverlayHTML = sessionLogged ? '' : `
        <a href="login.html" class="card-lock-overlay-box">
          <div class="card-lock-circle">
            <i class="bi bi-lock-fill"></i>
          </div>
        </a>
      `;

      colDiv.innerHTML = `
        <div class="course-browse-card ${cardClass} ${sessionLogged ? '' : 'locked-blur'} h-100">
          <!-- Thumbnail Area -->
          ${thumbnailHTML}
          
          <!-- Card Content Body -->
          <div class="course-card-body">
            <h4 class="course-card-clamp-title mb-2" style="font-size: 0.95rem;">${item.title}</h4>
            
            <div class="d-flex align-items-center gap-2 mb-3">
              <div class="instructor-circle-avatar" style="width: 20px; height: 20px; font-size: 0.6rem; background: rgba(6,182,212,0.15); color: #06B6D4;">BB</div>
              <span class="instructor-name-label" style="font-size: 0.72rem;">BrainByte Team</span>
            </div>
            
            <div class="rating-card-row mb-3" style="font-size: 0.75rem;">
              ${isVideo ? `
                <i class="bi bi-eye-fill text-muted me-1"></i> <span class="text-white-50">${(item.views/1000).toFixed(1)}K views</span>
                <span class="ms-2"><i class="bi bi-star-fill text-warning me-0.5"></i> ${item.rating.toFixed(1)}</span>
              ` : `
                <i class="bi bi-arrow-down-circle-fill text-muted me-1"></i> <span class="text-white-50">${(item.downloads/1000).toFixed(1)}K DLs</span>
                <span class="ms-2 text-muted fw-bold">${item.size}</span>
              `}
            </div>
            
            <!-- Bottom tags row -->
            <div class="d-flex gap-1.5 flex-wrap mt-auto">
              <span class="badge" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); color: #94A3B8; font-size: 0.68rem; font-weight: bold; text-transform: uppercase;">${item.categoryLabel}</span>
              <span class="badge" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); color: #94A3B8; font-size: 0.68rem; font-weight: bold; text-transform: uppercase;">${item.levelLabel}</span>
            </div>
            
            <!-- Dynamic Redirection trigger on hover (visible only in unlocked state) -->
            ${sessionLogged ? `
              <a ${clickTarget} class="btn-bb-login course-card-hover-enroll-btn" style="background-color: ${isVideo ? '#06B6D4' : '#7C3AED'}; color: ${isVideo ? '#030014 !important' : 'white'}; box-shadow: ${isVideo ? '0 0 15px rgba(6,182,212,0.35)' : '0 0 15px rgba(124, 58, 237, 0.35)'};">
                <span>${isVideo ? 'Watch Tutorial' : 'Download PDF'} <i class="bi bi-arrow-right-short fs-5"></i></span>
              </a>
            ` : ''}
          </div>
        </div>
        ${lockOverlayHTML}
      `;
      gridContainer.appendChild(colDiv);
    });
  }

  // ================================================================
  // LOAD MORE PAGINATIONS TRIGGERS
  // ================================================================
  if (btnLoadMore) {
    btnLoadMore.addEventListener('click', () => {
      visibleCount += 6; // Load 6 more items
      applyLibraryFilters();
    });
  }

  // Empty State Clear Filters Button
  const resetLibraryFilters = () => {
    if (searchInput) searchInput.value = '';
    searchQuery = '';
    currentFilter = 'all';
    sortOption = 'views';
    
    if (sortSelect) sortSelect.value = 'views';

    tagButtons.forEach(b => {
      b.classList.remove('active');
      if (b.getAttribute('data-filter') === 'all') b.classList.add('active');
    });

    visibleCount = 6;
    applyLibraryFilters();
  };

  if (btnEmptyClear) btnEmptyClear.addEventListener('click', resetLibraryFilters);

  // Initial trigger initialization calls
  updateSessionView();
}

/**
 * PAGE 07 â€” Resource Detail Page Controller
 * Handles locked vs unlocked views, dynamic URL parameter parsing for title/type/metrics,
 * HTML5 video custom play/pause/scrubber controls, PDF embed rendering & fallback toggles,
 * helpful ratings selectors (thumbs + gold stars), and community comments adding & liking.
 */
function initResourceDetailController() {
  const detailTitle = document.getElementById('detail-resource-title');
  if (!detailTitle) return; // Only execute on the resource detail page

  // 1. Dynamic URL Query Parameters Parser & Fallback
  const params = new URLSearchParams(window.location.search);
  let resource = null;
  const urlId = params.get('id');
  if (urlId) {
    const parsedId = parseInt(urlId);
    if (isNaN(parsedId)) {
      resource = libraryData.find(r => r.id === urlId);
    } else {
      resource = libraryData.find(r => r.id === parsedId);
    }
  }
  if (!resource) {
    const urlTitle = params.get('title');
    if (urlTitle) {
      const titleLower = urlTitle.toLowerCase();
      resource = libraryData.find(r => r.title.toLowerCase() === titleLower || titleLower.includes(r.title.toLowerCase()) || r.title.toLowerCase().includes(titleLower));
    }
  }
  if (!resource) {
    resource = libraryData[0];
  }

  const title = resource.title;
  const type = resource.type;
  
  // Construct metrics string
  const isVideo = type === 'video';
  const metrics = isVideo ? `${(resource.views/1000).toFixed(1)}K Views &bull; ${resource.rating.toFixed(1)}★` : `${(resource.downloads/1000).toFixed(1)}K Downloads &bull; ${resource.size}`;

  // Determine category and level based on title or defaults
  const categoryLabel = resource.categoryLabel;
  const categorySlug = resource.category;
  const levelLabel = resource.levelLabel;

  // Update headings & details
  detailTitle.innerHTML = title;
  
  const typeBadge = document.getElementById('detail-badge-type');
  const catBadge = document.getElementById('detail-badge-category');
  const lvlBadge = document.getElementById('detail-badge-level');
  const metBadge = document.getElementById('detail-badge-metrics');

  if (typeBadge) typeBadge.innerHTML = type === 'video' ? '📹 Video' : '📄 PDF';
  if (catBadge) catBadge.innerHTML = categoryLabel;
  if (lvlBadge) lvlBadge.innerHTML = levelLabel;
  if (metBadge) metBadge.innerHTML = metrics.replace('&bull;', '•');

  // 2. Conditional Display of Video Player vs PDF Viewer
  const videoWrapper = document.getElementById('video-player-wrapper');
  const pdfWrapper = document.getElementById('pdf-viewer-wrapper');
  const pdfActions = document.getElementById('pdf-actions-wrapper');
  const videoElement = document.getElementById('html5-video');

  if (videoElement) {
    videoElement.setAttribute('preload', 'metadata');
    let posterImg = 'assets/thumbnails/nextjs_supabase.png';
    if (categorySlug === 'design') {
      posterImg = 'assets/thumbnails/figma_uiux.png';
    } else if (categorySlug === 'data-science' || categorySlug === 'ai-ml') {
      posterImg = 'assets/thumbnails/pytorch_ai.png';
    }
    videoElement.setAttribute('poster', posterImg);
  }

  if (type === 'video') {
    if (videoWrapper) videoWrapper.classList.remove('d-none');
    if (pdfWrapper) pdfWrapper.classList.add('d-none');
    if (pdfActions) pdfActions.classList.add('d-none');
  } else {
    if (videoWrapper) videoWrapper.classList.add('d-none');
    if (pdfWrapper) pdfWrapper.classList.remove('d-none');
    if (pdfActions) pdfActions.classList.remove('d-none');

    // Update download PDF parameters to point to local sample guide PDF
    const dlBtn = document.getElementById('btn-pdf-download-action');
    const fallbackDlBtn = document.getElementById('btn-fallback-pdf-download');
    const sizeLabel = document.getElementById('pdf-size-details-label');
    
    if (dlBtn) {
      dlBtn.setAttribute('href', 'assets/resources/sample_guide.pdf');
      dlBtn.setAttribute('download', `${resource.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`);
    }
    if (fallbackDlBtn) {
      fallbackDlBtn.setAttribute('href', 'assets/resources/sample_guide.pdf');
      fallbackDlBtn.setAttribute('download', `${resource.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`);
    }

    // Extract size from metrics if present, e.g. "2.4 MB"
    let pdfSize = resource.size || "2.4 MB";
    if (sizeLabel) sizeLabel.innerHTML = `Study Guide &bull; ${pdfSize}`;
  }

  // 3. Guest Session Lock Switcher logic
  let sessionLogged = false; // default state
  
  const toggleBtnGuest = document.getElementById('toggle-session-guest');
  const toggleBtnMember = document.getElementById('toggle-session-member');
  const guestCard = document.getElementById('resource-guest-card');
  const unlockedContainer = document.getElementById('resource-unlocked-container');

  function updateClassroomSessionView() {
    if (sessionLogged) {
      if (guestCard) guestCard.classList.add('d-none');
      if (unlockedContainer) unlockedContainer.classList.remove('locked-blur');
      if (toggleBtnMember) toggleBtnMember.classList.add('active');
      if (toggleBtnGuest) toggleBtnGuest.classList.remove('active');
    } else {
      if (guestCard) guestCard.classList.remove('d-none');
      if (unlockedContainer) unlockedContainer.classList.add('locked-blur');
      if (toggleBtnGuest) toggleBtnGuest.classList.add('active');
      if (toggleBtnMember) toggleBtnMember.classList.remove('active');
      
      // Pause video if playing
      if (videoElement && !videoElement.paused) {
        videoElement.pause();
        const playBtn = document.getElementById('btn-video-play');
        if (playBtn) playBtn.innerHTML = '<i class="bi bi-play-fill fs-4"></i>';
      }
    }
  }

  if (toggleBtnGuest) {
    toggleBtnGuest.addEventListener('click', () => {
      sessionLogged = false;
      updateClassroomSessionView();
    });
  }

  if (toggleBtnMember) {
    toggleBtnMember.addEventListener('click', () => {
      sessionLogged = true;
      updateClassroomSessionView();
    });
  }

  // Initial trigger
  updateClassroomSessionView();

  // 4. Description expandable toggle
  const descContainer = document.getElementById('detail-description-container');
  const descToggle = document.getElementById('btn-desc-toggle');
  
  if (descToggle && descContainer) {
    descToggle.addEventListener('click', () => {
      if (descContainer.style.height === 'auto' || descContainer.style.height === '') {
        descContainer.style.height = '4.8em';
        descToggle.textContent = 'Show more';
      } else {
        descContainer.style.height = 'auto';
        descToggle.textContent = 'Show less';
      }
    });
  }

  // 5. Notes & Transcripts Tab switching
  const tabButtons = document.querySelectorAll('.course-tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedTab = btn.getAttribute('data-tab');
      
      // Update buttons
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update panels
      tabPanels.forEach(panel => {
        if (panel.getAttribute('id') === `panel-${selectedTab}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // 6. Custom HTML5 Video Player control script
  if (videoElement) {
    const playBtn = document.getElementById('btn-video-play');
    const timeLabel = document.getElementById('video-time-label');
    const volumeBtn = document.getElementById('btn-video-volume');
    const volumeSlider = document.getElementById('video-volume-slider');
    const speedSelect = document.getElementById('video-speed-select');
    const fullscreenBtn = document.getElementById('btn-video-fullscreen');
    
    const scrubberContainer = document.getElementById('video-scrubber-container');
    const scrubberFill = document.getElementById('video-scrubber-fill');
    const scrubberThumb = document.getElementById('video-scrubber-thumb');

    const formatTime = (secs) => {
      const m = Math.floor(secs / 60).toString().padStart(2, '0');
      const s = Math.floor(secs % 60).toString().padStart(2, '0');
      return `${m}:${s}`;
    };

    // Play / Pause toggler
    const togglePlay = () => {
      if (!sessionLogged) return; // ignore in guest state
      if (videoElement.paused) {
        videoElement.play();
        playBtn.innerHTML = '<i class="bi bi-pause-fill fs-4"></i>';
      } else {
        videoElement.pause();
        playBtn.innerHTML = '<i class="bi bi-play-fill fs-4"></i>';
      }
    };

    if (playBtn) playBtn.addEventListener('click', togglePlay);
    videoElement.addEventListener('click', togglePlay);

    // Time update listeners
    videoElement.addEventListener('timeupdate', () => {
      const cur = videoElement.currentTime;
      const dur = videoElement.duration || 0;
      
      // Update time label
      if (timeLabel) {
        timeLabel.textContent = `${formatTime(cur)} / ${formatTime(dur)}`;
      }
      
      // Update scrubber width & thumb
      if (dur > 0) {
        const pct = (cur / dur) * 100;
        if (scrubberFill) scrubberFill.style.width = `${pct}%`;
        if (scrubberThumb) scrubberThumb.style.left = `${pct}%`;
      }
    });

    // Reset play icon on video end
    videoElement.addEventListener('ended', () => {
      if (playBtn) playBtn.innerHTML = '<i class="bi bi-play-fill fs-4"></i>';
    });

    // Scrubber click/drag logic
    if (scrubberContainer) {
      const scrub = (e) => {
        if (!sessionLogged) return;
        const rect = scrubberContainer.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const dur = videoElement.duration || 0;
        videoElement.currentTime = pct * dur;
      };

      scrubberContainer.addEventListener('mousedown', (e) => {
        scrub(e);
        const onMouseMove = (moveEvent) => scrub(moveEvent);
        const onMouseUp = () => {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      });
    }

    // Volume controllers
    if (volumeSlider) {
      volumeSlider.addEventListener('input', (e) => {
        const vol = parseFloat(e.target.value);
        videoElement.volume = vol;
        videoElement.muted = (vol === 0);
        updateVolumeIcon(vol, videoElement.muted);
      });
    }

    const updateVolumeIcon = (vol, muted) => {
      if (!volumeBtn) return;
      if (muted || vol === 0) {
        volumeBtn.innerHTML = '<i class="bi bi-volume-mute-fill fs-6"></i>';
      } else if (vol < 0.5) {
        volumeBtn.innerHTML = '<i class="bi bi-volume-down-fill fs-6"></i>';
      } else {
        volumeBtn.innerHTML = '<i class="bi bi-volume-up-fill fs-6"></i>';
      }
    };

    if (volumeBtn) {
      volumeBtn.addEventListener('click', () => {
        videoElement.muted = !videoElement.muted;
        updateVolumeIcon(videoElement.volume, videoElement.muted);
      });
    }

    // Playback speeds select
    if (speedSelect) {
      speedSelect.addEventListener('change', () => {
        videoElement.playbackRate = parseFloat(speedSelect.value);
      });
    }

    // Fullscreen toggle
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', () => {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.webkitRequestFullscreen) {
          videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
          videoElement.msRequestFullscreen();
        }
      });
    }
  }

  // 7. Helpful feedback ratings logic
  const rateUpBtn = document.getElementById('btn-rate-up');
  const rateDownBtn = document.getElementById('btn-rate-down');

  if (rateUpBtn && rateDownBtn) {
    rateUpBtn.addEventListener('click', () => {
      if (!sessionLogged) return;
      rateUpBtn.classList.toggle('active-teal');
      rateDownBtn.classList.remove('active-red');
      console.log("%c[BrainByte Feedback] Helpful ðŸ‘ selected", "color: #06B6D4; font-weight: bold;");
    });

    rateDownBtn.addEventListener('click', () => {
      if (!sessionLogged) return;
      rateDownBtn.classList.toggle('active-red');
      rateUpBtn.classList.remove('active-teal');
      console.log("%c[BrainByte Feedback] Not helpful ðŸ‘Ž selected", "color: #EF4444; font-weight: bold;");
    });
  }

  // Gold stars rating reviews logic
  const starsList = document.querySelectorAll('.classroom-star');
  const submitRatingBtn = document.getElementById('btn-submit-rating');
  let selectedScore = 0;

  starsList.forEach(star => {
    star.addEventListener('click', () => {
      if (!sessionLogged) return;
      selectedScore = parseInt(star.getAttribute('data-index'));
      
      // Update star shapes and active styles
      starsList.forEach((s, idx) => {
        if (idx < selectedScore) {
          s.className = 'bi bi-star-fill text-warning fs-4 classroom-star active';
        } else {
          s.className = 'bi bi-star text-muted fs-4 classroom-star';
        }
      });
      
      if (submitRatingBtn) submitRatingBtn.removeAttribute('disabled');
    });
  });

  if (submitRatingBtn) {
    submitRatingBtn.addEventListener('click', () => {
      if (!sessionLogged || selectedScore === 0) return;
      submitRatingBtn.setAttribute('disabled', 'true');
      submitRatingBtn.innerHTML = '<i class="bi bi-check-circle-fill"></i> Thank you!';
      submitRatingBtn.style.backgroundColor = '#10B981';
      submitRatingBtn.style.borderColor = '#10B981';
      submitRatingBtn.style.color = '#FFFFFF';
      submitRatingBtn.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.4)';
      
      console.log(`%c[BrainByte Rating] Submitted score: ${selectedScore} stars`, "color: #F59E0B; font-weight: bold;");
    });
  }

  // 8. Community Comments postings & likes logic
  const postCommentBtn = document.getElementById('btn-post-comment');
  const commentTextarea = document.getElementById('comment-textarea');
  const commentsList = document.getElementById('classroom-comments-list');

  const bindLikeButton = (btn) => {
    btn.addEventListener('click', () => {
      if (!sessionLogged) return;
      const likeSpan = btn.querySelector('.like-count');
      let likes = parseInt(likeSpan.textContent);
      
      if (btn.classList.contains('active-like')) {
        btn.classList.remove('active-like');
        likes--;
      } else {
        btn.classList.add('active-like');
        likes++;
      }
      likeSpan.textContent = likes;
    });
  };

  // Bind existing comment likes
  document.querySelectorAll('.btn-comment-like').forEach(bindLikeButton);

  if (postCommentBtn && commentTextarea && commentsList) {
    postCommentBtn.addEventListener('click', () => {
      if (!sessionLogged) return;
      const val = commentTextarea.value.trim();
      if (!val) return;

      const card = document.createElement('div');
      card.className = 'p-3 border rounded-3 classroom-comment-card';
      card.style.background = 'rgba(255, 255, 255, 0.015)';
      card.style.borderColor = 'var(--border)';

      card.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div class="d-flex align-items-center gap-2">
            <div class="instructor-circle-avatar" style="width: 22px; height: 22px; font-size: 0.65rem; background: rgba(6,182,212,0.15); color: #06B6D4;">ME</div>
            <span class="text-white font-semibold" style="font-size: 0.82rem;">You</span>
            <span class="text-muted" style="font-size: 0.7rem;">Just now</span>
          </div>
          <button type="button" class="btn p-0 border-0 btn-comment-like" style="background: transparent; color: #94A3B8; font-size: 0.78rem; display: flex; align-items: center; gap: 0.25rem;">
            <i class="bi bi-hand-thumbs-up"></i> <span class="like-count">0</span>
          </button>
        </div>
        <p class="text-muted m-0" style="font-size: 0.85rem; line-height: 1.55;">
          ${escapeHtml(val)}
        </p>
      `;

      // Bind the like event of new comment
      bindLikeButton(card.querySelector('.btn-comment-like'));

      // Prepend comments list
      commentsList.insertBefore(card, commentsList.firstChild);
      
      // Reset textarea
      commentTextarea.value = '';
    });
  }

  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // 9. Right related free cards dynamically loaded (5 cards)
  const relatedListContainer = document.getElementById('classroom-related-free-list');
  if (relatedListContainer) {
    const rawData = [
      {
        title: "Mastering CSS Grid & Subgrid in Production Architectures",
        type: "video",
        metrics: "12.4K Views &bull; 4.8â˜…",
        initials: "CSS",
        gradient: "linear-gradient(135deg, #667eea, #764ba2)"
      },
      {
        title: "Figma Typography & Brand System Guidelines Cheat Sheet",
        type: "pdf",
        metrics: "18.5K Downloads &bull; 2.4 MB",
        initials: "UI",
        gradient: "linear-gradient(135deg, #f093fb, #f5576c)"
      },
      {
        title: "Supabase Row-Level Security (RLS) & Security Protocols",
        type: "video",
        metrics: "8.9K Views &bull; 4.9â˜…",
        initials: "SB",
        gradient: "linear-gradient(135deg, #667eea, #764ba2)"
      },
      {
        title: "SQL Joins & Relational Database Design Reference Book",
        type: "pdf",
        metrics: "14.2K Downloads &bull; 5.8 MB",
        initials: "SQL",
        gradient: "linear-gradient(135deg, #4facfe, #00f2fe)"
      },
      {
        title: "Introduction to PyTorch Models & Deep Learning Nodes",
        type: "video",
        metrics: "32.5K Views &bull; 5.0â˜…",
        initials: "AI",
        gradient: "linear-gradient(135deg, #fa709a, #fee140)"
      },
      {
        title: "SwiftUI Declarative Animation & Physics State Blueprint",
        type: "pdf",
        metrics: "9.1K Downloads &bull; 3.2 MB",
        initials: "iOS",
        gradient: "linear-gradient(135deg, #43e97b, #38f9d7)"
      }
    ];

    // Filter out the active one by title
    const filteredRelated = rawData.filter(d => d.title.toLowerCase() !== title.toLowerCase()).slice(0, 5);

    relatedListContainer.innerHTML = '';
    filteredRelated.forEach(item => {
      const isVid = item.type === 'video';
      const itemParams = `?title=${encodeURIComponent(item.title)}&type=${item.type}&metrics=${encodeURIComponent(item.metrics)}`;
      
      const cardA = document.createElement('a');
      cardA.href = `resource-detail.html${itemParams}`;
      cardA.className = 'course-browse-card p-2.5 d-flex gap-2 text-decoration-none';
      cardA.style.borderRadius = '12px';
      cardA.style.height = 'auto';

      cardA.innerHTML = `
        <div style="width: 50px; height: 50px; border-radius: 8px; background: ${item.gradient}; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 800; font-size: 0.9rem;" class="text-white">
          ${item.initials}
        </div>
        <div class="flex-grow-1 overflow-hidden" style="display: flex; flex-direction: column; justify-content: space-between;">
          <h5 class="text-white fw-bold m-0 text-truncate" style="font-size: 0.8rem;">${item.title}</h5>
          <div class="d-flex justify-content-between align-items-center">
            <span class="badge" style="background: ${isVid ? 'rgba(6, 182, 212, 0.12)' : 'rgba(168, 85, 247, 0.12)'}; border: 1px solid ${isVid ? 'rgba(6, 182, 212, 0.25)' : 'rgba(168, 85, 247, 0.25)'}; color: ${isVid ? '#06B6D4' : '#C084FC'}; font-size: 0.62rem;">${isVid ? 'ðŸ“¹ Video' : 'ðŸ“„ PDF'}</span>
            <span class="text-muted" style="font-size: 0.68rem;">${item.metrics.split('&bull;')[0]}</span>
          </div>
        </div>
      `;
      relatedListContainer.appendChild(cardA);
    });
  }
}

/**
 * PAGE 09 â€” Student Dashboard Controller
 * Governs sticky left sidebar tab switching, responsive overlay drawers, 
 * time-based dynamic greetings, courses progress filters, certifications shares, 
 * heart-triggers wishlist deletions, profile avatar picker mocks, and logout callbacks.
 */
function initDashboardController() {
  const sidebar = document.querySelector('.dashboard-sidebar');
  if (!sidebar) return; // Only execute on the dashboard page

  // ================================================================
  // 0. AUTH SESSION VALIDATION & DYNAMIC LOAD
  // ================================================================
  const savedUserStr = localStorage.getItem('brainbyte_user');
  let user = null;
  if (savedUserStr) {
    try {
      user = JSON.parse(savedUserStr);
    } catch (e) {
      console.error("[Dashboard] Session parse error:", e);
    }
  }

  if (!user || !user.isLoggedIn) {
    window.location.href = 'login.html';
    return;
  }

  console.log("%c[BrainByte Dashboard] Initializing Student Portal for: " + (user.email || 'Student'), "color: #A855F7; font-weight: bold;");

  // ================================================================
  // 1. DYNAMIC TIME-BASED GREETINGS
  // ================================================================
  const greetingTitle = document.getElementById('dashboard-greeting-title');
  if (greetingTitle) {
    const hours = new Date().getHours();
    let salutation = "Good morning";
    if (hours >= 12 && hours < 17) {
      salutation = "Good afternoon";
    } else if (hours >= 17) {
      salutation = "Good evening";
    }
    greetingTitle.textContent = `${salutation}, ${user.full_name || 'Student'} ðŸ‘‹`;
  }

  // Populate sidebar name
  const sidebarName = sidebar.querySelector('.sidebar-name');
  if (sidebarName) {
    sidebarName.textContent = user.full_name || 'Student';
  }

  // Populate sidebar badge
  const sidebarBadge = sidebar.querySelector('.sidebar-badge');
  if (sidebarBadge && user.role) {
    sidebarBadge.textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
  }

  // Initials generator fallback
  const nameVal = user.full_name || 'Student';
  const initials = nameVal.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) || 'ST';

  // Avatar profile view components
  const sidebarAvatar = document.getElementById('sidebar-profile-avatar');
  const settingsAvatarPreview = document.getElementById('settings-avatar-preview');

  const renderAvatars = (avatarUrl) => {
    if (avatarUrl) {
      const imgTag = `<img src="${avatarUrl}" alt="Avatar" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
      if (sidebarAvatar) sidebarAvatar.innerHTML = imgTag;
      if (settingsAvatarPreview) settingsAvatarPreview.innerHTML = imgTag;
    } else {
      if (sidebarAvatar) sidebarAvatar.innerHTML = initials;
      if (settingsAvatarPreview) settingsAvatarPreview.innerHTML = initials;
    }
  };
  renderAvatars(user.avatar_url);

  // Pre-fill profile settings fields
  const fullNameInput = document.getElementById('fullname');
  if (fullNameInput) {
    fullNameInput.value = user.full_name || '';
  }

  const emailInput = document.getElementById('settings-email');
  if (emailInput) {
    emailInput.value = user.email || '';
  }

  const bioTextarea = document.getElementById('settings-bio');
  if (bioTextarea) {
    bioTextarea.value = user.bio || '';
  }

  // ================================================================
  // 2. SIDEBAR TAB PANEL NAVIGATIONS
  // ================================================================
  const navLinks = document.querySelectorAll('.sidebar-nav-link');
  const tabPanels = document.querySelectorAll('.dashboard-tab-panel');
  const mobileTitle = document.getElementById('mobile-dashboard-tab-title');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const selectedTab = link.getAttribute('data-tab');
      if (!selectedTab) return;

      // Close mobile drawer on link click
      sidebar.classList.remove('mobile-open');

      // Update active nav links states
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Update mobile header title label
      if (mobileTitle) {
        mobileTitle.textContent = link.textContent.trim().split(' ').slice(1).join(' ');
      }

      // Switch panels visibility
      tabPanels.forEach(panel => {
        if (panel.getAttribute('id') === `panel-${selectedTab}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });

      console.log(`%c[BrainByte Dashboard] Switched to tab: ${selectedTab}`, "color: #A855F7; font-weight: 500;");
    });
  });

  // ================================================================
  // 3. MOBILE RESPONSIVE HAMBURGER SLIDE-IN DRAWER
  // ================================================================
  const btnToggleSidebar = document.getElementById('btn-mobile-sidebar-toggle');
  const btnCloseSidebar = document.getElementById('btn-close-sidebar-trigger');
  
  if (btnToggleSidebar) {
    btnToggleSidebar.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('mobile-open');
    });
  }

  if (btnCloseSidebar) {
    btnCloseSidebar.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
    });
  }

  // Click outside sidebar closes it on mobile
  document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('mobile-open') && !sidebar.contains(e.target) && e.target !== btnToggleSidebar) {
      sidebar.classList.remove('mobile-open');
    }
  });

  // ================================================================
  // 4. MY COURSES STATUS ACCORDION FILTERS
  // ================================================================
  const courseFilterBtns = document.querySelectorAll('.course-filter-btn');
  const courseRows = document.querySelectorAll('.course-row-item');

  courseFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      courseFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter'); // "all" | "progress" | "completed"

      courseRows.forEach(row => {
        const status = row.getAttribute('data-status'); // "progress" | "completed"
        if (filterVal === 'all' || status === filterVal) {
          row.classList.remove('d-none');
        } else {
          row.classList.add('d-none');
        }
      });
    });
  });

  // ================================================================
  // 5. WISHLIST HEART TRIGGERS DELETIONS & EMPTY STATES
  // ================================================================
  const wishlistGrid = document.getElementById('wishlist-grid-container');
  const wishlistEmpty = document.getElementById('wishlist-empty-state');
  
  if (wishlistGrid && wishlistEmpty) {
    const heartBtns = wishlistGrid.querySelectorAll('.btn-wishlist-heart');
    
    heartBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const cardCol = btn.closest('.col-md-6, .col-12');
        if (!cardCol) return;

        // Apply scale pop animation to heart
        btn.classList.add('scale-pop');
        btn.style.color = '#94A3B8'; // reset color to silver
        const heartIcon = btn.querySelector('i');
        if (heartIcon) heartIcon.className = 'bi bi-heart';

        console.log(`%c[BrainByte Wishlist] Removing item from wishlist...`, "color: #EF4444; font-weight: bold;");

        setTimeout(() => {
          // Fade card col out
          cardCol.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
          cardCol.style.opacity = '0';
          cardCol.style.transform = 'scale(0.85) translateY(15px)';

          setTimeout(() => {
            cardCol.remove();
            
            // Re-evaluate if grid is empty
            const remaining = wishlistGrid.querySelectorAll('.course-browse-card');
            if (remaining.length === 0) {
              wishlistGrid.classList.add('d-none');
              wishlistEmpty.classList.remove('d-none');
              console.log("%c[BrainByte Wishlist] Catalog completely empty.", "color: #EF4444; font-weight: bold;");
            }
          }, 400);
        }, 150);
      });
    });
  }

  // ================================================================
  // 6. SETTINGS PROFILE IMAGE PICKER & PERSISTENCE
  // ================================================================
  const avatarUploadFrame = document.getElementById('avatar-upload-frame');
  const settingsFileInput = document.getElementById('settings-avatar-input');

  let newAvatarUrl = user.avatar_url || '';

  if (avatarUploadFrame && settingsFileInput) {
    avatarUploadFrame.addEventListener('click', () => { settingsFileInput.click(); });
    settingsFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          newAvatarUrl = event.target.result;
          renderAvatars(newAvatarUrl);
          console.log('%c[BrainByte Settings] Avatar loaded.', 'color: #10B981; font-weight: bold;');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // ================================================================
  // 7. PROFILE SETTINGS SAVE HANDLER (localStorage + Supabase)
  // ================================================================
  const btnSettingsSave = document.getElementById('btn-settings-save');
  if (btnSettingsSave) {
    btnSettingsSave.addEventListener('click', async () => {
      const newName = fullNameInput ? fullNameInput.value.trim() : '';
      const newBio = bioTextarea ? bioTextarea.value.trim() : '';
      
      if (!newName) {
        showSettingsToast('error', 'bi-exclamation-circle-fill', 'Full name cannot be empty.');
        return;
      }
      
      const originalText = btnSettingsSave.innerHTML;
      btnSettingsSave.disabled = true;
      btnSettingsSave.innerHTML = `<span class="alert-spinner"></span> <span>Saving...</span>`;
      
      try {
        // 1. Always update localStorage first (works without Supabase)
        const updatedUser = { ...user, full_name: newName, bio: newBio, avatar_url: newAvatarUrl };
        localStorage.setItem('brainbyte_user', JSON.stringify(updatedUser));
        user = updatedUser;
        
        // 2. Update live UI immediately
        if (greetingTitle) {
          const h = new Date().getHours();
          const salutation = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
          greetingTitle.textContent = `${salutation}, ${newName} ðŸ‘‹`;
        }
        if (sidebarName) sidebarName.textContent = newName;
        
        // Also update sidebar avatar initials if no image
        if (!newAvatarUrl) {
          const newInitials = newName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
          if (sidebarAvatar) sidebarAvatar.innerHTML = newInitials;
          if (settingsAvatarPreview) settingsAvatarPreview.innerHTML = newInitials;
        }
        
        // 3. Try Supabase update (optional, non-blocking)
        const client = window.supabaseClient || (typeof supabaseClient !== 'undefined' ? supabaseClient : null);
        if (client && user.id) {
          client.from('users').update({ full_name: newName, bio: newBio, avatar_url: newAvatarUrl }).eq('id', user.id)
            .then(({ error }) => { if (error) console.warn('[Settings] Supabase update warning:', error.message); });
        }
        
        btnSettingsSave.disabled = false;
        btnSettingsSave.innerHTML = originalText;
        showSettingsToast('success', 'bi-check-circle-fill', 'Profile updated successfully!');
        console.log('%c[BrainByte Settings] Profile saved.', 'color: #10B981; font-weight: bold;');
        
      } catch (err) {
        console.error('[Settings] Save error:', err);
        btnSettingsSave.disabled = false;
        btnSettingsSave.innerHTML = originalText;
        showSettingsToast('error', 'bi-exclamation-circle-fill', 'Could not save changes. Try again.');
      }
    });
  }

  // ================================================================
  // 8. SETTINGS PASSWORD STRENGTH METER
  // ================================================================
  const newPassInput = document.getElementById('new-password');
  const strengthBar = document.getElementById('settings-strength-bar');
  const strengthLabel = document.getElementById('settings-strength-label');

  if (newPassInput && strengthBar && strengthLabel) {
    newPassInput.addEventListener('input', () => {
      const val = newPassInput.value;
      let score = 0;

      if (val.length === 0) {
        strengthBar.style.width = '0%';
        strengthBar.className = 'strength-bar-fill';
        strengthLabel.className = 'strength-label';
        strengthLabel.textContent = 'Password Strength';
        return;
      }

      if (val.length >= 6) score++;
      if (/[0-9]/.test(val) || /[^A-Za-z0-9]/.test(val)) score++;
      if (val.length >= 8 && /[A-Z]/.test(val)) score++;

      strengthBar.className = 'strength-bar-fill';
      strengthLabel.className = 'strength-label';

      if (score === 1 || val.length < 6) {
        strengthBar.style.width = '33%'; strengthBar.classList.add('weak');
        strengthLabel.classList.add('weak'); strengthLabel.textContent = 'Weak';
      } else if (score === 2) {
        strengthBar.style.width = '66%'; strengthBar.classList.add('medium');
        strengthLabel.classList.add('medium'); strengthLabel.textContent = 'Medium';
      } else {
        strengthBar.style.width = '100%'; strengthBar.classList.add('strong');
        strengthLabel.classList.add('strong'); strengthLabel.textContent = 'Strong âœ“';
      }
    });
  }

  // ================================================================
  // 9. CHANGE PASSWORD HANDLER
  // ================================================================
  const btnUpdatePassword = document.getElementById('btn-update-password');
  const currPassInput = document.getElementById('curr-password');
  const confPassInput = document.getElementById('conf-password');
  
  if (btnUpdatePassword) {
    btnUpdatePassword.addEventListener('click', async () => {
      const currPass = currPassInput ? currPassInput.value : '';
      const newPass = newPassInput ? newPassInput.value : '';
      const confPass = confPassInput ? confPassInput.value : '';
      
      // Validation
      if (!currPass) { showSettingsToast('error', 'bi-shield-x-fill', 'Please enter your current password.'); return; }
      if (newPass.length < 8) { showSettingsToast('error', 'bi-shield-x-fill', 'New password must be at least 8 characters.'); return; }
      if (newPass !== confPass) { showSettingsToast('error', 'bi-shield-x-fill', 'New passwords do not match.'); return; }
      
      // Verify current password against stored mock user data
      const storedUser = JSON.parse(localStorage.getItem('brainbyte_user') || '{}');
      if (storedUser.password && storedUser.password !== currPass) {
        showSettingsToast('error', 'bi-shield-x-fill', 'Current password is incorrect.');
        if (currPassInput) { currPassInput.style.borderColor = '#EF4444'; setTimeout(() => { currPassInput.style.borderColor = ''; }, 2000); }
        return;
      }
      
      const originalText = btnUpdatePassword.innerHTML;
      btnUpdatePassword.disabled = true;
      btnUpdatePassword.innerHTML = `<span class="alert-spinner"></span> <span>Updating...</span>`;
      
      try {
        // 1. Update localStorage
        const updatedUser = { ...storedUser, password: newPass };
        localStorage.setItem('brainbyte_user', JSON.stringify(updatedUser));
        
        // Also update in mock users list
        const mockUsers = JSON.parse(localStorage.getItem('bb_mock_users') || '[]');
        const idx = mockUsers.findIndex(u => u.email === storedUser.email);
        if (idx !== -1) { mockUsers[idx].password = newPass; localStorage.setItem('bb_mock_users', JSON.stringify(mockUsers)); }
        
        // 2. Try Supabase update (non-blocking)
        const client = window.supabaseClient || (typeof supabaseClient !== 'undefined' ? supabaseClient : null);
        if (client) {
          client.auth.updateUser({ password: newPass })
            .then(({ error }) => { if (error) console.warn('[Password] Supabase update warning:', error.message); });
        }
        
        // 3. Clear inputs
        if (currPassInput) currPassInput.value = '';
        if (newPassInput) { newPassInput.value = ''; newPassInput.dispatchEvent(new Event('input')); }
        if (confPassInput) confPassInput.value = '';
        
        btnUpdatePassword.disabled = false;
        btnUpdatePassword.innerHTML = originalText;
        showSettingsToast('success', 'bi-shield-fill-check', 'Password updated successfully!');
        console.log('%c[BrainByte Settings] Password changed successfully.', 'color: #10B981; font-weight: bold;');
        
      } catch (err) {
        console.error('[Settings] Password update error:', err);
        btnUpdatePassword.disabled = false;
        btnUpdatePassword.innerHTML = originalText;
        showSettingsToast('error', 'bi-shield-x-fill', 'Could not update password. Try again.');
      }
    });
  }

  // ================================================================
  // 10. SETTINGS TOAST HELPER
  // ================================================================
  function showSettingsToast(type, iconClass, message) {
    // Remove existing toast
    const existing = document.getElementById('settings-toast-el');
    if (existing) existing.remove();
    
    const iconColors = { success: '#34D399', error: '#F87171', info: '#C084FC' };
    const toast = document.createElement('div');
    toast.id = 'settings-toast-el';
    toast.className = `settings-toast toast-${type}`;
    toast.innerHTML = `
      <span class="settings-toast-icon" style="color: ${iconColors[type] || '#fff'};"><i class="bi ${iconClass}"></i></span>
      <span class="settings-toast-text">${message}</span>
    `;
    document.body.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => toast.classList.add('show'));
    });
    
    // Auto-dismiss after 3.5s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // ================================================================
  // 11. LOGOUT SESSIONS CLEARING CALLBACKS
  // ================================================================
}

/**
 * PAGE 10 â€” Instructor Studio Controller
 * Governs sticky left sidebar tab switching, warning verification banners,
 * verified vs unverified session toggles, multi-step course wizarding prev/next page
 * updates, syllabus builders section & lesson additions, reviews reports, and logout session clears.
 */
function initInstructorController() {
  const sidebar = document.querySelector('.dashboard-sidebar');
  if (!sidebar || !document.getElementById('instructor-sidebar-profile')) return; // Only execute on instructor page

  const savedUserStr = localStorage.getItem('brainbyte_user');
  let user = null;
  if (savedUserStr) {
    try {
      user = JSON.parse(savedUserStr);
    } catch (e) {}
  }

  if (!user || !user.isLoggedIn || (user.role !== 'instructor' && user.role !== 'teach')) {
    window.location.href = 'login.html';
    return;
  }

  console.log("%c[BrainByte Instructor] Initializing Studio Portal...", "color: #06B6D4; font-weight: bold;");
  if (user) {
    const instrName = document.getElementById(
      'instructor-sidebar-name');
    if (instrName) {
      instrName.textContent = 
        user.full_name || 'Instructor';
    }
    
    // Update avatar initials
    const initials = user.full_name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
      
    document.querySelectorAll(
      '.instructor-avatar-initials')
      .forEach(el => el.textContent = initials);
  }

  // ================================================================
  // 1. VERIFICATION STATUS TOGGLERS (For Demo Testing)
  // ================================================================
  let isVerified = false; // Default unverified for demo

  const toggleBtnUnverified = document.getElementById('toggle-verify-unverified');
  const toggleBtnVerified = document.getElementById('toggle-verify-verified');
  const warningBanner = document.getElementById('instructor-verification-banner');
  
  const teachUnlockedBox = document.getElementById('teach-unlocked-container');
  const teachGuestOverlay = document.getElementById('teach-guest-card');

  function updateVerificationView() {
    if (isVerified) {
      if (warningBanner) warningBanner.classList.add('d-none');
      if (teachUnlockedBox) teachUnlockedBox.classList.remove('locked-blur');
      if (teachGuestOverlay) teachGuestOverlay.classList.add('d-none');
      
      if (toggleBtnVerified) toggleBtnVerified.classList.add('active');
      if (toggleBtnUnverified) toggleBtnUnverified.classList.remove('active');
      
      console.log("%c[BrainByte Instructor] Profile Status: Verified (Create Course Unlocked)", "color: #10B981; font-weight: bold;");
    } else {
      if (warningBanner) warningBanner.classList.remove('d-none');
      if (teachUnlockedBox) teachUnlockedBox.classList.add('locked-blur');
      if (teachGuestOverlay) teachGuestOverlay.classList.remove('d-none');
      
      if (toggleBtnUnverified) toggleBtnUnverified.classList.add('active');
      if (toggleBtnVerified) toggleBtnVerified.classList.remove('active');
      
      console.log("%c[BrainByte Instructor] Profile Status: Unverified (Create Course Locked)", "color: #F59E0B; font-weight: bold;");
    }
  }

  if (toggleBtnUnverified) {
    toggleBtnUnverified.addEventListener('click', () => {
      isVerified = false;
      updateVerificationView();
    });
  }

  if (toggleBtnVerified) {
    toggleBtnVerified.addEventListener('click', () => {
      isVerified = true;
      updateVerificationView();
    });
  }

  // Initial call
  updateVerificationView();

  // ================================================================
  // 2. SIDEBAR NAVIGATION TAB SWITCHES
  // ================================================================
  const navLinks = document.querySelectorAll('.sidebar-nav-link');
  const tabPanels = document.querySelectorAll('.instructor-tab-panel');
  const mobileTitle = document.getElementById('mobile-dashboard-tab-title');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const selectedTab = link.getAttribute('data-tab');
      if (!selectedTab) return;

      // Close mobile drawer on link click
      sidebar.classList.remove('mobile-open');

      // Update active nav links states
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Update mobile header title label
      if (mobileTitle) {
        mobileTitle.textContent = link.textContent.trim().split(' ').slice(1).join(' ');
      }

      // Switch panels visibility
      tabPanels.forEach(panel => {
        if (panel.getAttribute('id') === `panel-${selectedTab}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });

      console.log(`%c[BrainByte Instructor] Switched to tab: ${selectedTab}`, "color: #06B6D4; font-weight: 500;");
    });
  });

  // ================================================================
  // 3. MOBILE RESPONSIVE DRAWERS
  // ================================================================
  const btnToggleSidebar = document.getElementById('btn-mobile-sidebar-toggle');
  const btnCloseSidebar = document.getElementById('btn-close-sidebar-trigger');
  
  if (btnToggleSidebar) {
    btnToggleSidebar.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('mobile-open');
    });
  }

  if (btnCloseSidebar) {
    btnCloseSidebar.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
    });
  }

  document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('mobile-open') && !sidebar.contains(e.target) && e.target !== btnToggleSidebar) {
      sidebar.classList.remove('mobile-open');
    }
  });

  // ================================================================
  // 4. COURSE CREATION STEP WIZARD ENGINE
  // ================================================================
  let currentStep = 1;
  const wizardPages = document.querySelectorAll('.wizard-page-panel');
  const stepNodes = document.querySelectorAll('.wizard-step-node');
  const fillLine = document.getElementById('step-line-fill');

  const updateWizardView = () => {
    // 1. Toggle page visibility
    wizardPages.forEach((page, idx) => {
      if (idx + 1 === currentStep) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });

    // 2. Toggle active/completed steps indicators
    stepNodes.forEach((node, idx) => {
      const stepIdx = idx + 1;
      node.classList.remove('active', 'completed');
      
      if (stepIdx < currentStep) {
        node.classList.add('completed');
      } else if (stepIdx === currentStep) {
        node.classList.add('active');
      }
    });

    // 3. Update line track width
    if (fillLine) {
      const fillPct = ((currentStep - 1) / (stepNodes.length - 1)) * 100;
      fillLine.style.width = `${fillPct}%`;
    }

    console.log(`%c[BrainByte Creator] Wizard transitioned to Step: ${currentStep}`, "color: #A855F7; font-weight: bold;");
  };

  // Next steps triggers
  document.querySelectorAll('.btn-wizard-next').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < wizardPages.length) {
        currentStep++;
        updateWizardView();
        window.scrollTo({ top: 120, behavior: 'smooth' });
      }
    });
  });

  // Prev steps triggers
  document.querySelectorAll('.btn-wizard-prev').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizardView();
        window.scrollTo({ top: 120, behavior: 'smooth' });
      }
    });
  });

  // Step Node clicks (only allow backward jumps or completed jumps for ease)
  stepNodes.forEach(node => {
    node.addEventListener('click', () => {
      if (isVerified) {
        const targetStep = parseInt(node.getAttribute('data-step'));
        currentStep = targetStep;
        updateWizardView();
      }
    });
  });

  // Pricing calculations discounts values sync
  const priceInput = document.getElementById('course-price-input');
  const origPriceInput = document.getElementById('course-original-price-input');
  const discountLabel = document.getElementById('wizard-discount-calc-label');

  if (priceInput && origPriceInput && discountLabel) {
    const calcDiscount = () => {
      const price = parseFloat(priceInput.value) || 0;
      const original = parseFloat(origPriceInput.value) || 0;
      
      if (original > price && price > 0) {
        const diff = original - price;
        const pct = Math.round((diff / original) * 100);
        discountLabel.innerHTML = `<span class="text-success"><i class="bi bi-tag-fill me-1"></i> Special Discount: ${pct}% OFF</span>`;
      } else {
        discountLabel.innerHTML = `<span class="text-muted">No discount applied. Price equals original value.</span>`;
      }
    };

    priceInput.addEventListener('input', calcDiscount);
    origPriceInput.addEventListener('input', calcDiscount);
  }

  // ================================================================
  // 5. MOCK SYLLABUS LIST BUILDERS
  // ================================================================
  const syllabusContainer = document.getElementById('syllabus-sections-list-container');
  const btnAddSection = document.getElementById('btn-syllabus-add-section');
  let sectionIndexCount = 2; // Default mock items has 2 sections preloaded

  if (syllabusContainer && btnAddSection) {
    // Add section click
    btnAddSection.addEventListener('click', () => {
      sectionIndexCount++;
      const sectionCard = document.createElement('div');
      sectionCard.className = 'syllabus-section-card';
      sectionCard.innerHTML = `
        <div class="syllabus-section-header">
          <div class="d-flex align-items-center gap-2 flex-grow-1" style="max-width: 80%;">
            <span class="syllabus-drag-grip"><i class="bi bi-grip-vertical"></i></span>
            <input type="text" class="glass-input m-0 py-1.5 px-3 font-semibold text-white w-100" value="Section ${sectionIndexCount}: Custom Title Description" style="font-size: 0.88rem; border-radius: 8px;">
          </div>
          <button type="button" class="btn p-0 border-0 btn-delete-section text-danger fs-5" style="background: transparent;" aria-label="Delete Section">
            <i class="bi bi-trash-fill"></i>
          </button>
        </div>
        
        <div class="syllabus-lessons-list-box">
          <div class="lessons-inner-layout d-flex flex-column gap-2">
            <!-- lessons entries row list -->
          </div>
          <button type="button" class="btn btn-bb-outline-teal py-1.5 px-3 mt-2 btn-add-lesson" style="font-size: 0.72rem; border-radius: 50px; width: auto; height: auto;">
            + Add Lesson
          </button>
        </div>
      `;

      // Bind delete section action
      sectionCard.querySelector('.btn-delete-section').addEventListener('click', () => {
        sectionCard.remove();
      });

      // Bind add lesson action inside section
      const innerLessons = sectionCard.querySelector('.lessons-inner-layout');
      const addLessonBtn = sectionCard.querySelector('.btn-add-lesson');
      let lessonCount = 0;

      addLessonBtn.addEventListener('click', () => {
        lessonCount++;
        const lessonRow = document.createElement('div');
        lessonRow.className = 'd-flex align-items-center justify-content-between gap-3 p-2 rounded-3'
        lessonRow.style.background = 'rgba(255,255,255,0.01)';
        lessonRow.style.border = '1px dashed rgba(255,255,255,0.06)';

        lessonRow.innerHTML = `
          <div class="d-flex align-items-center gap-2 flex-grow-1" style="max-width: 85%;">
            <i class="bi bi-play-circle-fill text-muted"></i>
            <input type="text" class="glass-input m-0 py-1 px-2 text-white w-100" value="${lessonCount}. Custom Lesson Video stream" style="font-size: 0.78rem; border-radius: 6px;">
          </div>
          <button type="button" class="btn p-0 border-0 text-danger btn-delete-lesson" style="background: transparent;" aria-label="Delete Lesson">
            <i class="bi bi-x-circle"></i>
          </button>
        `;

        lessonRow.querySelector('.btn-delete-lesson').addEventListener('click', () => {
          lessonRow.remove();
        });

        innerLessons.appendChild(lessonRow);
      });

      syllabusContainer.appendChild(sectionCard);
      console.log(`%c[BrainByte Creator] Syllabus Section ${sectionIndexCount} added successfully.`, "color: #10B981; font-weight: bold;");
    });

    // Bind existing section trash clicks
    document.querySelectorAll('.btn-delete-section').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.syllabus-section-card').remove();
      });
    });

    // Bind existing add lesson triggers inside preloaded mock sections
    document.querySelectorAll('.syllabus-section-card').forEach(card => {
      const innerLessons = card.querySelector('.lessons-inner-layout');
      const addLessonBtn = card.querySelector('.btn-add-lesson');
      let lessonCount = innerLessons ? innerLessons.children.length : 0;

      if (addLessonBtn && innerLessons) {
        addLessonBtn.addEventListener('click', () => {
          lessonCount++;
          const lessonRow = document.createElement('div');
          lessonRow.className = 'd-flex align-items-center justify-content-between gap-3 p-2 rounded-3'
          lessonRow.style.background = 'rgba(255,255,255,0.01)';
          lessonRow.style.border = '1px dashed rgba(255,255,255,0.06)';

          lessonRow.innerHTML = `
            <div class="d-flex align-items-center gap-2 flex-grow-1" style="max-width: 85%;">
              <i class="bi bi-play-circle-fill text-muted"></i>
              <input type="text" class="glass-input m-0 py-1 px-2 text-white w-100" value="${lessonCount}. Custom Lesson Video stream" style="font-size: 0.78rem; border-radius: 6px;">
            </div>
            <button type="button" class="btn p-0 border-0 text-danger btn-delete-lesson" style="background: transparent;" aria-label="Delete Lesson">
              <i class="bi bi-x-circle"></i>
            </button>
          `;

          lessonRow.querySelector('.btn-delete-lesson').addEventListener('click', () => {
            lessonRow.remove();
          });

          innerLessons.appendChild(lessonRow);
        });
      }
    });
  }

  // ================================================================
  // 6. SAVE DRAFT & SUBMIT MOCK DIALOG TRIGGERS
  // ================================================================
  const btnSaveDraft = document.getElementById('btn-wizard-save-draft');
  const btnSubmitReview = document.getElementById('btn-wizard-submit-review');

  if (btnSaveDraft) {
    btnSaveDraft.addEventListener('click', () => {
      btnSaveDraft.disabled = true;
      const originalText = btnSaveDraft.innerHTML;
      btnSaveDraft.innerHTML = `<span class="alert-spinner"></span> <span>Saving...</span>`;

      setTimeout(() => {
        btnSaveDraft.innerHTML = `<i class="bi bi-check-circle-fill"></i> Saved!`;
        btnSaveDraft.style.backgroundColor = '#10B981';
        btnSaveDraft.style.borderColor = '#10B981';
        btnSaveDraft.style.color = '#FFFFFF';

        console.log("%c[BrainByte Creator] Course draft saved locally to Supabase DB: status=draft", "color: #10B981; font-weight: bold;");
        
        setTimeout(() => {
          btnSaveDraft.disabled = false;
          btnSaveDraft.innerHTML = originalText;
          btnSaveDraft.style.backgroundColor = '';
          btnSaveDraft.style.borderColor = '';
          btnSaveDraft.style.color = '';
          document.querySelector('[data-tab=\'courses\']').click(); // redirect to My Courses list
        }, 1200);
      }, 1500);
    });
  }

  if (btnSubmitReview) {
    btnSubmitReview.addEventListener('click', () => {
      btnSubmitReview.disabled = true;
      const originalText = btnSubmitReview.innerHTML;
      btnSubmitReview.innerHTML = `<span class="alert-spinner"></span> <span>Submitting...</span>`;

      setTimeout(() => {
        btnSubmitReview.innerHTML = `<i class="bi bi-check-circle-fill"></i> Under Review!`;
        btnSubmitReview.style.backgroundColor = '#F59E0B';
        btnSubmitReview.style.borderColor = '#F59E0B';
        btnSubmitReview.style.color = '#FFFFFF';
        btnSubmitReview.style.boxShadow = '0 0 15px rgba(245, 158, 11, 0.4)';

        console.log("%c[BrainByte Creator] Proposal submitted to admin: status=under_review", "color: #F59E0B; font-weight: bold;");

        setTimeout(() => {
          btnSubmitReview.disabled = false;
          btnSubmitReview.innerHTML = originalText;
          btnSubmitReview.style.backgroundColor = '';
          btnSubmitReview.style.borderColor = '';
          btnSubmitReview.style.color = '';
          btnSubmitReview.style.boxShadow = '';
          document.querySelector('[data-tab=\'courses\']').click(); // redirect to My Courses list
        }, 1200);
      }, 1500);
    });
  }

  // ================================================================
  // 7. FLAG REVIEWS NOTIFICATION MOCKS
  // ================================================================
  const flagButtons = document.querySelectorAll('.btn-flag-review');
  flagButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.disabled = true;
      btn.innerHTML = `<i class="bi bi-flag-fill"></i> Flagged`;
      btn.style.color = '#EF4444';
      console.log("%c[BrainByte Reviews] Review flagged. Notification dispatched to administrator.", "color: #EF4444; font-weight: bold;");
    });
  });

  // ================================================================
  // 8. LOGOUT SESSIONS CLEARING CALLBACKS
  // ================================================================
  // ================================================================
  // 8. LOGOUT SESSIONS CLEARING CALLBACKS
  // ================================================================
  const btnLogout = document.getElementById('btn-sidebar-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', async () => {
      const originalContent = btnLogout.innerHTML;
      btnLogout.disabled = true;
      btnLogout.innerHTML = `<span class="alert-spinner"></span> <span>Logging out...</span>`;

      console.log("%c[BrainByte Auth] Terminating instructor sessions...", "color: #EF4444; font-weight: bold;");

      try {
        if (window.supabaseClient) {
          await window.supabaseClient.auth.signOut();
        }
      } catch (err) {
        console.warn("[Instructor Logout] Supabase signOut error:", err);
      }

      localStorage.removeItem('brainbyte_user');
      localStorage.removeItem('bb_admin_session');

      setTimeout(() => {
        btnLogout.innerHTML = `<i class="bi bi-door-closed-fill"></i> <span>Logged out!</span>`;
        btnLogout.style.background = 'rgba(239, 68, 68, 0.15)';
        
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1200);
      }, 1000);
    });
  }
}

/**
 * ================================================================
 * PAGE 11 & 12 â€” INSTRUCTOR VERIFICATION CONTROLLER
 * ================================================================
 */
function initVerificationController() {
  const switcherButtons = document.querySelectorAll('.demo-switcher-btn');
  const panels = {
    form: document.getElementById('panel-verify-form'),
    success: document.getElementById('panel-verify-success')
  };

  // If we aren't on the verification page, skip
  if (!panels.form && !panels.success) return;

  console.log("%c[BrainByte Onboarding] Initializing Instructor Onboarding Form...", "color: #A855F7; font-weight: bold;");

  // Local Storage Storage Keys
  const MOCK_DATA_KEY = 'bb_verify_data';
  const MOCK_STATUS_KEY = 'bb_verify_status';

  // 1. DYNAMIC DEMO STATE SWITCHER LOGIC
  function showActivePanel(stateName) {
    if (stateName === 'success') {
      if (panels.form) panels.form.style.display = 'none';
      if (panels.success) {
        panels.success.style.display = 'block';
        panels.success.classList.add('active');
      }
    } else {
      if (panels.success) panels.success.style.display = 'none';
      if (panels.form) {
        panels.form.style.display = 'block';
        panels.form.classList.add('active');
      }
    }

    // Sync switcher pill buttons
    switcherButtons.forEach(btn => {
      if (btn.getAttribute('data-state') === stateName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    localStorage.setItem(MOCK_STATUS_KEY, stateName);
  }

  switcherButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const state = btn.getAttribute('data-state');
      showActivePanel(state);
      if (state === 'form') {
        currentStep = 1;
        showStep(1);
      }
    });
  });

  // 2. WIZARD STEP PANELS
  let currentStep = 1;
  const totalSteps = 4;

  const stepPanels = {
    1: document.getElementById('step-panel-1'),
    2: document.getElementById('step-panel-2'),
    3: document.getElementById('step-panel-3'),
    4: document.getElementById('step-panel-4')
  };

  const stepNodes = {
    1: document.getElementById('node-step-1'),
    2: document.getElementById('node-step-2'),
    3: document.getElementById('node-step-3'),
    4: document.getElementById('node-step-4')
  };

  const progressBarFill = document.getElementById('wizard-verify-progress-bar');

  function showStep(step) {
    if (step < 1 || step > totalSteps) return;
    currentStep = step;

    // Show/hide step wrappers
    Object.keys(stepPanels).forEach(key => {
      if (stepPanels[key]) {
        stepPanels[key].style.display = parseInt(key) === step ? 'block' : 'none';
      }
    });

    // Update Step nodes circles & labels
    Object.keys(stepNodes).forEach(key => {
      const node = stepNodes[key];
      if (!node) return;
      const keyVal = parseInt(key);

      const circle = node.querySelector('.wizard-step-circle');

      if (keyVal < step) {
        node.className = 'wizard-step-node completed';
        if (circle) circle.innerHTML = '<i class="bi bi-check-lg"></i>';
      } else if (keyVal === step) {
        node.className = 'wizard-step-node active';
        if (circle) circle.innerHTML = key;
      } else {
        node.className = 'wizard-step-node';
        if (circle) circle.innerHTML = key;
      }
    });

    // Update Done/Active progress bar fills (done indicators cyan progress fill)
    if (progressBarFill) {
      const fillPercentage = ((step - 1) / (totalSteps - 1)) * 100;
      progressBarFill.style.width = fillPercentage === 0 ? '0%' : `${fillPercentage}%`;
    }

    // Scroll card top
    const card = document.querySelector('.floating-glass-card');
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Trigger validation loops
    if (step === 1) validateStep1();
    if (step === 2) validateStep2();
    if (step === 3) validateStep3();
    if (step === 4) validateStep4();
  }

  // 3. INPUT FIELDS & AUTO-SAVE
  const fields = {
    avatar: '',
    fullName: document.getElementById('verify-fullname'),
    category: document.getElementById('verify-category'),
    bio: document.getElementById('verify-bio'),
    linkedin: document.getElementById('verify-linkedin'),
    github: document.getElementById('verify-github'),
    portfolio: document.getElementById('verify-portfolio'),
    whatTeach: document.getElementById('verify-what-teach'),
    whyBrainbyte: document.getElementById('verify-why-brainbyte'),
    experience: document.getElementById('verify-experience'),
    videoUrl: document.getElementById('verify-video-url')
  };

  function saveFormProgress() {
    const data = {
      avatar: fields.avatar,
      fullName: fields.fullName ? fields.fullName.value.trim() : 'Rahul Sharma',
      category: fields.category ? fields.category.value : 'Web Dev',
      bio: fields.bio ? fields.bio.value.trim() : '',
      linkedin: fields.linkedin ? fields.linkedin.value.trim() : '',
      github: fields.github ? fields.github.value.trim() : '',
      portfolio: fields.portfolio ? fields.portfolio.value.trim() : '',
      whatTeach: fields.whatTeach ? fields.whatTeach.value.trim() : '',
      whyBrainbyte: fields.whyBrainbyte ? fields.whyBrainbyte.value.trim() : '',
      experience: fields.experience ? fields.experience.value : 'Less than 1 year',
      videoUrl: fields.videoUrl ? fields.videoUrl.value.trim() : ''
    };
    localStorage.setItem(MOCK_DATA_KEY, JSON.stringify(data));
  }

  function loadFormProgress() {
    const saved = localStorage.getItem(MOCK_DATA_KEY);
    if (!saved) return;

    try {
      const data = JSON.parse(saved);
      fields.avatar = data.avatar || '';
      if (fields.fullName && data.fullName) fields.fullName.value = data.fullName;
      if (fields.category && data.category) fields.category.value = data.category;
      if (fields.bio && data.bio) fields.bio.value = data.bio;
      if (fields.linkedin && data.linkedin) fields.linkedin.value = data.linkedin;
      if (fields.github && data.github) fields.github.value = data.github;
      if (fields.portfolio && data.portfolio) fields.portfolio.value = data.portfolio;
      if (fields.whatTeach && data.whatTeach) fields.whatTeach.value = data.whatTeach;
      if (fields.whyBrainbyte && data.whyBrainbyte) fields.whyBrainbyte.value = data.whyBrainbyte;
      if (fields.experience && data.experience) fields.experience.value = data.experience;
      if (fields.videoUrl && data.videoUrl) fields.videoUrl.value = data.videoUrl;

      // Photo preview
      const preview = document.getElementById('verify-avatar-preview');
      const placeholder = document.getElementById('verify-avatar-placeholder');
      if (preview && placeholder && fields.avatar) {
        preview.src = fields.avatar;
        preview.classList.remove('d-none');
        placeholder.classList.add('d-none');
      }
    } catch (e) {
      console.error("[BrainByte Onboarding] Restoring data failure:", e);
    }
  }

  // Key listeners for autosaving and instant validation
  Object.keys(fields).forEach(key => {
    if (key === 'avatar' || !fields[key]) return;
    fields[key].addEventListener('input', () => {
      saveFormProgress();
      if (currentStep === 1) validateStep1();
      if (currentStep === 2) validateStep2();
      if (currentStep === 3) validateStep3();
    });
    fields[key].addEventListener('change', () => {
      saveFormProgress();
      if (currentStep === 1) validateStep1();
      if (currentStep === 2) validateStep2();
      if (currentStep === 3) validateStep3();
    });
  });

  // 4. STEP 1 VALIDATORS (Personal Info)
  const bioCharCounter = document.getElementById('verify-bio-char-counter');
  function validateStep1() {
    const nameVal = fields.fullName ? fields.fullName.value.trim() : '';
    const bioVal = fields.bio ? fields.bio.value.trim() : '';
    
    // Update bio counter
    if (bioCharCounter) {
      bioCharCounter.innerText = `${bioVal.length} / 300`;
      if (bioVal.length > 300) {
        bioCharCounter.style.color = '#EF4444';
      } else {
        bioCharCounter.style.color = '#94A3B8';
      }
    }

    const nextBtn = document.getElementById('btn-step-1-next');
    if (!nextBtn) return;

    // Disabled until Full Name and Bio are all filled (Photo/Avatar is optional)
    const isFilled = nameVal !== '' && bioVal !== '';
    if (isFilled) {
      nextBtn.removeAttribute('disabled');
    } else {
      nextBtn.setAttribute('disabled', 'true');
    }
  }

  // File Picker Dropbox Trigger
  const dropbox = document.getElementById('verify-avatar-dropbox');
  const fileInput = document.getElementById('verify-avatar-input');
  const preview = document.getElementById('verify-avatar-preview');
  const placeholder = document.getElementById('verify-avatar-placeholder');

  if (dropbox && fileInput && preview && placeholder) {
    dropbox.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        fields.avatar = e.target.result;
        preview.src = fields.avatar;
        preview.classList.remove('d-none');
        placeholder.classList.add('d-none');
        saveFormProgress();
        validateStep1();
      };
      reader.readAsDataURL(file);
    });
  }

  // 5. STEP 2 VALIDATORS (Skill Proof)
  function validateStep2() {
    const linkedinVal = fields.linkedin ? fields.linkedin.value.trim() : '';
    let linkedinValid = false;

    const badge = document.getElementById('linkedin-validation-badge');
    const errText = document.getElementById('linkedin-error-text');

    if (linkedinVal.length > 0) {
      // Must contain "linkedin.com"
      if (linkedinVal.includes('linkedin.com')) {
        linkedinValid = true;
        if (fields.linkedin) fields.linkedin.className = 'glass-input ps-5 pe-5 input-valid-green';
        if (badge) {
          badge.className = 'validation-indicator-badge ok';
          badge.innerHTML = '<i class="bi bi-check-lg" style="color: #10B981;"></i>';
        }
        if (errText) errText.classList.add('d-none');
      } else {
        linkedinValid = false;
        if (fields.linkedin) fields.linkedin.className = 'glass-input ps-5 pe-5 input-invalid-red';
        if (badge) {
          badge.className = 'validation-indicator-badge error';
          badge.innerHTML = '<i class="bi bi-x-lg" style="color: #EF4444;"></i>';
        }
        if (errText) errText.classList.remove('d-none');
      }
    } else {
      if (fields.linkedin) fields.linkedin.className = 'glass-input ps-5';
      if (badge) badge.className = 'validation-indicator-badge';
      if (errText) errText.classList.add('d-none');
    }

    const nextBtn = document.getElementById('btn-step-2-next');
    if (!nextBtn) return;

    // LinkedIn URL is required, must contain "linkedin.com"
    if (linkedinValid) {
      nextBtn.removeAttribute('disabled');
    } else {
      nextBtn.setAttribute('disabled', 'true');
    }
  }

  // 6. STEP 3 VALIDATORS (Teaching Intent)
  const teachCounter = document.getElementById('verify-what-teach-char-counter');
  const whyCounter = document.getElementById('verify-why-brainbyte-char-counter');
  const teachError = document.getElementById('verify-what-teach-error');
  const whyError = document.getElementById('verify-why-brainbyte-error');

  function validateStep3() {
    const teachVal = fields.whatTeach ? fields.whatTeach.value.trim() : '';
    const whyVal = fields.whyBrainbyte ? fields.whyBrainbyte.value.trim() : '';

    // What Teach validation (min 100, max 500)
    if (teachCounter) teachCounter.innerText = `${teachVal.length} / 500`;
    let teachOk = teachVal.length >= 100;
    if (teachVal.length > 0 && teachVal.length < 100) {
      if (fields.whatTeach) fields.whatTeach.className = 'glass-input input-warning-amber';
      if (teachError) teachError.classList.remove('d-none');
    } else if (teachVal.length >= 100) {
      if (fields.whatTeach) fields.whatTeach.className = 'glass-input input-valid-cyan';
      if (teachError) teachError.classList.add('d-none');
    } else {
      if (fields.whatTeach) fields.whatTeach.className = 'glass-input';
      if (teachError) teachError.classList.add('d-none');
    }

    // Why BrainByte validation (min 100, max 500)
    if (whyCounter) whyCounter.innerText = `${whyVal.length} / 500`;
    let whyOk = whyVal.length >= 100;
    if (whyVal.length > 0 && whyVal.length < 100) {
      if (fields.whyBrainbyte) fields.whyBrainbyte.className = 'glass-input input-warning-amber';
      if (whyError) whyError.classList.remove('d-none');
    } else if (whyVal.length >= 100) {
      if (fields.whyBrainbyte) fields.whyBrainbyte.className = 'glass-input input-valid-cyan';
      if (whyError) whyError.classList.add('d-none');
    } else {
      if (fields.whyBrainbyte) fields.whyBrainbyte.className = 'glass-input';
      if (whyError) whyError.classList.add('d-none');
    }

    const nextBtn = document.getElementById('btn-step-3-next');
    if (!nextBtn) return;

    if (teachOk && whyOk) {
      nextBtn.removeAttribute('disabled');
    } else {
      nextBtn.setAttribute('disabled', 'true');
    }
  }

  // 7. STEP 4 VALIDATORS (Review & Submit Summary)
  function validateStep4() {
    const summaryAvatar = document.getElementById('summary-avatar-circle');
    const summaryName = document.getElementById('summary-fullname-text');
    const summaryCategoryExp = document.getElementById('summary-category-experience-text');
    const summaryLinkedin = document.getElementById('summary-linkedin-text');
    const summaryGithub = document.getElementById('summary-github-text');
    const summaryTopics = document.getElementById('summary-topics-text');

    // Populate photo + name
    if (summaryAvatar) {
      if (fields.avatar) {
        summaryAvatar.innerHTML = `<img src="${fields.avatar}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">`;
      } else {
        // Initials fallback
        const nameVal = fields.fullName ? fields.fullName.value.trim() : '';
        const initials = nameVal ? nameVal.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : 'RS';
        summaryAvatar.innerHTML = initials;
      }
    }
    if (summaryName && fields.fullName) {
      summaryName.innerText = fields.fullName.value.trim() || 'Rahul Sharma';
    }

    // Category + experience
    if (summaryCategoryExp && fields.category && fields.experience) {
      summaryCategoryExp.innerText = `${fields.category.value} â€¢ ${fields.experience.value}`;
    }

    // LinkedIn
    if (summaryLinkedin) {
      const val = fields.linkedin ? fields.linkedin.value.trim() : '';
      if (val) {
        summaryLinkedin.innerText = val;
        summaryLinkedin.href = val;
      } else {
        summaryLinkedin.innerText = 'Not provided';
        summaryLinkedin.removeAttribute('href');
      }
    }

    // GitHub
    if (summaryGithub) {
      const val = fields.github ? fields.github.value.trim() : '';
      if (val) {
        summaryGithub.innerText = val;
        summaryGithub.href = val;
      } else {
        summaryGithub.innerText = 'Not provided';
        summaryGithub.removeAttribute('href');
      }
    }

    // Teaching topics (truncated)
    if (summaryTopics && fields.whatTeach) {
      summaryTopics.innerText = fields.whatTeach.value.trim() || 'No topics listed';
    }

    // Handle Purple custom checkbox validation for submit button
    const terms = document.getElementById('verify-terms-checkbox');
    const submitBtn = document.getElementById('btn-verify-submit');
    if (terms && submitBtn) {
      const handleTermsCheck = () => {
        if (terms.checked) {
          submitBtn.removeAttribute('disabled');
          submitBtn.style.opacity = '1';
          submitBtn.style.boxShadow = '0 0 30px rgba(124,58,237,0.5)';
        } else {
          submitBtn.setAttribute('disabled', 'true');
          submitBtn.style.opacity = '0.4';
          submitBtn.style.boxShadow = 'none';
        }
      };

      // Register change listener once
      terms.removeEventListener('change', handleTermsCheck);
      terms.addEventListener('change', handleTermsCheck);
      handleTermsCheck(); // initial run
    }
  }

  // Summary Edit pencil hooks
  document.querySelectorAll('.summary-row-edit-link').forEach(link => {
    link.addEventListener('click', () => {
      const targetStep = parseInt(link.getAttribute('data-edit-step') || '1');
      showStep(targetStep);
    });
  });

  // 8. FINAL APPLICATION SUBMIT SEQUENCE WITH 2-SECOND REDIRECT
  const btnVerifySubmit = document.getElementById('btn-verify-submit');
  if (btnVerifySubmit) {
    btnVerifySubmit.addEventListener('click', () => {
      btnVerifySubmit.disabled = true;
      btnVerifySubmit.innerHTML = `<span class="alert-spinner"></span> <span>Submitting...</span>`;

      // Construct application formData payload
      const formData = {
        avatar: fields.avatar,
        fullName: fields.fullName ? fields.fullName.value.trim() : 'Rahul Sharma',
        category: fields.category ? fields.category.value : 'Web Dev',
        bio: fields.bio ? fields.bio.value.trim() : '',
        linkedin: fields.linkedin ? fields.linkedin.value.trim() : '',
        github: fields.github ? fields.github.value.trim() : '',
        portfolio: fields.portfolio ? fields.portfolio.value.trim() : '',
        whatTeach: fields.whatTeach ? fields.whatTeach.value.trim() : '',
        whyBrainbyte: fields.whyBrainbyte ? fields.whyBrainbyte.value.trim() : '',
        experience: fields.experience ? fields.experience.value : 'Less than 1 year',
        videoUrl: fields.videoUrl ? fields.videoUrl.value.trim() : ''
      };

      // Save form payload and pending verification status to localStorage
      localStorage.setItem('verify_application', JSON.stringify(formData));
      localStorage.setItem('verify_status', 'pending');

      // Clear temporary draft keys
      localStorage.removeItem(MOCK_DATA_KEY);

      setTimeout(() => {
        btnVerifySubmit.innerHTML = `<i class="bi bi-check-circle-fill"></i> Submitted!`;
        btnVerifySubmit.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
        btnVerifySubmit.style.boxShadow = '0 0 25px rgba(16, 185, 129, 0.4)';

        // Trigger the animated gradient success checkmark
        showActivePanel('success');
        console.log("%c[BrainByte Onboarding] Onboarding submission pending approval.", "color: #10B981; font-weight: bold;");

        // Redirect after exactly 2 seconds (2000ms)
        setTimeout(() => {
          window.location.href = 'verify-status.html';
        }, 2000);
      }, 800);
    });
  }

  // 9. HEADER LOGOUT OVERRIDES
  const btnHeaderLogout = document.getElementById('nav-btn-logout-header');
  if (btnHeaderLogout) {
    btnHeaderLogout.addEventListener('click', async (e) => {
      e.preventDefault();
      btnHeaderLogout.innerText = 'Logging out...';
      btnHeaderLogout.style.opacity = '0.7';
      
      try {
        if (window.supabaseClient) {
          await window.supabaseClient.auth.signOut();
        }
      } catch (err) {
        console.warn("[Header Logout] Supabase signOut error:", err);
      }

      localStorage.removeItem('brainbyte_user');
      localStorage.removeItem('bb_admin_session');

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 800);
    });
  }

  // 10. REGISTER NEXT/BACK NAVIGATION BUTTON LISTENERS
  const btnStep1Next = document.getElementById('btn-step-1-next');
  const btnStep2Back = document.getElementById('btn-step-2-back');
  const btnStep2Next = document.getElementById('btn-step-2-next');
  const btnStep3Back = document.getElementById('btn-step-3-back');
  const btnStep3Next = document.getElementById('btn-step-3-next');
  const btnStep4Back = document.getElementById('btn-step-4-back');

  if (btnStep1Next) btnStep1Next.addEventListener('click', () => showStep(2));
  if (btnStep2Back) btnStep2Back.addEventListener('click', () => showStep(1));
  if (btnStep2Next) btnStep2Next.addEventListener('click', () => showStep(3));
  if (btnStep3Back) btnStep3Back.addEventListener('click', () => showStep(2));
  if (btnStep3Next) btnStep3Next.addEventListener('click', () => showStep(4));
  if (btnStep4Back) btnStep4Back.addEventListener('click', () => showStep(3));

  // 11. SETUP MOUNT STATES
  loadFormProgress();
  showStep(1);

  // Restore dashboard session panel
  const savedState = localStorage.getItem(MOCK_STATUS_KEY) || 'form';
  showActivePanel(savedState);
}



