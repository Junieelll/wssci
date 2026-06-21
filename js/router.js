export async function router() {
  const hash = window.location.hash.slice(1) || '/';
  const root = document.getElementById('app-container');
  let modulePromise = null;
  let viewName = '';
  let param = null;
  let scrollTarget = null;
  
  // Handle active class in navbar
  updateNavActiveState(hash);

  if (hash.startsWith('/product/')) {
    modulePromise = import('./pages/product-detail.js');
    viewName = 'ProductDetail';
    param = hash.split('/')[2];
  } else if (hash.startsWith('/products')) {
    modulePromise = import('./pages/products.js');
    viewName = 'ProductsListing';
  } else if (hash.startsWith('/about')) {
    modulePromise = import('./pages/about.js');
    viewName = 'About';
  } else if (hash.startsWith('/categories')) {
    modulePromise = import('./pages/categories.js');
    viewName = 'Categories';
  } else if (hash.startsWith('/contact')) {
    modulePromise = import('./pages/contact.js');
    viewName = 'Contact';
  } else {
    // If navigating to home or a section inside home
    modulePromise = import('./pages/home.js');
    viewName = 'Home';
    if (hash && hash !== '/') {
      scrollTarget = hash.replace(/^\/?/, '');
    }
  }

  try {
    const module = await modulePromise;
    const view = module[viewName];
    
    root.innerHTML = view.render(param);
    if (view.init) await view.init(param);
    
    if (scrollTarget && scrollTarget !== '') {
        setTimeout(() => {
            const el = document.getElementById(scrollTarget);
            if (el) {
                const yOffset = -80; // nav height offset
                const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
            }
        }, 100);
    } else {
        setTimeout(() => { window.scrollTo(0,0); }, 10);
    }
  } catch (err) {
    console.error('Error loading page component:', err);
    root.innerHTML = `<div class="py-20 text-center font-display font-800 text-red-500">Failed to load page. Please try again.</div>`;
  }
}

function updateNavActiveState(hash) {
    const baseHash = hash.split('?')[0];
    
    // Desktop Nav
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        const href = link.getAttribute('href').slice(1).split('?')[0] || '/';
        // Simple matching logic
        if (baseHash === href || (baseHash === '/' && href === '/')) {
            link.classList.add('nav-link-active');
        } else {
            link.classList.remove('nav-link-active');
        }
    });

    // Mobile Nav
    const mobileLinks = document.querySelectorAll('.menu-item');
    mobileLinks.forEach(link => {
        const href = link.getAttribute('href').slice(1).split('?')[0] || '/';
        if (baseHash === href || (baseHash === '/' && href === '/')) {
            link.classList.remove('text-white/50', 'font-600', 'hover:text-white', 'hover:bg-white/5');
            link.classList.add('text-brand', 'font-700');
        } else {
            link.classList.remove('text-brand', 'font-700');
            link.classList.add('text-white/50', 'font-600', 'hover:text-white', 'hover:bg-white/5');
        }
    });
}
