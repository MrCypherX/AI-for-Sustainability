// Settings Page Component
import { icons } from '../icons.js';
import { store } from '../data/store.js';

export function renderSettings() {
  const user = store.user;

  return `
    <div class="page-container" id="settingsPage">
      <div class="page-header-row">
        <div>
          <h1 class="page-title">Settings</h1>
          <p class="page-subtitle">Configure organization profile, AI forecasting rules, and dispatch integrations.</p>
        </div>

        <div class="header-controls">
          <button class="btn-forest" id="saveSettingsBtn">
            ${icons.check(18)}
            <span>Save preferences</span>
          </button>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:1.5rem;max-width:960px;">
        <!-- Organization Profile Card -->
        <div class="nourish-card">
          <div class="chart-card-header">
            <div>
              <h3 class="chart-card-title">Organization & Kitchen Profile</h3>
              <span style="font-size:0.8125rem;color:var(--text-muted)">Verified business and kitchen license information</span>
            </div>
            <span class="status-badge badge-available">FSSAI Certified</span>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-top:1rem;">
            <div class="control-field">
              <label class="control-label">Organization Name</label>
              <input type="text" id="settingOrgName" value="${user.organization}" />
            </div>

            <div class="control-field">
              <label class="control-label">Operations Manager</label>
              <input type="text" id="settingUserName" value="${user.name}" />
            </div>

            <div class="control-field">
              <label class="control-label">FSSAI Kitchen License Number</label>
              <input type="text" value="11223344556677" readonly style="background:var(--bg-surface-alt);" />
            </div>

            <div class="control-field">
              <label class="control-label">Pickup Loading Location</label>
              <input type="text" value="Rear Service Dock 2, Main Campus" />
            </div>

            <div class="control-field">
              <label class="control-label">Operating Meal Services</label>
              <select>
                <option selected>Breakfast, Lunch & Dinner Services</option>
                <option>Lunch & Dinner Only</option>
                <option>Lunch Only</option>
              </select>
            </div>

            <div class="control-field">
              <label class="control-label">Emergency Food Safety Contact</label>
              <input type="text" value="+91 98450 67890" />
            </div>
          </div>
        </div>

        <!-- AI Forecasting & Automation Preferences -->
        <div class="nourish-card">
          <div class="chart-card-header">
            <div>
              <h3 class="chart-card-title">AI Demand Forecasting & Matching Rules</h3>
              <span style="font-size:0.8125rem;color:var(--text-muted)">Fine-tune automated surplus detection and NGO matching</span>
            </div>
            <span class="ai-badge" style="margin-bottom:0;">${icons.ai(14)} AI CONFIG</span>
          </div>

          <div style="display:flex;flex-direction:column;gap:1.25rem;margin-top:1rem;">
            <div style="display:flex;align-items:center;justify-content:space-between;padding:0.85rem 1rem;background:var(--bg-surface-alt);border-radius:var(--radius-md);">
              <div>
                <strong style="font-size:0.9rem;">Auto-Match Surplus with Highest Compatibility NGO</strong>
                <p style="font-size:0.8125rem;color:var(--text-secondary);margin-top:2px;">Automatically dispatch alerts to NGOs with >90% compatibility score.</p>
              </div>
              <input type="checkbox" checked style="width:20px;height:20px;accent-color:var(--mint-primary);" />
            </div>

            <div style="display:flex;align-items:center;justify-content:space-between;padding:0.85rem 1rem;background:var(--bg-surface-alt);border-radius:var(--radius-md);">
              <div>
                <strong style="font-size:0.9rem;">Weather-Driven Demand Recalibration</strong>
                <p style="font-size:0.8125rem;color:var(--text-secondary);margin-top:2px;">Adjust preparation advice 18 hours prior when precipitation probability exceeds 50%.</p>
              </div>
              <input type="checkbox" checked style="width:20px;height:20px;accent-color:var(--mint-primary);" />
            </div>

            <div style="display:flex;align-items:center;justify-content:space-between;padding:0.85rem 1rem;background:var(--bg-surface-alt);border-radius:var(--radius-md);">
              <div>
                <strong style="font-size:0.9rem;">Safety Margin Buffer</strong>
                <p style="font-size:0.8125rem;color:var(--text-secondary);margin-top:2px;">Target minimum backup portions (default 7.2%).</p>
              </div>
              <select style="width:160px;font-size:0.85rem;">
                <option>Conservative (5%)</option>
                <option selected>Balanced (7.2%)</option>
                <option>High Margin (10%)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Notification Preferences -->
        <div class="nourish-card">
          <div class="chart-card-header">
            <div>
              <h3 class="chart-card-title">Notification Channels</h3>
              <span style="font-size:0.8125rem;color:var(--text-muted)">Manage how and when your kitchen team is alerted</span>
            </div>
          </div>

          <div style="display:flex;flex-direction:column;gap:1rem;margin-top:0.75rem;">
            <label style="display:flex;align-items:center;gap:0.75rem;cursor:pointer;">
              <input type="checkbox" checked style="accent-color:var(--orange-primary);" />
              <span style="font-size:0.875rem;">Urgent pickup deadline alerts (30 minutes before safe threshold)</span>
            </label>
            <label style="display:flex;align-items:center;gap:0.75rem;cursor:pointer;">
              <input type="checkbox" checked style="accent-color:var(--mint-primary);" />
              <span style="font-size:0.875rem;">Volunteer assignment and live arrival notifications</span>
            </label>
            <label style="display:flex;align-items:center;gap:0.75rem;cursor:pointer;">
              <input type="checkbox" checked style="accent-color:var(--mint-primary);" />
              <span style="font-size:0.875rem;">Daily 7:00 AM AI preparation recommendation briefing</span>
            </label>
            <label style="display:flex;align-items:center;gap:0.75rem;cursor:pointer;">
              <input type="checkbox" checked style="accent-color:var(--mint-primary);" />
              <span style="font-size:0.875rem;">Monthly ESG sustainability audit and impact digest</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  `;
}
