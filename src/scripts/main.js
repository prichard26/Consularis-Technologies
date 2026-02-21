/**
 * Consularis Technologies – main script
 */
(function () {
  const header = document.getElementById('site-header');
  const navToggle = document.getElementById('nav-toggle');
  const navMobile = document.getElementById('nav-mobile');
  const yearEl = document.getElementById('year');
  const hasHero = !!document.querySelector('.hero');
  const isPhone = () => window.matchMedia('(max-width: 767px)').matches;
  let lastY = window.scrollY;
  let scrollDownTimer;

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (navToggle && navMobile) {
    const setMenuState = (isOpen) => {
      header.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navMobile.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    navToggle.addEventListener('click', () => {
      setMenuState(!header.classList.contains('is-open'));
    });

    navMobile.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', () => {
        setMenuState(false);
      })
    );

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && header.classList.contains('is-open')) {
        setMenuState(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && header.classList.contains('is-open')) {
        setMenuState(false);
      }
    });
  }

  // Fixed transparent header: solid when scrolled past hero
  function onScroll() {
    const currentY = window.scrollY;
    header.classList.toggle('scrolled', !hasHero || window.scrollY > 80);

    if (!isPhone()) {
      document.body.classList.remove('is-scrolling-down');
      lastY = currentY;
      return;
    }

    const delta = currentY - lastY;

    if (delta > 3 && currentY > 50) {
      document.body.classList.add('is-scrolling-down');
      clearTimeout(scrollDownTimer);
      scrollDownTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling-down');
      }, 420);
    } else if (delta < -2 || currentY < 40) {
      document.body.classList.remove('is-scrolling-down');
    }

    lastY = currentY;
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    if (!isPhone()) document.body.classList.remove('is-scrolling-down');
  });
})();
