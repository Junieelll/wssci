import { Home } from './pages/home.js';
import { ProductsListing } from './pages/products.js';
import { ProductDetail } from './pages/product-detail.js';
import { About } from './pages/about.js';
import { Contact } from './pages/contact.js';
import { Categories } from './pages/categories.js';

export function router() {
  const hash = window.location.hash.slice(1) || '/';
  const root = document.getElementById('app-container');
  let view = null;
  let param = null;
  let scrollTarget = null;
  
  // Handle active class in navbar
  updateNavActiveState(hash);

  if (hash.startsWith('/product/')) {
    view = ProductDetail;
    param = hash.split('/')[2];
  } else if (hash.startsWith('/products')) {
    view = ProductsListing;
  } else if (hash.startsWith('/about')) {
    view = About;
  } else if (hash.startsWith('/categories')) {
    view = Categories;
  } else if (hash.startsWith('/contact')) {
    view = Contact;
  } else {
    // If navigating to home or a section inside home
    view = Home;
    if (hash && hash !== '/') {
      scrollTarget = hash.replace(/^\/?/, '');
    }
  }
  
  root.innerHTML = view.render(param);
  if (view.init) view.init(param);
  
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
