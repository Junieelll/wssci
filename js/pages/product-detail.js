import { products, categories } from '../data.js';
import { setupScrollReveal } from '../utils.js';

const getFeatureIcon = (text) => {
  const t = text.toLowerCase();
  if (t.includes('water') || t.includes('splash') || t.includes('liquid')) return 'fa-droplet';
  if (t.includes('toe') || t.includes('puncture') || t.includes('impact')) return 'fa-shield-halved';
  if (t.includes('breathable') || t.includes('mesh') || t.includes('air')) return 'fa-wind';
  if (t.includes('oil') || t.includes('fuel') || t.includes('chemical')) return 'fa-flask';
  if (t.includes('lightweight') || t.includes('comfort') || t.includes('soft') || t.includes('flexible')) return 'fa-feather-pointed';
  if (t.includes('esd') || t.includes('static') || t.includes('electric')) return 'fa-bolt-lightning';
  if (t.includes('grip') || t.includes('slip') || t.includes('sole') || t.includes('traction')) return 'fa-shoe-prints';
  if (t.includes('leather') || t.includes('fabric') || t.includes('upper')) return 'fa-layer-group';
  if (t.includes('norm') || t.includes('astm') || t.includes('en iso') || t.includes('certif') || t.includes('compliant')) return 'fa-certificate';
  if (t.includes('snr') || t.includes('attenuat') || t.includes('db')) return 'fa-ear-deaf';
  if (t.includes('cord') || t.includes('pvc cord')) return 'fa-link';
  if (t.includes('washable') || t.includes('reusable') || t.includes('recycle')) return 'fa-recycle';
  if (t.includes('foam') || t.includes('cushion')) return 'fa-cloud';
  if (t.includes('abs') || t.includes('cup')) return 'fa-cube';
  if (t.includes('headband') || t.includes('adjusta')) return 'fa-sliders';
  if (t.includes('helmet') || t.includes('hard hat')) return 'fa-hard-hat';
  if (t.includes('pivot') || t.includes('mount') || t.includes('clip')) return 'fa-link';
  if (t.includes('foldable') || t.includes('compact')) return 'fa-compress';
  if (t.includes('silicone') || t.includes('thermoplastic')) return 'fa-feather-pointed';
  if (t.includes('visibility') || t.includes('fluorescent') || t.includes('hi-vis')) return 'fa-eye';
  return 'fa-circle-dot';
};

export const ProductDetail = {
  render: (id) => {
    const p = products.find(x => x.id === parseInt(id));
    if (!p) {
      return `
        <section class="py-28 min-h-screen pt-32 text-center flex flex-col items-center justify-center gap-4">
          <div class="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center mb-2">
            <i class="fa-solid fa-box-open text-brand text-3xl"></i>
          </div>
          <h2 class="font-display font-800 text-4xl mb-2">Product Not Found</h2>
          <p class="text-ink-3 font-body">This product doesn't exist or may have been removed.</p>
          <a href="#/products" class="btn-primary mt-4">Browse All Products</a>
        </section>
      `;
    }

    const catObj = categories.find(c => c.id === p.cat);
    const catLabel = catObj ? catObj.label : 'General';
    const hasBenefits = p.benefits && p.benefits.length > 0;

    // Related products — same category, exclude current
    const related = products.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);

    return `
    <div id="product-detail-container" class="bg-surface overflow-hidden">

      <!-- ══ HERO BANNER ══ -->
      <div class="bg-gradient-to-br from-brand-light via-surface to-surface-2 border-b border-brand-muted/20">
        <div class="max-w-7xl mx-auto px-6 lg:px-16 pt-28 pb-6">
          <!-- Breadcrumb -->
          <nav class="flex text-xs text-ink-3 font-body mb-6">
            <ol class="flex items-center flex-wrap gap-y-1 gap-x-2">
              <li><a href="#/" class="hover:text-brand transition-colors">Home</a></li>
              <li><i class="fa-solid fa-chevron-right text-[9px] opacity-30"></i></li>
              <li><a href="#/products" class="hover:text-brand transition-colors">Products</a></li>
              <li><i class="fa-solid fa-chevron-right text-[9px] opacity-30"></i></li>
              <li><a href="#/products?filter=${p.cat}" class="hover:text-brand transition-colors">${catLabel}</a></li>
              <li><i class="fa-solid fa-chevron-right text-[9px] opacity-30"></i></li>
              <li class="text-brand font-700 truncate max-w-[160px]">${p.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- ══ MAIN CONTENT ══ -->
      <div class="max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">

          <!-- ── LEFT: IMAGE ── -->
          <div class="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div class="reveal relative group">
              <!-- Ambient glow -->
              <div class="absolute -inset-6 bg-brand/8 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

              <!-- Image card -->
              <div class="relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.07)] border border-brand-muted/15 aspect-square flex items-center justify-center p-8">
                <img src="${p.img}" alt="${p.name}"
                     onerror="this.src='https://images.unsplash.com/photo-1584467735815-f778f274e296?w=600&q=80'; this.classList.add('opacity-30')"
                     class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700">

                <!-- Tag pills on image -->
                <div class="absolute top-5 left-5 flex flex-col gap-2">
                  ${p.tags.slice(0, 2).map(t => `
                    <span class="px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-sm text-ink font-display font-800 text-[10px] tracking-widest uppercase shadow-lg border border-white/40">
                      ${t}
                    </span>
                  `).join('')}
                </div>

                <!-- Brand watermark -->
                <div class="absolute bottom-5 right-5 opacity-30">
                  <span class="font-display font-900 text-xs text-ink uppercase tracking-widest">${p.brand}</span>
                </div>
              </div>
            </div>

            <!-- Certification strip -->
            <div class="reveal mt-5 flex items-center justify-center gap-6 bg-white rounded-2xl px-6 py-4 border border-brand-muted/15 shadow-sm">
              <div class="flex items-center gap-2 text-ink-3">
                <i class="fa-solid fa-shield-halved text-brand text-sm"></i>
                <span class="font-body text-xs font-600">100% Authentic</span>
              </div>
              <div class="w-px h-4 bg-brand-muted"></div>
              <div class="flex items-center gap-2 text-ink-3">
                <i class="fa-solid fa-certificate text-brand text-sm"></i>
                <span class="font-body text-xs font-600">CE & OSHC Certified</span>
              </div>
              <div class="w-px h-4 bg-brand-muted"></div>
              <div class="flex items-center gap-2 text-ink-3">
                <i class="fa-solid fa-truck-fast text-brand text-sm"></i>
                <span class="font-body text-xs font-600">Nationwide Delivery</span>
              </div>
            </div>

            <!-- ── STANDARDS / CERTIFICATIONS ── -->
            ${p.certifications && p.certifications.length > 0 ? `
            <div class="reveal mt-5">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-7 h-7 rounded-lg bg-brand/10 flex items-center justify-center">
                  <i class="fa-solid fa-award text-brand text-xs"></i>
                </div>
                <h3 class="font-display font-800 text-sm text-ink">Standards / Certifications</h3>
              </div>
              <div class="bg-white rounded-2xl border border-brand-muted/15 shadow-sm overflow-hidden">
                <ul class="divide-y divide-brand-muted/10">
                  ${p.certifications.map(c => `
                    <li class="group flex items-center gap-4 px-5 py-4 hover:bg-brand/3 transition-colors duration-200">
                      <div class="w-10 h-10 rounded-xl bg-surface-2 border border-brand-muted/15 flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                        <i class="fa-solid fa-shield-halved text-brand group-hover:text-white transition-colors duration-300"></i>
                      </div>
                      <div class="flex-1 min-w-0">
                        <h4 class="font-display font-800 text-sm text-ink">${c.name}</h4>
                        <p class="font-body text-[11px] text-ink-3 mt-0.5">${c.details}</p>
                      </div>
                      <div class="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                        <i class="fa-solid fa-check text-brand text-[9px]"></i>
                      </div>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
            ` : ''}
          </div>

          <!-- ── RIGHT: CONTENT ── -->
          <div class="lg:col-span-7 space-y-10">

            <!-- Header -->
            <div class="reveal-right space-y-4">
              <div class="flex items-center gap-3 flex-wrap">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 text-brand font-display font-800 text-[10px] tracking-[0.18em] uppercase">
                  <span class="w-1.5 h-1.5 rounded-full bg-brand"></span>${p.brand}
                </span>
                <span class="px-3 py-1 rounded-full bg-surface-2 text-ink-3 font-display font-700 text-[10px] tracking-widest uppercase border border-brand-muted/20">
                  ${catLabel}
                </span>
                <span class="px-3 py-1 rounded-full bg-surface-2 text-ink-3 font-display font-700 text-[10px] tracking-widest uppercase border border-brand-muted/20">
                  Ref: #${p.id}
                </span>
              </div>
              <h1 class="font-display font-900 text-4xl md:text-5xl xl:text-6xl text-ink leading-[1.05] tracking-tight">${p.name}</h1>
              <p class="font-body text-ink-3 text-base lg:text-lg leading-relaxed">${p.desc}</p>
            </div>

            <!-- ── BENEFITS SECTION ── -->
            ${hasBenefits ? `
            <div class="reveal-right delay-100">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-8 h-8 rounded-xl bg-brand/10 flex items-center justify-center">
                  <i class="fa-solid fa-star text-brand text-sm"></i>
                </div>
                <h2 class="font-display font-800 text-lg text-ink">Key Benefits</h2>
              </div>
              <div class="${p.benefits[0].desc ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : 'grid grid-cols-2 sm:grid-cols-3 gap-3'}">
                ${p.benefits.map((b, i) => b.desc ? `
                  <div class="group bg-white border border-brand-muted/15 rounded-2xl px-5 py-5 shadow-sm hover:border-brand/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style="transition-delay:${i * 60}ms">
                    <div class="flex items-center gap-3 mb-3">
                      <div class="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-300">
                        <i class="fa-solid ${b.icon} text-brand text-base group-hover:text-white transition-colors duration-300"></i>
                      </div>
                      <h4 class="font-display font-800 text-sm text-ink">${b.label}</h4>
                    </div>
                    <p class="font-body text-xs text-ink-3 leading-relaxed">${b.desc}</p>
                  </div>
                ` : `
                  <div class="group flex items-center gap-3 bg-white border border-brand-muted/15 rounded-2xl px-4 py-3.5 shadow-sm hover:border-brand/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style="transition-delay:${i * 40}ms">
                    <div class="w-9 h-9 rounded-xl bg-brand/8 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-300">
                      <i class="fa-solid ${b.icon} text-brand text-sm group-hover:text-white transition-colors duration-300"></i>
                    </div>
                    <span class="font-body font-600 text-xs text-ink leading-tight">${b.label}</span>
                  </div>
                `).join('')}
              </div>
            </div>
            ` : ''}

            <!-- ── TECHNICAL SPECS ── -->
            <div class="reveal-right delay-200">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-8 h-8 rounded-xl bg-brand/10 flex items-center justify-center">
                  <i class="fa-solid fa-list-check text-brand text-sm"></i>
                </div>
                <h2 class="font-display font-800 text-lg text-ink">Technical Specifications</h2>
              </div>
              <div class="bg-white rounded-[2rem] border border-brand-muted/15 shadow-sm overflow-hidden">
                <ul class="divide-y divide-brand-muted/10">
                  ${p.features.map((f, i) => {
                    const icon = getFeatureIcon(f);
                    return `
                    <li class="group flex items-center gap-4 px-6 py-4 hover:bg-brand/3 transition-colors duration-200">
                      <div class="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white text-brand transition-all duration-300">
                        <i class="fa-solid ${icon} text-sm"></i>
                      </div>
                      <p class="font-body text-sm text-ink-2 leading-relaxed font-500">${f}</p>
                      <div class="ml-auto w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <i class="fa-solid fa-check text-brand text-[9px]"></i>
                      </div>
                    </li>`;
                  }).join('')}
                </ul>
              </div>
            </div>

            <div class="reveal-right delay-300">
              <div class="bg-gradient-to-br from-ink to-ink-2 rounded-[2rem] p-7 lg:p-8 relative overflow-hidden">
                <!-- Subtle pattern -->
                <div class="absolute inset-0 opacity-5" style="background-image:radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0); background-size: 24px 24px;"></div>
                <div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div class="space-y-1.5">
                    <p class="font-display font-900 text-white text-lg">Ready to order?</p>
                    <p class="font-body text-white/60 text-sm">Chat with our team — fast, direct, no middlemen.</p>
                  </div>
                  <div class="flex flex-col sm:flex-row gap-3 shrink-0">
                    <a href="https://www.facebook.com/messages/t/61554434231420/" target="_blank" class="btn-primary shadow-xl whitespace-nowrap">
                      <i class="fa-brands fa-facebook-messenger"></i> Chat on Messenger
                    </a>
                    <a href="#/products?filter=${p.cat}" class="btn-outline bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/50 whitespace-nowrap">
                      <i class="fa-solid fa-arrow-left text-xs"></i> More ${catLabel}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- ══ RELATED PRODUCTS ══ -->
        ${related.length > 0 ? `
        <div class="mt-24 pt-12 border-t border-brand-muted/20">
          <div class="flex items-center justify-between mb-10 gap-4 flex-wrap">
            <div class="space-y-1">
              <div class="section-pill"><span class="dot"></span>More Like This</div>
              <h2 class="font-display font-800 text-3xl text-ink mt-3">Related <span class="text-brand">${catLabel}</span></h2>
            </div>
            <a href="#/products?filter=${p.cat}" class="btn-outline text-sm">View All</a>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-${Math.min(related.length, 4)} gap-4 lg:gap-6">
            ${related.map((r, i) => `
              <a href="#/product/${r.id}" class="reveal group block bg-white rounded-[1.5rem] p-4 border border-brand-muted/10 shadow-sm hover:shadow-xl hover:border-brand/20 hover:-translate-y-1.5 transition-all duration-400" style="transition-delay:${i * 80}ms">
                <div class="aspect-square rounded-2xl overflow-hidden bg-surface mb-4">
                  <img src="${r.img}" alt="${r.name}"
                       onerror="this.src='https://images.unsplash.com/photo-1584467735815-f778f274e296?w=400&q=60'; this.classList.add('opacity-30')"
                       class="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500 p-2">
                </div>
                <div class="space-y-1">
                  <p class="text-[10px] font-display font-800 text-brand uppercase tracking-tighter">${r.brand}</p>
                  <h4 class="font-display font-800 text-sm text-ink group-hover:text-brand transition-colors leading-snug line-clamp-2">${r.name}</h4>
                  <div class="flex flex-wrap gap-1 pt-1">
                    ${r.tags.slice(0, 2).map(t => `<span class="text-[9px] px-2 py-0.5 rounded-full bg-surface-2 text-ink-3 font-600">${t}</span>`).join('')}
                  </div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
        ` : ''}

      </div>
    </div>
    `;
  },
  init: () => {
    setupScrollReveal();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
};
