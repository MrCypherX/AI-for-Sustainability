// Surplus Food Page Component
import { icons } from '../icons.js';
import { store } from '../data/store.js';

export function renderSurplus(activeFilter = 'all') {
  const listings = store.surplusListings;

  const filteredListings = listings.filter(item => {
    if (activeFilter === 'all') return true;
    return item.status === activeFilter;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'available':
        return `<span class="status-badge badge-available">${icons.check(12)} Available</span>`;
      case 'matched':
        return `<span class="status-badge badge-matched">${icons.users(12)} Matched</span>`;
      case 'pickup':
        return `<span class="status-badge badge-pickup">${icons.clock(12)} Pickup soon</span>`;
      case 'completed':
        return `<span class="status-badge badge-completed">${icons.check(12)} Completed</span>`;
      case 'expired':
        return `<span class="status-badge badge-urgent">${icons.alert(12)} Expired</span>`;
      default:
        return `<span class="status-badge badge-available">${status}</span>`;
    }
  };

  return `
    <div class="page-container" id="surplusPage">
      <!-- Header -->
      <div class="page-header-row">
        <div>
          <h1 class="page-title">Surplus food</h1>
          <p class="page-subtitle">Give extra food a second destination.</p>
        </div>

        <div class="header-controls">
          <button class="btn-primary-orange" id="createListingPageBtn">
            ${icons.plus(18)}
            <span>Create donation listing</span>
          </button>
        </div>
      </div>

      <!-- Action Banner: Have surplus food today? -->
      <div class="surplus-action-banner">
        <div>
          <h2 class="banner-title">Have surplus food today?</h2>
          <p class="banner-sub">
            List prepared catering trays, unserved cafeteria meals, or baked goods. Our AI matching model alerts nearby verified community kitchens within seconds.
          </p>
        </div>
        <button class="btn-primary-orange" id="bannerCreateListingBtn" style="background:#FFFFFF;color:var(--primary-forest);box-shadow:0 4px 14px rgba(0,0,0,0.15);">
          ${icons.plus(18)}
          <span>Create donation listing</span>
        </button>
      </div>

      <!-- Filter Controls & Tabs -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
        <div class="timeframe-filters" id="surplusFilterTabs">
          <button class="timeframe-btn ${activeFilter === 'all' ? 'active' : ''}" data-status="all">
            All Listings (${listings.length})
          </button>
          <button class="timeframe-btn ${activeFilter === 'available' ? 'active' : ''}" data-status="available">
            Available (${listings.filter(s => s.status === 'available').length})
          </button>
          <button class="timeframe-btn ${activeFilter === 'matched' ? 'active' : ''}" data-status="matched">
            Matched (${listings.filter(s => s.status === 'matched').length})
          </button>
          <button class="timeframe-btn ${activeFilter === 'completed' ? 'active' : ''}" data-status="completed">
            Completed (${listings.filter(s => s.status === 'completed').length})
          </button>
          <button class="timeframe-btn ${activeFilter === 'expired' ? 'active' : ''}" data-status="expired">
            Expired (${listings.filter(s => s.status === 'expired').length})
          </button>
        </div>

        <div style="display:flex;align-items:center;gap:0.5rem;">
          <span style="font-size:0.8125rem;color:var(--text-muted);font-weight:600;">Category:</span>
          <select id="surplusCategoryFilter" style="font-size:0.8125rem;padding:0.4rem 0.75rem;">
            <option value="all">All Categories</option>
            <option value="cooked">Cooked Meals</option>
            <option value="bakery">Bakery & Deli</option>
            <option value="produce">Fresh Produce</option>
          </select>
        </div>
      </div>

      <!-- Listings Grid or Friendly Empty State -->
      ${filteredListings.length > 0 ? `
        <div class="surplus-cards-grid">
          ${filteredListings.map(item => `
            <div class="donation-card" data-listing-id="${item.id}">
              <div class="donation-img-wrap">
                <img src="${item.image}" alt="${item.name}" class="donation-img" onerror="this.src='/images/veg_rice.jpg'"/>
                <div class="card-top-badges">
                  ${getStatusBadge(item.status)}
                  <span style="font-size:0.75rem;font-weight:700;padding:0.2rem 0.6rem;background:rgba(255,255,255,0.9);color:var(--text-primary);border-radius:var(--radius-full);">
                    ${item.dietary}
                  </span>
                </div>
              </div>

              <div class="donation-card-body">
                <div>
                  <h3 class="donation-name">${item.name}</h3>
                  <div class="donation-meta-row">
                    <span style="font-weight:700;color:var(--primary-forest);">${item.meals} meals</span>
                    <span>•</span>
                    <span>${item.weightKg} kg</span>
                    <span>•</span>
                    <span style="color:var(--text-muted);">${item.category}</span>
                  </div>

                  <div class="donation-details-list">
                    <div class="detail-line">
                      <span style="color:var(--mint-dark);">${icons.clock(16)}</span>
                      <span>Safe until: <strong>${item.safeUntil}</strong></span>
                    </div>
                    <div class="detail-line">
                      <span style="color:var(--text-muted);">${icons.location(16)}</span>
                      <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.location}</span>
                    </div>
                    ${item.matchedOrg ? `
                      <div class="detail-line" style="color:var(--info-blue);font-weight:600;">
                        <span>${icons.users(16)}</span>
                        <span>Matched to: ${item.matchedOrg}</span>
                      </div>
                    ` : ''}
                  </div>
                </div>

                <div class="donation-card-actions">
                  ${item.status === 'available' ? `
                    <button class="btn-forest surplus-match-btn" data-id="${item.id}">
                      ${icons.matches(16)}
                      <span>Find a match</span>
                    </button>
                    <span style="font-size:0.75rem;color:var(--mint-dark);font-weight:600;">96% match ready</span>
                  ` : item.status === 'matched' ? `
                    <button class="btn-outline surplus-route-btn" data-id="${item.id}" style="border-color:var(--info-blue);color:var(--info-blue);">
                      ${icons.routes(16)}
                      <span>View route</span>
                    </button>
                    <span class="status-badge badge-matched">Pickup confirmed</span>
                  ` : `
                    <button class="btn-outline" style="color:var(--text-muted);">
                      ${icons.check(16)}
                      <span>Donation completed</span>
                    </button>
                    <span style="font-size:0.75rem;color:var(--text-muted);">${item.completedTime || 'Completed'}</span>
                  `}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <!-- Friendly Empty State -->
        <div class="nourish-card" style="text-align:center;padding:4rem 2rem;margin-top:2rem;">
          <div style="width:72px;height:72px;background:var(--mint-subtle);color:var(--mint-dark);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem;">
            ${icons.leaf(36)}
          </div>
          <h3 style="font-family:var(--font-display);font-size:1.5rem;font-weight:700;color:var(--primary-forest);margin-bottom:0.5rem;">
            No surplus food listed in this view
          </h3>
          <p style="font-size:1rem;color:var(--text-secondary);max-width:480px;margin:0 auto 1.75rem;line-height:1.5;">
            Every meal prepared responsibly is a step toward a cleaner future. When you have extra portions, list them here to rescue food instantly.
          </p>
          <button class="btn-primary-orange" id="emptyStateCreateBtn">
            ${icons.plus(18)}
            <span>Create donation listing</span>
          </button>
        </div>
      `}
    </div>
  `;
}
