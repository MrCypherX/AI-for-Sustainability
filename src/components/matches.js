// Nearby Matches Page Component
import { icons } from '../icons.js';
import { store } from '../data.js';

export function renderMatches(selectedOrgId = 'org-1', currentFilter = {}) {
  const orgs = store.organizations;
  const bestMatch = orgs.find(o => o.isBestMatch) || orgs[0];
  const selectedOrg = orgs.find(o => o.id === selectedOrgId) || bestMatch;

  return `
    <div class="page-container" id="matchesPage">
      <!-- Header -->
      <div class="page-header-row">
        <div>
          <h1 class="page-title">Find the best match</h1>
          <p class="page-subtitle">Connect surplus food with people who need it.</p>
        </div>

        <div class="header-controls">
          <div style="font-size:0.875rem;font-weight:600;color:var(--primary-forest);background:var(--mint-subtle);padding:0.4rem 0.85rem;border-radius:var(--radius-full);border:1px solid var(--mint-border);">
            Matching for: <strong>Vegetable rice (35 meals)</strong>
          </div>
        </div>
      </div>

      <!-- Filters Bar -->
      <div class="nourish-card" style="padding:1rem 1.25rem;margin-bottom:1.5rem;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;">
          <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
            <div style="display:flex;align-items:center;gap:0.4rem;font-size:0.8125rem;font-weight:700;color:var(--primary-forest);">
              ${icons.filter(16)}
              <span>Filters:</span>
            </div>

            <select id="filterDistance" style="font-size:0.8125rem;padding:0.35rem 0.65rem;">
              <option value="5">Within 5 km</option>
              <option value="2">Within 2 km</option>
              <option value="10">Within 10 km</option>
            </select>

            <select id="filterFoodType" style="font-size:0.8125rem;padding:0.35rem 0.65rem;">
              <option value="all">Food: Vegetarian</option>
              <option value="any">Food: Any Type</option>
            </select>

            <select id="filterQuantity" style="font-size:0.8125rem;padding:0.35rem 0.65rem;">
              <option value="30-50">Quantity: 30–50 meals</option>
              <option value="all">Quantity: Any</option>
            </select>

            <select id="filterUrgency" style="font-size:0.8125rem;padding:0.35rem 0.65rem;">
              <option value="all">Urgency: All Levels</option>
              <option value="critical">Critical / Urgent only</option>
            </select>

            <select id="filterOrgType" style="font-size:0.8125rem;padding:0.35rem 0.65rem;">
              <option value="all">Type: All Organizations</option>
              <option value="kitchen">Community Kitchen</option>
              <option value="shelter">Homeless Shelter</option>
              <option value="children">Children Welfare</option>
            </select>
          </div>

          <span style="font-size:0.8125rem;color:var(--text-muted);">
            4 verified organizations nearby
          </span>
        </div>
      </div>

      <!-- Split Layout: Interactive Map (Left) & Recommended List (Right) -->
      <div class="matches-split-layout">
        <!-- Interactive Vector Map (Left) -->
        <div class="nourish-card interactive-map-card">
          <div class="map-header">
            <div>
              <div style="font-weight:700;font-size:0.95rem;color:var(--text-primary);">Metro Area Food Rescue Dispatch Map</div>
              <div style="font-size:0.75rem;color:var(--text-muted)">Live positioning of surplus hubs, verified NGOs & EV volunteers</div>
            </div>
            <span class="brand-badge" style="background:var(--mint-subtle);color:var(--mint-dark)">Live GPS</span>
          </div>

          <div class="map-viewport" id="mapViewport">
            <!-- Stylized SVG Map -->
            <svg class="map-svg-background" viewBox="0 0 600 500" preserveAspectRatio="xMidYMid slice" id="interactiveMapSvg">
              <defs>
                <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#D6E4FF"/>
                  <stop offset="100%" stop-color="#BFD7FE"/>
                </linearGradient>
                <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="3" stdDeviation="4" flood-opacity="0.25"/>
                </filter>
              </defs>

              <!-- Base Background Map Canvas -->
              <rect width="600" height="500" fill="#EBF0E6"/>

              <!-- Parks and Green Zones -->
              <path d="M40 40 Q 120 20 180 80 T 120 190 Q 60 180 40 120 Z" fill="#D5E8D4" opacity="0.8"/>
              <path d="M420 310 Q 520 280 560 360 T 480 460 Q 400 450 420 310 Z" fill="#D5E8D4" opacity="0.8"/>
              <circle cx="340" cy="120" r="45" fill="#D5E8D4" opacity="0.7"/>

              <!-- Water Canal -->
              <path d="M -20 260 Q 140 240 280 290 T 620 270" fill="none" stroke="url(#waterGrad)" stroke-width="26" stroke-linecap="round"/>

              <!-- Road Network Grid -->
              <!-- Main Arterials -->
              <path d="M 0 150 H 600" stroke="#FFFFFF" stroke-width="8"/>
              <path d="M 0 380 H 600" stroke="#FFFFFF" stroke-width="8"/>
              <path d="M 180 0 V 500" stroke="#FFFFFF" stroke-width="8"/>
              <path d="M 420 0 V 500" stroke="#FFFFFF" stroke-width="8"/>

              <!-- Secondary Streets -->
              <path d="M 0 70 H 600" stroke="#FFFFFF" stroke-width="4"/>
              <path d="M 0 230 H 600" stroke="#FFFFFF" stroke-width="4"/>
              <path d="M 0 440 H 600" stroke="#FFFFFF" stroke-width="4"/>
              <path d="M 90 0 V 500" stroke="#FFFFFF" stroke-width="4"/>
              <path d="M 300 0 V 500" stroke="#FFFFFF" stroke-width="5"/>
              <path d="M 510 0 V 500" stroke="#FFFFFF" stroke-width="4"/>

              <!-- Active Route Path Line between Cafeteria and Hope Community Kitchen -->
              <path 
                id="activeRoutePath"
                d="M 280 230 L 280 150 L 370 150 L 370 190" 
                fill="none" 
                stroke="#10B981" 
                stroke-width="5" 
                stroke-dasharray="8 4" 
                stroke-linecap="round"
              />

              <!-- MAP MARKERS -->

              <!-- 1. ORANGE MARKER: Surplus Food (Green Leaf Cafeteria) -->
              <g class="map-marker-group" data-marker="surplus" style="cursor:pointer;" transform="translate(280, 230)">
                <circle cx="0" cy="0" r="18" fill="#F97316" fill-opacity="0.25"/>
                <circle cx="0" cy="0" r="11" fill="#F97316" stroke="#FFFFFF" stroke-width="2.5" filter="url(#shadowFilter)"/>
                <text x="0" y="3.5" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">★</text>
                <!-- Tooltip Label -->
                <rect x="-65" y="-34" width="130" height="22" rx="6" fill="#153E2B" opacity="0.95"/>
                <text x="0" y="-19" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Green Leaf (Surplus)</text>
              </g>

              <!-- 2. GREEN MARKER: Best Match (Hope Community Kitchen) -->
              <g class="map-marker-group" data-org-id="org-1" style="cursor:pointer;" transform="translate(370, 190)">
                <circle cx="0" cy="0" r="22" fill="#10B981" fill-opacity="0.3">
                  <animate attributeName="r" values="16;24;16" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="0" cy="0" r="12" fill="#10B981" stroke="#FFFFFF" stroke-width="2.5" filter="url(#shadowFilter)"/>
                <text x="0" y="3.5" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">✓</text>
                <!-- Tooltip -->
                <rect x="-70" y="-36" width="140" height="22" rx="6" fill="#10B981" opacity="0.95"/>
                <text x="0" y="-21" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Hope Kitchen (96% Match)</text>
              </g>

              <!-- 3. GREEN MARKER: CareBridge Shelter -->
              <g class="map-marker-group" data-org-id="org-2" style="cursor:pointer;" transform="translate(450, 280)">
                <circle cx="0" cy="0" r="11" fill="#10B981" stroke="#FFFFFF" stroke-width="2.5" filter="url(#shadowFilter)"/>
                <rect x="-60" y="-32" width="120" height="20" rx="4" fill="#153E2B" opacity="0.85"/>
                <text x="0" y="-18" font-size="9.5" font-weight="600" fill="#FFFFFF" text-anchor="middle">CareBridge (2.6 km)</text>
              </g>

              <!-- 4. RED MARKER: Urgent Deadline (Sunshine Children's Home) -->
              <g class="map-marker-group" data-org-id="org-3" style="cursor:pointer;" transform="translate(160, 360)">
                <circle cx="0" cy="0" r="20" fill="#EF4444" fill-opacity="0.35">
                  <animate attributeName="r" values="14;22;14" dur="1.4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="0" cy="0" r="12" fill="#EF4444" stroke="#FFFFFF" stroke-width="2.5" filter="url(#shadowFilter)"/>
                <text x="0" y="3.5" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">!</text>
                <rect x="-75" y="-36" width="150" height="22" rx="5" fill="#EF4444" opacity="0.95"/>
                <text x="0" y="-21" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">URGENT: Sunshine Home</text>
              </g>

              <!-- 5. GREEN MARKER: Robin Hood Army -->
              <g class="map-marker-group" data-org-id="org-4" style="cursor:pointer;" transform="translate(120, 110)">
                <circle cx="0" cy="0" r="11" fill="#10B981" stroke="#FFFFFF" stroke-width="2.5" filter="url(#shadowFilter)"/>
                <rect x="-55" y="-32" width="110" height="20" rx="4" fill="#153E2B" opacity="0.85"/>
                <text x="0" y="-18" font-size="9.5" font-weight="600" fill="#FFFFFF" text-anchor="middle">Robin Hood (4.0 km)</text>
              </g>

              <!-- 6. BLUE MARKER: Volunteer Ravi Kumar (EV Bike) -->
              <g class="map-marker-group" data-marker="volunteer" style="cursor:pointer;" transform="translate(320, 150)">
                <circle cx="0" cy="0" r="15" fill="#2563EB" fill-opacity="0.3"/>
                <circle cx="0" cy="0" r="9" fill="#2563EB" stroke="#FFFFFF" stroke-width="2" filter="url(#shadowFilter)"/>
                <rect x="-50" y="-28" width="100" height="18" rx="4" fill="#2563EB" opacity="0.95"/>
                <text x="0" y="-15" font-size="8.5" font-weight="700" fill="#FFFFFF" text-anchor="middle">Ravi (Volunteer)</text>
              </g>
            </svg>

            <!-- Map Floating Controls -->
            <div class="map-controls-floating">
              <button class="map-zoom-btn" id="mapZoomInBtn" title="Zoom in">+</button>
              <button class="map-zoom-btn" id="mapZoomOutBtn" title="Zoom out">−</button>
              <button class="map-zoom-btn" id="mapRecenterBtn" title="Recenter">⌖</button>
            </div>
          </div>

          <!-- Map Legend Bar -->
          <div class="map-legend-bar">
            <div style="display:flex;align-items:center;gap:0.35rem;">
              <span class="legend-marker-dot" style="background:#F97316;"></span>
              <span>Surplus Food</span>
            </div>
            <div style="display:flex;align-items:center;gap:0.35rem;">
              <span class="legend-marker-dot" style="background:#10B981;"></span>
              <span>NGOs & Shelters</span>
            </div>
            <div style="display:flex;align-items:center;gap:0.35rem;">
              <span class="legend-marker-dot" style="background:#2563EB;"></span>
              <span>Active Volunteer</span>
            </div>
            <div style="display:flex;align-items:center;gap:0.35rem;">
              <span class="legend-marker-dot" style="background:#EF4444;"></span>
              <span>Urgent Deadline</span>
            </div>
          </div>
        </div>

        <!-- Right Side: Recommended NGOs List -->
        <div>
          <!-- Highlighted AI Best Match Card -->
          <div class="best-match-card">
            <div class="best-match-header">
              <span class="ai-badge" style="background:var(--mint-subtle);color:var(--mint-dark);margin-bottom:0;">
                ${icons.ai(14)}
                <span>BEST MATCH FOUND</span>
              </span>

              <div class="compat-score-badge">
                ${icons.star(14)}
                <span>${bestMatch.matchScore}% match</span>
              </div>
            </div>

            <div>
              <h2 class="org-card-title">${bestMatch.name}</h2>
              <span class="org-type-tag">${bestMatch.type} • ${bestMatch.address}</span>
            </div>

            <div class="match-details-grid">
              <div class="match-metric-box">
                <div class="match-metric-lbl">Distance</div>
                <div class="match-metric-val">${bestMatch.distanceKm} km</div>
              </div>
              <div class="match-metric-box">
                <div class="match-metric-lbl">Can accept</div>
                <div class="match-metric-val" style="color:var(--mint-dark);">${bestMatch.canAcceptMeals} meals</div>
              </div>
              <div class="match-metric-box">
                <div class="match-metric-lbl">Pickup deadline</div>
                <div class="match-metric-val" style="color:var(--coral-urgent);">${bestMatch.pickupDeadline}</div>
              </div>
              <div class="match-metric-box">
                <div class="match-metric-lbl">Travel time</div>
                <div class="match-metric-val">${bestMatch.travelTimeMin} minutes</div>
              </div>
              <div class="match-metric-box">
                <div class="match-metric-lbl">Preference</div>
                <div class="match-metric-val">${bestMatch.foodPreference}</div>
              </div>
              <div class="match-metric-box">
                <div class="match-metric-lbl">Current need</div>
                <div class="match-metric-val" style="color:var(--orange-primary);">${bestMatch.currentNeed}</div>
              </div>
            </div>

            <div style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:1.25rem;">
              <strong>Beneficiaries:</strong> ${bestMatch.beneficiaries}
            </div>

            <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
              <button class="btn-forest" id="acceptBestMatchBtn" data-org-id="${bestMatch.id}">
                ${icons.check(18)}
                <span>Accept match</span>
              </button>
              <button class="btn-outline view-org-btn" data-org-id="${bestMatch.id}">
                <span>View organization</span>
              </button>
              <button class="btn-outline see-route-btn" data-org-id="${bestMatch.id}">
                ${icons.routes(16)}
                <span>See route</span>
              </button>
            </div>
          </div>

          <!-- Other Nearby Organizations List -->
          <div class="matches-list-scroll">
            <h3 style="font-size:0.9375rem;font-weight:700;color:var(--text-secondary);margin-bottom:0.25rem;">
              Other Verified Organizations Nearby
            </h3>

            ${orgs.filter(o => !o.isBestMatch).map(org => `
              <div class="nourish-card card-lift" style="padding:1.15rem;cursor:pointer;" data-org-id="${org.id}">
                <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:0.5rem;">
                  <div>
                    <h4 style="font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:var(--primary-forest);">
                      ${org.name}
                    </h4>
                    <span style="font-size:0.78rem;color:var(--text-muted);">${org.type} • ${org.distanceKm} km away (${org.travelTimeMin} min)</span>
                  </div>

                  <div style="display:flex;align-items:center;gap:0.5rem;">
                    ${org.urgency === 'urgent' ? `
                      <span class="status-badge badge-urgent">${icons.clock(12)} ${org.deadlineCountdown || 'Urgent'}</span>
                    ` : ''}
                    <span class="brand-badge" style="background:var(--mint-subtle);color:var(--mint-dark);">${org.matchScore}%</span>
                  </div>
                </div>

                <div style="display:flex;gap:1.25rem;font-size:0.8125rem;color:var(--text-secondary);margin:0.75rem 0;">
                  <span>Capacity: <strong>${org.canAcceptMeals} meals</strong></span>
                  <span>•</span>
                  <span>Preference: <strong>${org.foodPreference}</strong></span>
                  <span>•</span>
                  <span>Need: <strong style="color:${org.currentNeed === 'Critical' ? 'var(--coral-urgent)' : 'var(--orange-primary)'}">${org.currentNeed}</strong></span>
                </div>

                <div style="display:flex;align-items:center;justify-content:space-between;padding-top:0.75rem;border-top:1px solid var(--border-light);">
                  <span style="font-size:0.75rem;color:var(--text-muted);">FSSAI Verified • Rating ★ ${org.rating}</span>
                  <div style="display:flex;gap:0.5rem;">
                    <button class="btn-outline view-org-btn" style="padding:0.35rem 0.75rem;font-size:0.75rem;" data-org-id="${org.id}">
                      Details
                    </button>
                    <button class="btn-forest match-sub-accept-btn" style="padding:0.35rem 0.85rem;font-size:0.75rem;" data-org-id="${org.id}">
                      Match
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}
