import { categories, marqueeItems, products } from '../data.js';
import { setupScrollReveal, setupStats } from '../utils.js';

export const Home = {
  render: () => {
    return `
      <!-- HERO -->
      <section id="hero" class="hero-bg relative min-h-screen flex items-center overflow-hidden pt-24">
        <!-- grid lines -->
        <div class="grid-line" style="left:20%; top:0; bottom:0; width:1px;"></div>
        <div class="grid-line" style="left:40%; top:0; bottom:0; width:1px;"></div>
        <div class="grid-line" style="left:60%; top:0; bottom:0; width:1px;"></div>
        <div class="grid-line" style="left:80%; top:0; bottom:0; width:1px;"></div>
        <!-- blobs -->
        <div class="hero-blob w-[600px] h-[600px] bg-brand" style="right:-120px;top:-100px;"></div>
        <div class="hero-blob w-[400px] h-[400px] bg-brand-dark" style="left:-80px;bottom:-80px;"></div>

        <div class="max-w-7xl mx-auto px-6 lg:px-16 w-full py-20">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- LEFT -->
            <div class="space-y-8">
                Authorized DeltaPlus & Safety Jogger Partner
              <h1 class="reveal delay-100 font-display font-800 text-5xl lg:text-7xl leading-[1.02] text-ink">
                Protect What<br>
                <span class="relative inline-block">
                  <span class="text-brand">Matters</span>
                  <svg class="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6 Q50 1 100 4 Q150 7 200 3" stroke="#27C291" stroke-width="2.5" stroke-linecap="round" fill="none" class="line-draw"/>
                  </svg>
                </span>
                <br>Most.
              </h1>
              <p class="reveal delay-200 font-body text-ink-3 text-lg leading-relaxed max-w-md">CE &amp; OSHC Certified personal protective equipment for every industry. Founded in 2016, World Safety Supply Center, Inc. is an authorized distributor of DELTAPLUS and Safety Jogger.</p>
              <div class="reveal delay-300 flex flex-wrap gap-4">
                <a href="#/products" class="btn-primary">Explore Products</a>
                <a href="https://www.facebook.com/messages/t/61554434231420/" target="_blank" class="btn-outline">Message on Messenger</a>
              </div>
              <!-- stats -->
              <div class="reveal delay-400 flex gap-10 pt-4">
                <div>
                  <div class="font-display font-800 text-3xl text-ink stat-num" data-target="500">0+</div>
                  <div class="text-ink-3 text-sm font-body mt-1">Products</div>
                </div>
                <div class="w-px bg-brand-muted"></div>
                <div>
                  <div class="font-display font-800 text-3xl text-ink stat-num" data-target="1000">0+</div>
                  <div class="text-ink-3 text-sm font-body mt-1">Clients Served</div>
                </div>
                <div class="w-px bg-brand-muted"></div>
                <div>
                  <div class="font-display font-800 text-3xl text-ink stat-num" data-target="2016">0</div>
                  <div class="text-ink-3 text-sm font-body mt-1">Established</div>
                </div>
              </div>
            </div>

            <!-- RIGHT — 3D FLOATING HERO VISUAL -->
            <div class="reveal-right scene-3d flex items-center justify-center relative">
              <div class="cube-wrap relative w-[380px] h-[380px]">
                <div class="absolute inset-0 rounded-full" style="background:radial-gradient(circle at 40% 40%, rgba(39,194,145,.18), transparent 70%);"></div>
                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 380 380">
                  <circle cx="190" cy="190" r="170" fill="none" stroke="rgba(39,194,145,.12)" stroke-width="1" stroke-dasharray="8 6"/>
                  <circle cx="190" cy="190" r="130" fill="none" stroke="rgba(39,194,145,.18)" stroke-width="1"/>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-48 h-48 rounded-3xl bg-white shadow-2xl flex items-center justify-center float-card" style="box-shadow:0 30px 80px rgba(39,194,145,.2), 0 0 0 1px rgba(39,194,145,.1)">
                    <svg width="90" height="90" viewBox="0 0 64 64" fill="none">
                      <rect x="8" y="28" width="48" height="28" rx="4" fill="#e6faf4" stroke="#27C291" stroke-width="2"/>
                      <path d="M16 28V22a16 16 0 0 1 32 0v6" stroke="#27C291" stroke-width="2.5" stroke-linecap="round"/>
                      <circle cx="32" cy="42" r="5" fill="#27C291"/>
                      <path d="M32 47v5" stroke="#27C291" stroke-width="2.5" stroke-linecap="round"/>
                    </svg>
                  </div>
                </div>
                <div class="absolute top-8 right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 float-card" style="animation:floatY 4s ease-in-out infinite .8s;">
                  <div class="w-8 h-8 bg-brand-light rounded-xl flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#27C291" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                  <span class="font-display font-700 text-xs text-ink">SJ & DeltaPlus Partner</span>
                </div>
                <div class="absolute bottom-10 left-2 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 float-card" style="animation:floatY 3.5s ease-in-out infinite 1.4s;">
                  <div class="w-8 h-8 bg-brand-light rounded-xl flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#27C291" stroke-width="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
                  <span class="font-display font-700 text-xs text-ink">CE & OSHC Cert.</span>
                </div>
                <div class="absolute top-1/2 -right-4 bg-brand rounded-2xl shadow-lg px-4 py-3 float-card" style="animation:floatY 4.5s ease-in-out infinite .3s;">
                  <div class="font-display font-800 text-white text-sm">PPE</div>
                  <div class="text-white/70 text-xs">Experts</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-3">
          <span class="text-xs font-body tracking-widest uppercase">Scroll</span>
          <div class="w-px h-12 bg-gradient-to-b from-brand to-transparent"></div>
        </div>
      </section>

      <!-- MARQUEE -->
      <div class="py-5 border-y border-brand-muted/40 overflow-hidden bg-white/60 backdrop-blur">
        <div class="marquee-track" id="marquee-container"></div>
      </div>

      <!-- VISUAL CATEGORIES STRIP -->
      <section class="py-20 px-6 lg:px-16 max-w-7xl mx-auto overflow-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div class="space-y-2 text-center md:text-left">
            <h2 class="font-display font-800 text-3xl text-ink">Browse by <span class="text-brand">Category</span></h2>
            <p class="font-body text-ink-3 text-sm">Industrial-grade gear for specialized work environments.</p>
          </div>
          <a href="#/categories" class="btn-outline">View All Categories</a>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6" id="visual-category-strip">
          <!-- Rendered via JS -->
        </div>
      </section>

      <!-- FOUNDER & COMPANY STORY -->
      <section class="py-28 px-6 lg:px-16 bg-surface-2 overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            
            <!-- Left: Story -->
            <div class="space-y-7">
              <div class="reveal section-pill"><span class="dot"></span>Our Story</div>
              <h2 class="reveal delay-100 font-display font-800 text-4xl lg:text-5xl text-ink leading-tight">
                From Commission Sales to <span class="text-brand">Industry Leader</span>
              </h2>
              <div class="space-y-5 font-body text-ink-3 text-lg leading-relaxed">
                <p class="reveal delay-200">
                  In 2003, <strong class="text-ink font-700">Ramon Rogel</strong> started as a Sales Representative with no salary — only commission. His relentless dedication saw him consistently surpass every sales target, earning the trust and respect of the global PPE manufacturer <strong class="text-ink font-700">DELTAPLUS</strong>.
                </p>
                <p class="reveal delay-300">
                  In 2016, DELTAPLUS personally urged Ramon to establish <strong class="text-ink font-700">World Safety Supply Center, Inc.</strong> with their full operational support. Within a year, WSSCI was already servicing some of the Philippines' largest corporations.
                </p>
              </div>
              <div class="reveal delay-400">
                <a href="#/about" class="font-display font-700 text-brand text-sm hover:underline flex items-center gap-2">Read Full Company Story <i class="fa-solid fa-arrow-right text-xs"></i></a>
              </div>
            </div>

            <!-- Right: Timeline Cards -->
            <div class="space-y-6">
              <div class="reveal-right group relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 border border-brand-muted/20 shadow-sm hover:shadow-xl hover:border-brand/20 transition-all duration-500">
                <div class="flex items-start gap-5">
                  <div class="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                    <i class="fa-solid fa-seedling text-brand group-hover:text-white text-xl transition-colors duration-300"></i>
                  </div>
                  <div>
                    <span class="font-display font-800 text-brand text-sm tracking-wider">2003</span>
                    <h4 class="font-display font-800 text-ink text-lg mt-1">The Beginning</h4>
                    <p class="font-body text-ink-3 text-sm mt-2 leading-relaxed">Ramon Rogel begins as a commission-only Sales Representative, consistently exceeding every sales quota.</p>
                  </div>
                </div>
              </div>

              <div class="reveal-right delay-100 group relative bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 border border-brand-muted/20 shadow-sm hover:shadow-xl hover:border-brand/20 transition-all duration-500">
                <div class="flex items-start gap-5">
                  <div class="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                    <i class="fa-solid fa-building text-brand group-hover:text-white text-xl transition-colors duration-300"></i>
                  </div>
                  <div>
                    <span class="font-display font-800 text-brand text-sm tracking-wider">2016</span>
                    <h4 class="font-display font-800 text-ink text-lg mt-1">WSSCI Founded</h4>
                    <p class="font-body text-ink-3 text-sm mt-2 leading-relaxed">DELTAPLUS gives full support to establish World Safety Supply Center, Inc. in Marilao, Bulacan.</p>
                  </div>
                </div>
              </div>

              <div class="reveal-right delay-200 group relative bg-brand rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div class="flex items-start gap-5">
                  <div class="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                    <i class="fa-solid fa-trophy text-white text-xl"></i>
                  </div>
                  <div>
                    <span class="font-display font-800 text-white/70 text-sm tracking-wider">TODAY</span>
                    <h4 class="font-display font-800 text-white text-lg mt-1">Trusted Nationwide</h4>
                    <p class="font-body text-white/80 text-sm mt-2 leading-relaxed">Servicing the Philippines' largest corporations with 500+ CE & OSHC certified PPE products.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TOP PICKS SHOWCASE -->
      <section class="py-24 bg-surface px-6 lg:px-16 overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="text-center space-y-4 mb-16">
            <div class="reveal flex justify-center"><div class="section-pill"><span class="dot"></span>Top Picks</div></div>
            <h2 class="reveal delay-100 font-display font-800 text-4xl lg:text-5xl text-ink">Featured <span class="text-brand">Safety Jogger</span> Models</h2>
            <p class="reveal delay-200 font-body text-ink-3 max-w-xl mx-auto">The gold standard in protective footwear, now available for nationwide deployment.</p>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" id="top-picks-grid">
             <!-- Rendered via JS -->
          </div>
          <div class="mt-16 text-center">
            <a href="#/products" class="btn-primary">Explore Full Catalog</a>
          </div>
        </div>
      </section>

      <!-- DUAL SPLIT BANNERS -->
      <section class="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8 h-full">
           <!-- Banner 1: Construction -->
           <div class="reveal group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
             <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image:url('https://images.unsplash.com/photo-1517089534706-33069c95a0ce?w=800&q=80')"></div>
             <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"></div>
             <div class="absolute bottom-10 left-10 right-10 z-10 space-y-4">
                <span class="text-brand font-display font-800 tracking-widest text-xs uppercase">Heavy Duty</span>
                <h3 class="text-white font-display font-800 text-3xl">Built for Construction</h3>
                <p class="text-white/80 font-body text-sm line-clamp-2">ASTM-rated boots and reinforced helmets engineered for the harshest site conditions.</p>
                <a href="#/products?filter=shoes" class="btn-primary bg-white text-brand border-white hover:bg-white/90">View Equipment</a>
             </div>
           </div>
           
           <!-- Banner 2: Gloves & Chemical -->
           <div class="reveal delay-100 group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
             <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image:url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80')"></div>
             <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
             <div class="absolute bottom-10 left-10 right-10 z-10 space-y-4">
                <span class="text-white font-display font-800 tracking-widest text-xs uppercase">Chemical & Heat</span>
                <h3 class="text-white font-display font-800 text-3xl">Gloves & Body Protection</h3>
                <p class="text-white/80 font-body text-sm line-clamp-2">From cut-resistant to heat-proof — certified hand and body protection for every hazard.</p>
                <a href="#/products?filter=gloves" class="btn-primary bg-white text-brand-dark border-white hover:bg-white/90">Shop Gloves</a>
             </div>
           </div>
        </div>
      </section>

      <!-- TRUST & CERTIFICATION SECTION -->
      <section class="py-20 bg-brand-light/20 border-y border-brand-muted/20">
        <div class="max-w-7xl mx-auto px-6 lg:px-16">
          <div class="flex flex-wrap justify-between items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
             <div class="flex items-center gap-3">
               <div class="font-display font-900 text-3xl text-ink/40 italic">CE</div>
               <span class="text-xs font-body font-700 max-w-[80px]">EN ISO <br>Compliance</span>
             </div>
             <div class="flex items-center gap-3">
                <div class="font-display font-900 text-3xl text-ink/40">SJ <span class="text-brand">PRO</span></div>
                <span class="text-xs font-body font-700 max-w-[80px]">Authorized <br>Distributor</span>
             </div>
             <div class="flex items-center gap-3">
                <div class="font-display font-900 text-3xl text-ink/40">DELTA<span class="text-brand">PLUS</span></div>
                <span class="text-xs font-body font-700 max-w-[80px]">Official <br>Partner</span>
             </div>
             <div class="flex items-center gap-3">
                <div class="font-display font-900 text-3xl text-ink/40 italic">SEC</div>
                <span class="text-xs font-body font-700 max-w-[80px]">CS20162163 <br>Registered</span>
             </div>
          </div>
        </div>
      </section>

      <!-- OUR SERVICES (Sales Funnel) -->
      <section class="py-28 px-6 lg:px-16 max-w-7xl mx-auto">
        <div class="text-center space-y-4 mb-16">
          <div class="reveal flex justify-center"><div class="section-pill"><span class="dot"></span>Our Services</div></div>
          <h2 class="reveal delay-100 font-display font-800 text-4xl lg:text-5xl text-ink">Serbisyo para sa <span class="text-brand">Kaligtasan</span> at <br>Kalusugan sa Trabaho</h2>
          <p class="reveal delay-200 font-body text-ink-3 max-w-xl mx-auto">We provide comprehensive solutions to ensure your workforce operates in a secure environment.</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="reveal bg-white rounded-3xl p-8 border border-brand-muted/40 shadow-xl transition-transform hover:-translate-y-2">
            <div class="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#27C291" stroke-width="2.2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            </div>
            <h3 class="font-display font-800 text-xl text-ink mb-3">Premium PPE Supply</h3>
            <p class="font-body text-ink-3 text-sm leading-relaxed mb-6">500+ SKUs of certified safety gear from DELTAPLUS — shoes, gloves, harnesses, helmets, and more — all CE and OSHC certified for Philippine industries.</p>
            <a href="#/products" class="font-display font-700 text-brand text-sm hover:underline flex items-center gap-2">View Catalog <i class="fa-solid fa-arrow-right text-xs"></i></a>
          </div>
          
          <!-- Service 2 -->
          <div class="reveal delay-100 bg-brand rounded-3xl p-8 shadow-xl text-white transition-transform hover:-translate-y-2 relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50 block pointer-events-none"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 class="font-display font-800 text-xl mb-3">Compliance Consulting</h3>
              <p class="font-body text-white/80 text-sm leading-relaxed mb-6">Expert guidance to ensure your operational protocols strictly meet DOLE regulations and international safety standards. All products compliant with Philippine laws.</p>
              <a href="#/contact" class="font-display font-700 text-white text-sm hover:underline flex items-center gap-2">Get Assessed <i class="fa-solid fa-arrow-right text-xs"></i></a>
            </div>
          </div>
          
          <!-- Service 3 -->
          <div class="reveal delay-200 bg-white rounded-3xl p-8 border border-brand-muted/40 shadow-xl transition-transform hover:-translate-y-2">
            <div class="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#27C291" stroke-width="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 class="font-display font-800 text-xl text-ink mb-3">Nationwide Delivery</h3>
            <p class="font-body text-ink-3 text-sm leading-relaxed mb-6">Strategic logistics from our headquarters in Lucky Place Bldg., Marilao, Bulacan — swiftly deploying safety equipment across the Philippines.</p>
            <a href="#/contact" class="font-display font-700 text-brand text-sm hover:underline flex items-center gap-2">Partner With Us <i class="fa-solid fa-arrow-right text-xs"></i></a>
          </div>
        </div>
      </section>
      
      <!-- CTA BANNER -->
      <section class="py-20 px-6 lg:px-16 mb-20 max-w-7xl mx-auto">
        <div class="bg-ink rounded-3xl p-10 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          <div class="absolute inset-0 opacity-20 bg-center bg-cover" style="background-image:url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80')"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent"></div>
          
          <div class="relative z-10 max-w-2xl text-center lg:text-left">
            <h2 class="font-display font-800 text-3xl lg:text-5xl text-white leading-tight mb-4">Ready to upgrade your<br>worksite safety?</h2>
            <p class="font-body text-white/70 text-lg">Connect directly with our team at WSSCI — your authorized DELTAPLUS distributor since 2016.</p>
          </div>
          
          <div class="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="https://www.facebook.com/messages/t/61554434231420/" target="_blank" class="btn-primary w-full sm:w-auto shadow-xl">Contact on Messenger</a>
            <a href="https://www.facebook.com/profile.php?id=61554434231420" target="_blank" class="btn-outline w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white">Visit our Facebook</a>
        </div>
      </section>
    `;
  },
  init: () => {
    // Render Marquee
    const t = document.getElementById('marquee-container');
    if (t) {
      const items = [...marqueeItems, ...marqueeItems];
      t.innerHTML = items.map(i => `
        <span class="flex items-center gap-4 text-ink-3 font-display font-700 text-sm tracking-widest uppercase">
          <span class="w-2 h-2 rounded-full bg-brand inline-block flex-shrink-0"></span>${i}
        </span>
      `).join('');
    }

    // Render Visual Categories Strip
    const strip = document.getElementById('visual-category-strip');
    if (strip) {
        strip.innerHTML = categories.slice(0, 6).map((c, i) => `
            <a href="#/products?filter=${c.id}" class="reveal group flex flex-col items-center gap-4 transition-transform hover:-translate-y-2" style="transition-delay:${i * 50}ms;">
                <div class="w-20 h-20 rounded-full bg-white border border-brand-muted/20 shadow-lg flex items-center justify-center text-2xl text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    ${c.icon.replace('text-3xl', 'text-2xl')}
                </div>
                <span class="font-display font-700 text-ink text-xs uppercase tracking-wider text-center">${c.label}</span>
            </a>
        `).join('');
    }

    // Render Top Picks Showcase
    const picks = document.getElementById('top-picks-grid');
    if (picks) {
        const topShoes = [13, 14, 15, 16]; // Safety Jogger IDs
        const filteredProducts = products.filter(p => topShoes.includes(p.id));
        picks.innerHTML = filteredProducts.map((p, i) => `
            <a href="#/product/${p.id}" class="reveal block group bg-white rounded-3xl p-5 border border-brand-muted/10 shadow-lg transition-all hover:shadow-2xl" style="transition-delay:${i * 100}ms;">
                <div class="aspect-square rounded-2xl overflow-hidden bg-surface mb-5 relative">
                    <img src="${p.img}" alt="${p.name}" 
                         onerror="this.src='https://images.unsplash.com/photo-1588612143468-b359929235bd?w=600&q=80'; this.classList.add('opacity-40')"
                         class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute top-3 left-3 bg-brand/90 backdrop-blur text-white text-[10px] font-display font-900 px-2 py-1 rounded-md uppercase tracking-widest">Featured</div>
                </div>
                <div class="space-y-1">
                    <div class="text-[10px] font-display font-800 text-brand uppercase tracking-tighter">${p.brand}</div>
                    <h4 class="font-display font-800 text-ink text-lg group-hover:text-brand transition-colors">${p.name}</h4>
                    <div class="flex items-center gap-2 pt-2">
                            <span class="text-[10px] px-2 py-0.5 rounded-full bg-surface-2 text-ink-3 font-600">S3 Rated</span>
                            <span class="text-[10px] px-2 py-0.5 rounded-full bg-surface-2 text-ink-3 font-600">Steel Toe</span>
                    </div>
                </div>
            </a>
        `).join('');
    }

    // Init Interactions
    setupScrollReveal();
    setupStats();

    // Setup 3D float interactions
    document.querySelectorAll('.float-card').forEach(card => {
      document.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        if (rect.width === 0) return; // not visible
        const cx = rect.left + rect.width/2;
        const cy = rect.top + rect.height/2;
        const dx = (e.clientX-cx)/rect.width*10;
        const dy = (e.clientY-cy)/rect.height*10;
        card.style.transform = `perspective(600px) rotateY(${dx}deg) rotateX(${-dy}deg) translateZ(10px)`;
      });
    });

  }
};
