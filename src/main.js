/**
 * Consularis Technologies – main script
 */
(function () {
  const header = document.getElementById('site-header');
  const navToggle = document.getElementById('nav-toggle');
  const navMobile = document.getElementById('nav-mobile');
  const yearEl = document.getElementById('year');
  const hasHero = !!document.querySelector('.hero');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => {
      const isOpen = header.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
      navMobile.setAttribute('aria-hidden', !isOpen);
    });

    navMobile.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', () => {
        header.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.setAttribute('aria-hidden', 'true');
      })
    );

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && header.classList.contains('is-open')) {
        header.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Fixed transparent header: solid when scrolled past hero
  function onScroll() {
    header.classList.toggle('scrolled', !hasHero || window.scrollY > 80);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
