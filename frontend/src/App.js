// NourishLoop Main Application Orchestrator & Interactions
import { store } from './data/store.js';
import { renderHeader } from './components/header.js';
import { renderOverview } from './pages/overview.js';
import { renderPrediction } from './pages/prediction.js';
import { renderSurplus } from './pages/surplus.js';
import { renderMatches } from './pages/matches.js';
import { renderRoutes } from './pages/routes.js';
import { renderReports } from './pages/reports.js';
import { renderSettings } from './pages/settings.js';
import { listingModal } from './components/listingModal.js';
import { notificationsDrawer } from './components/notificationsDrawer.js';
import { aiAssistant } from './components/aiAssistant.js';
import { toast } from './components/toast.js';
import { showHelpModal, showOrgDetailsModal, showVolunteerContactModal } from './components/modals.js';

export class NourishApp {
  constructor() {
    this.activePage = this.getInitialPage();
    this.activeMenuTab = 'main';
    this.activeTestimonialIdx = 1;
    this.currentTimeframe = 'week';
    this.surplusFilter = 'all';
    this.selectedMatchOrg = 'org-1';
    this.simulatedAttendance = 420;

    this.init();
  }

  getInitialPage() {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['overview', 'prediction', 'surplus', 'matches', 'routes', 'reports', 'settings'];
    return validPages.includes(hash) ? hash : 'overview';
  }

  init() {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    appEl.innerHTML = `
      <div id="headerContainer"></div>
      <main id="pageContent" class="editorial-main-content" role="main"></main>
    `;

    this.renderLayout();
    this.attachGlobalEvents();
    this.initParallax();

    // Subscribe to store changes
    store.subscribe(() => {
      this.renderCurrentPage();
      this.renderHeaderBar();
    });

    // Hash routing
    window.addEventListener('hashchange', () => {
      const newPage = this.getInitialPage();
      if (newPage !== this.activePage) {
        this.activePage = newPage;
        this.renderCurrentPage();
        this.renderHeaderBar();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  renderLayout() {
    this.renderHeaderBar();
    this.renderCurrentPage();
  }

  renderHeaderBar() {
    const headerEl = document.getElementById('headerContainer');
    if (headerEl) {
      headerEl.innerHTML = renderHeader(this.activePage);
      this.attachHeaderEvents();
    }
  }

  renderCurrentPage() {
    const contentEl = document.getElementById('pageContent');
    if (!contentEl) return;

    switch (this.activePage) {
      case 'overview':
        contentEl.innerHTML = renderOverview({
          activeMenuTab: this.activeMenuTab,
          activeTestimonialIdx: this.activeTestimonialIdx,
          timeframe: this.currentTimeframe
        });
        this.attachOverviewEvents();
        break;
      case 'prediction':
        contentEl.innerHTML = renderPrediction(this.simulatedAttendance);
        this.attachPredictionEvents();
        break;
      case 'surplus':
        contentEl.innerHTML = renderSurplus(this.surplusFilter);
        this.attachSurplusEvents();
        break;
      case 'matches':
        contentEl.innerHTML = renderMatches(this.selectedMatchOrg);
        this.attachMatchesEvents();
        break;
      case 'routes':
        contentEl.innerHTML = renderRoutes();
        this.attachRoutesEvents();
        break;
      case 'reports':
        contentEl.innerHTML = renderReports();
        this.attachReportsEvents();
        break;
      case 'settings':
        contentEl.innerHTML = renderSettings();
        this.attachSettingsEvents();
        break;
      default:
        contentEl.innerHTML = renderOverview();
        this.attachOverviewEvents();
    }
  }

  initParallax() {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset || document.documentElement.scrollTop;
          const decorItems = document.querySelectorAll('.floating-decor-item[data-parallax-speed]');

          decorItems.forEach(item => {
            const speed = parseFloat(item.getAttribute('data-parallax-speed')) || 0.1;
            const yOffset = scrollY * speed;
            item.style.transform = `translateY(${yOffset}px)`;
          });

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  attachGlobalEvents() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        notificationsDrawer.close();
        listingModal.close();
        const help = document.getElementById('helpModalWrap');
        if (help) help.remove();
        const org = document.getElementById('orgModalWrap');
        if (org) org.remove();
        const vol = document.getElementById('volunteerModalWrap');
        if (vol) vol.remove();
      }
    });
  }

  attachHeaderEvents() {
    const listBtn = document.getElementById('headerListSurplusBtn');
    if (listBtn) listBtn.onclick = () => listingModal.open();

    const bellBtn = document.getElementById('notificationsTrigger');
    if (bellBtn) bellBtn.onclick = () => notificationsDrawer.toggle();

    const helpBtn = document.getElementById('helpModalTrigger');
    if (helpBtn) helpBtn.onclick = () => showHelpModal();

    const userChip = document.getElementById('userProfileChip');
    if (userChip) {
      userChip.onclick = () => {
        window.location.hash = '#settings';
      };
    }

    const roleSelector = document.getElementById('roleSelectorDropdown');
    if (roleSelector) {
      roleSelector.onchange = (e) => {
        const selectedRole = e.target.value;
        store.setRole(selectedRole);
        toast.show(`Active Role switched to: ${store.user.roleTitle} (${store.user.organization})`, 'info', 3500);
      };
    }
  }

  attachOverviewEvents() {
    // 1. Hero Buttons
    const exploreBtn = document.getElementById('heroExploreBtn');
    if (exploreBtn) {
      exploreBtn.onclick = () => {
        const menuSec = document.getElementById('menuPlatesSection');
        if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth' });
      };
    }

    const heroListBtn = document.getElementById('heroListSurplusBtn');
    if (heroListBtn) {
      heroListBtn.onclick = () => listingModal.open();
    }

    // 2. "What's on our Plate" 3-Tab Switcher with Cross-fade
    const tabBtns = document.querySelectorAll('#menuTabsSwitcher .tab-switcher-btn');
    const platesContainer = document.getElementById('staggeredPlatesContainer');

    tabBtns.forEach(btn => {
      btn.onclick = () => {
        const tab = btn.getAttribute('data-tab');
        if (tab && tab !== this.activeMenuTab) {
          this.activeMenuTab = tab;

          // Cross-fade animation
          if (platesContainer) {
            platesContainer.classList.add('fade-out');
            setTimeout(() => {
              this.renderCurrentPage();
              const updatedPlates = document.getElementById('staggeredPlatesContainer');
              if (updatedPlates) {
                updatedPlates.classList.add('fade-in');
                setTimeout(() => updatedPlates.classList.remove('fade-in'), 300);
              }
            }, 200);
          } else {
            this.renderCurrentPage();
          }
        }
      };
    });

    // 3. Testimonials 3 Avatar Switcher
    const avatarBtns = document.querySelectorAll('#testimonialsAvatarRow .avatar-selector-btn');
    const quoteEl = document.getElementById('activeTestimonialQuote');

    avatarBtns.forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        if (!isNaN(idx) && idx !== this.activeTestimonialIdx) {
          this.activeTestimonialIdx = idx;

          if (quoteEl) {
            quoteEl.style.opacity = '0';
            setTimeout(() => {
              this.renderCurrentPage();
            }, 180);
          } else {
            this.renderCurrentPage();
          }
        }
      };
    });

    // 4. Newsletter Pill Form Submit
    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('newsletterEmailInput');

    if (newsletterForm) {
      newsletterForm.onsubmit = (e) => {
        e.preventDefault();
        const email = emailInput ? emailInput.value.trim() : '';
        if (email) {
          toast.show(`✓ Subscribed ${email} to NourishLoop Weekly Culinary & Impact Digest!`, 'success');
          if (emailInput) emailInput.value = '';
        }
      };
    }

    // 5. Dashboard AI Recommendation & Timeframe buttons
    const applyAiBtn = document.getElementById('applyAiInsightBtn');
    if (applyAiBtn) {
      applyAiBtn.onclick = () => {
        store.applyAiRecommendation();
        toast.show("✓ Applied AI recommendation: 30 fewer meals scheduled for tomorrow!", "success", 4000);
      };
    }

    const viewAiBtn = document.getElementById('viewAiPredictionBtn');
    if (viewAiBtn) {
      viewAiBtn.onclick = () => {
        window.location.hash = '#prediction';
      };
    }

    const timeframeBtns = document.querySelectorAll('.dashboard-embedded-container .timeframe-btn');
    timeframeBtns.forEach(btn => {
      btn.onclick = () => {
        timeframeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        toast.show("Updated impact metrics range", "info", 2000);
      };
    });
  }

  attachPredictionEvents() {
    const simSlider = document.getElementById('simAttendanceSlider');
    const simDisplay = document.getElementById('simAttendanceDisplay');
    const simRecommended = document.getElementById('simRecommendedVal');
    const simWaste = document.getElementById('simWasteVal');
    const simMoney = document.getElementById('simMoneyVal');
    const attendanceInput = document.getElementById('predAttendanceInput');
    const predRecommendedCount = document.getElementById('predRecommendedCount');

    const updateSimulation = (val) => {
      const attendance = Number(val);
      this.simulatedAttendance = attendance;
      const recommended = Math.round(attendance * 0.928);
      const possibleSurplus = attendance - recommended;
      const wasteSavedKg = Math.round(possibleSurplus * 0.3);
      const moneySaved = Math.round(possibleSurplus * 80);

      if (simDisplay) simDisplay.textContent = `${attendance} people`;
      if (simRecommended) simRecommended.textContent = `${recommended}`;
      if (simWaste) simWaste.textContent = `${wasteSavedKg} kg`;
      if (simMoney) simMoney.textContent = `₹${moneySaved.toLocaleString()}`;
      if (attendanceInput) attendanceInput.value = attendance;
      if (predRecommendedCount) predRecommendedCount.textContent = `${recommended}`;
    };

    if (simSlider) {
      simSlider.oninput = (e) => updateSimulation(e.target.value);
    }
    if (attendanceInput) {
      attendanceInput.onchange = (e) => {
        let val = Number(e.target.value) || 420;
        val = Math.max(100, Math.min(1000, val));
        if (simSlider) simSlider.value = Math.max(200, Math.min(600, val));
        updateSimulation(val);
      };
    }

    const acceptBtn = document.getElementById('predAcceptBtn');
    if (acceptBtn) {
      acceptBtn.onclick = () => {
        store.applyAiRecommendation();
        toast.show("✓ Accepted AI recommendation: 390 meals scheduled for tomorrow!", "success");
      };
    }

    const manualBtn = document.getElementById('predManualAdjustBtn');
    if (manualBtn) {
      manualBtn.onclick = () => {
        const custom = prompt("Enter target meal preparation quantity:", "390");
        if (custom && !isNaN(custom)) {
          toast.show(`Updated meal prep target to ${custom} portions.`, "info");
        }
      };
    }
  }

  attachSurplusEvents() {
    const createBtn1 = document.getElementById('createListingPageBtn');
    const createBtn2 = document.getElementById('bannerCreateListingBtn');
    const createBtn3 = document.getElementById('emptyStateCreateBtn');

    if (createBtn1) createBtn1.onclick = () => listingModal.open();
    if (createBtn2) createBtn2.onclick = () => listingModal.open();
    if (createBtn3) createBtn3.onclick = () => listingModal.open();

    const filterTabs = document.querySelectorAll('#surplusFilterTabs .timeframe-btn');
    filterTabs.forEach(tab => {
      tab.onclick = () => {
        this.surplusFilter = tab.getAttribute('data-status');
        this.renderCurrentPage();
      };
    });

    const matchBtns = document.querySelectorAll('.surplus-match-btn');
    matchBtns.forEach(btn => {
      btn.onclick = () => {
        window.location.hash = '#matches';
      };
    });

    const routeBtns = document.querySelectorAll('.surplus-route-btn');
    routeBtns.forEach(btn => {
      btn.onclick = () => {
        window.location.hash = '#routes';
      };
    });
  }

  attachMatchesEvents() {
    const markers = document.querySelectorAll('.map-marker-group[data-org-id]');
    markers.forEach(m => {
      m.onclick = () => {
        const orgId = m.getAttribute('data-org-id');
        this.selectedMatchOrg = orgId;
        showOrgDetailsModal(orgId);
      };
    });

    const acceptBestBtn = document.getElementById('acceptBestMatchBtn');
    if (acceptBestBtn) {
      acceptBestBtn.onclick = () => {
        const orgId = acceptBestBtn.getAttribute('data-org-id') || 'org-1';
        store.acceptMatch(orgId);
        toast.show("✓ Accepted match with Hope Community Kitchen! Volunteer assigned.", "success");
        window.location.hash = '#routes';
      };
    }

    const subMatchBtns = document.querySelectorAll('.match-sub-accept-btn');
    subMatchBtns.forEach(btn => {
      btn.onclick = () => {
        const orgId = btn.getAttribute('data-org-id');
        store.acceptMatch(orgId);
        toast.show("✓ Match accepted! Routing volunteer to cafeteria.", "success");
        window.location.hash = '#routes';
      };
    });

    const viewOrgBtns = document.querySelectorAll('.view-org-btn');
    viewOrgBtns.forEach(btn => {
      btn.onclick = () => {
        const orgId = btn.getAttribute('data-org-id');
        showOrgDetailsModal(orgId);
      };
    });

    const seeRouteBtns = document.querySelectorAll('.see-route-btn');
    seeRouteBtns.forEach(btn => {
      btn.onclick = () => {
        const path = document.getElementById('activeRoutePath');
        if (path) {
          path.setAttribute('stroke', '#F25C05');
          path.setAttribute('stroke-width', '7');
          toast.show("Route highlighted on map: 1.8 km via Ring Road (9 min)", "info");
          setTimeout(() => {
            path.setAttribute('stroke', '#10B981');
            path.setAttribute('stroke-width', '5');
          }, 3500);
        }
      };
    });
  }

  attachRoutesEvents() {
    const contactBtn = document.getElementById('contactVolunteerBtn');
    const callMiniBtn = document.getElementById('callVolunteerMiniBtn');
    if (contactBtn) contactBtn.onclick = () => showVolunteerContactModal();
    if (callMiniBtn) callMiniBtn.onclick = () => showVolunteerContactModal();

    const pickedUpBtn = document.getElementById('markPickedUpBtn');
    if (pickedUpBtn) {
      pickedUpBtn.onclick = () => {
        store.updateRouteStep(3);
        toast.show("✓ Food handed over to Volunteer Ravi Kumar!", "success");
      };
    }

    const deliveredBtn = document.getElementById('markDeliveredBtn');
    if (deliveredBtn) {
      deliveredBtn.onclick = () => {
        store.updateRouteStep(4);
        toast.show("🎉 Delivery complete! 35 meals verified by Hope Community Kitchen.", "success", 5000);
      };
    }
  }

  attachReportsEvents() {
    const downloadBtn = document.getElementById('downloadReportBtn');
    if (downloadBtn) {
      downloadBtn.onclick = () => {
        window.print();
        toast.show("Generating NourishLoop Monthly Sustainability Audit Report...", "info");
      };
    }

    const shareBtn = document.getElementById('shareReportBtn');
    if (shareBtn) {
      shareBtn.onclick = () => {
        navigator.clipboard?.writeText?.(window.location.href);
        toast.show("✓ Report audit link copied to clipboard!", "success");
      };
    }
  }

  attachSettingsEvents() {
    const saveBtn = document.getElementById('saveSettingsBtn');
    if (saveBtn) {
      saveBtn.onclick = () => {
        store.notify();
        toast.show("✓ Preferences and AI parameters successfully saved!", "success");
      };
    }
  }
}
