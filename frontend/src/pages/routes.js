// Pickup Routes Page Component
import { icons } from '../icons.js';
import { store } from '../data/store.js';

export function renderRoutes() {
  const route = store.activeRoute;
  const currentStep = route.currentStep; // 1 to 4

  // Stepper state calculations
  const steps = [
    { num: 1, label: "Created", time: "1:45 PM" },
    { num: 2, label: "Volunteer assigned", time: "2:05 PM" },
    { num: 3, label: "Picked up", time: currentStep >= 3 ? "2:20 PM" : "Pending" },
    { num: 4, label: "Delivered", time: currentStep === 4 ? "2:35 PM" : "Est. 2:35 PM" }
  ];

  const progressPercent = ((currentStep - 1) / 3) * 100;

  return `
    <div class="page-container" id="routesPage">
      <!-- Header -->
      <div class="page-header-row">
        <div>
          <h1 class="page-title">Pickup routes</h1>
          <p class="page-subtitle">Complete every donation on time.</p>
        </div>

        <div class="header-controls">
          <span class="status-badge ${currentStep === 4 ? 'badge-completed' : currentStep === 3 ? 'badge-pickup' : 'badge-matched'}" style="font-size:0.875rem;padding:0.4rem 0.85rem;">
            ${currentStep === 4 ? '✓ Delivered' : currentStep === 3 ? '🚚 In Transit' : '⏱ Volunteer En Route'}
          </span>
        </div>
      </div>

      <!-- Main Route Hero Card -->
      <div class="nourish-card route-hero-card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
          <div>
            <span class="brand-badge" style="background:var(--mint-subtle);color:var(--mint-dark);margin-bottom:0.4rem;display:inline-block;">
              Route #RT-104 • Priority Dispatch
            </span>
            <h2 style="font-family:var(--font-display);font-size:1.45rem;font-weight:700;color:var(--primary-forest);">
              ${route.meals} Meals of ${route.listingName}
            </h2>
          </div>

          <div style="display:flex;align-items:center;gap:0.75rem;">
            <button class="btn-outline" id="contactVolunteerBtn">
              ${icons.phone(18)}
              <span>Contact volunteer</span>
            </button>

            <button class="btn-forest" id="navigationRouteBtn">
              ${icons.navigation(18)}
              <span>Turn-by-turn Navigation</span>
            </button>
          </div>
        </div>

        <!-- Route Locations Visual Row -->
        <div class="route-locations-row">
          <!-- Origin -->
          <div class="route-point">
            <div class="route-icon-circle" style="background:var(--orange-subtle);color:var(--orange-primary);">
              ${icons.meal(22)}
            </div>
            <div>
              <div style="font-size:0.75rem;font-weight:700;color:var(--orange-primary);text-transform:uppercase;">
                Pickup 1
              </div>
              <div style="font-family:var(--font-display);font-size:1.15rem;font-weight:700;color:var(--text-primary);">
                ${route.pickupLocation}
              </div>
              <div style="font-size:0.8125rem;color:var(--text-secondary);margin-top:0.15rem;">
                35 meals • Pickup before <strong>${route.pickupDeadline}</strong>
              </div>
              <div style="font-size:0.75rem;color:var(--mint-dark);font-weight:600;margin-top:0.25rem;">
                Status: ${currentStep >= 3 ? '✓ Handed over' : 'Awaiting volunteer'}
              </div>
            </div>
          </div>

          <!-- Middle Connector -->
          <div class="route-connector">
            <span style="font-size:0.8125rem;font-weight:700;color:var(--primary-forest);">
              ${route.distanceKm} km away
            </span>
            <div class="route-line-dashed"></div>
            <span style="font-size:0.75rem;color:var(--text-muted);">
              Est. travel time: ${route.estimatedTimeMin} minutes
            </span>
          </div>

          <!-- Destination -->
          <div class="route-point">
            <div class="route-icon-circle" style="background:var(--mint-subtle);color:var(--mint-dark);">
              ${icons.location(22)}
            </div>
            <div>
              <div style="font-size:0.75rem;font-weight:700;color:var(--mint-dark);text-transform:uppercase;">
                Drop-off
              </div>
              <div style="font-family:var(--font-display);font-size:1.15rem;font-weight:700;color:var(--text-primary);">
                ${route.dropoffLocation}
              </div>
              <div style="font-size:0.8125rem;color:var(--text-secondary);margin-top:0.15rem;">
                Recipient: Community Kitchen Food Bank
              </div>
              <div style="font-size:0.75rem;color:var(--info-blue);font-weight:600;margin-top:0.25rem;">
                Dock: Gate 1 Kitchen Unloading Bay
              </div>
            </div>
          </div>
        </div>

        <!-- Route Status Stepper: Created → Volunteer assigned → Picked up → Delivered -->
        <div style="margin: 2.25rem 0 1.5rem;">
          <div style="font-size:0.875rem;font-weight:700;color:var(--text-primary);margin-bottom:1.25rem;">
            Delivery Progression
          </div>

          <div class="route-stepper-wrap">
            <div class="stepper-progress-bg"></div>
            <div class="stepper-progress-active" style="width: ${progressPercent}%;"></div>

            ${steps.map(s => {
              const isCompleted = s.num < currentStep;
              const isCurrent = s.num === currentStep;
              return `
                <div class="step-node">
                  <div class="step-circle ${isCompleted ? 'completed' : isCurrent ? 'current' : ''}">
                    ${isCompleted ? icons.check(18) : s.num}
                  </div>
                  <div class="step-label" style="${isCurrent ? 'color:var(--primary-forest);font-weight:700;' : ''}">
                    ${s.label}
                  </div>
                  <span style="font-size:0.72rem;color:var(--text-muted);">${s.time}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Interactive Action Buttons to Advance Route Status -->
        <div style="display:flex;align-items:center;justify-content:flex-end;gap:1rem;padding-top:1.25rem;border-top:1px solid var(--border-light);">
          <button 
            class="btn-outline" 
            id="markPickedUpBtn" 
            ${currentStep >= 3 ? 'disabled style="opacity:0.6;cursor:not-allowed;"' : ''}
          >
            ${currentStep >= 3 ? icons.check(16) : icons.clock(16)}
            <span>${currentStep >= 3 ? '✓ Picked up' : 'Mark as picked up'}</span>
          </button>

          <button 
            class="btn-forest" 
            id="markDeliveredBtn" 
            ${currentStep === 4 ? 'disabled style="opacity:0.8;cursor:default;"' : ''}
          >
            ${currentStep === 4 ? icons.check(18) : icons.meal(18)}
            <span>${currentStep === 4 ? '✓ Delivered & Impact Verified' : 'Mark as delivered'}</span>
          </button>
        </div>
      </div>

      <!-- 2-Column: Assigned Volunteer Card & Route Map Details -->
      <div class="dashboard-grid-2col">
        <!-- Assigned Volunteer Card -->
        <div class="nourish-card">
          <div class="chart-card-header">
            <div>
              <h3 class="chart-card-title">Assigned Volunteer</h3>
              <span style="font-size:0.8125rem;color:var(--text-muted)">Verified eco-courier for zero-emission transit</span>
            </div>
            <span class="brand-badge" style="background:var(--mint-subtle);color:var(--mint-dark);">Verified</span>
          </div>

          <div class="volunteer-card">
            <div style="display:flex;align-items:center;gap:1rem;">
              <div class="user-avatar" style="width:52px;height:52px;font-size:1.1rem;background:linear-gradient(135deg, #2563EB, #1D4ED8);">
                ${route.volunteer.avatar}
              </div>
              <div>
                <div style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--text-primary);">
                  ${route.volunteer.name}
                </div>
                <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.8125rem;color:var(--text-secondary);margin-top:0.2rem;">
                  <span style="display:flex;align-items:center;color:#F59E0B;">${icons.star(14)}</span>
                  <strong>${route.volunteer.rating}</strong>
                  <span>•</span>
                  <span>${route.volunteer.totalPickups} rescues completed</span>
                </div>
              </div>
            </div>

            <button class="icon-btn" id="callVolunteerMiniBtn" title="Call volunteer" style="background:var(--mint-subtle);color:var(--mint-dark);border-color:var(--mint-border);">
              ${icons.phone(20)}
            </button>
          </div>

          <div style="background:var(--bg-surface-alt);padding:1rem;border-radius:var(--radius-md);border:1px solid var(--border-light);font-size:0.8125rem;display:flex;flex-direction:column;gap:0.5rem;">
            <div style="display:flex;justify-content:space-between;">
              <span style="color:var(--text-muted);">Vehicle Type:</span>
              <strong>${route.volunteer.vehicle}</strong>
            </div>
            <div style="display:flex;justify-content:space-between;">
              <span style="color:var(--text-muted);">Current Status:</span>
              <strong style="color:var(--mint-dark);">${route.volunteer.currentStatus}</strong>
            </div>
            <div style="display:flex;justify-content:space-between;">
              <span style="color:var(--text-muted);">Direct Contact:</span>
              <strong>${route.volunteer.phone}</strong>
            </div>
          </div>
        </div>

        <!-- Route Guidance & Waypoints -->
        <div class="nourish-card">
          <div class="chart-card-header">
            <div>
              <h3 class="chart-card-title">Live Route Waypoints</h3>
              <span style="font-size:0.8125rem;color:var(--text-muted)">Optimized traffic navigation (9 min route)</span>
            </div>
            <span style="font-size:0.8125rem;font-weight:700;color:var(--mint-dark);">Zero Emissions</span>
          </div>

          <div style="display:flex;flex-direction:column;gap:0.85rem;margin-top:0.5rem;">
            <div style="display:flex;align-items:flex-start;gap:0.85rem;padding:0.75rem;background:var(--bg-surface-alt);border-radius:var(--radius-sm);">
              <span style="color:var(--mint-dark);margin-top:2px;">${icons.check(16)}</span>
              <div>
                <strong style="font-size:0.85rem;">Pickup: Green Leaf Cafeteria</strong>
                <p style="font-size:0.78rem;color:var(--text-secondary);margin-top:2px;">Rear Service Dock 2, Staff parking lot</p>
              </div>
            </div>

            <div style="display:flex;align-items:flex-start;gap:0.85rem;padding:0.75rem;background:var(--bg-surface-alt);border-radius:var(--radius-sm);">
              <span style="color:var(--info-blue);margin-top:2px;">${icons.navigation(16)}</span>
              <div>
                <strong style="font-size:0.85rem;">En route via Ring Road Flyover</strong>
                <p style="font-size:0.78rem;color:var(--text-secondary);margin-top:2px;">Light traffic, continuous thermal monitoring active (>65°C)</p>
              </div>
            </div>

            <div style="display:flex;align-items:flex-start;gap:0.85rem;padding:0.75rem;background:var(--bg-surface-alt);border-radius:var(--radius-sm);">
              <span style="color:var(--text-muted);margin-top:2px;">${icons.location(16)}</span>
              <div>
                <strong style="font-size:0.85rem;">Drop-off: Hope Community Kitchen</strong>
                <p style="font-size:0.78rem;color:var(--text-secondary);margin-top:2px;">Gate 1 Kitchen Loading Bay, Sector 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
