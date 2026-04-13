import { categories, products } from '../data.js';
import { setupScrollReveal } from '../utils.js';

export const Categories = {
  render: () => {
    const categoryImages = {
      shoes: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      head: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80',
      eye: 'https://images.unsplash.com/photo-1582213713055-6617309995c0?w=800&q=80',
      vest: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
      gloves: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      body: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80',
      hearing: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      welding: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
      fall: 'https://images.unsplash.com/photo-1521791136064-7986c2959210?w=800&q=80'
    };

    return `
      <section class="py-24 bg-surface-2 min-h-screen pt-32">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          
          <!-- Header -->
          <div class="mb-14 pb-10 border-b border-brand-muted/20">
            <h1 class="reveal font-display font-800 text-3xl md:text-5xl lg:text-6xl text-ink leading-tight tracking-tighter">Product <span class="text-brand">Categories</span></h1>
            <p class="reveal delay-100 font-body text-ink-3 mt-6 max-w-2xl text-base md:text-lg leading-relaxed">Browse our specialized protection sections. Each category represents industry-certified gear designed for maximum survival and compliance.</p>
          </div>

          <!-- Categories Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${categories.map((c, i) => {
              const count = products.filter(p => p.cat === c.id).length;
              const img = categoryImages[c.id] || categoryImages.shoes;
              return `
                <div class="reveal group relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-700 hover:shadow-brand/20" style="transition-delay: ${i * 50}ms;">
                  
                  <!-- Background Image Container -->
                  <div class="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                    <img src="${img}" alt="${c.label}" class="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700">
                    <!-- Dynamic Gradient Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  </div>

                  <!-- Content Layout -->
                  <div class="absolute inset-0 p-10 flex flex-col justify-between">
                    
                    <!-- Top Part: Icon & ID -->
                    <div class="flex justify-between items-start opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <div class="w-14 h-14 rounded-2xl bg-brand/20 backdrop-blur-md flex items-center justify-center border border-brand/30 text-brand">
                        ${c.icon}
                      </div>
                      <span class="font-display font-900 text-[10px] text-white/30 tracking-[0.4em] uppercase">${c.id.toUpperCase()} CATEGORY</span>
                    </div>

                    <!-- Bottom Part: Label & Count -->
                    <div class="space-y-4">
                      <div class="space-y-1">
                        <p class="font-body text-[11px] text-brand font-800 tracking-[0.2em] uppercase">${count} Products Available</p>
                        <h2 class="font-display font-800 text-3xl md:text-4xl text-white tracking-tight leading-none group-hover:text-brand transition-colors duration-300">${c.label}</h2>
                      </div>
                      
                      <div class="h-px w-16 bg-brand/40 group-hover:w-full transition-all duration-700"></div>
                      
                      <p class="font-body text-sm text-white/60 leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                        ${c.desc}
                      </p>

                      <!-- Action Button -->
                      <div class="pt-4 flex items-center justify-between">
                         <a href="#/products?filter=${c.id}" class="text-white font-display font-900 text-[11px] tracking-widest flex items-center gap-3 group/btn hover:text-brand transition-colors">
                            VIEW PRODUCTS <i class="fa-solid fa-arrow-right-long text-[10px] transition-transform group-hover/btn:translate-x-3"></i>
                         </a>
                      </div>
                    </div>
                  </div>

                  <!-- Secret Link Overlay -->
                  <a href="#/products?filter=${c.id}" class="absolute inset-0 z-0" aria-label="Explore ${c.label}"></a>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Footer CTA -->
          <div class="mt-24 text-center reveal">
            <div class="inline-block p-1 rounded-full bg-brand/5 border border-brand/10 backdrop-blur-sm mb-8">
               <div class="px-6 py-2 flex items-center gap-2">
                  <div class="flex -space-x-2">
                    <div class="w-6 h-6 rounded-full border-2 border-surface-2 bg-ink/20"></div>
                    <div class="w-6 h-6 rounded-full border-2 border-surface-2 bg-brand/20"></div>
                    <div class="w-6 h-6 rounded-full border-2 border-surface-2 bg-ink/40"></div>
                  </div>
                  <p class="text-[11px] font-display font-800 text-ink/70 uppercase tracking-widest">Join 500+ Industrial Partners</p>
               </div>
            </div>
            <h3 class="font-display font-800 text-3xl text-ink mb-6">Can't find what you're looking for?</h3>
            <a href="#/contact" class="btn-primary inline-flex scale-110">Custom Safety Solutions</a>
          </div>

        </div>
      </section>
    `;
  },
  init: () => {
    setupScrollReveal();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
