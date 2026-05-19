// shared.js — injects consistent nav + footer + modal shell into every page

(function () {
  /* ── NAV ── */
 

 

  /* ── INJECT ── */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // year
  document.querySelectorAll('.year-span').forEach(el => el.textContent = new Date().getFullYear());

  // mobile menu toggle
  document.getElementById('mob-menu-btn').addEventListener('click', () => {
    document.getElementById('mob-menu').classList.toggle('hidden');
  });

  // highlight active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === path) {
      a.style.color = 'var(--color-brand-brown)';
      a.style.fontWeight = '700';
    }
  });
})();
