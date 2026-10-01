// Impact Reports Page Component
import { icons } from '../icons.js';
import { store } from '../data.js';

export function renderReports() {
  const m = store.metrics;

  return `
    <div class="page-container" id="reportsPage">
      <!-- Header -->
      <div class="page-header-row">
        <div>
          <h1 class="page-title">Impact reports</h1>
          <p class="page-subtitle">See the difference your decisions create.</p>
        </div>

        <div class="header-controls">
          <button class="btn-outline" id="shareReportBtn">
            ${icons.share(18)}
            <span>Share report</span>
          </button>
          <button class="btn-forest" id="downloadReportBtn">
            ${icons.download(18)}
            <span>Download report</span>
          </button>
        </div>
      </div>

      <!-- Polished Report Preview Hero -->
      <div class="report-hero-preview">
        <div>
          <div class="report-cert-badge">
            ${icons.leaf(14)}
            <span>ESG VERIFIED SUSTAINABILITY AUDIT</span>
          </div>
          <h2 style="font-family:var(--font-display);font-size:1.85rem;font-weight:700;letter-spacing:-0.02em;margin-bottom:0.4rem;">
            NourishAI Monthly Sustainability Report
          </h2>
          <p style="font-size:1.05rem;color:#D1FAE5;margin-bottom:1rem;">
            September 2026 • Prepared for <strong>Green Leaf Cafeteria</strong>
          </p>
          <div style="display:flex;align-items:center;gap:1.5rem;font-size:0.8125rem;color:rgba(255,255,255,0.85);">
            <span>Audit Ref: <strong>#NRSH-2026-SEP-GLC</strong></span>
            <span>•</span>
            <span>Verification Hash: <strong>8f2a...9c14</strong></span>
            <span>•</span>
            <span style="color:#A7F3D0;font-weight:700;">Zero-Landfill Diverted</span>
          </div>
        </div>

        <div style="text-align:right;">
          <div style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.06em;color:rgba(255,255,255,0.75);">Overall Rating</div>
          <div style="font-family:var(--font-display);font-size:2.5rem;font-weight:800;color:#34D399;line-height:1;">A+</div>
          <div style="font-size:0.8125rem;color:#D1FAE5;margin-top:0.25rem;">Score: 86/100</div>
        </div>
      </div>

      <!-- 5 Impact Summary Cards -->
      <div class="metrics-grid" style="grid-template-columns: repeat(5, 1fr); margin-bottom: 2rem;">
        <!-- 1. Meals Rescued -->
        <div class="nourish-card metric-card">
          <div class="metric-card-top">
            <span class="metric-title">Meals Rescued</span>
            <div class="metric-icon-box metric-icon-green">${icons.meal(20)}</div>
          </div>
          <div class="metric-value">${m.mealsRescued.toLocaleString()}</div>
          <span style="font-size:0.75rem;color:var(--text-muted);margin-top:0.35rem;">Nutritious servings</span>
        </div>

        <!-- 2. Food Waste Avoided -->
        <div class="nourish-card metric-card">
          <div class="metric-card-top">
            <span class="metric-title">Waste Avoided</span>
            <div class="metric-icon-box metric-icon-forest">${icons.recycle(20)}</div>
          </div>
          <div class="metric-value">${m.wasteAvoidedKg} <span style="font-size:1rem;">kg</span></div>
          <span style="font-size:0.75rem;color:var(--text-muted);margin-top:0.35rem;">Diverted from landfill</span>
        </div>

        <!-- 3. People Supported -->
        <div class="nourish-card metric-card">
          <div class="metric-card-top">
            <span class="metric-title">People Supported</span>
            <div class="metric-icon-box metric-icon-blue">${icons.users(20)}</div>
          </div>
          <div class="metric-value">${m.peopleSupported.toLocaleString()}</div>
          <span style="font-size:0.75rem;color:var(--text-muted);margin-top:0.35rem;">Individuals nourished</span>
        </div>

        <!-- 4. CO2 Avoided -->
        <div class="nourish-card metric-card">
          <div class="metric-card-top">
            <span class="metric-title">CO₂ Avoided</span>
            <div class="metric-icon-box metric-icon-green">${icons.co2(20)}</div>
          </div>
          <div class="metric-value">${m.co2AvoidedKg} <span style="font-size:1rem;">kg</span></div>
          <span style="font-size:0.75rem;color:var(--text-muted);margin-top:0.35rem;">Greenhouse gas saved</span>
        </div>

        <!-- 5. Money Saved -->
        <div class="nourish-card metric-card">
          <div class="metric-card-top">
            <span class="metric-title">Money Saved</span>
            <div class="metric-icon-box metric-icon-orange">${icons.wallet(20)}</div>
          </div>
          <div class="metric-value">₹${(m.moneySaved / 1000).toFixed(1)}k</div>
          <span style="font-size:0.75rem;color:var(--text-muted);margin-top:0.35rem;">Procurement cost saved</span>
        </div>
      </div>

      <!-- Charts Grid (5 Interactive Visualizations) -->
      <div class="report-charts-grid">
        <!-- 1. Monthly Food Waste Reduction -->
        <div class="nourish-card">
          <div class="chart-card-header">
            <div>
              <h3 class="chart-card-title">Monthly food waste reduction</h3>
              <span style="font-size:0.8125rem;color:var(--text-muted)">Steady downward trend over 9 months (kg)</span>
            </div>
            <span class="status-badge badge-available">↓ 25.7% overall</span>
          </div>

          <div style="height:190px;width:100%;margin-top:1rem;">
            <svg width="100%" height="100%" viewBox="0 0 450 170" preserveAspectRatio="none">
              <line x1="0" y1="30" x2="450" y2="30" stroke="#F0F3ED" stroke-dasharray="4"/>
              <line x1="0" y1="80" x2="450" y2="80" stroke="#F0F3ED" stroke-dasharray="4"/>
              <line x1="0" y1="130" x2="450" y2="130" stroke="#F0F3ED" stroke-dasharray="4"/>

              <!-- Reduction Area Fill -->
              <path 
                d="M 25 35 L 75 48 L 125 60 L 175 75 L 225 88 L 275 100 L 325 112 L 375 125 L 425 132 L 425 150 L 25 150 Z" 
                fill="#ECFDF5"
              />
              <!-- Reduction Trend Line -->
              <path 
                d="M 25 35 L 75 48 L 125 60 L 175 75 L 225 88 L 275 100 L 325 112 L 375 125 L 425 132" 
                fill="none" 
                stroke="#10B981" 
                stroke-width="3" 
                stroke-linecap="round"
              />

              <!-- Data Nodes -->
              ${[
                { m: 'Jan', y: 35, v: '520 kg' },
                { m: 'Feb', y: 48, v: '495 kg' },
                { m: 'Mar', y: 60, v: '470 kg' },
                { m: 'Apr', y: 75, v: '445 kg' },
                { m: 'May', y: 88, v: '430 kg' },
                { m: 'Jun', y: 100, v: '415 kg' },
                { m: 'Jul', y: 112, v: '400 kg' },
                { m: 'Aug', y: 125, v: '392 kg' },
                { m: 'Sep', y: 132, v: '386 kg' }
              ].map((p, i) => `
                <circle cx="${25 + i * 50}" cy="${p.y}" r="4" fill="#153E2B" stroke="#FFFFFF" stroke-width="2"/>
                <text x="${25 + i * 50}" y="165" font-size="10" fill="#6B7280" text-anchor="middle">${p.m}</text>
              `).join('')}
            </svg>
          </div>
        </div>

        <!-- 2. Donations by Food Category (Donut chart & breakdown) -->
        <div class="nourish-card">
          <div class="chart-card-header">
            <div>
              <h3 class="chart-card-title">Donations by food category</h3>
              <span style="font-size:0.8125rem;color:var(--text-muted)">Distribution of rescued food categories</span>
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:2rem;margin-top:1rem;">
            <!-- Donut SVG -->
            <div style="position:relative;width:140px;height:140px;flex-shrink:0;">
              <svg viewBox="0 0 100 100" style="transform:rotate(-90deg);">
                <!-- Cooked Meals 54% -->
                <circle cx="50" cy="50" r="38" fill="none" stroke="#153E2B" stroke-width="16" stroke-dasharray="238.7" stroke-dashoffset="0"/>
                <!-- Bakery 22% -->
                <circle cx="50" cy="50" r="38" fill="none" stroke="#F97316" stroke-width="16" stroke-dasharray="238.7" stroke-dashoffset="128.9"/>
                <!-- Produce 16% -->
                <circle cx="50" cy="50" r="38" fill="none" stroke="#10B981" stroke-width="16" stroke-dasharray="238.7" stroke-dashoffset="181.4"/>
                <!-- Packaged 8% -->
                <circle cx="50" cy="50" r="38" fill="none" stroke="#3B82F6" stroke-width="16" stroke-dasharray="238.7" stroke-dashoffset="219.6"/>
              </svg>
              <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
                <span style="font-family:var(--font-display);font-size:1.35rem;font-weight:800;color:var(--primary-forest);">100%</span>
                <span style="font-size:0.65rem;color:var(--text-muted);font-weight:600;">Diverted</span>
              </div>
            </div>

            <!-- Categories Legend -->
            <div style="display:flex;flex-direction:column;gap:0.6rem;flex:1;">
              <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.85rem;">
                <div style="display:flex;align-items:center;gap:0.5rem;">
                  <span style="width:10px;height:10px;border-radius:3px;background:#153E2B;"></span>
                  <span>Cooked Meals (Rice, curries)</span>
                </div>
                <strong>54%</strong>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.85rem;">
                <div style="display:flex;align-items:center;gap:0.5rem;">
                  <span style="width:10px;height:10px;border-radius:3px;background:#F97316;"></span>
                  <span>Bakery & Deli</span>
                </div>
                <strong>22%</strong>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.85rem;">
                <div style="display:flex;align-items:center;gap:0.5rem;">
                  <span style="width:10px;height:10px;border-radius:3px;background:#10B981;"></span>
                  <span>Fresh Produce & Fruit</span>
                </div>
                <strong>16%</strong>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.85rem;">
                <div style="display:flex;align-items:center;gap:0.5rem;">
                  <span style="width:10px;height:10px;border-radius:3px;background:#3B82F6;"></span>
                  <span>Packaged Dry Goods</span>
                </div>
                <strong>8%</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Meals Rescued Over Time (Cumulative Growth) -->
        <div class="nourish-card">
          <div class="chart-card-header">
            <div>
              <h3 class="chart-card-title">Meals rescued over time</h3>
              <span style="font-size:0.8125rem;color:var(--text-muted)">Cumulative rescue velocity</span>
            </div>
            <span style="font-weight:700;color:var(--primary-forest);font-size:0.9rem;">+1,248 Total</span>
          </div>

          <div style="height:170px;width:100%;margin-top:1rem;">
            <svg width="100%" height="100%" viewBox="0 0 450 150" preserveAspectRatio="none">
              <path 
                d="M 20 135 Q 120 120 220 70 T 430 20 L 430 145 L 20 145 Z" 
                fill="url(#greenGradientArea)" 
                opacity="0.25"
              />
              <defs>
                <linearGradient id="greenGradientArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#10B981"/>
                  <stop offset="100%" stop-color="#FFFFFF"/>
                </linearGradient>
              </defs>
              <path 
                d="M 20 135 Q 120 120 220 70 T 430 20" 
                fill="none" 
                stroke="#153E2B" 
                stroke-width="3.5" 
                stroke-linecap="round"
              />
              <circle cx="430" cy="20" r="5" fill="#F97316" stroke="#FFFFFF" stroke-width="2"/>
            </svg>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:0.75rem;color:var(--text-muted);margin-top:0.35rem;">
            <span>Week 1 (180)</span>
            <span>Week 2 (450)</span>
            <span>Week 3 (820)</span>
            <span>Current (1,248)</span>
          </div>
        </div>

        <!-- 4. Environmental Impact Trend (CO2 & Water) -->
        <div class="nourish-card">
          <div class="chart-card-header">
            <div>
              <h3 class="chart-card-title">Environmental impact trend</h3>
              <span style="font-size:0.8125rem;color:var(--text-muted)">Resource conservation metrics</span>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1rem;">
            <div style="background:var(--bg-surface-alt);padding:1.15rem;border-radius:var(--radius-md);border:1px solid var(--border-light);">
              <div style="display:flex;align-items:center;gap:0.45rem;color:var(--mint-dark);font-weight:700;font-size:0.85rem;margin-bottom:0.35rem;">
                ${icons.co2(18)}
                <span>CO₂ Emissions Saved</span>
              </div>
              <div style="font-family:var(--font-display);font-size:1.75rem;font-weight:800;color:var(--primary-forest);">
                ${m.co2AvoidedKg} kg
              </div>
              <p style="font-size:0.75rem;color:var(--text-secondary);margin-top:0.35rem;">
                Equivalent to removing 2,400 km of standard passenger car driving.
              </p>
            </div>

            <div style="background:var(--bg-surface-alt);padding:1.15rem;border-radius:var(--radius-md);border:1px solid var(--border-light);">
              <div style="display:flex;align-items:center;gap:0.45rem;color:var(--info-blue);font-weight:700;font-size:0.85rem;margin-bottom:0.35rem;">
                ${icons.leaf(18)}
                <span>Water Conserved</span>
              </div>
              <div style="font-family:var(--font-display);font-size:1.75rem;font-weight:800;color:var(--primary-forest);">
                1.93 M <span style="font-size:1rem;font-weight:600;">Liters</span>
              </div>
              <p style="font-size:0.75rem;color:var(--text-secondary);margin-top:0.35rem;">
                Embedded agricultural irrigation water safeguarded by preventing plate waste.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 5. Community Organizations Supported Table Card -->
      <div class="nourish-card">
        <div class="chart-card-header">
          <div>
            <h3 class="chart-card-title">Community organizations supported</h3>
            <span style="font-size:0.8125rem;color:var(--text-muted)">Verified distribution partner summary</span>
          </div>
        </div>

        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;text-align:left;font-size:0.875rem;">
            <thead>
              <tr style="border-bottom:1.5px solid var(--border-card);color:var(--text-muted);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.04em;">
                <th style="padding:0.75rem 1rem;">Organization Name</th>
                <th style="padding:0.75rem 1rem;">Type</th>
                <th style="padding:0.75rem 1rem;">Total Meals Delivered</th>
                <th style="padding:0.75rem 1rem;">Primary Beneficiaries</th>
                <th style="padding:0.75rem 1rem;">Reliability Rating</th>
                <th style="padding:0.75rem 1rem;">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid var(--border-light);">
                <td style="padding:1rem;font-weight:700;color:var(--primary-forest);">Hope Community Kitchen</td>
                <td style="padding:1rem;color:var(--text-secondary);">Community Kitchen</td>
                <td style="padding:1rem;font-weight:700;">540 meals</td>
                <td style="padding:1rem;color:var(--text-secondary);">Elderly & daily-wage workers</td>
                <td style="padding:1rem;color:var(--mint-dark);font-weight:600;">★ 4.9 / 5.0</td>
                <td style="padding:1rem;"><span class="status-badge badge-available">Active Partner</span></td>
              </tr>
              <tr style="border-bottom:1px solid var(--border-light);">
                <td style="padding:1rem;font-weight:700;color:var(--primary-forest);">CareBridge Shelter</td>
                <td style="padding:1rem;color:var(--text-secondary);">Homeless Shelter</td>
                <td style="padding:1rem;font-weight:700;">380 meals</td>
                <td style="padding:1rem;color:var(--text-secondary);">Night shelter residents</td>
                <td style="padding:1rem;color:var(--mint-dark);font-weight:600;">★ 4.8 / 5.0</td>
                <td style="padding:1rem;"><span class="status-badge badge-available">Active Partner</span></td>
              </tr>
              <tr style="border-bottom:1px solid var(--border-light);">
                <td style="padding:1rem;font-weight:700;color:var(--primary-forest);">Sunshine Children's Home</td>
                <td style="padding:1rem;color:var(--text-secondary);">Children Welfare</td>
                <td style="padding:1rem;font-weight:700;">210 meals</td>
                <td style="padding:1rem;color:var(--text-secondary);">Children & resident tutors</td>
                <td style="padding:1rem;color:var(--mint-dark);font-weight:600;">★ 5.0 / 5.0</td>
                <td style="padding:1rem;"><span class="status-badge badge-available">Active Partner</span></td>
              </tr>
              <tr>
                <td style="padding:1rem;font-weight:700;color:var(--primary-forest);">Robin Hood Army Hub</td>
                <td style="padding:1rem;color:var(--text-secondary);">Volunteer Network</td>
                <td style="padding:1rem;font-weight:700;">118 meals</td>
                <td style="padding:1rem;color:var(--text-secondary);">Settlement clusters</td>
                <td style="padding:1rem;color:var(--mint-dark);font-weight:600;">★ 4.9 / 5.0</td>
                <td style="padding:1rem;"><span class="status-badge badge-available">Active Partner</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}
