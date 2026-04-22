import { categories } from '../data.js';
import { setupScrollReveal } from '../utils.js';

export const Contact = {
  render: () => {
    return `
      <!-- CONTACT HERO -->
      <section class="relative pt-28 pb-14 px-3 lg:px-16 overflow-hidden bg-surface">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4"></div>
        <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-caution/8 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto relative z-10">

          <!-- Header -->
          <div class="text-center mb-12">
            <div class="reveal flex justify-center mb-4"><div class="section-pill"><span class="dot"></span>Get In Touch</div></div>
            <h1 class="reveal delay-100 font-display font-800 text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight">
              Talk to Our<br><span class="text-brand">Safety Experts</span>
            </h1>
            <p class="reveal delay-200 font-body text-ink-3 mt-4 max-w-md mx-auto text-base leading-relaxed">
              We'll get back to you within 24 hours with the right PPE solution for your industry.
            </p>
          </div>

          <!-- Split Card -->
          <div class="reveal delay-300 grid lg:grid-cols-[1fr_1.4fr] rounded-[2rem] overflow-hidden shadow-2xl border border-brand-muted/20"
               style="box-shadow:0 32px 80px rgba(39,194,145,0.10), 0 4px 24px rgba(0,0,0,0.06);">

            <!-- ── LEFT INFO PANEL ── -->
            <div class="relative bg-ink p-8 lg:p-12 flex flex-col justify-between gap-10 overflow-hidden">
              <div class="absolute inset-0 opacity-[0.04]"
                   style="background-image:url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%221%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
              <div class="absolute -bottom-16 -right-16 w-56 h-56 bg-brand/20 rounded-full blur-3xl pointer-events-none"></div>

              <!-- Brand intro -->
              <div class="relative z-10">
                <div class="inline-flex items-center gap-2 bg-brand/15 border border-brand/25 text-brand text-xs font-display font-700 tracking-widest uppercase px-3 py-1.5 rounded-full mb-8">
                  <span class="w-1.5 h-1.5 rounded-full bg-brand inline-block"></span>
                  WSSCI — Since 2016
                </div>
                <h2 class="font-display font-800 text-white text-2xl lg:text-3xl leading-snug mb-3">
                  Your trusted source<br>for certified PPE
                </h2>
                <p class="font-body text-white/50 text-sm leading-relaxed max-w-xs">
                  Authorized distributor of DeltaPlus &amp; Safety Jogger — serving the Philippines' largest corporations.
                </p>
              </div>

              <!-- Contact links -->
              <div class="relative z-10 space-y-5">

                <a href="https://www.google.com/maps/place/World+Safety+Supply+Center+Inc." target="_blank" class="flex items-start gap-4 group">
                  <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-300">
                    <i data-lucide="map-pin" class="w-4 h-4 text-white" stroke-width="1.8"></i>
                  </div>
                  <div>
                    <div class="text-white/40 text-[10px] font-display font-700 uppercase tracking-widest mb-0.5">Address</div>
                    <div class="text-white/80 text-sm font-body leading-relaxed group-hover:text-white transition-colors">Lucky Place Bldg., M. Villarica Road,<br>Sta Rosa 1, Marilao, Bulacan</div>
                  </div>
                </a>

                <a href="tel:0443056536" class="flex items-start gap-4 group">
                  <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-300">
                    <i data-lucide="phone" class="w-4 h-4 text-white" stroke-width="1.8"></i>
                  </div>
                  <div>
                    <div class="text-white/40 text-[10px] font-display font-700 uppercase tracking-widest mb-0.5">Telephone</div>
                    <div class="text-white/80 text-sm font-body group-hover:text-white transition-colors">044 305-6536</div>
                  </div>
                </a>

                <a href="tel:09688524423" class="flex items-start gap-4 group">
                  <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-300">
                    <i data-lucide="smartphone" class="w-4 h-4 text-white" stroke-width="1.8"></i>
                  </div>
                  <div>
                    <div class="text-white/40 text-[10px] font-display font-700 uppercase tracking-widest mb-0.5">Mobile</div>
                    <div class="text-white/80 text-sm font-body group-hover:text-white transition-colors">0968-852-4423 &nbsp;·&nbsp; 0968-855-9162</div>
                  </div>
                </a>

                <a href="mailto:worldsafetysci@gmail.com" class="flex items-start gap-4 group">
                  <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-300">
                    <i data-lucide="mail" class="w-4 h-4 text-white" stroke-width="1.8"></i>
                  </div>
                  <div>
                    <div class="text-white/40 text-[10px] font-display font-700 uppercase tracking-widest mb-0.5">Email</div>
                    <div class="text-white/80 text-sm font-body group-hover:text-white transition-colors break-all">worldsafetysci@gmail.com</div>
                  </div>
                </a>

              </div>

              <!-- Social row -->
              <div class="relative z-10 flex items-center gap-4 pt-2 border-t border-white/10">
                <a href="https://www.facebook.com/profile.php?id=61554434231420" target="_blank"
                   class="flex items-center gap-2 text-white/50 hover:text-white text-xs font-display font-700 uppercase tracking-widest transition-colors">
                  <i data-lucide="facebook" class="w-4 h-4" stroke-width="1.8"></i> Facebook
                </a>
                <span class="w-px h-4 bg-white/20"></span>
                <a href="https://www.facebook.com/messages/t/61554434231420/" target="_blank"
                   class="flex items-center gap-2 text-white/50 hover:text-white text-xs font-display font-700 uppercase tracking-widest transition-colors">
                  <i data-lucide="message-circle" class="w-4 h-4" stroke-width="1.8"></i> Messenger
                </a>
              </div>
            </div>

            <!-- ── RIGHT FORM PANEL ── -->
            <div class="bg-white p-8 lg:p-12">
              <h3 class="font-display font-800 text-ink text-xl mb-1">Send us a Request</h3>
              <p class="font-body text-ink-3 text-sm mb-8">Fill out the form and we'll prepare a quote tailored to your needs.</p>

              <form id="contact-form" class="space-y-5" onsubmit="return false;">

                <!-- Name + Company -->
                <div class="grid sm:grid-cols-2 gap-4">
                  <div class="contact-field-group">
                    <label class="contact-label">Full Name</label>
                    <input type="text" class="contact-input" placeholder="Juan dela Cruz" />
                  </div>
                  <div class="contact-field-group">
                    <label class="contact-label">Company</label>
                    <input type="text" class="contact-input" placeholder="Your Company, Inc." />
                  </div>
                </div>

                <!-- Email + Phone -->
                <div class="grid sm:grid-cols-2 gap-4">
                  <div class="contact-field-group">
                    <label class="contact-label">Email Address</label>
                    <input type="email" class="contact-input" placeholder="juan@company.com" />
                  </div>
                  <div class="contact-field-group">
                    <label class="contact-label">Phone</label>
                    <input type="tel" class="contact-input" placeholder="+63 9XX XXX XXXX" />
                  </div>
                </div>

                <!-- Category + Quantity -->
                <div class="grid sm:grid-cols-2 gap-4">

                  <!-- ── DROPDOWN ── -->
                  <div class="contact-field-group">
                    <label class="contact-label">PPE Category</label>
                    <div class="relative" id="custom-dropdown">
                      <input type="hidden" name="ppe_category" id="ppe-category-input" value="">

                      <!-- Trigger button — uses contact-select (flex variant) -->
                      <button type="button" id="dropdown-trigger" class="contact-select">
                        <span id="dropdown-selected" class="flex items-center gap-2 text-ink-3 min-w-0">
                          <i data-lucide="layers" class="w-3.5 h-3.5 text-brand flex-shrink-0" stroke-width="1.8"></i>
                          <span class="truncate text-sm">Select Category…</span>
                        </span>
                        <i data-lucide="chevron-down" id="dropdown-chevron"
                           class="w-4 h-4 text-ink-3 flex-shrink-0 transition-transform duration-200"
                           stroke-width="1.8"></i>
                      </button>

                      <!-- Options panel -->
                      <div id="dropdown-options"
                           class="hidden absolute top-full left-0 right-0 mt-1.5 bg-white border border-brand-muted/40 rounded-2xl shadow-2xl z-30 max-h-56 overflow-y-auto">
                        <!-- Injected by JS -->
                      </div>
                    </div>
                  </div>

                  <div class="contact-field-group">
                    <label class="contact-label">Estimated Quantity</label>
                    <input type="number" class="contact-input" placeholder="e.g. 50 units" min="1" />
                  </div>
                </div>

                <!-- Message -->
                <div class="contact-field-group">
                  <label class="contact-label">Message</label>
                  <textarea class="contact-input resize-none" rows="4"
                            placeholder="Describe your safety requirements, industry, or specific PPE needs…"></textarea>
                </div>

                <!-- Submit -->
                <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                  <p class="text-ink-3 text-xs font-body flex items-center gap-1.5">
                    <i data-lucide="lock" class="w-3 h-3 text-brand flex-shrink-0" stroke-width="1.8"></i>
                    Your data is kept private &amp; never shared.
                  </p>
                  <button id="submit-btn" type="submit"
                    class="btn-primary w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 shadow-lg"
                    onclick="
                      this.innerHTML = '<i data-lucide=\\'check\\' style=\\'width:16px;height:16px;margin-right:6px;\\'></i> Request Sent!';
                      this.classList.add(\\'opacity-70\\');
                      this.disabled = true;
                      if(window.lucide) window.lucide.createIcons();
                    ">
                    Send Request
                    <i data-lucide="arrow-right" class="w-4 h-4" stroke-width="2.2"></i>
                  </button>
                </div>

              </form>
            </div>
          </div><!-- /split card -->
        </div>
      </section>

      <!-- CREDENTIALS — inline trust strip -->
      <section class="reveal py-16 px-6 lg:px-16 bg-caution">
        <div class="max-w-5xl mx-auto rounded-[2rem] bg-ink px-8 py-10 sm:px-12 sm:py-12 relative overflow-hidden">
          <!-- Subtle noise -->
          <div class="absolute inset-0 opacity-[0.04]" style="background-image:url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%221%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
          <div class="absolute -top-20 -right-20 w-64 h-64 bg-caution/10 rounded-full blur-3xl pointer-events-none"></div>

          <!-- Eyebrow -->
          <div class="relative z-10 text-center mb-10">
            <p class="font-display font-700 text-caution text-[10px] uppercase tracking-[0.2em] mb-2">Registration Details</p>
            <h2 class="font-display font-800 text-white text-2xl sm:text-3xl">Company Credentials</h2>
          </div>

          <!-- Credential rows -->
          <div class="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 sm:gap-x-0">
            ${[
              { lucide: 'building-2', label: 'Registered Name',  value: 'World Safety Supply Center, Inc.' },
              { lucide: 'briefcase',  label: 'Type of Business', value: 'Trading — PPE & Safety Gear' },
              { lucide: 'award',      label: 'SEC Reg. No.',     value: 'CS20162163 · Sept 2016' },
              { lucide: 'file-text',  label: 'Business Permit',  value: '2355 · OR 1232925' },
            ].map((item, i) => `
              <div class="flex flex-col items-center text-center sm:border-r sm:border-white/10 sm:last:border-0 px-2 sm:px-4">
                <div class="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center mb-3">
                  <i data-lucide="${item.lucide}" class="w-4 h-4 text-caution" stroke-width="1.8"></i>
                </div>
                <div class="font-display font-700 text-white/35 text-[9px] uppercase tracking-[0.15em] mb-1">${item.label}</div>
                <div class="font-body text-white/80 text-sm leading-snug">${item.value}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- MAP -->
      <section class="py-20 px-6 lg:px-16">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-10">
            <div class="reveal section-pill mx-auto mb-4 w-fit"><span class="dot"></span>Find Us</div>
            <h2 class="reveal delay-100 font-display font-800 text-3xl text-ink">Visit Our <span class="text-brand">Office</span></h2>
          </div>
          <div class="reveal rounded-[2rem] overflow-hidden shadow-xl border border-brand-muted/20 h-[380px] sm:h-[460px]">
            <iframe
              src="https://maps.google.com/maps?q=World+Safety+Supply+Center+Inc.,+M.+Villarica+Rd,+Marilao,+Bulacan&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div class="mt-6 text-center">
            <a href="https://www.google.com/maps/place/World+Safety+Supply+Center+Inc./@14.7720445,120.9611294,17z"
               target="_blank" class="btn-outline inline-flex items-center gap-2">
              <i data-lucide="navigation" class="w-4 h-4" stroke-width="1.8"></i> Get Directions
            </a>
          </div>
        </div>
      </section>

      <style>
        /* ── shared field base ── */
        .contact-label {
          display: block;
          font-family: var(--font-display, inherit);
          font-weight: 600;
          font-size: 0.75rem;
          color: var(--color-ink, #1a1a1a);
          margin-bottom: 0.375rem;
          letter-spacing: 0.01em;
        }
        .contact-input {
          display: block;
          width: 100%;
          padding: 0.65rem 0.875rem;
          font-size: 0.875rem;
          font-family: var(--font-body, inherit);
          color: var(--color-ink, #1a1a1a);
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 0.75rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          min-height: 44px;
          box-sizing: border-box;
        }
        .contact-input:focus {
          border-color: #27C291;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(39,194,145,0.12);
        }
        .contact-input::placeholder { color: #94a3b8; }
        .contact-field-group { display: flex; flex-direction: column; }

        /* ── dropdown trigger — flex variant so chevron stays on the right ── */
        .contact-select {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0.65rem 0.875rem;
          font-size: 0.875rem;
          font-family: var(--font-body, inherit);
          color: var(--color-ink, #1a1a1a);
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 0.75rem;
          outline: none;
          cursor: pointer;
          min-height: 44px;
          box-sizing: border-box;
          text-align: left;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          gap: 0.5rem;
        }
        .contact-select:focus,
        .contact-select.open {
          border-color: #27C291;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(39,194,145,0.12);
        }
        .contact-select .chevron-open { transform: rotate(180deg); }
      </style>
    `;
  },

  init: () => {
    setupScrollReveal();

    const lucideIcons = {
      shoes: 'footprints',
      head: 'hard-hat',
      eye: 'glasses',
      vest: 'shirt',
      gloves: 'hand',
      body: 'shield',
      hearing: 'headphones',
      welding: 'flame',
      fall: 'link-2'
    };

    // Render all Lucide icons present at render time
    if (window.lucide) window.lucide.createIcons();

    const dropdownSelected = document.getElementById('dropdown-selected');
    const dropdownOptions  = document.getElementById('dropdown-options');
    const dropdownTrigger  = document.getElementById('dropdown-trigger');
    const dropdownChevron  = document.getElementById('dropdown-chevron');
    const hiddenInput      = document.getElementById('ppe-category-input');

    if (!dropdownSelected || !dropdownOptions) return;

    // Populate options
    dropdownOptions.innerHTML = categories.map(c => `
      <button type="button" data-val="${c.id}"
        class="dropdown-item w-full text-left px-4 py-2.5 flex items-center gap-3
               hover:bg-surface-2 transition-colors duration-150
               border-b border-brand-muted/10 last:border-0
               font-body text-sm text-ink cursor-pointer first:rounded-t-2xl last:rounded-b-2xl">
        <span class="text-brand flex-shrink-0">
          <i data-lucide="${lucideIcons[c.id] || 'layers'}" class="w-4 h-4" stroke-width="1.8"></i>
        </span>
        <span class="font-500">${c.label}</span>
      </button>
    `).join('');

    // Rehydrate Lucide icons for dynamically injected HTML
    if (window.lucide) window.lucide.createIcons();

    // Toggle open / close
    dropdownTrigger?.addEventListener('click', () => {
      const isOpen = !dropdownOptions.classList.contains('hidden');
      dropdownOptions.classList.toggle('hidden');
      dropdownChevron?.classList.toggle('chevron-open', !isOpen);
      dropdownTrigger.classList.toggle('open', !isOpen);
    });

    // Select item
    document.querySelectorAll('.dropdown-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const val      = e.currentTarget.dataset.val;
        const category = categories.find(c => c.id === val);
        if (category) {
          dropdownSelected.innerHTML = `
            <span class="flex items-center gap-2 min-w-0 text-ink">
              <i data-lucide="${lucideIcons[category.id] || 'layers'}" class="w-4 h-4 text-brand flex-shrink-0" stroke-width="1.8"></i>
              <span class="font-500 truncate text-sm">${category.label}</span>
            </span>`;
          if (hiddenInput) hiddenInput.value = val;
          if (window.lucide) window.lucide.createIcons();
        }
        dropdownOptions.classList.add('hidden');
        dropdownChevron?.classList.remove('chevron-open');
        dropdownTrigger?.classList.remove('open');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#custom-dropdown')) {
        dropdownOptions.classList.add('hidden');
        dropdownChevron?.classList.remove('chevron-open');
        dropdownTrigger?.classList.remove('open');
      }
    });
  }
};
