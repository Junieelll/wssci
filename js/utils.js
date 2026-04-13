export function setupScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
  
  const lineObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.5 });
  document.querySelectorAll('.line-draw').forEach(el => lineObs.observe(el));
}

export function setupCursor() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (!cursor || !ring) return;
  let rx=0,ry=0;
  document.addEventListener('mousemove', e => {
    cursor.style.left=e.clientX+'px'; cursor.style.top=e.clientY+'px';
    rx+=(e.clientX-rx)*.12; ry+=(e.clientY-ry)*.12;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
  });
  
  const attachHoverEvents = () => {
    document.querySelectorAll('a,button,.product-card,.float-card').forEach(el => {
      if(!el.dataset.cursorBound) {
        el.dataset.cursorBound = "1";
        el.addEventListener('mouseenter', () => { cursor.style.width='24px'; cursor.style.height='24px'; cursor.style.opacity='.5'; });
        el.addEventListener('mouseleave', () => { cursor.style.width='12px'; cursor.style.height='12px'; cursor.style.opacity='1'; });
      }
    });
  };
  
  function animRing() { rx+=(parseFloat(cursor.style.left||0)-rx)*.09; ry+=(parseFloat(cursor.style.top||0)-ry)*.09; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(animRing); }
  animRing();
  
  // Create observer to attach hover events to elements loaded dynamically via JS routing
  const mutationObs = new MutationObserver(attachHoverEvents);
  mutationObs.observe(document.body, { childList: true, subtree: true });
  attachHoverEvents();
}

export function setupNavScroll() {
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if(navbar) navbar.classList.toggle('scrolled', window.scrollY>60);
  });
}

export function setupParallax() {
  window.addEventListener('scroll', () => {
    const s = window.scrollY;
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = parseFloat(el.dataset.parallax)||0.3;
      el.style.transform=`translateY(${s*speed}px)`;
    });
  });
}

export function setupStats() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.target)||0;
        let current=0;
        const step = target/60;
        const t = setInterval(() => {
          current+=step;
          if (current>=target) { el.textContent=target+'+'; clearInterval(t); }
          else el.textContent=Math.floor(current)+'+';
        }, 16);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num').forEach(el => obs.observe(el));
}
