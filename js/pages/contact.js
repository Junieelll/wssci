import { categories } from '../data.js';
import { setupScrollReveal } from '../utils.js';

export const Contact = {
  render: () => {
    return `
      <!-- CONTACT SECTION -->
      <section class="py-32 px-6 lg:px-16 max-w-4xl mx-auto mt-10">
        <div class="text-center space-y-4 mb-14">
          <div class="reveal flex justify-center"><div class="section-pill"><span class="dot"></span>Get In Touch</div></div>
          <h2 class="reveal delay-100 font-display font-800 text-4xl lg:text-5xl text-ink">Request a Quote<br>or <span class="text-brand">Consultation</span></h2>
          <p class="reveal delay-200 font-body text-ink-3">Our safety experts will respond within 24 hours with the right PPE solution for your needs.</p>
        </div>
        <div class="reveal bg-white border border-brand-muted/40 rounded-3xl p-8 lg:p-12 shadow-xl" style="box-shadow:0 20px 80px rgba(39,194,145,.08);">
          <div class="grid lg:grid-cols-2 gap-8">
            <div class="space-y-5">
              <div>
                <label class="font-display font-600 text-sm text-ink mb-2 block">Full Name</label>
                <input type="text" class="input-field" placeholder="Juan dela Cruz" />
              </div>
              <div>
                <label class="font-display font-600 text-sm text-ink mb-2 block">Company</label>
                <input type="text" class="input-field" placeholder="Your Company, Inc." />
              </div>
              <div>
                <label class="font-display font-600 text-sm text-ink mb-2 block">Email Address</label>
                <input type="email" class="input-field" placeholder="juan@company.com" />
              </div>
              <div>
                <label class="font-display font-600 text-sm text-ink mb-2 block">Phone</label>
                <input type="tel" class="input-field" placeholder="+63 9XX XXX XXXX" />
              </div>
            </div>
            <div class="space-y-5">
              <div>
                <label class="font-display font-600 text-sm text-ink mb-2 block">PPE Category Needed</label>
                <div class="relative" id="custom-dropdown">
                  <input type="hidden" name="ppe_category" id="ppe-category-input" value="">
                  <button type="button" class="input-field min-h-[48px] py-3 flex items-center justify-between text-left cursor-pointer bg-white transition-all duration-300 hover:border-brand" onclick="document.getElementById('dropdown-options').classList.toggle('hidden')">
                    <span id="dropdown-selected" class="flex items-center gap-3 text-ink-3">
                      <span class="flex items-center justify-center text-brand text-sm">
                        <i class="fa-solid fa-layer-group"></i>
                      </span>
                      <span class="font-500">Select Category...</span>
                    </span>
                    <i class="fa-solid fa-chevron-down text-ink-3 text-xs"></i>
                  </button>
                  <div id="dropdown-options" class="hidden absolute top-full left-0 w-full mt-2 bg-white border border-brand-muted/40 rounded-xl shadow-2xl z-20 max-h-64 overflow-y-auto overflow-x-hidden transform transition-all duration-300">
                    <!-- Custom options injected by JS -->
                  </div>
                </div>
              </div>
              <div>
                <label class="font-display font-600 text-sm text-ink mb-2 block">Estimated Quantity</label>
                <input type="number" class="input-field" placeholder="e.g. 50 units" />
              </div>
              <div>
                <label class="font-display font-600 text-sm text-ink mb-2 block">Message</label>
                <textarea class="input-field" rows="4" placeholder="Tell us about your safety requirements…"></textarea>
              </div>
            </div>
          </div>
          <div class="mt-10 flex flex-col lg:flex-row gap-8 items-center justify-between border-t border-brand-muted/20 pt-8">
            <div class="flex items-start gap-4 text-ink-3">
              <span class="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center flex-shrink-0 text-brand">
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <p class="text-sm font-body leading-relaxed max-w-xs">2nd Floor 2J Lucky Place Bldg., M. Villarica Road, Sta Rosa 1, Marilao, Bulacan</p>
            </div>
            <button class="btn-primary w-full lg:w-auto px-10 py-4 shadow-2xl" onclick="this.innerHTML='<span class=\'flex items-center gap-2\'>✓ Request Sent Successfully</span>'">
              Send Request
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>
    `;
  },
  init: () => {
    setupScrollReveal();

    const dropdownSelect = document.getElementById('dropdown-selected');
    const dropdownOptions = document.getElementById('dropdown-options');
    const hiddenInput = document.getElementById('ppe-category-input');

    if (dropdownSelect && dropdownOptions) {
      dropdownOptions.innerHTML = categories.map(c => `
        <button type="button" data-val="${c.id}" class="dropdown-item w-full text-left px-4 py-3 flex items-center gap-4 hover:bg-surface-2 transition-all duration-200 border-b border-brand-muted/10 last:border-0 font-body text-sm text-ink group cursor-pointer">
          <span class="flex items-center justify-center text-brand transition-transform group-hover:scale-110">
            ${c.icon.replace('text-3xl', 'text-lg')}
          </span>
          <span class="font-500">${c.label}</span>
        </button>
      `).join('');

      document.querySelectorAll('.dropdown-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const val = e.currentTarget.dataset.val;
          const category = categories.find(c => c.id === val);
          
          if (category) {
            dropdownSelect.innerHTML = `
              <span class="flex items-center gap-3 text-ink">
                 <span class="flex items-center justify-center text-brand">
                    ${category.icon.replace('text-3xl', 'text-sm')}
                 </span>
                 <span class="font-500">${category.label}</span>
              </span>
            `;
            if (hiddenInput) hiddenInput.value = val;
          }
          dropdownOptions.classList.add('hidden');
        });
      });
      
      // Close dropdown if clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('#custom-dropdown')) {
          dropdownOptions.classList.add('hidden');
        }
      });
    }
  }
};
