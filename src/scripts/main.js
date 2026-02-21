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

  // Spotlight title: split into spans for letter-by-letter animation (orange → black)
  const spotlightTitle = document.getElementById('spotlight-title');
  if (spotlightTitle) {
    const text = spotlightTitle.textContent;
    spotlightTitle.textContent = '';
    spotlightTitle.setAttribute('aria-label', text);
    let i = 0;
    for (const char of text) {
      const span = document.createElement('span');
      span.className = 'title-char';
      span.style.setProperty('--i', i);
      span.textContent = char;
      if (char === ' ') span.classList.add('title-char--space');
      spotlightTitle.appendChild(span);
      i++;
    }
    // Re-run animation when title enters viewport (re-appear)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in-view');
          } else {
            entry.target.classList.remove('is-in-view');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px' }
    );
    observer.observe(spotlightTitle);
  }

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

  // FAQ accordion
  document.querySelectorAll('.faq-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = document.getElementById(btn.getAttribute('aria-controls'));
      const isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen);
      if (answer) answer.hidden = !isOpen;
    });
  });
})();
