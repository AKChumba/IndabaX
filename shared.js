// shared.js — utilities for pages that use shared-styles.css

// Highlight active nav link based on current page
(function () {
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(a => {
        if (a.getAttribute('href') === path) {
            a.style.color = 'var(--color-brand-brown)';
            a.style.fontWeight = '700';
        }
    });
})();
