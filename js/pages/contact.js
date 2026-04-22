import { categories } from '../data.js';
import { setupScrollReveal } from '../utils.js';

export const Contact = {
  render: () => {
    return `
      <!-- CONTACT SECTION -->
      <section class="py-32 px-6 lg:px-16 max-w-7xl mx-auto mt-10">
        <div class="text-center space-y-4 mb-14">
          <div class="reveal flex justify-center"><div class="section-pill"><span class="dot"></span>Get In Touch</div></div>
          <h2 class="reveal delay-100 font-display font-800 text-4xl lg:text-5xl text-ink">Request a Quote<br>or <span class="text-brand">Consultation</span></h2>
          <p class="reveal delay-200 font-body text-ink-3">Our safety experts will respond within 24 hours with the right PPE solution for your needs.</p>
        </div>
        <div class="reveal bg-white border border-caution/40 rounded-3xl p-8 lg:p-12 shadow-xl" style="box-shadow:0 20px 80px rgba(255,204,0,0.18);">
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
              <p class="text-sm font-body leading-relaxed max-w-xs">Lucky Place Bldg., M. Villarica Road, Sta Rosa 1, Marilao, Bulacan</p>
            </div>
            <button class="btn-primary w-full lg:w-auto px-10 py-4 shadow-2xl" onclick="this.innerHTML='<span class=\\'flex items-center gap-2\\'>✓ Request Sent Successfully</span>'">
              Send Request
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      <!-- COMPANY CONTACT DETAILS -->
      <section class="py-20 px-6 lg:px-16 bg-caution">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-14">
            <div class="reveal section-pill mx-auto mb-4 w-fit" style="background:rgba(0,0,0,0.08);border-color:rgba(0,0,0,0.12);"><span class="dot" style="background:#1a1a1a;"></span><span class="text-ink">Contact Details</span></div>
            <h2 class="reveal delay-100 font-display font-800 text-3xl lg:text-4xl text-ink">Reach Us <span class="text-ink/60">Directly</span></h2>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <!-- Address -->
            <div class="reveal group relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-7 border border-black/10 shadow-sm hover:shadow-xl hover:border-black/20 transition-all duration-500 overflow-hidden">
              <div class="absolute top-0 left-0 w-32 h-32 bg-black/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
              <div class="relative z-10">
                <div class="w-12 h-12 rounded-2xl bg-ink/10 flex items-center justify-center mb-5 group-hover:bg-ink group-hover:scale-110 transition-all duration-300">
                  <i class="fa-solid fa-location-dot text-ink group-hover:text-caution text-lg transition-colors duration-300"></i>
                </div>
                <h3 class="font-display font-800 text-ink text-base mb-2">Office Address</h3>
                <p class="font-body text-ink/60 text-sm leading-relaxed">Lucky Place Bldg., M. Villarica Road, Sta Rosa 1, Marilao, Bulacan</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="reveal delay-100 group relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-7 border border-black/10 shadow-sm hover:shadow-xl hover:border-black/20 transition-all duration-500 overflow-hidden">
              <div class="absolute top-0 left-0 w-32 h-32 bg-black/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
              <div class="relative z-10">
                <div class="w-12 h-12 rounded-2xl bg-ink/10 flex items-center justify-center mb-5 group-hover:bg-ink group-hover:scale-110 transition-all duration-300">
                  <i class="fa-solid fa-phone text-ink group-hover:text-caution text-lg transition-colors duration-300"></i>
                </div>
                <h3 class="font-display font-800 text-ink text-base mb-2">Telephone</h3>
                <a href="tel:0443056536" class="font-body text-ink/60 text-sm leading-relaxed hover:text-ink transition-colors block">044 305-6536</a>
              </div>
            </div>

            <!-- Mobile -->
            <div class="reveal delay-200 group relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-7 border border-black/10 shadow-sm hover:shadow-xl hover:border-black/20 transition-all duration-500 overflow-hidden">
              <div class="absolute top-0 left-0 w-32 h-32 bg-black/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
              <div class="relative z-10">
                <div class="w-12 h-12 rounded-2xl bg-ink/10 flex items-center justify-center mb-5 group-hover:bg-ink group-hover:scale-110 transition-all duration-300">
                  <i class="fa-solid fa-mobile-screen text-ink group-hover:text-caution text-lg transition-colors duration-300"></i>
                </div>
                <h3 class="font-display font-800 text-ink text-base mb-2">Mobile</h3>
                <a href="tel:09688524423" class="font-body text-ink/60 text-sm leading-relaxed hover:text-ink transition-colors block">0968-852-4423</a>
                <a href="tel:09688559162" class="font-body text-ink/60 text-sm leading-relaxed hover:text-ink transition-colors block">0968-855-9162</a>
              </div>
            </div>

            <!-- Email -->
            <div class="reveal delay-300 group relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-7 border border-black/10 shadow-sm hover:shadow-xl hover:border-black/20 transition-all duration-500 overflow-hidden">
              <div class="absolute top-0 left-0 w-32 h-32 bg-black/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
              <div class="relative z-10">
                <div class="w-12 h-12 rounded-2xl bg-ink/10 flex items-center justify-center mb-5 group-hover:bg-ink group-hover:scale-110 transition-all duration-300">
                  <i class="fa-solid fa-envelope text-ink group-hover:text-caution text-lg transition-colors duration-300"></i>
                </div>
                <h3 class="font-display font-800 text-ink text-base mb-2">Email</h3>
                <a href="mailto:worldsafetysci@gmail.com" class="font-body text-ink/60 text-sm leading-relaxed hover:text-ink transition-colors block break-all">worldsafetysci@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- COMPANY REGISTRATION DETAILS -->
      <section class="py-20 px-6 lg:px-16">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-14">
            <div class="reveal section-pill mx-auto mb-4 w-fit"><span class="dot"></span>Registration Details</div>
            <h2 class="reveal delay-100 font-display font-800 text-3xl lg:text-4xl text-ink">Company <span class="text-brand">Credentials</span></h2>
            <p class="reveal delay-200 font-body text-ink-3 mt-3 max-w-xl mx-auto text-sm">World Safety Supply Center, Inc. is a fully registered and compliant business entity.</p>
          </div>
          <div class="reveal bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-12 border border-brand-muted/20 shadow-lg max-w-4xl mx-auto">
            <div class="grid sm:grid-cols-2 gap-6">
              ${[
                { icon: 'fa-building', label: 'Registered Name', value: 'World Safety Supply Center, Inc.' },
                { icon: 'fa-briefcase', label: 'Type of Business', value: 'Trading — Personal Protective Equipment' },
                { icon: 'fa-certificate', label: 'SEC Reg. No.', value: 'CS20162163 (Sept. 23, 2016)' },
                { icon: 'fa-file-invoice', label: 'Business Permit No.', value: '2355 — OR No. 1232925 (Feb. 05, 2026)' },
              ].map(item => `
                <div class="flex items-start gap-4 p-4 rounded-2xl hover:bg-surface-2 transition-colors duration-300">
                  <div class="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class="fa-solid ${item.icon} text-brand text-sm"></i>
                  </div>
                  <div>
                    <div class="font-display font-700 text-ink text-sm">${item.label}</div>
                    <div class="font-body text-ink-3 text-sm mt-0.5">${item.value}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- MAP SECTION -->
      <section class="py-20 px-6 lg:px-16 bg-surface-warm">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-10">
            <div class="reveal section-pill mx-auto mb-4 w-fit"><span class="dot"></span>Find Us</div>
            <h2 class="reveal delay-100 font-display font-800 text-3xl lg:text-4xl text-ink">Visit Our <span class="text-brand">Office</span></h2>
          </div>
          <div class="reveal rounded-[2rem] overflow-hidden shadow-xl border border-brand-muted/20 h-[400px]">
            <iframe 
              src="https://maps.google.com/maps?q=World+Safety+Supply+Center+Inc.,+M.+Villarica+Rd,+Marilao,+Bulacan&t=&z=17&ie=UTF8&iwloc=&output=embed" 
              width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-full">
            </iframe>
          </div>
          <div class="mt-6 text-center">
            <a href="https://www.google.com/maps/place/World+Safety+Supply+Center+Inc./@14.7720445,120.9611294,17z" target="_blank" class="btn-outline inline-flex items-center gap-2">
              <i class="fa-solid fa-diamond-turn-right"></i> Get Directions
            </a>
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
