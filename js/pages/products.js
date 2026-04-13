import { products, categories } from '../data.js';
import { setupScrollReveal } from '../utils.js';

let activeFilter = 'all';
let currentPage = 1;
let searchQuery = '';
let searchDebounceTimer = null;
const itemsPerPage = 6;

export const ProductsListing = {
  render: () => {
    return `
      <section class="py-24 bg-surface-2 min-h-screen pt-32 transition-colors duration-500">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          
          <!-- Page Header -->
          <div class="mb-10 lg:mb-14 pb-8 border-b border-brand-muted/20">
            <h1 class="reveal font-display font-800 text-3xl md:text-4xl lg:text-5xl text-ink leading-tight tracking-tight">Product <span class="text-brand">Catalog</span></h1>
            <p class="reveal delay-100 font-body text-ink-3 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">Source industry-grade protective equipment with guaranteed compliance. Filter by category to find specialized gear for your worksite.</p>
            
            <!-- Search Bar -->
            <div class="reveal delay-200 mt-6 relative max-w-xl">
              <div class="relative">
                <input
                  id="product-search"
                  type="text"
                  placeholder="Search by name, brand, or tag..."
                  autocomplete="off"
                  class="w-full pl-12 pr-12 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-brand-muted/30 font-body text-ink text-sm placeholder:text-ink-3/60 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all duration-300 shadow-sm"
                >
                <i class="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-ink z-10 text-sm pointer-events-none"></i>
                <button id="search-clear" class="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-ink/5 flex items-center justify-center text-ink-3 hover:bg-brand/10 hover:text-brand transition-all duration-200 opacity-0 pointer-events-none z-10">
                  <i class="fa-solid fa-xmark text-xs"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Catalog Layout: Sidebar + Grid -->
          <div id="catalog-main" class="flex flex-col lg:flex-row gap-8 lg:gap-14">
            
            <!-- Mobile Filter Region -->
            <div class="lg:hidden w-full mb-2">
               <div class="flex flex-col gap-4">
                 <div class="flex items-center justify-between">
                   <h3 class="font-display font-800 text-ink text-sm uppercase tracking-wider">Quick Filters</h3>
                   <span class="text-[10px] text-brand font-700 bg-brand/5 px-2 py-1 rounded-full"><i class="fa-solid fa-hand-pointer mr-1"></i> swipe</span>
                 </div>
                 <div id="mobile-filter-carousel" class="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
                    <!-- chips rendered dynamically -->
                 </div>
               </div>
            </div>

            <!-- Left Sidebar (Filters) -->
            <aside id="catalog-sidebar" class="w-full lg:w-64 flex-shrink-0 hidden lg:block bg-white/60 backdrop-blur-md lg:bg-transparent rounded-3xl lg:rounded-none p-6 lg:p-0 shadow-lg border border-brand/10 lg:border-none lg:shadow-none transition-all duration-300">
              <div class="space-y-6">
                <h3 class="hidden lg:flex font-display font-800 text-ink text-lg items-center gap-2">
                   <span class="w-2 h-7 bg-brand rounded-full"></span> Categories
                </h3>
                <div class="flex flex-col space-y-1" id="sidebar-filters">
                   <!-- rendered dynamically -->
                </div>
              </div>
            </aside>

            <!-- Right Main Grid -->
            <main class="flex-1 transition-all duration-500">
              <div class="flex justify-between items-center mb-8 flex-wrap gap-3">
                <div class="font-body text-xs text-ink-3 tracking-widest uppercase font-700">Displaying <span id="result-count" class="text-brand">0</span> Specialized Items</div>
                <!-- Active Filters Chips -->
                <div id="active-filters" class="flex items-center gap-2 flex-wrap"></div>
              </div>
              
              <div id="products-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <!-- Products rendered here -->
              </div>

              <!-- Standard Pagination -->
              <div class="mt-16 mb-8 flex justify-center items-center gap-2" id="pagination-controls">
                <!-- Pagination rendered here -->
              </div>
            </main>

          </div>
        </div>
      </section>
    `;
  },
  init: () => {
    const hash = window.location.hash;
    const urlParams = new URLSearchParams(hash.split('?')[1]);
    activeFilter = urlParams.get('filter') || 'all';
    currentPage = 1;
    searchQuery = '';

    // Categories list shared between views
    const tabs = [{ id:'all', label:'All Equipment' }, ...categories.map(c => ({id:c.id,label:c.label}))];

    const renderCarousel = () => {
      const c = document.getElementById('mobile-filter-carousel');
      if (!c) return;

      c.innerHTML = tabs.map(t => `
        <button data-filter="${t.id}" class="filter-chip flex items-center gap-2 whitespace-nowrap px-6 py-2.5 rounded-full text-[14px] font-display font-800 transition-all duration-300 ${t.id === activeFilter ? 'bg-brand text-white scale-105' : 'bg-white text-ink-3 border border-brand/5 hover:border-brand/20'}">
          ${t.id === activeFilter ? '<i class="fa-solid fa-circle-check text-[10px]"></i>' : '<i class="fa-solid fa-circle text-[4px] opacity-30"></i>'}
          ${t.label}
        </button>
      `).join('');
    };

    const renderSidebar = () => {
      const d = document.getElementById('sidebar-filters');
      if (!d) return;

      d.innerHTML = tabs.map(t => `
        <button data-filter="${t.id}" class="filter-btn text-left px-5 py-3 rounded-2xl text-sm font-display transition-all duration-300 w-full flex justify-between items-center group ${t.id===activeFilter ? 'bg-brand/10 text-brand font-700' : 'text-ink-3 hover:text-brand font-600'}">
          <span>${t.label}</span>
          ${t.id===activeFilter ? '<i class="fa-solid fa-circle-check text-[10px]"></i>' : '<i class="fa-solid fa-chevron-right text-[8px] opacity-0 group-hover:opacity-100 transition-all font-800"></i>'}
        </button>
      `).join('');
    };

    const renderActiveFilters = () => {
      const container = document.getElementById('active-filters');
      if (!container) return;
      const chips = [];

      if (activeFilter !== 'all') {
        const catLabel = categories.find(c => c.id === activeFilter)?.label || activeFilter;
        chips.push(`
          <span class="flex items-center gap-2 px-3 py-1.5 bg-brand/10 text-brand border border-brand/20 rounded-full text-[11px] font-display font-700">
            <i class="fa-solid fa-tag text-[8px]"></i> ${catLabel}
            <button data-clear-filter class="hover:text-brand-dark ml-1"><i class="fa-solid fa-xmark text-[9px]"></i></button>
          </span>
        `);
      }

      if (searchQuery) {
        chips.push(`
          <span class="flex items-center gap-2 px-3 py-1.5 bg-ink/5 text-ink-3 border border-ink/10 rounded-full text-[11px] font-display font-700">
            <i class="fa-solid fa-magnifying-glass text-[8px]"></i> "${searchQuery}"
            <button data-clear-search class="hover:text-ink ml-1"><i class="fa-solid fa-xmark text-[9px]"></i></button>
          </span>
        `);
      }

      container.innerHTML = chips.length
        ? chips.join('') + `<button data-clear-all class="text-[11px] font-display font-700 text-ink-3 hover:text-brand transition-colors px-2">Clear all</button>`
        : '';
    };

    const getFiltered = () => {
      let list = activeFilter === 'all' ? products : products.filter(p => p.cat === activeFilter);
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        list = list.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
        );
      }
      return list;
    };

    const renderCards = () => {
      const filtered = getFiltered();
      const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
      if (currentPage > totalPages) currentPage = totalPages;

      const startIndex = (currentPage - 1) * itemsPerPage;
      const shown = filtered.slice(startIndex, startIndex + itemsPerPage);

      const countEl = document.getElementById('result-count');
      if (countEl) countEl.innerText = filtered.length;

      const g = document.getElementById('products-grid');
      if (!g) return;

      renderActiveFilters();

      g.style.opacity = 0;
      
      setTimeout(() => {
        if (filtered.length === 0) {
          g.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-24 gap-6 text-center">
              <div class="w-20 h-20 rounded-3xl bg-brand/5 flex items-center justify-center">
                <i class="fa-solid fa-box-open text-brand text-3xl opacity-50"></i>
              </div>
              <div>
                <p class="font-display font-800 text-ink text-xl">No products found</p>
                <p class="font-body text-ink-3 text-sm mt-2 max-w-xs">Try adjusting your search or clearing the filters below.</p>
              </div>
              <button data-clear-all class="btn-outline text-sm">Clear All Filters</button>
            </div>
          `;
        } else {
          g.innerHTML = shown.map((p,i) => `
            <div class="product-card group reveal relative h-[400px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-700" style="transition-delay: ${i * 60}ms;">
              
              <!-- Full Bleed Image Background -->
              <div class="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                 <img src="${p.img}" alt="${p.name}" 
                      onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect width=%22400%22 height=%22400%22 fill=%22%23f0faf6%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2214%22 fill=%22%2327C291%22%3EImage Pending%3C/text%3E%3C/svg%3E';"
                      class="w-full h-full object-cover">
                 <!-- Subtle overlay to ensure text readability -->
                 <div class="absolute inset-0 bg-ink/10 group-hover:bg-ink/30 transition-all duration-700"></div>
              </div>

              <!-- Faded Blur Layer (Refined Glassmorphism) -->
              <div class="absolute inset-x-0 bottom-0 z-10 p-7 pt-28 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent backdrop-blur-lg" style="mask-image: linear-gradient(to top, black 70%, transparent); -webkit-mask-image: linear-gradient(to top, black 70%, transparent);">
                 <div class="space-y-4">
                    <div class="space-y-1.5">
                       <h3 class="text-white font-display font-800 text-2xl leading-[1.1] tracking-tight drop-shadow-md">${p.name}</h3>
                    </div>

                    <div class="pt-4 flex items-center justify-between border-t border-white/10">
                       <a href="#/product/${p.id}" class="text-white font-display font-900 text-[11px] hover:text-brand transition-colors tracking-widest flex items-center gap-2 group/btn">
                          VIEW PRODUCT <i class="fa-solid fa-arrow-right-long text-[10px] transition-transform group-hover/btn:translate-x-2"></i>
                       </a>
                       <span class="text-[9px] text-white/40 font-500 uppercase tracking-[0.3em]">WSSCI</span>
                    </div>
                 </div>
              </div>

              <!-- Clickable Link Area -->
              <a href="#/product/${p.id}" class="absolute inset-0 z-0"></a>
            </div>
          `).join('');
        }
        
        g.style.opacity = 1;
        g.style.transition = 'opacity 0.6s ease';
        renderPagination(totalPages, filtered.length);
        setupScrollReveal();
      }, 150);
    };

    const renderPagination = (totalPages, totalCount) => {
      const controls = document.getElementById('pagination-controls');
      if (!controls) return;
      if (totalPages <= 1 || totalCount === 0) { controls.innerHTML = ''; return; }

      let pagesHtml = '';
      
      pagesHtml += `
        <div class="flex items-center gap-2 px-2 py-2 rounded-full">
          <!-- Previous Button -->
          <button class="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-display font-800 transition-all duration-300 ${currentPage === 1 ? 'text-ink/10 cursor-default' : 'text-ink-3 hover:text-brand hover:bg-brand/5'}" ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">
            <i class="fa-solid fa-chevron-left text-[8px]"></i> Previous
          </button>
          
          <div class="flex items-center gap-1 mx-2">
      `;

      const getPageRange = () => {
        const range = [];
        const delta = 1;
        
        for (let i = 1; i <= totalPages; i++) {
          if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
            range.push(i);
          }
        }

        const finalRange = [];
        let l;

        for (let i of range) {
          if (l) {
            if (i - l === 2) {
              finalRange.push(l + 1);
            } else if (i - l !== 1) {
              finalRange.push('...');
            }
          }
          finalRange.push(i);
          l = i;
        }
        return finalRange;
      };

      getPageRange().forEach(i => {
        if (i === '...') {
          pagesHtml += `<span class="px-2 text-ink-3 opacity-30">...</span>`;
        } else {
          const isActive = currentPage === i;
          pagesHtml += `
            <button class="w-8 h-8 rounded-xl flex items-center justify-center font-display font-800 text-sm transition-all duration-300 ${isActive ? 'bg-brand/30 text-brand border-2 border-brand/60 shadow-sm' : 'text-ink-3 hover:bg-brand/5 hover:text-brand'}" data-page="${i}">
              ${i}
            </button>
          `;
        }
      });

      pagesHtml += `
          </div>

          <!-- Next Button -->
          <button class="flex items-center gap-3 bg-brand text-white px-6 py-2.5 rounded-full text-xs font-display font-800 shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all duration-300 hover:scale-[1.03] active:scale-95 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}" ${currentPage === totalPages ? 'disabled' : ''} data-page="${currentPage + 1}">
            Next <i class="fa-solid fa-chevron-right text-[8px]"></i>
          </button>
        </div>
      `;

      controls.innerHTML = pagesHtml;
      controls.querySelectorAll('button[data-page]').forEach(btn => {
        btn.onclick = (e) => {
          currentPage = parseInt(e.currentTarget.dataset.page);
          renderCards();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
      });
    };

    // Search input listener
    const searchInput = document.getElementById('product-search');
    const searchClear = document.getElementById('search-clear');
    
    if (searchInput) {
      // Restore any active search
      searchInput.value = searchQuery;
      toggleClearBtn(searchQuery);

      searchInput.addEventListener('input', (e) => {
        // Debounce: wait 300ms after user stops typing before re-rendering
        clearTimeout(searchDebounceTimer);
        const val = e.target.value.trim();
        toggleClearBtn(val);
        searchDebounceTimer = setTimeout(() => {
          searchQuery = val;
          currentPage = 1;
          renderCards();
        }, 300);
      });
    }

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        searchQuery = '';
        if (searchInput) searchInput.value = '';
        toggleClearBtn('');
        currentPage = 1;
        renderCards();
      });
    }

    function toggleClearBtn(val) {
      const btn = document.getElementById('search-clear');
      if (!btn) return;
      if (val) {
        btn.classList.remove('opacity-0', 'pointer-events-none');
      } else {
        btn.classList.add('opacity-0', 'pointer-events-none');
      }
    }

    // Scoped event delegation — attached to the page section, not document.
    // This prevents listener accumulation on SPA re-navigation.
    const pageSection = document.querySelector('section');
    if (pageSection) {
      pageSection.addEventListener('click', (e) => {
        // Category filter buttons
        const filterBtn = e.target.closest('[data-filter]');
        if (filterBtn) {
          activeFilter = filterBtn.dataset.filter;
          currentPage = 1;
          renderSidebar();
          renderCarousel();
          renderCards();
          if (window.innerWidth < 1024) window.scrollTo({ top: 200, behavior: 'smooth' });
          return;
        }

        // Clear category chip
        if (e.target.closest('[data-clear-filter]')) {
          activeFilter = 'all';
          currentPage = 1;
          renderSidebar();
          renderCarousel();
          renderCards();
          return;
        }

        // Clear search chip
        if (e.target.closest('[data-clear-search]')) {
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          toggleClearBtn('');
          currentPage = 1;
          renderCards();
          return;
        }

        // Clear all
        if (e.target.closest('[data-clear-all]')) {
          activeFilter = 'all';
          searchQuery = '';
          currentPage = 1;
          if (searchInput) searchInput.value = '';
          toggleClearBtn('');
          renderSidebar();
          renderCarousel();
          renderCards();
          return;
        }
      });
    }

    renderSidebar();
    renderCarousel();
    renderCards();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
