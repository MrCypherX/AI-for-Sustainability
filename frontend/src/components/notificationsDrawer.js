// Notifications Drawer Component
import { icons } from '../icons.js';
import { store } from '../data/store.js';
import { toast } from './toast.js';

export class NotificationsDrawer {
  constructor() {
    this.isOpen = false;
    this.filter = 'all';
    this.render();
    this.attachEvents();
  }

  render() {
    let existing = document.getElementById('notificationsDrawerWrap');
    if (existing) existing.remove();

    const notifs = store.notifications;
    const filtered = notifs.filter(n => {
      if (this.filter === 'all') return true;
      return n.priority === this.filter;
    });

    const wrap = document.createElement('div');
    wrap.id = 'notificationsDrawerWrap';

    wrap.innerHTML = `
      <div class="drawer-backdrop" id="drawerBackdrop"></div>

      <div class="notifications-drawer" id="notificationsDrawerElement">
        <!-- Drawer Header -->
        <div class="drawer-header">
          <div style="display:flex;align-items:center;gap:0.75rem;">
            ${icons.bell(22)}
            <h2 class="drawer-title">Notifications</h2>
          </div>
          <div style="display:flex;align-items:center;gap:0.5rem;">
            <button class="btn-outline" id="markAllReadBtn" style="padding:0.35rem 0.75rem;font-size:0.75rem;">
              Mark all read
            </button>
            <button class="icon-btn" id="closeDrawerBtn" aria-label="Close drawer">
              ${icons.close(18)}
            </button>
          </div>
        </div>

        <!-- Priority Filters -->
        <div style="padding:0.75rem 1.25rem;border-bottom:1px solid var(--border-light);display:flex;gap:0.5rem;background:var(--bg-surface-alt);">
          <button class="timeframe-btn ${this.filter === 'all' ? 'active' : ''}" data-filter="all">All (${notifs.length})</button>
          <button class="timeframe-btn ${this.filter === 'urgent' ? 'active' : ''}" data-filter="urgent">Urgent</button>
          <button class="timeframe-btn ${this.filter === 'important' ? 'active' : ''}" data-filter="important">Important</button>
          <button class="timeframe-btn ${this.filter === 'info' ? 'active' : ''}" data-filter="info">Info</button>
        </div>

        <!-- Drawer Notifications List -->
        <div class="drawer-body">
          ${filtered.length > 0 ? filtered.map(item => {
            const badgeClass = item.priority === 'urgent' ? 'badge-urgent' : item.priority === 'important' ? 'badge-pickup' : 'badge-available';
            const icon = item.priority === 'urgent' ? icons.alert(16) : item.priority === 'important' ? icons.ai(16) : icons.check(16);

            return `
              <div class="notification-card ${!item.read ? 'unread' : ''}" data-id="${item.id}">
                <div class="notif-top-row">
                  <span class="status-badge ${badgeClass}">
                    ${icon}
                    <span>${item.badge}</span>
                  </span>
                  <span class="notif-time">${item.time}</span>
                </div>
                <div class="notif-title">${item.title}</div>
                <div class="notif-desc">${item.message}</div>
              </div>
            `;
          }).join('') : `
            <div style="text-align:center;padding:3rem 1rem;color:var(--text-muted);">
              ${icons.check(32)}
              <p style="margin-top:0.75rem;font-size:0.9rem;font-weight:600;">You're all caught up!</p>
            </div>
          `}
        </div>
      </div>
    `;

    document.body.appendChild(wrap);
  }

  attachEvents() {
    const backdrop = document.getElementById('drawerBackdrop');
    if (backdrop) backdrop.onclick = () => this.close();

    const closeBtn = document.getElementById('closeDrawerBtn');
    if (closeBtn) closeBtn.onclick = () => this.close();

    const markAll = document.getElementById('markAllReadBtn');
    if (markAll) {
      markAll.onclick = () => {
        store.markAllNotificationsRead();
        toast.show("All notifications marked as read", "info");
        this.render();
        this.attachEvents();
        this.open();
      };
    }

    const filterBtns = document.querySelectorAll('#notificationsDrawerWrap .timeframe-btn');
    filterBtns.forEach(btn => {
      btn.onclick = () => {
        this.filter = btn.getAttribute('data-filter');
        this.render();
        this.attachEvents();
        this.open();
      };
    });

    const notifCards = document.querySelectorAll('.notification-card');
    notifCards.forEach(c => {
      c.onclick = () => {
        const id = c.getAttribute('data-id');
        const notif = store.notifications.find(n => n.id === id);
        if (notif) notif.read = true;
        c.classList.remove('unread');
      };
    });
  }

  open() {
    this.isOpen = true;
    const backdrop = document.getElementById('drawerBackdrop');
    const drawer = document.getElementById('notificationsDrawerElement');
    if (backdrop) backdrop.classList.add('open');
    if (drawer) drawer.classList.add('open');
  }

  close() {
    this.isOpen = false;
    const backdrop = document.getElementById('drawerBackdrop');
    const drawer = document.getElementById('notificationsDrawerElement');
    if (backdrop) backdrop.classList.remove('open');
    if (drawer) drawer.classList.remove('open');
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}

export const notificationsDrawer = new NotificationsDrawer();
