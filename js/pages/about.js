import { setupScrollReveal } from '../utils.js';

export const About = {
  render: () => {
    return `
      <!-- HERO BANNER -->
      <section class="relative pt-40 pb-24 px-6 lg:px-16 overflow-hidden bg-surface-2">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(39,194,145,0.07),transparent_60%)]"></div>
        <div class="max-w-7xl mx-auto relative z-10">
          <div class="reveal section-pill mb-6"><span class="dot"></span>About WSSCI</div>
          <h1 class="reveal delay-100 font-display font-900 text-5xl md:text-6xl lg:text-7xl text-ink leading-tight tracking-tight max-w-4xl">
            Protecting Workers <span class="text-brand">Since 2016</span>
          </h1>
          <p class="reveal delay-200 font-body text-ink-3 text-xl mt-6 max-w-2xl leading-relaxed">
            World Safety Supply Center, Inc. — the Philippines' trusted source for CE and OSHC certified Personal Protective Equipment, powered by DELTAPLUS.
          </p>
        </div>
      </section>

      <!-- COMPANY HISTORY -->
      <section class="py-24 px-6 lg:px-16">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <!-- Left: Text -->
          <div class="space-y-7">
            <div class="reveal section-pill"><span class="dot"></span>Our Story</div>
            <h2 class="reveal delay-100 font-display font-800 text-4xl lg:text-5xl text-ink leading-tight">
              Built on <span class="text-brand">Dedication</span> and Trust
            </h2>
            <div class="space-y-5 font-body text-ink-3 text-lg leading-relaxed">
              <p class="reveal delay-200">
                World Safety Supply Center, Inc. was founded in 2016 by its President, <strong class="text-ink font-700">Ramon Rogel</strong>, driven by over a decade of experience as a Sales Representative starting in 2003 — consistently surpassing targets with no base salary, running purely on commission.
              </p>
              <p class="reveal delay-300">
                His outstanding performance led <strong class="text-ink font-700">DELTAPLUS</strong>, one of the world's leading PPE manufacturers, to personally urge him to establish World Safety Supply Center, Inc. with their full operational support.
              </p>
              <p class="reveal delay-400">
                Barely a year after founding, the company was already servicing some of the Philippines' largest corporations. Today, WSSCI stands as a premier distributor of high-quality PPE — all CE and OSHC Certified — offered at truly reasonable prices.
              </p>
            </div>
          </div>

          <!-- Right: Info Card -->
          <div class="reveal-right">
            <div class="relative bg-white/50 backdrop-blur-xl rounded-[2.5rem] p-10 border border-brand-muted/20 shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden">
              <div class="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div class="relative z-10 space-y-7">
                <h3 class="font-display font-800 text-2xl text-ink">Company Details</h3>
                <div class="space-y-4">
                  ${[
                    { icon: 'fa-building', label: 'Registered Name', value: 'World Safety Supply Center, Inc.' },
                    { icon: 'fa-location-dot', label: 'Address', value: 'Lucky Place Bldg., M. Villarica Road, Sta. Rosa, Marilao, Bulacan' },
                    { icon: 'fa-briefcase', label: 'Type of Business', value: 'Trading — Personal Protective Equipment' },
                    { icon: 'fa-phone', label: 'Telephone', value: '044 305-6536' },
                    { icon: 'fa-mobile-screen', label: 'Mobile', value: '0968-8524423 / 0968-8559162' },
                    { icon: 'fa-envelope', label: 'Email', value: 'worldsafetysci@gmail.com' },
                    { icon: 'fa-certificate', label: 'SEC Reg. No.', value: 'CS20162163 (Sept. 23, 2016)' },
                  ].map(item => `
                    <div class="flex items-start gap-4">
                      <div class="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
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
          </div>
        </div>
      </section>

      <!-- MISSION & VISION -->
      <section class="py-24 px-6 lg:px-16 bg-surface-2">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <div class="reveal section-pill mx-auto mb-4 w-fit"><span class="dot"></span>Mission & Vision</div>
            <h2 class="reveal delay-100 font-display font-800 text-4xl lg:text-5xl text-ink leading-tight">
              What <span class="text-brand">Drives</span> Us
            </h2>
          </div>
          <div class="grid lg:grid-cols-2 gap-8">
            
            <!-- Mission -->
            <div class="reveal group relative bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 border border-brand-muted/20 shadow-sm hover:shadow-2xl hover:border-brand/30 transition-all duration-500 overflow-hidden">
              <div class="absolute top-0 left-0 w-40 h-40 bg-brand/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-brand/10 transition-colors duration-500"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mb-8 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                  <i class="fa-solid fa-bullseye text-brand group-hover:text-white text-xl transition-colors duration-300"></i>
                </div>
                <h3 class="font-display font-800 text-2xl text-ink mb-6">Our Mission</h3>
                <ul class="space-y-4">
                  <li class="flex items-start gap-4">
                    <div class="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div class="w-2 h-2 rounded-full bg-brand"></div>
                    </div>
                    <p class="font-body text-ink-3 leading-relaxed">To provide <strong class="text-ink font-600">100% quality performance and satisfaction</strong> in terms of services.</p>
                  </li>
                  <li class="flex items-start gap-4">
                    <div class="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div class="w-2 h-2 rounded-full bg-brand"></div>
                    </div>
                    <p class="font-body text-ink-3 leading-relaxed">To provide <strong class="text-ink font-600">quality, durable, and reliable Personal Protective Equipment</strong> to all our customers.</p>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Vision -->
            <div class="reveal delay-100 group relative bg-ink rounded-[2.5rem] p-10 border border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div class="absolute top-0 right-0 w-48 h-48 bg-brand/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 rounded-2xl bg-brand/20 flex items-center justify-center mb-8 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                  <i class="fa-solid fa-eye text-brand text-xl"></i>
                </div>
                <h3 class="font-display font-800 text-2xl text-white mb-6">Our Vision</h3>
                <p class="font-body text-white/70 text-lg leading-relaxed">
                  To be recognized and known as an <strong class="text-white">effective, reliable, and dependable supplier</strong> of Personal Protective Equipment to all our customers.
                </p>
                <div class="mt-8 pt-6 border-t border-white/10">
                  <p class="font-body text-white/40 text-sm italic">"Excellence in every piece of equipment we supply."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TRUST STATS STRIP -->
      <div class="bg-brand py-16 px-6 lg:px-16 overflow-hidden">
        <div class="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
          <div class="reveal">
            <div class="font-display font-800 text-5xl mb-2">2016<span class="text-white/60 text-2xl ml-1"></span></div>
            <div class="font-body text-white/80">Year Established</div>
          </div>
          <div class="reveal delay-100">
            <div class="font-display font-800 text-5xl mb-2">CE<span class="text-white/60 text-2xl ml-1"> &</span></div>
            <div class="font-body text-white/80">OSHC Certified Products</div>
          </div>
          <div class="reveal delay-200">
            <div class="font-display font-800 text-5xl mb-2">100<span class="text-white/60">%</span></div>
            <div class="font-body text-white/80">Compliance Guaranteed</div>
          </div>
          <div class="reveal delay-300">
            <div class="font-display font-800 text-4xl mb-2">Bulacan</div>
            <div class="font-body text-white/80">Marilao, Bulacan HQ</div>
          </div>
        </div>
      </div>

      <!-- INDUSTRIES & CTA -->
      <section class="py-24 px-6 lg:px-16">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <!-- Industries -->
          <div class="space-y-7">
            <div class="reveal section-pill"><span class="dot"></span>Industries We Serve</div>
            <h2 class="reveal delay-100 font-display font-800 text-4xl lg:text-5xl text-ink leading-tight">
              Trusted Across <span class="text-brand">Every Sector</span>
            </h2>
            <div class="reveal delay-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              ${[
                { icon: 'fa-helmet-safety', label: 'Construction & Engineering' },
                { icon: 'fa-industry', label: 'Manufacturing & Assembly' },
                { icon: 'fa-boxes-stacked', label: 'Logistics & Warehousing' },
                { icon: 'fa-flask-vial', label: 'Healthcare & Pharmaceuticals' },
                { icon: 'fa-oil-well', label: 'Oil, Gas & Petrochemical' },
                { icon: 'fa-bolt', label: 'Electrical & Utilities' },
                { icon: 'fa-fire', label: 'Fire & Emergency Services' },
                { icon: 'fa-tree', label: 'Agro-Industrial' },
              ].map((ind, i) => `
                <div class="flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-brand-muted/20 rounded-2xl px-5 py-4 hover:border-brand/30 hover:bg-brand/5 transition-all duration-300 group" style="transition-delay:${i*40}ms">
                  <div class="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-300">
                    <i class="fa-solid ${ind.icon} text-brand group-hover:text-white text-sm transition-colors duration-300"></i>
                  </div>
                  <span class="font-display font-700 text-ink text-sm">${ind.label}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- CTA Card -->
          <div class="reveal-right">
            <div class="relative bg-ink rounded-[2.5rem] p-12 overflow-hidden text-center shadow-2xl">
              <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(39,194,145,0.15),transparent_70%)]"></div>
              <div class="relative z-10 space-y-7">
                <div class="w-20 h-20 rounded-3xl bg-brand/20 flex items-center justify-center mx-auto">
                  <i class="fa-solid fa-handshake text-brand text-4xl"></i>
                </div>
                <h3 class="font-display font-800 text-3xl text-white leading-tight">Ready to Partner with WSSCI?</h3>
                <p class="font-body text-white/60 leading-relaxed">
                  From safety helmets to chemical-resistant overalls, we supply the equipment your workforce deserves — all compliant, all certified.
                </p>
                <div class="space-y-3 pt-2">
                  <a href="#/contact" class="btn-primary w-full block text-center">
                    <i class="fa-solid fa-envelope mr-2"></i> Get in Touch
                  </a>
                  <a href="https://www.facebook.com/messages/t/61554434231420/" target="_blank" class="btn-outline w-full block text-center !border-white/20 !text-white hover:!bg-white/10">
                    <i class="fa-brands fa-facebook-messenger mr-2"></i> Chat on Messenger
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },
  init: () => {
    setupScrollReveal();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
};
