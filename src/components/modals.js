// Helper Modals (Walkthrough Guide, Org Details, Volunteer Contact)
import { icons } from '../icons.js';
import { store } from '../data.js';
import { toast } from './toast.js';

export function showHelpModal() {
  const existing = document.getElementById('helpModalWrap');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'helpModalWrap';
  modal.className = 'modal-backdrop open';

  modal.innerHTML = `
    <div class="modal-dialog" style="width: 580px;">
      <div class="modal-header">
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <div style="width:36px;height:36px;border-radius:10px;background:var(--primary-forest-subtle);color:var(--primary-forest);display:flex;align-items:center;justify-content:center;">
            ${icons.help(20)}
          </div>
          <div>
            <h3 class="modal-title">How NourishAI Works</h3>
            <span style="font-size:0.78rem;color:var(--text-muted)">The closed-loop food waste prevention ecosystem</span>
          </div>
        </div>
        <button class="icon-btn" id="closeHelpModalBtn">${icons.close(18)}</button>
      </div>

      <div class="modal-body" style="display:flex;flex-direction:column;gap:1rem;">
        <div style="display:flex;gap:1rem;padding:0.85rem;background:var(--bg-surface-alt);border-radius:var(--radius-md);">
          <span style="color:var(--mint-dark);font-size:1.25rem;font-weight:800;">01</span>
          <div>
            <strong style="font-size:0.9rem;">Predict Demand Before Cooking</strong>
            <p style="font-size:0.8125rem;color:var(--text-secondary);margin-top:2px;">
              Our AI evaluates weather patterns, calendar events, and card-swipe velocity to recommend realistic meal batches.
            </p>
          </div>
        </div>

        <div style="display:flex;gap:1rem;padding:0.85rem;background:var(--bg-surface-alt);border-radius:var(--radius-md);">
          <span style="color:var(--orange-primary);font-size:1.25rem;font-weight:800;">02</span>
          <div>
            <strong style="font-size:0.9rem;">Broadcast Surplus in Seconds</strong>
            <p style="font-size:0.8125rem;color:var(--text-secondary);margin-top:2px;">
              Kitchen managers list unserved food with safe-until timestamps. FSSAI hygiene checklists ensure recipient safety.
            </p>
          </div>
        </div>

        <div style="display:flex;gap:1rem;padding:0.85rem;background:var(--bg-surface-alt);border-radius:var(--radius-md);">
          <span style="color:var(--info-blue);font-size:1.25rem;font-weight:800;">03</span>
          <div>
            <strong style="font-size:0.9rem;">Intelligent Proximity Matching</strong>
            <p style="font-size:0.8125rem;color:var(--text-secondary);margin-top:2px;">
              Algorithms rank nearby community kitchens, shelters, and orphanages by capacity, food preferences, and urgency.
            </p>
          </div>
        </div>

        <div style="display:flex;gap:1rem;padding:0.85rem;background:var(--bg-surface-alt);border-radius:var(--radius-md);">
          <span style="color:var(--primary-forest);font-size:1.25rem;font-weight:800;">04</span>
          <div>
            <strong style="font-size:0.9rem;">Automated Dispatch & ESG Audit</strong>
            <p style="font-size:0.8125rem;color:var(--text-secondary);margin-top:2px;">
              Certified electric vehicle volunteers collect food before deadlines and verify delivery with cryptographic hashes.
            </p>
          </div>
        </div>
      </div>

      <div class="modal-footer" style="justify-content:flex-end;">
        <button class="btn-forest" id="dismissHelpModalBtn">Got it, thanks!</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const close = () => modal.remove();
  document.getElementById('closeHelpModalBtn').onclick = close;
  document.getElementById('dismissHelpModalBtn').onclick = close;
  modal.onclick = (e) => { if (e.target === modal) close(); };
}

export function showOrgDetailsModal(orgId) {
  const org = store.organizations.find(o => o.id === orgId) || store.organizations[0];

  const existing = document.getElementById('orgModalWrap');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'orgModalWrap';
  modal.className = 'modal-backdrop open';

  modal.innerHTML = `
    <div class="modal-dialog" style="width: 540px;">
      <div class="modal-header">
        <div>
          <h3 class="modal-title">${org.name}</h3>
          <span style="font-size:0.8125rem;color:var(--text-muted)">${org.type} • FSSAI Verified Partner</span>
        </div>
        <button class="icon-btn" id="closeOrgModalBtn">${icons.close(18)}</button>
      </div>

      <div class="modal-body" style="display:flex;flex-direction:column;gap:1rem;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
          <div style="background:var(--bg-surface-alt);padding:0.75rem;border-radius:var(--radius-sm);">
            <div style="font-size:0.72rem;color:var(--text-muted);font-weight:600;">Distance</div>
            <div style="font-size:1.1rem;font-weight:700;color:var(--primary-forest);">${org.distanceKm} km</div>
          </div>
          <div style="background:var(--bg-surface-alt);padding:0.75rem;border-radius:var(--radius-sm);">
            <div style="font-size:0.72rem;color:var(--text-muted);font-weight:600;">Absorption Capacity</div>
            <div style="font-size:1.1rem;font-weight:700;color:var(--mint-dark);">${org.canAcceptMeals} meals</div>
          </div>
          <div style="background:var(--bg-surface-alt);padding:0.75rem;border-radius:var(--radius-sm);">
            <div style="font-size:0.72rem;color:var(--text-muted);font-weight:600;">Pickup Deadline</div>
            <div style="font-size:1.1rem;font-weight:700;color:var(--coral-urgent);">${org.pickupDeadline}</div>
          </div>
          <div style="background:var(--bg-surface-alt);padding:0.75rem;border-radius:var(--radius-sm);">
            <div style="font-size:0.72rem;color:var(--text-muted);font-weight:600;">Partner Rating</div>
            <div style="font-size:1.1rem;font-weight:700;color:#F59E0B;">★ ${org.rating} / 5.0</div>
          </div>
        </div>

        <div style="font-size:0.85rem;line-height:1.5;">
          <strong>Address:</strong> ${org.address}<br/>
          <strong>Key Contact:</strong> ${org.contactPerson} (${org.phone})<br/>
          <strong>Primary Beneficiaries:</strong> ${org.beneficiaries}
        </div>

        <div style="background:var(--mint-subtle);border:1px solid var(--mint-border);padding:0.75rem 1rem;border-radius:var(--radius-md);font-size:0.8125rem;color:var(--mint-dark);">
          ✓ Equipped with commercial-grade hot holding units and certified safe food handling protocols.
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn-outline" id="closeOrgModalBtn2">Close</button>
        <button class="btn-forest" id="acceptFromModalBtn">
          ${icons.check(18)}
          <span>Select this organization</span>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const close = () => modal.remove();
  document.getElementById('closeOrgModalBtn').onclick = close;
  document.getElementById('closeOrgModalBtn2').onclick = close;
  document.getElementById('acceptFromModalBtn').onclick = () => {
    store.acceptMatch(org.id);
    close();
    toast.show(`✓ Matched surplus with ${org.name}! Volunteer dispatch initiated.`, 'success');
    window.location.hash = '#routes';
  };
  modal.onclick = (e) => { if (e.target === modal) close(); };
}

export function showVolunteerContactModal() {
  const volunteer = store.activeRoute.volunteer;

  const existing = document.getElementById('volunteerModalWrap');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'volunteerModalWrap';
  modal.className = 'modal-backdrop open';

  modal.innerHTML = `
    <div class="modal-dialog" style="width: 480px;">
      <div class="modal-header">
        <div>
          <h3 class="modal-title">Contact Volunteer</h3>
          <span style="font-size:0.8125rem;color:var(--text-muted)">Live communication for Route #RT-104</span>
        </div>
        <button class="icon-btn" id="closeVolModalBtn">${icons.close(18)}</button>
      </div>

      <div class="modal-body" style="display:flex;flex-direction:column;gap:1.25rem;">
        <div style="display:flex;align-items:center;gap:1rem;padding:1rem;background:var(--bg-surface-alt);border-radius:var(--radius-md);">
          <div class="user-avatar" style="width:48px;height:48px;font-size:1.1rem;background:#2563EB;">
            ${volunteer.avatar}
          </div>
          <div>
            <div style="font-family:var(--font-display);font-size:1.15rem;font-weight:700;">${volunteer.name}</div>
            <div style="font-size:0.8125rem;color:var(--text-muted);">${volunteer.vehicle}</div>
            <div style="font-size:0.75rem;color:var(--mint-dark);font-weight:600;margin-top:2px;">★ ${volunteer.rating} rating • 142 rescues</div>
          </div>
        </div>

        <div style="display:flex;flex-direction:column;gap:0.75rem;">
          <a href="tel:${volunteer.phone}" class="btn-forest" style="justify-content:center;">
            ${icons.phone(18)}
            <span>Direct Phone Call (${volunteer.phone})</span>
          </a>

          <button class="btn-outline" id="sendQuickSmsBtn" style="justify-content:center;">
            ${icons.send(18)}
            <span>Send "Food is packaged & ready at Dock 2"</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const close = () => modal.remove();
  document.getElementById('closeVolModalBtn').onclick = close;
  document.getElementById('sendQuickSmsBtn').onclick = () => {
    toast.show(`Message transmitted to ${volunteer.name}: "Food packaged & ready at Dock 2"`, 'info');
    close();
  };
  modal.onclick = (e) => { if (e.target === modal) close(); };
}
