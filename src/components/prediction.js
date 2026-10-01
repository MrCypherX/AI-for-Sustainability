// AI Prediction Page Component
import { icons } from '../icons.js';
import { store } from '../data.js';

export function renderPrediction(currentAttendance = 420) {
  const ai = store.aiInsight;
  const attendance = Number(currentAttendance) || 420;
  // Dynamic calculation: safe buffer of ~7.2% below raw attendance to avoid surplus while keeping margin
  const recommended = Math.round(attendance * 0.928);
  const possibleSurplus = attendance - recommended;
  const wasteSavedKg = Math.round(possibleSurplus * 0.3); // ~300g per meal
  const moneySaved = Math.round(possibleSurplus * 80); // ₹80 per meal prep cost

  // Factors used by AI
  const factors = [
    {
      title: "Previous sales data",
      icon: icons.reports(18),
      desc: "3-week moving average on Thursday lunch shows 415-430 active covers with 92% turnout."
    },
    {
      title: "Day of the week",
      icon: icons.clock(18),
      desc: "Thursday attendance displays a historical 7.4% drop compared to peak Wednesday turnout."
    },
    {
      title: "Weather forecast",
      icon: icons.leaf(18),
      desc: "Heavy rain forecasted between 12:30 PM – 2:15 PM (68% probability), reducing foot traffic."
    },
    {
      title: "Upcoming events",
      icon: icons.users(18),
      desc: "Local tech park hybrid work schedule: 35% of engineering teams are working remotely."
    },
    {
      title: "Historical leftovers",
      icon: icons.recycle(18),
      desc: "Hot rice & pasta dishes typically have 16-19% surplus on rainy weekday lunch hours."
    },
    {
      title: "Attendance patterns",
      icon: icons.prediction(18),
      desc: "Access swipe velocity model forecasts peak meal collection concentrated between 1:00 – 1:35 PM."
    }
  ];

  return `
    <div class="page-container" id="predictionPage">
      <!-- Header -->
      <div class="page-header-row">
        <div>
          <h1 class="page-title">AI meal demand prediction</h1>
          <p class="page-subtitle">Make better preparation decisions with data-driven recommendations.</p>
        </div>

        <div class="header-controls">
          <button class="btn-forest" id="predAcceptTopBtn" ${ai.applied ? 'disabled style="opacity:0.85;"' : ''}>
            ${ai.applied ? icons.check(18) : icons.sparkle(18)}
            <span>${ai.applied ? '✓ Recommendation active' : 'Accept recommendation'}</span>
          </button>
        </div>
      </div>

      <!-- Prediction Controls Card -->
      <div class="prediction-controls-card">
        <div class="controls-row">
          <div class="control-field">
            <label class="control-label" for="predDateSelect">Prediction Date</label>
            <select id="predDateSelect">
              <option value="tomorrow" selected>Tomorrow: Friday, Oct 2, 2026</option>
              <option value="saturday">Saturday, Oct 3, 2026</option>
              <option value="monday">Monday, Oct 5, 2026</option>
            </select>
          </div>

          <div class="control-field">
            <label class="control-label" for="predMealSelect">Meal Service</label>
            <select id="predMealSelect">
              <option value="lunch" selected>Lunch Service (12:00 – 3:00 PM)</option>
              <option value="dinner">Dinner Service (7:00 – 10:00 PM)</option>
              <option value="breakfast">Breakfast Service (7:30 – 10:00 AM)</option>
            </select>
          </div>

          <div class="control-field">
            <label class="control-label" for="predLocSelect">Kitchen / Location</label>
            <select id="predLocSelect">
              <option value="main" selected>Main Cafeteria (Green Leaf)</option>
              <option value="annex">Tech Park Annex Hub</option>
            </select>
          </div>

          <div class="control-field">
            <label class="control-label" for="predAttendanceInput">Expected Attendance</label>
            <input 
              type="number" 
              id="predAttendanceInput" 
              value="${attendance}" 
              min="100" 
              max="1000" 
              step="10" 
            />
          </div>
        </div>
      </div>

      <!-- Prediction Result Hero Grid -->
      <div class="prediction-hero-grid">
        <!-- Result Card -->
        <div class="nourish-card prediction-result-card">
          <div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;">
              <span class="ai-badge" style="margin-bottom:0;">
                ${icons.ai(14)}
                <span>RECOMMENDED TARGET</span>
              </span>
              <span class="brand-badge" style="background:var(--mint-subtle);color:var(--mint-dark);">High confidence</span>
            </div>

            <div class="prediction-big-stat">
              <span class="prediction-stat-number" id="predRecommendedCount">${recommended}</span>
              <span class="prediction-stat-unit">meals</span>
            </div>

            <p style="font-size:0.875rem;color:var(--text-secondary);margin-bottom:1rem;">
              Optimized for <strong>${attendance} expected customers</strong> with a 7.2% safety buffer.
            </p>

            <div class="confidence-bar-container">
              <div class="confidence-header">
                <span>Prediction confidence</span>
                <span style="color:var(--mint-dark);font-weight:700;">91%</span>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width: 91%;"></div>
              </div>
            </div>
          </div>

          <div style="background:var(--bg-surface);padding:1rem;border-radius:var(--radius-md);border:1px solid var(--border-light);margin-top:1rem;">
            <div style="font-size:0.75rem;color:var(--text-muted);font-weight:600;text-transform:uppercase;margin-bottom:0.35rem;">Expected Outcome</div>
            <div style="display:flex;justify-content:space-between;font-size:0.875rem;">
              <span>Potential waste prevented:</span>
              <strong style="color:var(--mint-dark);" id="predWastePrevented">${wasteSavedKg} kg</strong>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:0.875rem;margin-top:0.25rem;">
              <span>Estimated cost saved:</span>
              <strong style="color:var(--primary-forest);" id="predMoneyPrevented">₹${moneySaved.toLocaleString()}</strong>
            </div>
          </div>
        </div>

        <!-- Visual Comparison Chart -->
        <div class="nourish-card" style="display:flex;flex-direction:column;justify-content:space-between;">
          <div class="chart-card-header">
            <div>
              <h2 class="chart-card-title">Demand vs. Preparation Comparison</h2>
              <span style="font-size:0.8125rem;color:var(--text-muted)">Visualizing previous baseline, anticipated crowd & recommended prep</span>
            </div>
          </div>

          <!-- Comparison Bars Container -->
          <div style="display:flex;flex-direction:column;gap:1.15rem;margin:1.25rem 0;">
            <!-- Previous average -->
            <div>
              <div style="display:flex;justify-content:space-between;font-size:0.8125rem;font-weight:600;margin-bottom:0.35rem;">
                <span style="color:var(--text-secondary);">Previous average</span>
                <span style="font-family:var(--font-display);font-weight:700;">440 meals</span>
              </div>
              <div class="progress-track" style="height:14px;">
                <div style="height:100%;width:88%;background:#9CA3AF;border-radius:var(--radius-full);"></div>
              </div>
            </div>

            <!-- Expected demand -->
            <div>
              <div style="display:flex;justify-content:space-between;font-size:0.8125rem;font-weight:600;margin-bottom:0.35rem;">
                <span style="color:var(--text-secondary);">Expected demand</span>
                <span style="font-family:var(--font-display);font-weight:700;">${attendance} customers</span>
              </div>
              <div class="progress-track" style="height:14px;">
                <div style="height:100%;width:${(attendance / 500) * 100}%;background:#F97316;border-radius:var(--radius-full);"></div>
              </div>
            </div>

            <!-- Recommended preparation -->
            <div>
              <div style="display:flex;justify-content:space-between;font-size:0.8125rem;font-weight:600;margin-bottom:0.35rem;">
                <span style="color:var(--primary-forest);font-weight:700;">Recommended preparation</span>
                <span style="font-family:var(--font-display);font-weight:700;color:var(--mint-dark);">${recommended} meals</span>
              </div>
              <div class="progress-track" style="height:14px;background:#D1FAE5;">
                <div style="height:100%;width:${(recommended / 500) * 100}%;background:#10B981;border-radius:var(--radius-full);"></div>
              </div>
            </div>

            <!-- Possible surplus -->
            <div>
              <div style="display:flex;justify-content:space-between;font-size:0.8125rem;font-weight:600;margin-bottom:0.35rem;">
                <span style="color:var(--mint-dark);font-weight:600;">Surplus avoided by recommendation</span>
                <span style="font-family:var(--font-display);font-weight:700;color:var(--mint-dark);">-${possibleSurplus} surplus meals</span>
              </div>
              <div class="progress-track" style="height:14px;background:#F3F4F6;">
                <div style="height:100%;width:${(possibleSurplus / 100) * 40}%;background:#153E2B;border-radius:var(--radius-full);"></div>
              </div>
            </div>
          </div>

          <div style="font-size:0.78rem;color:var(--text-muted);display:flex;align-items:center;gap:0.5rem;padding-top:0.75rem;border-top:1px solid var(--border-light);">
            ${icons.info(16)}
            <span>Standard safety margin maintains an emergency backup portion of 15 cold buffet items.</span>
          </div>
        </div>
      </div>

      <!-- Explanation Card -->
      <div class="nourish-card" style="margin-bottom:1.75rem;background:linear-gradient(135deg, #FAFDF9 0%, #F0FDF4 100%);border:1.5px solid var(--mint-border);">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1.5rem;flex-wrap:wrap;">
          <div style="max-width:720px;">
            <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
              <span class="ai-badge" style="margin-bottom:0;">
                ${icons.ai(14)}
                <span>AI RECOMMENDATION</span>
              </span>
            </div>
            <h3 style="font-family:var(--font-display);font-size:1.3rem;font-weight:700;color:var(--primary-forest);margin-bottom:0.5rem;">
              Prepare ${recommended} meals instead of ${attendance}.
            </h3>
            <p style="font-size:0.9375rem;color:var(--text-secondary);line-height:1.5;">
              This reduces the chance of surplus while maintaining a small safety margin. Our predictive pipeline correlates attendance decline from precipitation with real historical plate waste logs.
            </p>
          </div>

          <div style="display:flex;align-items:center;gap:0.75rem;align-self:center;">
            <button class="btn-forest" id="predAcceptBtn" ${ai.applied ? 'disabled style="opacity:0.85;"' : ''}>
              ${ai.applied ? icons.check(18) : icons.sparkle(18)}
              <span>${ai.applied ? '✓ Recommendation applied' : 'Accept recommendation'}</span>
            </button>
            <button class="btn-outline" id="predManualAdjustBtn">
              <span>Adjust manually</span>
            </button>
          </div>
        </div>
      </div>

      <!-- "Why this prediction?" Factors Panel -->
      <div class="nourish-card" style="margin-bottom:1.75rem;">
        <div class="chart-card-header">
          <div>
            <h2 class="chart-card-title">Why this prediction?</h2>
            <span style="font-size:0.8125rem;color:var(--text-muted)">The 6 contextual factors evaluated by NourishAI’s demand model</span>
          </div>
        </div>

        <div class="factors-grid">
          ${factors.map(f => `
            <div class="factor-card">
              <div class="factor-title">
                <span style="color:var(--mint-dark);">${f.icon}</span>
                <span>${f.title}</span>
              </div>
              <p class="factor-desc">${f.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Interactive Simulation Section -->
      <div class="nourish-card">
        <div class="chart-card-header">
          <div>
            <h2 class="chart-card-title">What if attendance changes?</h2>
            <span style="font-size:0.8125rem;color:var(--text-muted)">Simulate real-time chef adjustments to inspect food waste & savings elasticity</span>
          </div>
          <span class="brand-badge" style="background:var(--orange-subtle);color:var(--orange-primary);">Interactive simulator</span>
        </div>

        <div class="simulation-slider-box">
          <div style="display:flex;justify-content:space-between;font-size:0.875rem;font-weight:600;">
            <span>Simulate Expected Attendance:</span>
            <span class="slider-number-display" id="simAttendanceDisplay">${attendance} people</span>
          </div>

          <div class="slider-controls-wrap">
            <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">200</span>
            <input 
              type="range" 
              class="range-slider" 
              id="simAttendanceSlider" 
              min="200" 
              max="600" 
              value="${attendance}" 
              step="5"
            />
            <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">600</span>
          </div>

          <div class="sim-output-grid">
            <div class="sim-output-item">
              <div class="sim-output-val" id="simRecommendedVal">${recommended}</div>
              <div class="sim-output-lbl">Recommended Meals</div>
            </div>
            <div class="sim-output-item">
              <div class="sim-output-val" style="color:var(--mint-dark);" id="simWasteVal">${wasteSavedKg} kg</div>
              <div class="sim-output-lbl">Waste Prevented</div>
            </div>
            <div class="sim-output-item">
              <div class="sim-output-val" style="color:var(--orange-primary);" id="simMoneyVal">₹${moneySaved.toLocaleString()}</div>
              <div class="sim-output-lbl">Estimated Savings</div>
            </div>
            <div class="sim-output-item">
              <div class="sim-output-val" style="color:var(--primary-forest);">3.8%</div>
              <div class="sim-output-lbl">Surplus Risk Index</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
