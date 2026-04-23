import { categories, marqueeItems, products } from '../data.js';
import { setupScrollReveal, setupStats } from '../utils.js';

export const Home = {
  render: () => {
    return `
      <!-- HERO -->
      <section id="hero" class="hero-bg relative min-h-[100svh] flex items-center overflow-hidden pt-20 lg:pt-24">
        <!-- grid lines -->
        <div class="grid-line" style="left:20%; top:0; bottom:0; width:1px;"></div>
        <div class="grid-line" style="left:40%; top:0; bottom:0; width:1px;"></div>
        <div class="grid-line" style="left:60%; top:0; bottom:0; width:1px;"></div>
        <div class="grid-line" style="left:80%; top:0; bottom:0; width:1px;"></div>
        <!-- blobs -->
        <div class="hero-blob w-[600px] h-[600px] bg-brand" style="right:-120px;top:-100px;"></div>
        <div class="hero-blob w-[400px] h-[400px] bg-brand-dark" style="left:-80px;bottom:-80px;"></div>
        <div class="hero-blob w-[300px] h-[300px] bg-caution opacity-10" style="left:20%;top:10%;"></div>

        <div class="max-w-7xl mx-auto px-6 lg:px-16 w-full pt-6 pb-12 lg:pt-2 lg:pb-20">
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <!-- LEFT -->
            <div class="space-y-8">
                Authorized DeltaPlus & Safety Jogger Partner
              <h1 class="reveal delay-100 font-display font-800 text-4xl sm:text-5xl lg:text-7xl leading-[1.02] text-ink">
                Protect What<br>
                <span class="relative inline-block">
                  <span class="text-brand">Matters</span>
                  <svg class="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6 Q50 1 100 4 Q150 7 200 3" stroke="#27C291" stroke-width="2.5" stroke-linecap="round" fill="none" class="line-draw"/>
                  </svg>
                </span>
                <br>Most.
              </h1>
              <p class="reveal delay-200 font-body text-ink-3 text-base lg:text-lg leading-relaxed max-w-md">CE &amp; OSHC Certified personal protective equipment for every industry. Founded in 2016, World Safety Supply Center, Inc. is an authorized distributor of DELTAPLUS and Safety Jogger.</p>
              <div class="reveal delay-300 flex flex-wrap gap-3">
                <a href="#/products" class="btn-primary"><i class="fa-solid fa-arrow-up-right-from-square mr-2"></i>Explore Products</a>
                <a href="https://www.facebook.com/messages/t/61554434231420/" target="_blank" class="btn-outline"><i class="fa-brands fa-facebook-messenger mr-2"></i>Message on Messenger</a>
              </div>
              <!-- stats -->
              <div class="reveal delay-400 flex gap-6 lg:gap-10 pt-2 lg:pt-4">
                <div>
                  <div class="font-display font-800 text-2xl lg:text-3xl text-ink stat-num" data-target="500">0+</div>
                  <div class="text-ink-3 text-xs lg:text-sm font-body mt-1">Products</div>
                </div>
                <div class="w-px bg-brand-muted"></div>
                <div>
                  <div class="font-display font-800 text-2xl lg:text-3xl text-ink stat-num" data-target="1000">0+</div>
                  <div class="text-ink-3 text-xs lg:text-sm font-body mt-1">Clients Served</div>
                </div>
                <div class="w-px bg-brand-muted"></div>
                <div>
                  <div class="font-display font-800 text-2xl lg:text-3xl text-ink stat-num" data-target="2016">0</div>
                  <div class="text-ink-3 text-xs lg:text-sm font-body mt-1">Established</div>
                </div>
              </div>
            </div>

            <!-- RIGHT — DYNAMIC MASONRY SCROLL HERO VISUAL -->
            <div class="reveal-right flex items-stretch">

              <!-- mask-image fades edges to transparent — no color-matching needed -->
              <div class="masonry-wrapper relative w-full h-[480px] lg:h-[580px] overflow-hidden">

                <!-- Three scrolling columns -->
                <div class="flex gap-2 w-full h-full">

                  <!-- Column 1 — scrolls UP (your images) -->
                  <div class="flex-1 overflow-hidden">
                    <div class="masonry-col animate-masonry-up w-full">
                      <img src="assets/hero-img/img-1.avif" class="w-full object-cover rounded-xl h-64" alt="PPE Safety">
                      <img src="assets/hero-img/img-2.avif" class="w-full object-cover rounded-xl h-64" alt="PPE Safety">
                      <img src="assets/hero-img/img-3.avif" class="w-full object-cover rounded-xl h-64" alt="PPE Safety">
                      <img src="assets/hero-img/img-4.avif" class="w-full object-cover rounded-xl h-64" alt="PPE Safety">
                      <img src="assets/hero-img/img-5.avif" class="w-full object-cover rounded-xl h-64" alt="PPE Safety">
                      <!-- Duplicate for seamless loop -->
                      <img src="assets/hero-img/img-1.avif" class="w-full object-cover rounded-xl h-64" alt="PPE Safety">
                      <img src="assets/hero-img/img-2.avif" class="w-full object-cover rounded-xl h-64" alt="PPE Safety">
                      <img src="assets/hero-img/img-3.avif" class="w-full object-cover rounded-xl h-64" alt="PPE Safety">
                      <img src="assets/hero-img/img-4.avif" class="w-full object-cover rounded-xl h-64" alt="PPE Safety">
                      <img src="assets/hero-img/img-5.avif" class="w-full object-cover rounded-xl h-64" alt="PPE Safety">
                    </div>
                  </div>

                  <!-- Column 2 — scrolls DOWN -->
                  <div class="flex-1 overflow-hidden">
                    <div class="masonry-col animate-masonry-down w-full" style="animation-duration:48s;">
                      <img src="assets/hero-img/img-6.avif" class="w-full object-cover rounded-xl h-64" alt="Industrial worker gloves">
                      <img src="assets/hero-img/img-7.avif" class="w-full object-cover rounded-xl h-64" alt="Construction scaffolding">
                      <img src="assets/hero-img/img-8.avif" class="w-full object-cover rounded-xl h-64" alt="Safety goggles worker">
                      <img src="assets/hero-img/img-9.jpg" class="w-full object-cover rounded-xl h-64" alt="Manufacturing factory">
                      <!-- Duplicate for seamless loop -->
                      <img src="assets/hero-img/img-6.avif" class="w-full object-cover rounded-xl h-64" alt="Industrial worker gloves">
                      <img src="assets/hero-img/img-7.avif" class="w-full object-cover rounded-xl h-64" alt="Construction scaffolding">
                      <img src="assets/hero-img/img-8.avif" class="w-full object-cover rounded-xl h-64" alt="Safety goggles worker">
                      <img src="assets/hero-img/img-9.jpg" class="w-full object-cover rounded-xl h-64" alt="Manufacturing factory">
                    </div>
                  </div>

                  <!-- Column 3 — scrolls UP (different speed) -->
                  <div class="flex-1 overflow-hidden hidden sm:block">
                    <div class="masonry-col animate-masonry-up w-full" style="animation-duration:36s;">
                      <img src="assets/hero-img/img-10.avif" class="w-full object-cover rounded-xl h-64" alt="Electrical engineering">
                      <img src="assets/hero-img/img-11.avif" class="w-full object-cover rounded-xl h-64" alt="Factory worker">
                      <img src="assets/hero-img/img-12.avif" class="w-full object-cover rounded-xl h-64" alt="Protective workwear">
                      <img src="assets/hero-img/img-13.avif" class="w-full object-cover rounded-xl h-64" alt="Hardhat construction">
                      <!-- Duplicate for seamless loop -->
                      <img src="assets/hero-img/img-10.avif" class="w-full object-cover rounded-xl h-64" alt="Electrical engineering">
                      <img src="assets/hero-img/img-11.avif" class="w-full object-cover rounded-xl h-64" alt="Factory worker">
                      <img src="assets/hero-img/img-12.avif" class="w-full object-cover rounded-xl h-64" alt="Protective workwear">
                      <img src="assets/hero-img/img-13.avif" class="w-full object-cover rounded-xl h-64" alt="Hardhat construction">
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-3">
          <span class="text-xs font-body tracking-widest uppercase">Scroll</span>
          <div class="w-px h-12 bg-gradient-to-b from-brand to-transparent"></div>
        </div> -->
      </section>

      <!-- MARQUEE -->
      <div class="py-5 border-y border-brand-muted/40 overflow-hidden bg-white/60 backdrop-blur">
        <div class="marquee-track" id="marquee-container"></div>
      </div>

      <!-- VISUAL CATEGORIES STRIP -->
      <section class="py-16 px-6 lg:px-16 max-w-7xl mx-auto overflow-hidden">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <h2 class="font-display font-800 text-3xl text-ink">Browse by <span class="text-brand">Category</span></h2>
            <p class="font-body text-ink-3 text-sm mt-1">Industrial-grade gear for specialized work environments.</p>
          </div>
          <a href="#/categories" class="btn-outline shrink-0">View All Categories</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-3" id="visual-category-strip">
          <!-- Rendered via JS -->
        </div>
      </section>

      <!-- FOUNDER & COMPANY STORY -->
      <section class="py-28 px-6 lg:px-16 bg-surface-warm overflow-hidden">
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
             <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image:url('assets/images/boots.avif')"></div>
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
             <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image:url('assets/images/gloves.avif')"></div>
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

      <!-- DELTA PLUS PARTNERSHIP SPOTLIGHT -->
      <section class="py-24 px-6 lg:px-16 bg-caution relative overflow-hidden">
        <div class="absolute inset-0 opacity-5" style="background-image: url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h20v20H0z\" fill=\"none\"/%3E%3Cpath d=\"M10 0l10 10-10 10L0 10z\" fill=\"%23000\"/%3E%3C/svg%3E');"></div>
        <div class="max-w-7xl mx-auto relative z-10">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <div class="inline-flex items-center gap-2 bg-ink text-white px-4 py-1.5 rounded-full text-xs font-display font-800 tracking-widest uppercase">
                Official Distributor
              </div>
              <h2 class="font-display font-900 text-4xl lg:text-6xl text-ink leading-none uppercase italic">
                Delta<span class="text-white">Plus</span><br>
                <span class="text-3xl lg:text-5xl">Global Partner</span>
              </h2>
              <p class="font-body text-ink text-lg leading-relaxed max-w-lg">
                As an authorized partner of Delta Plus, World Safety Supply Center, Inc. brings you world-class PPE solutions that meet the highest international safety standards. From head to toe, we've got you covered.
              </p>
              <div class="flex flex-wrap gap-4 pt-4">
                <a href="#/products" class="btn-primary bg-ink text-white hover:bg-ink-2 shadow-xl border-ink">Browse Delta Plus Gear</a>
                <div class="flex items-center gap-2 text-ink font-display font-800 text-sm">
                  <i class="fa-solid fa-check-circle"></i> CE Certified
                </div>
                <div class="flex items-center gap-2 text-ink font-display font-800 text-sm">
                  <i class="fa-solid fa-check-circle"></i> OSHC Compliant
                </div>
              </div>
            </div>
            <div class="relative group">
               <!-- Glassmorphism Wrapper -->
               <div class="reveal-right relative z-10 bg-white backdrop-blur-3xl border border-white/40 rounded-[3rem] p-12 lg:p-16 overflow-hidden transition-all duration-700 hover:scale-[1.02]">
                  <div class="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <img src="black-logo.svg" 
                       alt="Delta Plus Logo" 
                       class="w-full max-w-[300px] mx-auto relative z-10"
                  >
                  <!-- Overlay to ensure the yellow triangle pops -->
                  <div class="absolute inset-0 bg-ink/5 pointer-events-none"></div>
               </div>
               <!-- Background Shadow Depth -->
               <div class="absolute inset-0 bg-ink/10 blur-3xl rounded-full translate-y-12 scale-75 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- OUR SERVICES (Sales Funnel) -->
      <section class="pt-20 pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="#27C291" width="24" height="24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </div>
            <h3 class="font-display font-800 text-xl text-ink mb-3">Nationwide Delivery</h3>
            <p class="font-body text-ink-3 text-sm leading-relaxed mb-6">Strategic logistics from our headquarters at Lucky Place Bldg., M. Villarica Road, Sta Rosa 1, Marilao, Bulacan — swiftly deploying safety equipment across the Philippines.</p>
            <a href="#/contact" class="font-display font-700 text-brand text-sm hover:underline flex items-center gap-2">Partner With Us <i class="fa-solid fa-arrow-right text-xs"></i></a>
          </div>
        </div>
      </section>
      
      <!-- CTA BANNER -->
      <section class="pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
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
    const categoryMeta = {
      shoes:   { icon: 'footprints', bgImage: 'assets/images/cat-shoes.jpg' },
      head:    { icon: 'hard-hat',   bgImage: 'assets/images/cat-skull.jpg' },
      eye:     { icon: 'glasses',    bgImage: 'assets/images/cat-eye.jpg' },
      vest:    { icon: 'shirt',      bgImage: 'assets/images/cat-vest.jpg' },
      gloves:  { icon: 'hand',       bgImage: 'assets/images/cat-gloves.jpg' },
      hearing: { icon: 'headphones', bgImage: 'assets/images/cat-hearing.jpg' },
      body:    { icon: 'shield',     bgImage: 'assets/images/cat-body.jpg' },
      welding: { icon: 'flame',      bgImage: 'assets/images/cat-welding.jpg' },
      fall:    { icon: 'link-2',     bgImage: 'assets/images/cat-fall.jpg' },
    };
    const strip = document.getElementById('visual-category-strip');
    if (strip) {
      strip.innerHTML = categories.slice(0, 6).map((c, i) => {
        const m = categoryMeta[c.id] || categoryMeta.body;
        return `
          <a href="#/products?filter=${c.id}"
             class="reveal group relative overflow-hidden flex flex-col gap-4 p-5 rounded-2xl border border-white/5 hover:border-brand/40 transition-all duration-500 cursor-pointer bg-ink shadow-lg hover:shadow-2xl hover:-translate-y-1"
             style="min-height:130px; transition-delay:${i * 40}ms;">

            <!-- Background Image with Cinematic Gradient Fade -->
            <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
               <!-- Image covering the whole card -->
               <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75 group-hover:opacity-90 transition-all duration-700 ease-in-out group-hover:scale-110" style="background-image: url('${m.bgImage}')"></div>
               <!-- Gradient overlays for text readability -->
               <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent"></div>
               <div class="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent"></div>
            </div>

            <!-- Icon box -->
            <div class="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10 backdrop-blur-md group-hover:bg-brand transition-colors duration-500">
              <i data-lucide="${m.icon}"
                 class="w-5 h-5 text-white/90 group-hover:text-white transition-colors duration-500"
                 stroke-width="1.5"></i>
            </div>

            <!-- Text Content -->
            <div class="relative z-10 mt-auto">
              <div class="font-display font-700 text-[14px] text-white leading-snug tracking-wide transition-colors duration-300">${c.label}</div>
              <div class="font-body text-[11px] mt-1 flex items-center gap-1 text-white/50 group-hover:text-white/90 transition-colors duration-300">
                Explore Gear
                <i data-lucide="arrow-right" class="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" stroke-width="2"></i>
              </div>
            </div>
          </a>`;
      }).join('');
      if (window.lucide) window.lucide.createIcons();
      }

    // Render Top Picks Showcase
    const picks = document.getElementById('top-picks-grid');
    if (picks) {
      const topShoes = [13, 14, 15, 16]; // Safety Jogger IDs
      const filteredProducts = products.filter(p => topShoes.includes(p.id));
      picks.innerHTML = filteredProducts.map((p, i) => {
        const isDelta = p.brand.toLowerCase().includes('delta');
        const accentClass = isDelta ? 'text-caution' : 'text-brand';
        const bgAccentClass = isDelta ? 'bg-caution/90' : 'bg-brand/90';
        
        return `
            <a href="#/product/${p.id}" class="reveal block group bg-white rounded-3xl p-5 border border-brand-muted/10 shadow-lg transition-all hover:shadow-2xl" style="transition-delay:${i * 100}ms;">
                <div class="aspect-square rounded-2xl overflow-hidden bg-surface mb-5 relative">
                    <img src="${p.img}" alt="${p.name}" 
                         onerror="this.src='https://images.unsplash.com/photo-1588612143468-b359929235bd?w=600&q=80'; this.classList.add('opacity-40')"
                         class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute top-3 left-3 ${bgAccentClass} backdrop-blur text-white text-[10px] font-display font-900 px-2 py-1 rounded-md uppercase tracking-widest">Featured</div>
                </div>
                <div class="space-y-1">
                    <div class="text-[10px] font-display font-800 ${accentClass} uppercase tracking-tighter">${p.brand}</div>
                    <h4 class="font-display font-800 text-ink text-lg group-hover:text-brand transition-colors">${p.name}</h4>
                    <div class="flex items-center gap-2 pt-2">
                            <span class="text-[10px] px-2 py-0.5 rounded-full bg-surface-2 text-ink-3 font-600">S3 Rated</span>
                            <span class="text-[10px] px-2 py-0.5 rounded-full bg-surface-2 text-ink-3 font-600">Steel Toe</span>
                    </div>
                </div>
            </a>
        `;
      }).join('');
    }

    // Init Interactions
    setupScrollReveal();
    setupStats();

    // Setup 3D float interactions
    document.querySelectorAll('.float-card').forEach(card => {
      document.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        if (rect.width === 0) return; // not visible
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width * 10;
        const dy = (e.clientY - cy) / rect.height * 10;
        card.style.transform = `perspective(600px) rotateY(${dx}deg) rotateX(${-dy}deg) translateZ(10px)`;
      });
    });

  }
};
