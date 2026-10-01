// Sidebar Component (Desktop)
import { icons } from '../icons.js';
import { store } from '../data/store.js';

export function renderSidebar(activePage = 'overview') {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: icons.overview(20) },
    { id: 'prediction', label: 'AI Prediction', icon: icons.prediction(20) },
    { id: 'surplus', label: 'Surplus Food', icon: icons.surplus(20), badge: store.surplusListings.filter(s => s.status === 'available').length },
    { id: 'matches', label: 'Nearby Matches', icon: icons.matches(20), badge: 'New' },
    { id: 'routes', label: 'Pickup Routes', icon: icons.routes(20) },
    { id: 'reports', label: 'Impact Reports', icon: icons.reports(20) },
    { id: 'settings', label: 'Settings', icon: icons.settings(20) }
  ];

  return `
    <aside class="app-sidebar" id="appSidebar">
      <div class="sidebar-header">
        ${icons.logo(36)}
        <div class="brand-info">
          <div class="brand-name">
            NourishAI
            <span class="brand-badge">AI</span>
          </div>
          <span class="brand-tagline">Food rescue intelligence</span>
        </div>
      </div>

      <nav class="sidebar-nav">
        ${navItems.map(item => `
          <a href="#${item.id}" class="nav-link ${activePage === item.id ? 'active' : ''}" data-page="${item.id}">
            ${item.icon}
            <span>${item.label}</span>
            ${item.badge !== undefined && item.badge !== 0 ? `<span class="nav-badge-pill">${item.badge}</span>` : ''}
          </a>
        `).join('')}
      </nav>

      <div class="sidebar-footer">
        <div class="sustainability-mini-pill">
          <div>
            <div class="mini-score-label">Sustainability tier</div>
            <div style="font-size:0.85rem;font-weight:700;color:var(--mint-dark);margin-top:2px;">🌱 Level 4 Partner</div>
          </div>
          <div class="mini-score-value">
            ${store.metrics.sustainabilityScore}
            <span style="font-size:0.7rem;color:var(--text-muted);font-weight:500;">/100</span>
          </div>
        </div>
      </div>
    </aside>

    <!-- Mobile Bottom Navigation -->
    <nav class="mobile-bottom-nav">
      ${navItems.slice(0, 5).map(item => `
        <a href="#${item.id}" class="mobile-nav-item ${activePage === item.id ? 'active' : ''}" data-page="${item.id}">
          ${item.icon}
          <span>${item.label.split(' ')[0]}</span>
        </a>
      `).join('')}
    </nav>
  `;
}
