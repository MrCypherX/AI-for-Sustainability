// Surplus Food Listing Multi-step Modal Component
import { icons } from '../icons.js';
import { store } from '../data.js';
import { toast } from './toast.js';

export class ListingModal {
  constructor() {
    this.currentStep = 1;
    this.formData = {
      name: "Paneer Biryani & Raita",
      category: "Cooked meals",
      meals: 40,
      weightKg: 14.0,
      preparedTime: "1:15 PM",
      safeUntil: "8:00 PM",
      dietary: "Vegetarian",
      allergens: ["Dairy"],
      location: "Green Leaf Cafeteria — Loading Bay 2",
      image: "/images/veg_rice.jpg",
      notes: "Maintained above 65°C in sanitized stainless steel hotel pans."
    };

    this.render();
    this.attachEvents();
  }

  render() {
    let existing = document.getElementById('listingModalBackdrop');
    if (existing) existing.remove();

    const backdrop = document.createElement('div');
    backdrop.id = 'listingModalBackdrop';
    backdrop.className = 'modal-backdrop';

    backdrop.innerHTML = `
      <div class="modal-dialog" role="dialog" aria-labelledby="modalTitle">
        <!-- Modal Header -->
        <div class="modal-header">
          <div>
            <h2 class="modal-title" id="modalTitle">List Surplus Food</h2>
            <span style="font-size:0.8125rem;color:var(--text-muted)">Give excess food a second destination in 4 quick steps</span>
          </div>
          <button class="icon-btn" id="closeListingModalBtn" aria-label="Close modal">
            ${icons.close(18)}
          </button>
        </div>

        <!-- Stepper Bar -->
        <div class="modal-stepper-bar">
          <div class="modal-step-item ${this.currentStep === 1 ? 'active' : this.currentStep > 1 ? 'done' : ''}">
            <div class="step-num-pill">${this.currentStep > 1 ? '✓' : '1'}</div>
            <span>1. Food details</span>
          </div>
          <div class="modal-step-item ${this.currentStep === 2 ? 'active' : this.currentStep > 2 ? 'done' : ''}">
            <div class="step-num-pill">${this.currentStep > 2 ? '✓' : '2'}</div>
            <span>2. Safety info</span>
          </div>
          <div class="modal-step-item ${this.currentStep === 3 ? 'active' : this.currentStep > 3 ? 'done' : ''}">
            <div class="step-num-pill">${this.currentStep > 3 ? '✓' : '3'}</div>
            <span>3. Pickup details</span>
          </div>
          <div class="modal-step-item ${this.currentStep === 4 ? 'active' : ''}">
            <div class="step-num-pill">4</div>
            <span>4. Review & Publish</span>
          </div>
        </div>

        <!-- Modal Body Dynamic Step Content -->
        <div class="modal-body" id="modalStepContainer">
          ${this.getStepContent()}
        </div>

        <!-- Modal Footer Navigation -->
        <div class="modal-footer">
          <button class="btn-outline" id="modalPrevBtn" ${this.currentStep === 1 ? 'style="visibility:hidden;"' : ''}>
            Back
          </button>

          <div style="display:flex;align-items:center;gap:0.75rem;">
            <button class="btn-outline" id="modalCancelBtn">
              Cancel
            </button>
            <button class="btn-forest" id="modalNextBtn">
              <span>${this.currentStep === 4 ? 'Confirm & Publish Listing' : 'Continue'}</span>
              ${this.currentStep === 4 ? icons.check(18) : icons.chevronRight(16)}
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);
  }

  getStepContent() {
    switch (this.currentStep) {
      case 1:
        return `
          <div style="display:flex;flex-direction:column;gap:1.25rem;">
            <div class="control-field">
              <label class="control-label">Food Item Name *</label>
              <input type="text" id="modalFoodName" placeholder="e.g. Vegetable rice, Club sandwiches..." value="${this.formData.name}" required />
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;">
              <div class="control-field">
                <label class="control-label">Food Category *</label>
                <select id="modalFoodCategory">
                  <option value="Cooked meals" ${this.formData.category === 'Cooked meals' ? 'selected' : ''}>Cooked meals (hot trays)</option>
                  <option value="Bakery & Deli" ${this.formData.category === 'Bakery & Deli' ? 'selected' : ''}>Bakery & Sandwiches</option>
                  <option value="Fresh produce" ${this.formData.category === 'Fresh produce' ? 'selected' : ''}>Fresh Produce & Fruits</option>
                  <option value="Packaged foods" ${this.formData.category === 'Packaged foods' ? 'selected' : ''}>Packaged & Canned</option>
                </select>
              </div>

              <div class="control-field">
                <label class="control-label">Dietary Classification *</label>
                <select id="modalDietary">
                  <option value="Vegetarian" ${this.formData.dietary === 'Vegetarian' ? 'selected' : ''}>Vegetarian</option>
                  <option value="Vegan" ${this.formData.dietary === 'Vegan' ? 'selected' : ''}>Vegan</option>
                  <option value="Non-vegetarian" ${this.formData.dietary === 'Non-vegetarian' ? 'selected' : ''}>Non-vegetarian</option>
                </select>
              </div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;">
              <div class="control-field">
                <label class="control-label">Number of Portions / Meals *</label>
                <input type="number" id="modalMeals" value="${this.formData.meals}" min="1" max="500" required />
              </div>

              <div class="control-field">
                <label class="control-label">Approximate Weight (kg) *</label>
                <input type="number" id="modalWeight" value="${this.formData.weightKg}" step="0.5" min="0.5" required />
              </div>
            </div>
          </div>
        `;

      case 2:
        return `
          <div style="display:flex;flex-direction:column;gap:1.25rem;">
            <div style="background:var(--mint-subtle);border:1px solid var(--mint-border);padding:0.85rem 1rem;border-radius:var(--radius-md);display:flex;align-items:center;gap:0.75rem;">
              <span style="color:var(--mint-dark);">${icons.leaf(20)}</span>
              <span style="font-size:0.8125rem;color:var(--primary-forest);">
                NourishAI safety guidelines comply with FSSAI regulations for cooked food donation.
              </span>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;">
              <div class="control-field">
                <label class="control-label">Preparation Time *</label>
                <input type="text" id="modalPrepTime" value="${this.formData.preparedTime}" placeholder="e.g. 1:00 PM" required />
              </div>

              <div class="control-field">
                <label class="control-label">Safe-Until Deadline *</label>
                <input type="text" id="modalSafeUntil" value="${this.formData.safeUntil}" placeholder="e.g. 8:30 PM" required />
              </div>
            </div>

            <div class="control-field">
              <label class="control-label">Known Allergens (Select all present)</label>
              <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:0.75rem;margin-top:0.35rem;">
                ${['Dairy', 'Gluten', 'Nuts', 'Soy', 'Eggs', 'None / Pure Veg'].map(allergen => `
                  <label style="display:flex;align-items:center;gap:0.45rem;font-size:0.85rem;background:var(--bg-surface-alt);padding:0.45rem 0.65rem;border-radius:var(--radius-sm);cursor:pointer;">
                    <input type="checkbox" name="allergenCheck" value="${allergen}" ${this.formData.allergens.includes(allergen) ? 'checked' : ''} style="accent-color:var(--mint-primary);" />
                    <span>${allergen}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          </div>
        `;

      case 3:
        return `
          <div style="display:flex;flex-direction:column;gap:1.25rem;">
            <div class="control-field">
              <label class="control-label">Pickup & Loading Location *</label>
              <input type="text" id="modalLocation" value="${this.formData.location}" required />
            </div>

            <div class="control-field">
              <label class="control-label">Food Photo Preset / Upload</label>
              <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:1rem;margin-top:0.35rem;">
                <div class="photo-choice ${this.formData.image === '/images/veg_rice.jpg' ? 'selected' : ''}" data-img="/images/veg_rice.jpg" style="cursor:pointer;border:2px solid ${this.formData.image === '/images/veg_rice.jpg' ? 'var(--mint-primary)' : 'var(--border-card)'};border-radius:var(--radius-md);overflow:hidden;text-align:center;">
                  <img src="/images/veg_rice.jpg" style="width:100%;height:80px;object-fit:cover;display:block;" />
                  <span style="font-size:0.72rem;padding:0.3rem;display:block;font-weight:600;">Warm Rice</span>
                </div>
                <div class="photo-choice ${this.formData.image === '/images/sandwiches.jpg' ? 'selected' : ''}" data-img="/images/sandwiches.jpg" style="cursor:pointer;border:2px solid ${this.formData.image === '/images/sandwiches.jpg' ? 'var(--mint-primary)' : 'var(--border-card)'};border-radius:var(--radius-md);overflow:hidden;text-align:center;">
                  <img src="/images/sandwiches.jpg" style="width:100%;height:80px;object-fit:cover;display:block;" />
                  <span style="font-size:0.72rem;padding:0.3rem;display:block;font-weight:600;">Sandwiches</span>
                </div>
                <div class="photo-choice ${this.formData.image === '/images/fruit_boxes.jpg' ? 'selected' : ''}" data-img="/images/fruit_boxes.jpg" style="cursor:pointer;border:2px solid ${this.formData.image === '/images/fruit_boxes.jpg' ? 'var(--mint-primary)' : 'var(--border-card)'};border-radius:var(--radius-md);overflow:hidden;text-align:center;">
                  <img src="/images/fruit_boxes.jpg" style="width:100%;height:80px;object-fit:cover;display:block;" />
                  <span style="font-size:0.72rem;padding:0.3rem;display:block;font-weight:600;">Fruit Boxes</span>
                </div>
              </div>
            </div>

            <div class="control-field">
              <label class="control-label">Additional Handling Instructions</label>
              <textarea id="modalNotes" rows="2" placeholder="e.g. Please bring insulated food bags or hot boxes...">${this.formData.notes}</textarea>
            </div>
          </div>
        `;

      case 4:
        return `
          <div style="display:flex;flex-direction:column;gap:1.25rem;">
            <div style="background:var(--bg-surface-alt);border:1.5px solid var(--mint-border);padding:1.25rem;border-radius:var(--radius-lg);">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.75rem;">
                <span class="brand-badge" style="background:var(--mint-subtle);color:var(--mint-dark);">Ready to broadcast</span>
                <span style="font-size:0.75rem;color:var(--text-muted);">Step 4 of 4</span>
              </div>

              <div style="display:flex;gap:1.25rem;">
                <img src="${this.formData.image}" style="width:110px;height:90px;object-fit:cover;border-radius:var(--radius-md);" />
                <div>
                  <h3 style="font-family:var(--font-display);font-size:1.2rem;font-weight:700;color:var(--primary-forest);">
                    ${this.formData.name}
                  </h3>
                  <div style="font-size:0.875rem;font-weight:600;color:var(--mint-dark);margin-top:0.25rem;">
                    ${this.formData.meals} meals • ~${this.formData.weightKg} kg (${this.formData.dietary})
                  </div>
                  <div style="font-size:0.8125rem;color:var(--text-secondary);margin-top:0.25rem;">
                    Safe until: <strong>${this.formData.safeUntil}</strong> (Prepared at ${this.formData.preparedTime})
                  </div>
                  <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem;">
                    Pickup: ${this.formData.location}
                  </div>
                </div>
              </div>
            </div>

            <!-- Confirmation Checklist -->
            <div style="padding:0.75rem 1rem;background:var(--bg-surface);border:1px solid var(--border-light);border-radius:var(--radius-md);font-size:0.8125rem;color:var(--text-secondary);display:flex;flex-direction:column;gap:0.4rem;">
              <div style="display:flex;align-items:center;gap:0.5rem;color:var(--mint-dark);font-weight:600;">
                ${icons.check(14)}
                <span>Food is stored at safe temperatures (>65°C hot / <5°C cold).</span>
              </div>
              <div style="display:flex;align-items:center;gap:0.5rem;color:var(--mint-dark);font-weight:600;">
                ${icons.check(14)}
                <span>Allergens and ingredients are accurately listed.</span>
              </div>
              <div style="display:flex;align-items:center;gap:0.5rem;color:var(--mint-dark);font-weight:600;">
                ${icons.check(14)}
                <span>NourishAI will automatically notify Hope Community Kitchen and nearby volunteers upon publishing.</span>
              </div>
            </div>
          </div>
        `;
    }
  }

  attachEvents() {
    const backdrop = document.getElementById('listingModalBackdrop');
    if (!backdrop) return;

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) this.close();
    });

    const closeBtn = document.getElementById('closeListingModalBtn');
    if (closeBtn) closeBtn.onclick = () => this.close();

    const cancelBtn = document.getElementById('modalCancelBtn');
    if (cancelBtn) cancelBtn.onclick = () => this.close();

    const nextBtn = document.getElementById('modalNextBtn');
    if (nextBtn) {
      nextBtn.onclick = () => {
        this.saveCurrentStepData();
        if (this.currentStep < 4) {
          this.currentStep++;
          this.render();
          this.attachEvents();
        } else {
          // Publish!
          this.publishListing();
        }
      };
    }

    const prevBtn = document.getElementById('modalPrevBtn');
    if (prevBtn) {
      prevBtn.onclick = () => {
        this.saveCurrentStepData();
        if (this.currentStep > 1) {
          this.currentStep--;
          this.render();
          this.attachEvents();
        }
      };
    }

    // Photo selection in step 3
    const photoChoices = backdrop.querySelectorAll('.photo-choice');
    photoChoices.forEach(choice => {
      choice.onclick = () => {
        const img = choice.getAttribute('data-img');
        this.formData.image = img;
        photoChoices.forEach(c => c.style.borderColor = 'var(--border-card)');
        choice.style.borderColor = 'var(--mint-primary)';
      };
    });
  }

  saveCurrentStepData() {
    if (this.currentStep === 1) {
      const name = document.getElementById('modalFoodName');
      const cat = document.getElementById('modalFoodCategory');
      const diet = document.getElementById('modalDietary');
      const meals = document.getElementById('modalMeals');
      const weight = document.getElementById('modalWeight');
      if (name) this.formData.name = name.value.trim() || this.formData.name;
      if (cat) this.formData.category = cat.value;
      if (diet) this.formData.dietary = diet.value;
      if (meals) this.formData.meals = Number(meals.value) || this.formData.meals;
      if (weight) this.formData.weightKg = Number(weight.value) || this.formData.weightKg;
    } else if (this.currentStep === 2) {
      const prep = document.getElementById('modalPrepTime');
      const safe = document.getElementById('modalSafeUntil');
      if (prep) this.formData.preparedTime = prep.value.trim() || this.formData.preparedTime;
      if (safe) this.formData.safeUntil = safe.value.trim() || this.formData.safeUntil;
      const checkedAllergens = Array.from(document.querySelectorAll('input[name="allergenCheck"]:checked')).map(cb => cb.value);
      this.formData.allergens = checkedAllergens.length > 0 ? checkedAllergens : ["None"];
    } else if (this.currentStep === 3) {
      const loc = document.getElementById('modalLocation');
      const notes = document.getElementById('modalNotes');
      if (loc) this.formData.location = loc.value.trim() || this.formData.location;
      if (notes) this.formData.notes = notes.value.trim() || this.formData.notes;
    }
  }

  publishListing() {
    store.addSurplusListing({
      name: this.formData.name,
      category: this.formData.category,
      meals: this.formData.meals,
      weightKg: this.formData.weightKg,
      preparedTime: this.formData.preparedTime,
      safeUntil: this.formData.safeUntil,
      dietary: this.formData.dietary,
      allergens: this.formData.allergens,
      location: this.formData.location,
      image: this.formData.image,
      notes: this.formData.notes
    });

    this.close();
    toast.show(`✓ Published listing: "${this.formData.name}" (${this.formData.meals} meals)! Alerting nearby NGOs...`, 'success', 4500);

    // switch to surplus page if not already there
    window.location.hash = '#surplus';
  }

  open() {
    this.currentStep = 1;
    this.render();
    this.attachEvents();
    const backdrop = document.getElementById('listingModalBackdrop');
    if (backdrop) {
      requestAnimationFrame(() => backdrop.classList.add('open'));
    }
  }

  close() {
    const backdrop = document.getElementById('listingModalBackdrop');
    if (backdrop) {
      backdrop.classList.remove('open');
      setTimeout(() => backdrop.remove(), 300);
    }
  }
}

export const listingModal = new ListingModal();
