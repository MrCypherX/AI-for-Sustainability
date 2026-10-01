// Editorial Top Navigation Header Component for NourishLoop
import { icons } from '../icons.js';
import { store } from '../data/store.js';

export function renderHeader(activePage = 'overview') {
  const unreadCount = store.notifications.filter(n => !n.read).length;

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'prediction', label: 'AI Prediction' },
    { id: 'surplus', label: 'Surplus Food' },
    { id: 'matches', label: 'Nearby Matches' },
    { id: 'routes', label: 'Pickup Routes' },
    { id: 'reports', label: 'Impact Reports' },
    { id: 'settings', label: 'Settings' }
  ];

  const roles = [
    { id: 'donor', label: '🏢 Donor: Green Leaf', badge: 'Donor' },
    { id: 'ngo', label: '🍲 NGO: Hope Kitchen', badge: 'Recipient' },
    { id: 'volunteer', label: '🚴 Courier: Ravi', badge: 'Volunteer' },
    { id: 'admin', label: '🏛️ Admin: City Food', badge: 'Admin' }
  ];

  return `
    <header class="editorial-navbar">
      <!-- Brand Logo on Left (Serif from Video Reference) -->
      <div class="nav-brand-group">
        <a href="#overview" class="brand-serif-logo">
          Nourish<span class="accent">Loop</span>
        </a>
        <span class="brand-badge-pill">Food Rescue</span>
      </div>

      <!-- Center Navigation Links (Clean sans-serif with thin orange active underline) -->
      <nav class="editorial-nav-links" id="editorialNavLinks">
        ${navLinks.map(item => `
          <a 
            href="#${item.id}" 
            class="nav-anchor-link ${activePage === item.id ? 'active' : ''}" 
            data-page="${item.id}"
          >
            ${item.label}
          </a>
        `).join('')}
      </nav>

      <!-- Right Action Group -->
      <div class="nav-actions-group">
        <!-- Interactive Multi-Role Switcher for Hackathon Demo -->
        <div class="role-selector-wrap" style="position:relative;">
          <select 
            id="roleSelectorDropdown" 
            title="Switch platform view role"
            style="background:#FFFFFF;border:1px solid rgba(0,0,0,0.12);padding:0.4rem 0.8rem;border-radius:var(--radius-full);font-family:var(--font-sans);font-size:0.8rem;font-weight:600;color:var(--text-primary);cursor:pointer;outline:none;"
          >
            ${roles.map(r => `
              <option value="${r.id}" ${store.currentRole === r.id ? 'selected' : ''}>
                ${r.label}
              </option>
            `).join('')}
          </select>
        </div>

        <button class="nav-icon-btn" id="helpModalTrigger" title="Platform Guide & Walkthrough" aria-label="Help">
          ${icons.help(19)}
        </button>

        <button class="nav-icon-btn" id="notificationsTrigger" title="Notifications" aria-label="Notifications">
          ${icons.bell(19)}
          ${unreadCount > 0 ? `<span class="notification-count" style="position:absolute;top:-2px;right:-2px;background:var(--accent-orange);color:white;font-size:0.65rem;font-weight:700;border-radius:50%;width:18px;height:18px;display:flex;align-items:center;justify-content:center;border:2px solid white;">${unreadCount}</span>` : ''}
        </button>

        <div class="user-profile-badge" id="userProfileChip" title="Account settings" style="display:flex;align-items:center;gap:0.6rem;padding:0.35rem 0.75rem;background:#FFFFFF;border:1px solid rgba(0,0,0,0.08);border-radius:var(--radius-full);cursor:pointer;">
          <div class="user-avatar" style="width:30px;height:30px;border-radius:50%;background:var(--primary-forest);color:white;font-size:0.75rem;font-weight:700;display:flex;align-items:center;justify-content:center;">
            ${store.user.avatar}
          </div>
          <span style="font-size:0.85rem;font-weight:600;color:var(--text-primary);">${store.user.name.split(' ')[0]}</span>
        </div>

        <button class="btn-pill-orange" id="headerListSurplusBtn" title="List surplus food">
          ${icons.plus(16)}
          <span>+ List Surplus Food</span>
        </button>
      </div>
    </header>
  `;
}
