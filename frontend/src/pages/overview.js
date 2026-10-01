// Overview & Culinary Editorial Showcase Component
import { icons } from '../icons.js';
import { store } from '../data/store.js';

export function renderOverview(state = {}) {
  const metrics = store.metrics;
  const ai = store.aiInsight;
  const activeTab = state.activeMenuTab || 'main';
  const activeTestimonialIdx = state.activeTestimonialIdx !== undefined ? state.activeTestimonialIdx : 1;

  // Menu items for the 3 tabs
  const menuData = {
    appertizers: [
      {
        title: "Harvest Bruschetta",
        desc: "Crispy grilled sourdough topped with heirloom tomatoes, garlic, extra virgin olive oil and fragrant fresh basil.",
        image: "/images/sandwiches.jpg"
      },
      {
        title: "Sesame Dumplings",
        desc: "Delicate steamed vegetable dumplings served with dark chili crunch soy sauce and scallions.",
        image: "/images/hero_dumplings.jpg"
      },
      {
        title: "Fresh Fruit Medley",
        desc: "Chilled seasonal sliced watermelon, golden pineapple, ripe kiwi, and sun-sweet berries.",
        image: "/images/fruit_boxes.jpg"
      }
    ],
    main: [
      {
        title: "Stirred Egg",
        desc: "This might be the most common Chinese family dish. The dish is easy to cook: fry the stirred egg and sliced tomato.",
        image: "/images/menu_plate_1.jpg"
      },
      {
        title: "Kung Pao Chicken",
        desc: "When temperatures plummet and you're craving something warm and cozy, you can't go wrong with fluffy rice and broccoli.",
        image: "/images/menu_plate_2.jpg"
      },
      {
        title: "Sweet Pork Chops",
        desc: "Sweet and sour dishes are popular among Chinese families. Although the ingredients and cooking methods vary.",
        image: "/images/menu_plate_3.jpg"
      }
    ],
    dessert: [
      {
        title: "Raw Chocolate Fudge",
        desc: "Decadent organic artisanal cocoa fudge bars topped with sea salt flakes and roasted almond nibs.",
        image: "/images/sandwiches.jpg"
      },
      {
        title: "Chilled Citrus Bowl",
        desc: "Refreshing cuts of sun-ripened orange, kiwi and crisp mint leaves prepared fresh daily.",
        image: "/images/fruit_boxes.jpg"
      },
      {
        title: "Cardamom Rice Pulao",
        desc: "Fragrant sweet basmati rice infused with whole green cardamom, saffron threads, and caramelized cashews.",
        image: "/images/veg_rice.jpg"
      }
    ]
  };

  const currentMenuItems = menuData[activeTab] || menuData.main;

  // Testimonial quotes
  const testimonials = [
    {
      author: "Marcus Chen",
      role: "Head Chef at Lotus Garden Bistro",
      quote: "“NourishAI completely transformed our kitchen prep. Predicting guest count before prep started reduced our nightly plate waste by 32% in the very first month.”",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      author: "Chef Isabella Cruz",
      role: "Touring Culinary Director",
      quote: "“I’m currently on the tour with Paula Abdul and while we were performing in town I came across your raw chocolate fudge at Whole Foods, OMG! I was nice enough to share it with Paula Abdul, the physical therapist and the glam squad. Of course they all agreed with me! So glad we are coming back next week.”",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
    },
    {
      author: "Ravi Kumar",
      role: "Green Rescue Volunteer Lead",
      quote: "“The zero-friction dispatch is brilliant. In less than 15 minutes from cafeteria closing, we have 40 nutritious hot meals delivered straight to Hope Community Kitchen.”",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const currentTestimonial = testimonials[activeTestimonialIdx] || testimonials[1];

  // Circular progress ring calculation
  const score = metrics.sustainabilityScore;
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return `
    <div class="editorial-page-wrapper" id="overviewPage">
      
      <!-- =========================================================
           1. HERO SECTION (Reference Image 3)
           ========================================================= -->
      <section class="hero-editorial-section" id="heroSection">
        <!-- Floating Parallax Ingredients -->
        <img src="/decor/spices_spoons.svg" class="floating-decor-item decor-spoons" data-parallax-speed="0.12" alt="Spices spoons" />
        <img src="/decor/tomatoes_onions.svg" class="floating-decor-item decor-tomatoes" data-parallax-speed="-0.08" alt="Vine tomatoes and onions" />
        <img src="/decor/white_pebble.svg" class="floating-decor-item decor-pebble-hero" data-parallax-speed="0.05" alt="Pebble" />

        <!-- Left Text Column -->
        <div class="hero-text-col">
          <h1 class="hero-serif-title">
            <span class="break">Take a taste</span>
            <span class="break">Come join us.</span>
            <span class="break" style="color:var(--primary-forest);">Life is so endlessly delicious.</span>
          </h1>

          <p class="hero-sub-para">
            Dumpling is a broad classification for a dish that consists of pieces of dough made from a variety of starch sources wrapped around a filling. NourishAI brings that same care to saving every meal prepared.
          </p>

          <div class="hero-cta-group">
            <button class="btn-pill-orange" id="heroExploreBtn">
              <span>Explore Now</span>
              ${icons.chevronRight(16)}
            </button>
            <button class="btn-pill-outline" id="heroListSurplusBtn">
              <span>+ List Surplus Food</span>
            </button>
          </div>
        </div>

        <!-- Right Large Round Plate (Dumplings) -->
        <div class="hero-plate-col">
          <div class="hero-plate-wrapper" id="heroPlateWrapper">
            <img src="/images/hero_dumplings.jpg" class="hero-plate-img" alt="Delicate steamed dumplings on round wooden plate" />
          </div>
        </div>
      </section>

      <!-- =========================================================
           2. WHAT'S ON OUR PLATE (Reference Image 1)
           ========================================================= -->
      <section class="menu-plates-section" id="menuPlatesSection">
        <!-- Floating Parallax Ingredients -->
        <img src="/decor/pea_pods_chili.svg" class="floating-decor-item decor-peapods" data-parallax-speed="0.1" alt="Pea pods and chili sauce" />
        <img src="/decor/lobster_cutout.svg" class="floating-decor-item decor-lobster" data-parallax-speed="-0.14" alt="Cooked red lobster" />

        <h2 class="section-serif-heading">What’s on our Plate</h2>
        <p class="section-small-subtitle">Please serve yourself without any hesitate</p>

        <!-- 3-Tab Switcher with active orange underline -->
        <div class="tabs-switcher-row" id="menuTabsSwitcher">
          <button class="tab-switcher-btn ${activeTab === 'appertizers' ? 'active' : ''}" data-tab="appertizers">
            Appertizers
          </button>
          <button class="tab-switcher-btn ${activeTab === 'main' ? 'active' : ''}" data-tab="main">
            Main Dish
          </button>
          <button class="tab-switcher-btn ${activeTab === 'dessert' ? 'active' : ''}" data-tab="dessert">
            Dessert
          </button>
        </div>

        <!-- 3 Staggered Round Plates Row -->
        <div class="staggered-plates-row" id="staggeredPlatesContainer">
          ${currentMenuItems.map((item, idx) => `
            <div class="plate-card-item">
              <div class="round-plate-photo-wrap" title="${item.title}">
                <img src="${item.image}" class="round-plate-photo" alt="${item.title}" onerror="this.src='/images/veg_rice.jpg'"/>
              </div>
              <h3 class="plate-serif-title">${item.title}</h3>
              <p class="plate-desc-text">${item.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- =========================================================
           3. EXECUTIVE SUSTAINABILITY & SAAS DASHBOARD SECTION
           ========================================================= -->
      <section class="dashboard-embedded-container" id="sustainabilitySection" style="max-width:1440px;margin:0 auto;padding-left:3.5rem;padding-right:3.5rem;">
        <div style="text-align:center;margin-bottom:3rem;">
          <span class="section-label-tag">Operations Intelligence</span>
          <h2 class="section-serif-heading" style="font-size:2.5rem;">Green Leaf Kitchen Dashboard</h2>
          <p class="section-small-subtitle">Real-time impact metrics, demand forecasting & live rescue dispatch</p>
        </div>

        <!-- 4 Large Impact Metric Cards -->
        <div class="metrics-grid" style="display:grid;grid-template-columns:repeat(4, 1fr);gap:1.5rem;margin-bottom:2rem;">
          <!-- 1. Meals Rescued -->
          <div class="nourish-card metric-card" style="background:#FFFFFF;border-radius:var(--radius-lg);padding:1.5rem;box-shadow:var(--shadow-card);">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:1rem;">
              <span style="font-size:0.875rem;font-weight:600;color:var(--text-secondary);">Meals rescued</span>
              <div style="width:42px;height:42px;border-radius:10px;background:var(--mint-subtle);color:var(--mint-dark);display:flex;align-items:center;justify-content:center;">
                ${icons.meal(22)}
              </div>
            </div>
            <div style="font-family:var(--font-serif);font-size:2.2rem;font-weight:700;color:var(--text-primary);line-height:1;">
              ${metrics.mealsRescued.toLocaleString()}
            </div>
            <div style="display:inline-flex;align-items:center;gap:0.35rem;font-size:0.8125rem;font-weight:600;color:var(--mint-dark);background:var(--mint-subtle);padding:0.2rem 0.5rem;border-radius:var(--radius-full);margin-top:0.6rem;">
              ${icons.trendUp(14)}
              <span>${metrics.mealsChange}</span>
            </div>
          </div>

          <!-- 2. Food Waste Avoided -->
          <div class="nourish-card metric-card" style="background:#FFFFFF;border-radius:var(--radius-lg);padding:1.5rem;box-shadow:var(--shadow-card);">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:1rem;">
              <span style="font-size:0.875rem;font-weight:600;color:var(--text-secondary);">Food waste avoided</span>
              <div style="width:42px;height:42px;border-radius:10px;background:var(--primary-forest-subtle);color:var(--primary-forest);display:flex;align-items:center;justify-content:center;">
                ${icons.leaf(22)}
              </div>
            </div>
            <div style="font-family:var(--font-serif);font-size:2.2rem;font-weight:700;color:var(--text-primary);line-height:1;">
              ${metrics.wasteAvoidedKg} <span style="font-family:var(--font-sans);font-size:1.1rem;color:var(--text-secondary);font-weight:600;">kg</span>
            </div>
            <div style="display:inline-flex;align-items:center;gap:0.35rem;font-size:0.8125rem;font-weight:600;color:var(--mint-dark);background:var(--mint-subtle);padding:0.2rem 0.5rem;border-radius:var(--radius-full);margin-top:0.6rem;">
              ${icons.trendDown(14)}
              <span>${metrics.wasteChange}</span>
            </div>
          </div>

          <!-- 3. Money Saved -->
          <div class="nourish-card metric-card" style="background:#FFFFFF;border-radius:var(--radius-lg);padding:1.5rem;box-shadow:var(--shadow-card);">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:1rem;">
              <span style="font-size:0.875rem;font-weight:600;color:var(--text-secondary);">Money saved</span>
              <div style="width:42px;height:42px;border-radius:10px;background:var(--accent-orange-light);color:var(--accent-orange);display:flex;align-items:center;justify-content:center;">
                ${icons.wallet(22)}
              </div>
            </div>
            <div style="font-family:var(--font-serif);font-size:2.2rem;font-weight:700;color:var(--text-primary);line-height:1;">
              ₹${metrics.moneySaved.toLocaleString()}
            </div>
            <div style="display:inline-flex;align-items:center;gap:0.35rem;font-size:0.8125rem;font-weight:600;color:var(--mint-dark);background:var(--mint-subtle);padding:0.2rem 0.5rem;border-radius:var(--radius-full);margin-top:0.6rem;">
              ${icons.trendUp(14)}
              <span>${metrics.moneyChange}</span>
            </div>
          </div>

          <!-- 4. People Supported -->
          <div class="nourish-card metric-card" style="background:#FFFFFF;border-radius:var(--radius-lg);padding:1.5rem;box-shadow:var(--shadow-card);">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:1rem;">
              <span style="font-size:0.875rem;font-weight:600;color:var(--text-secondary);">People supported</span>
              <div style="width:42px;height:42px;border-radius:10px;background:#EFF6FF;color:#2563EB;display:flex;align-items:center;justify-content:center;">
                ${icons.users(22)}
              </div>
            </div>
            <div style="font-family:var(--font-serif);font-size:2.2rem;font-weight:700;color:var(--text-primary);line-height:1;">
              ${metrics.peopleSupported.toLocaleString()}
            </div>
            <div style="display:inline-flex;align-items:center;gap:0.35rem;font-size:0.8125rem;font-weight:600;color:var(--mint-dark);background:var(--mint-subtle);padding:0.2rem 0.5rem;border-radius:var(--radius-full);margin-top:0.6rem;">
              ${icons.trendUp(14)}
              <span>${metrics.peopleChange}</span>
            </div>
          </div>
        </div>

        <!-- 2-Column: Sustainability Score Card & Weekly Impact Chart -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-bottom:2rem;">
          <!-- Sustainability Score Card -->
          <div class="nourish-card" style="background:#FFFFFF;border-radius:var(--radius-lg);padding:1.75rem;box-shadow:var(--shadow-card);display:flex;flex-direction:column;justify-content:space-between;">
            <div style="display:flex;align-items:center;justify-content:space-between;">
              <div>
                <h3 style="font-family:var(--font-serif);font-size:1.45rem;font-weight:700;color:var(--text-primary);">Sustainability score</h3>
                <span style="font-size:0.8125rem;color:var(--text-muted);">Verified kitchen reduction audit</span>
              </div>
              <span class="status-badge badge-available">
                ${icons.check(14)}
                <span>Excellent progress</span>
              </span>
            </div>

            <div style="display:flex;align-items:center;gap:2rem;margin:1.5rem 0;">
              <div style="position:relative;width:120px;height:120px;flex-shrink:0;">
                <svg viewBox="0 0 120 120" style="transform:rotate(-90deg);width:120px;height:120px;">
                  <circle cx="60" cy="60" r="${radius}" fill="none" stroke="#E6EAE3" stroke-width="10"/>
                  <circle 
                    cx="60" 
                    cy="60" 
                    r="${radius}" 
                    fill="none" 
                    stroke="#10B981" 
                    stroke-width="10" 
                    stroke-linecap="round"
                    stroke-dasharray="${circumference}" 
                    stroke-dashoffset="${offset}"
                  />
                </svg>
                <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;">
                  <span style="font-family:var(--font-serif);font-size:2rem;font-weight:700;color:var(--primary-forest);line-height:1;">${score}</span>
                  <span style="font-size:0.75rem;color:var(--text-muted);font-weight:600;">/100</span>
                </div>
              </div>

              <div>
                <p style="font-size:0.95rem;color:var(--text-primary);line-height:1.5;margin-bottom:0.4rem;">
                  <strong>You reduced avoidable food waste by 24%</strong> compared with last month.
                </p>
                <p style="font-size:0.8125rem;color:var(--text-secondary);line-height:1.4;">
                  Continuous alignment with AI batch suggestions has saved over 386 kg of premium ingredients from municipal landfill.
                </p>
              </div>
            </div>

            <div style="display:flex;align-items:center;justify-content:space-between;padding-top:1rem;border-top:1px solid #F0F3ED;font-size:0.8125rem;">
              <span>Prep Accuracy: <strong>92%</strong></span>
              <span>•</span>
              <span>Donation Speed: <strong>94%</strong></span>
              <span>•</span>
              <span style="color:var(--mint-dark);font-weight:700;">Grade A+ Audit</span>
            </div>
          </div>

          <!-- Weekly Impact Chart Card -->
          <div class="nourish-card" style="background:#FFFFFF;border-radius:var(--radius-lg);padding:1.75rem;box-shadow:var(--shadow-card);">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
              <div>
                <h3 style="font-family:var(--font-serif);font-size:1.45rem;font-weight:700;color:var(--text-primary);">Your impact this week</h3>
                <span style="font-size:0.8125rem;color:var(--text-muted);">Meals rescued vs. food waste avoided</span>
              </div>
              <div class="timeframe-filters" style="display:flex;background:#F3F6F1;padding:3px;border-radius:var(--radius-full);">
                <button class="timeframe-btn active" style="font-size:0.75rem;padding:0.3rem 0.75rem;border-radius:var(--radius-full);background:white;font-weight:600;">This week</button>
                <button class="timeframe-btn" style="font-size:0.75rem;padding:0.3rem 0.75rem;border-radius:var(--radius-full);color:var(--text-secondary);">This month</button>
                <button class="timeframe-btn" style="font-size:0.75rem;padding:0.3rem 0.75rem;border-radius:var(--radius-full);color:var(--text-secondary);">This year</button>
              </div>
            </div>

            <!-- SVG Bar Chart -->
            <div style="height:170px;width:100%;margin-top:1rem;">
              <svg width="100%" height="100%" viewBox="0 0 500 150" preserveAspectRatio="none">
                <line x1="0" y1="20" x2="500" y2="20" stroke="#F3F5F2" stroke-dasharray="4"/>
                <line x1="0" y1="70" x2="500" y2="70" stroke="#F3F5F2" stroke-dasharray="4"/>
                <line x1="0" y1="120" x2="500" y2="120" stroke="#F3F5F2" stroke-dasharray="4"/>

                ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                  const meals = [142, 168, 195, 210, 240, 185, 108][i];
                  const waste = [44, 52, 60, 65, 74, 56, 35][i];
                  const x = 35 + i * 65;
                  const hMeal = (meals / 240) * 95;
                  const hWaste = (waste / 240) * 95 * 2.2;
                  return `
                    <rect x="${x}" y="${130 - hMeal}" width="12" height="${hMeal}" rx="3" fill="#153E2B"/>
                    <rect x="${x + 14}" y="${130 - hWaste}" width="12" height="${hWaste}" rx="3" fill="#F25C05"/>
                    <text x="${x + 13}" y="146" font-size="10.5" fill="#6B7280" text-anchor="middle" font-family="var(--font-sans)">${day}</text>
                  `;
                }).join('')}
              </svg>
            </div>

            <div style="display:flex;align-items:center;gap:1.5rem;font-size:0.78rem;color:var(--text-secondary);margin-top:0.75rem;padding-top:0.75rem;border-top:1px solid #F0F3ED;">
              <div style="display:flex;align-items:center;gap:0.4rem;">
                <span style="width:10px;height:10px;border-radius:2px;background:#153E2B;"></span>
                <span>Meals rescued</span>
              </div>
              <div style="display:flex;align-items:center;gap:0.4rem;">
                <span style="width:10px;height:10px;border-radius:2px;background:#F25C05;"></span>
                <span>Food waste avoided (kg)</span>
              </div>
              <span style="margin-left:auto;font-weight:600;color:var(--primary-forest);">Avg: 178 meals/day</span>
            </div>
          </div>
        </div>

        <!-- 2-Column: AI Insight Hero Card & Live Activity Feed -->
        <div style="display:grid;grid-template-columns:1.4fr 1fr;gap:2rem;margin-bottom:2rem;">
          <!-- Prominent AI Insight Card -->
          <div class="ai-insight-card" style="background:linear-gradient(145deg, #ECFDF5 0%, #E6F4EA 60%, #DCFCE7 100%);border:1.5px solid #A7F3D0;border-radius:var(--radius-lg);padding:1.75rem;">
            <div class="ai-badge" style="display:inline-flex;align-items:center;gap:0.4rem;font-size:0.75rem;font-weight:800;letter-spacing:0.08em;padding:0.25rem 0.65rem;background:rgba(16, 185, 129, 0.2);color:#047857;border-radius:var(--radius-full);margin-bottom:0.85rem;">
              ${icons.ai(14)}
              <span>AI INSIGHT</span>
            </div>

            <h3 style="font-family:var(--font-serif);font-size:1.75rem;font-weight:700;color:var(--primary-forest);margin-bottom:0.5rem;">
              ${ai.title}
            </h3>
            <p style="font-size:0.95rem;color:#2D4A3E;line-height:1.5;margin-bottom:1.25rem;">
              ${ai.description}
            </p>

            <div style="display:flex;align-items:center;gap:1.5rem;background:rgba(255,255,255,0.85);backdrop-filter:blur(8px);padding:0.85rem 1.25rem;border-radius:var(--radius-md);border:1px solid rgba(16, 185, 129, 0.2);width:fit-content;margin-bottom:1.35rem;">
              <div>
                <div style="font-size:0.7rem;font-weight:600;color:var(--text-secondary);">Confidence</div>
                <div style="font-family:var(--font-serif);font-size:1.2rem;font-weight:700;color:var(--mint-dark);">${ai.confidence}%</div>
              </div>
              <div style="width:1px;height:32px;background:rgba(16, 185, 129, 0.25);"></div>
              <div>
                <div style="font-size:0.7rem;font-weight:600;color:var(--text-secondary);">Estimated saving</div>
                <div style="font-family:var(--font-serif);font-size:1.2rem;font-weight:700;color:var(--primary-forest);">₹${ai.estimatedSaving.toLocaleString()}</div>
              </div>
              <div style="width:1px;height:32px;background:rgba(16, 185, 129, 0.25);"></div>
              <div>
                <div style="font-size:0.7rem;font-weight:600;color:var(--text-secondary);">Waste avoided</div>
                <div style="font-family:var(--font-serif);font-size:1.2rem;font-weight:700;color:var(--primary-forest);">${ai.estimatedWasteKg} kg</div>
              </div>
            </div>

            <div style="display:flex;align-items:center;gap:0.85rem;">
              <button class="btn-pill-orange" id="applyAiInsightBtn" ${ai.applied ? 'disabled style="opacity:0.85;cursor:default;"' : ''}>
                ${ai.applied ? icons.check(18) : icons.sparkle(18)}
                <span>${ai.applied ? '✓ Recommendation applied' : 'Apply recommendation'}</span>
              </button>
              <button class="btn-pill-outline" id="viewAiPredictionBtn" style="border-color:var(--primary-forest);color:var(--primary-forest);">
                <span>View demand breakdown</span>
                ${icons.chevronRight(16)}
              </button>
            </div>
          </div>

          <!-- Live Activity Feed -->
          <div class="nourish-card" style="background:#FFFFFF;border-radius:var(--radius-lg);padding:1.75rem;box-shadow:var(--shadow-card);">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;">
              <div>
                <h3 style="font-family:var(--font-serif);font-size:1.35rem;font-weight:700;color:var(--text-primary);">Live donation activity</h3>
                <span style="font-size:0.8125rem;color:var(--text-muted);">Real-time dispatch updates</span>
              </div>
              <span class="brand-badge-pill">Live feed</span>
            </div>

            <div style="display:flex;flex-direction:column;gap:0.85rem;">
              ${store.liveActivity.map(act => `
                <div style="display:flex;align-items:center;justify-content:space-between;padding:0.75rem 0.95rem;background:#F9FAF7;border:1px solid #ECEEE8;border-radius:var(--radius-md);">
                  <div style="display:flex;align-items:center;gap:0.75rem;">
                    <span style="width:8px;height:8px;border-radius:50%;background:${act.type === 'success' ? 'var(--mint-primary)' : act.type === 'info' ? '#2563EB' : 'var(--accent-orange)'};"></span>
                    <span style="font-size:0.85rem;font-weight:600;color:var(--text-primary);">${act.title}</span>
                  </div>
                  <span style="font-size:0.72rem;color:var(--text-muted);">${act.time}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- =========================================================
           4. TESTIMONIALS SECTION (Reference Image 2)
           ========================================================= -->
      <section class="testimonials-editorial-section" id="testimonialsSection">
        <!-- Floating Parallax Ingredients -->
        <img src="/decor/star_anise_peppercorns.svg" class="floating-decor-item decor-staranise" data-parallax-speed="-0.12" alt="Star anise spices" />
        <img src="/decor/herbs_fork.svg" class="floating-decor-item decor-herbsfork" data-parallax-speed="0.1" alt="Herbs and vintage fork" />
        <img src="/decor/bok_choy_greens.svg" class="floating-decor-item decor-bokchoy" data-parallax-speed="-0.08" alt="Fresh bok choy" />

        <!-- Left Column: Large Overflowing Bowl (Spaghetti) -->
        <div class="testimonials-bowl-col">
          <div class="testimonials-bowl-wrapper" id="testimonialsBowlWrapper">
            <img src="/images/pasta_bowl.jpg" class="testimonials-bowl-img" alt="Large white ceramic bowl with delicious tomato basil spaghetti" />
          </div>
        </div>

        <!-- Right Column: Text & 3 Avatar Buttons -->
        <div class="testimonials-text-col">
          <h2 class="section-serif-heading" style="text-align:left;">Let’s see what other says</h2>
          <p class="section-small-subtitle" style="text-align:left;margin-bottom:1.5rem;">Please serve yourself without any hesitate</p>

          <div class="quote-serif-mark">“</div>
          <p class="quote-body-text" id="activeTestimonialQuote">
            ${currentTestimonial.quote.replace(/^“|”$/g, '')}
          </p>

          <div class="quote-author-name" id="activeTestimonialAuthor">${currentTestimonial.author}</div>
          <div class="quote-author-role" id="activeTestimonialRole">${currentTestimonial.role}</div>

          <!-- 3 Circular Avatar Buttons -->
          <div class="testimonials-avatars-row" id="testimonialsAvatarRow">
            ${testimonials.map((t, idx) => `
              <button 
                class="avatar-selector-btn ${idx === activeTestimonialIdx ? 'active' : ''}" 
                data-idx="${idx}" 
                title="${t.author}"
                aria-label="View testimonial from ${t.author}"
              >
                <img src="${t.avatar}" alt="${t.author}" />
              </button>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- =========================================================
           5. NEWSLETTER SECTION (Pill Input)
           ========================================================= -->
      <section class="newsletter-editorial-section" id="newsletterSection">
        <h2 class="section-serif-heading">Stay Connected with NourishAI</h2>
        <p class="section-small-subtitle">
          Receive weekly predictive meal intelligence, chef leftovers recipes, and community rescue reports.
        </p>

        <form class="newsletter-pill-form" id="newsletterForm" onsubmit="event.preventDefault();">
          <input 
            type="email" 
            class="newsletter-email-input" 
            id="newsletterEmailInput" 
            placeholder="Enter your email address..." 
            required 
          />
          <button type="submit" class="newsletter-subscribe-btn" id="newsletterSubmitBtn">
            Subscribe
          </button>
        </form>
      </section>

      <!-- =========================================================
           6. FOOTER (3 Link Columns + Decor)
           ========================================================= -->
      <footer class="editorial-footer-section">
        <div class="footer-columns-grid">
          <!-- Column 1 -->
          <div>
            <div class="footer-col-header">NourishAI</div>
            <ul class="footer-links-list">
              <li class="footer-link-item"><a href="#overview">Culinary Platform</a></li>
              <li class="footer-link-item"><a href="#prediction">Demand Intelligence</a></li>
              <li class="footer-link-item"><a href="#surplus">Surplus Food Rescue</a></li>
              <li class="footer-link-item"><a href="#reports">Zero-Waste Certification</a></li>
            </ul>
          </div>

          <!-- Column 2 -->
          <div>
            <div class="footer-col-header">Ecosystem</div>
            <ul class="footer-links-list">
              <li class="footer-link-item"><a href="#matches">Verified NGOs</a></li>
              <li class="footer-link-item"><a href="#routes">Active Pickup Routes</a></li>
              <li class="footer-link-item"><a href="#matches">Community Kitchens</a></li>
              <li class="footer-link-item"><a href="#reports">ESG Sustainability Reports</a></li>
            </ul>
          </div>

          <!-- Column 3 -->
          <div>
            <div class="footer-col-header">Safety & Standards</div>
            <ul class="footer-links-list">
              <li class="footer-link-item"><a href="#settings">FSSAI Compliance</a></li>
              <li class="footer-link-item"><a href="#settings">Temperature Protocols</a></li>
              <li class="footer-link-item"><a href="#settings">Terms of Service</a></li>
              <li class="footer-link-item"><a href="#settings">Privacy Policy</a></li>
            </ul>
          </div>

          <!-- Column 4: Decorative Ingredient Cutout -->
          <div class="footer-decor-col">
            <img src="/decor/spices_spoons.svg" class="footer-decor-img" alt="Aromatic culinary spices" />
          </div>
        </div>

        <div class="footer-bottom-bar">
          <div>© 2026 NourishAI. Crafted for human-centered food rescue & culinary excellence.</div>
          <div style="display:flex;align-items:center;gap:1.5rem;">
            <span>Green Leaf Cafeteria</span>
            <span>•</span>
            <span style="color:var(--mint-dark);font-weight:700;">Zero-Landfill Diverted</span>
          </div>
        </div>
      </footer>
    </div>
  `;
}
