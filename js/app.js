import { router } from './router.js';
import { setupNavScroll, setupParallax } from './utils.js';

const handleMobileMenu = () => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const items = document.querySelectorAll('.menu-item');

  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.classList.remove('active');
    toggle.classList.remove('burger-active');
    document.body.classList.remove('mobile-menu-active');
  };

  toggle.addEventListener('click', () => {
    const isActive = menu.classList.toggle('active');
    toggle.classList.toggle('burger-active');
    document.body.classList.toggle('mobile-menu-active', isActive);
  });

  // Close menu on link click
  items.forEach(item => {
    item.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
};

window.addEventListener('hashchange', () => {
  router();
  // Ensure menu closes on route change (e.g. browser back button)
  const menu = document.getElementById('mobile-menu');
  const toggle = document.getElementById('menu-toggle');
  if(menu) menu.classList.remove('active');
  if(toggle) toggle.classList.remove('burger-active');
  document.body.classList.remove('mobile-menu-active');
});

window.addEventListener('load', () => {
  setupNavScroll();
  setupParallax();
  handleMobileMenu();
  router(); // trigger initial route
});
