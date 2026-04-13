import { products, categories } from '../data.js';
import { setupScrollReveal } from '../utils.js';

const getFeatureIcon = (text) => {
  const t = text.toLowerCase();
  if (t.includes('water') || t.includes('splash') || t.includes('liquid')) return 'fa-droplet';
  if (t.includes('toe') || t.includes('puncture') || t.includes('impact') || t.includes('protection') || t.includes('shield')) return 'fa-shield-halved';
  if (t.includes('breathable') || t.includes('mesh') || t.includes('air') || t.includes('cool')) return 'fa-wind';
  if (t.includes('oil') || t.includes('fuel') || t.includes('chemical')) return 'fa-flask';
  if (t.includes('lightweight') || t.includes('comfort') || t.includes('soft') || t.includes('flexible')) return 'fa-feather-pointed';
  if (t.includes('esd') || t.includes('static') || t.includes('electric') || t.includes('bolt')) return 'fa-bolt-lightning';
  if (t.includes('grip') || t.includes('slip') || t.includes('sole') || t.includes('traction')) return 'fa-shoe-prints';
  if (t.includes('leather') || t.includes('fabric') || t.includes('upper')) return 'fa-layer-group';
  return 'fa-circle-dot'; // Default cleaner icon
};

export const ProductDetail = {
  render: (id) => {
    const p = products.find(x => x.id === parseInt(id));
    if (!p) {
      return `
        <section class="py-28 min-h-screen pt-32 text-center flex flex-col items-center justify-center">
            <h2 class="font-display font-800 text-4xl mb-4">Product Not Found</h2>
            <a href="#/products" class="btn-primary mt-4">Browse All Products</a>
        </section>
      `;
    }

    const catObj = categories.find(c => c.id === p.cat);
    const catLabel = catObj ? catObj.label : 'General';

    return `
    <section class="py-24 min-h-screen pt-32 bg-surface-2 overflow-hidden" id="product-detail-container">
      <div class="max-w-7xl mx-auto px-6 lg:px-16 pb-20">
        
        <!-- Breadcrumbs -->
        <nav class="reveal flex text-xs sm:text-sm text-ink-3 font-body mb-10 pb-4 border-b border-brand-muted/20">
          <ol class="flex items-center flex-wrap gap-y-2 gap-x-3">
            <li><a href="#/" class="hover:text-brand transition-colors">Home</a></li>
            <li><i class="fa-solid fa-chevron-right text-[10px] opacity-30"></i></li>
            <li><a href="#/products" class="hover:text-brand transition-colors">Products</a></li>
            <li><i class="fa-solid fa-chevron-right text-[10px] opacity-30"></i></li>
            <li><a href="#/products?filter=${p.cat}" class="hover:text-brand transition-colors">${catLabel}</a></li>
            <li><i class="fa-solid fa-chevron-right text-[10px] opacity-30"></i></li>
            <li class="text-brand font-700 truncate max-w-[150px] sm:max-w-none">${p.name}</li>
          </ol>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
          
          <!-- IMAGE AREA -->
          <div class="lg:col-span-5 space-y-8">
            <div class="reveal relative group">
              <!-- Background Glow -->
              <div class="absolute inset-0 bg-brand/5 blur-3xl rounded-full scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div class="relative bg-white aspect-[4/5] lg:aspect-auto lg:h-[650px] w-full flex items-center justify-center rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-brand-muted/10 group">
                <img src="${p.img}" alt="${p.name}" 
                     onerror="this.src='https://images.unsplash.com/photo-1584467735815-f778f274e296?w=600&q=80'; this.classList.add('opacity-40')"
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
                
                <!-- Floating Badge -->
                <div class="absolute top-8 left-8 flex flex-col gap-3">
                  ${p.tags.map(t => `
                    <span class="px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md text-ink font-display font-800 text-[10px] tracking-widest uppercase shadow-xl border border-white/20">
                      ${t}
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Action Area Mobile (hidden on desktop) -->
            <div class="lg:hidden reveal pt-4">
               <a href="https://www.facebook.com/messages/t/61554434231420/" target="_blank" class="btn-primary w-full py-3 text-sm shadow-xl">
                  <i class="fa-brands fa-facebook-messenger text-base"></i> Chat on Messenger
                </a>
            </div>
          </div>

          <!-- CONTENT AREA -->
          <div class="lg:col-span-7 flex flex-col justify-start">
            <div class="space-y-6">
              <div class="reveal-right">
                <span class="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand font-display font-800 text-[10px] tracking-[0.2em] uppercase mb-4">${p.brand}</span>
                <h1 class="font-display font-900 text-4xl md:text-5xl lg:text-6xl text-ink leading-tight tracking-tight">${p.name}</h1>
              </div>

              <div class="reveal-right delay-100 flex items-center gap-6 text-sm font-body text-ink-3">
                <span class="flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-brand"></div> 100% Authentic</span>
                <span class="flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-brand"></div> ISO Certified</span>
              </div>

              <p class="reveal-right delay-200 leading-relaxed text-lg text-ink-3 font-body max-w-2xl">${p.desc}</p>
            </div>
            
            <!-- Specifications Card -->
            <div class="reveal-right delay-300 mt-12 relative">
               <div class="absolute -inset-4 bg-gradient-to-br from-brand/5 to-transparent rounded-[3rem] -z-10 opacity-50"></div>
               <div class="bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-brand-muted/10 shadow-sm relative z-0">
                  <div class="flex items-center justify-between mb-8 pb-4 border-b border-brand-muted/10">
                    <h3 class="font-display font-900 text-ink text-xl tracking-tight">Technical Data</h3>
                    <span class="text-[10px] font-display font-800 text-brand border border-brand/20 px-3 py-1 rounded-full uppercase tracking-widest">S-Ref: ${p.id}</span>
                  </div>
                  
                  <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                    ${p.features.map(f => {
                      const icon = getFeatureIcon(f);
                      return `
                      <li class="group flex items-start gap-5">
                        <div class="w-12 h-12 rounded-2xl bg-white border border-brand-muted/20 flex items-center justify-center flex-shrink-0 text-brand-dark shadow-sm group-hover:bg-brand group-hover:text-white group-hover:border-brand group-hover:scale-110 transition-all duration-300">
                          <i class="fa-solid ${icon} text-lg"></i>
                        </div>
                        <div class="space-y-1">
                          <p class="font-body text-sm text-ink-2 leading-relaxed font-500">${f}</p>
                        </div>
                      </li>`;
                    }).join('')}
                  </ul>
               </div>
            </div>

            <!-- Final Action Desktop -->
            <div class="reveal-right delay-400 mt-10 hidden lg:block">
               <div class="flex items-center gap-6">
                  <a href="https://www.facebook.com/messages/t/61554434231420/" target="_blank" class="btn-primary px-8 py-3 text-sm shadow-xl hover:shadow-2xl transition-all">
                    <i class="fa-brands fa-facebook-messenger text-base"></i> Chat on Messenger
                  </a>
                  <p class="text-[10px] text-ink-3 font-body font-500 max-w-[180px] leading-snug">
                    <i class="fa-solid fa-shield-halved text-brand mr-1"></i> Authentic 100% compliant protective equipment.
                  </p>
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
