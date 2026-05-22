// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Frosted navbar on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (!navbar) return;

    if (window.scrollY > 30) {
        navbar.classList.add('backdrop-blur-md', 'bg-white/20', 'border-b', 'border-white/10');
        navbar.classList.remove('shadow-lg');
        document.querySelectorAll('nav a').forEach(a => {
            a.classList.remove('text-white');
            a.classList.add('text-black');
        });
        const btn = document.getElementById('mobile-menu-btn');
        if (btn) { btn.classList.remove('text-white'); btn.classList.add('text-earth'); }
    } else {
        navbar.classList.remove('backdrop-blur-md', 'bg-white/20', 'border-b', 'border-white/10');
        navbar.classList.add('shadow-lg');
        document.querySelectorAll('nav a').forEach(a => {
            a.classList.remove('text-black');
            a.classList.add('text-white');
        });
        const btn = document.getElementById('mobile-menu-btn');
        if (btn) { btn.classList.remove('text-earth'); btn.classList.add('text-white'); }
    }
});

// Fade-in cards on scroll
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.bg-white.rounded-lg, .bg-gray-50.rounded-lg').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Tilt effect for .tilt-card elements
(function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    function bindTilt(el) {
        el.addEventListener('pointermove', (e) => {
            const rect = el.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width;
            const py = (e.clientY - rect.top) / rect.height;
            el.style.transform = `rotateX(${(0.5 - py) * 8}deg) rotateY(${(px - 0.5) * 12}deg) translateY(-6px) scale(1.03)`;
        });
        el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.tilt-card').forEach(bindTilt);
    });
})();

// Polygon image viewer
(function () {
    const images = ['Resources/BACKGROUD.jpeg', 'Resources/Hero Background.jfif', 'Resources/BACKGROUD.jpeg'];
    let idx = 0;
    const imgEl = document.getElementById('poly-image');
    const prev  = document.getElementById('poly-prev');
    const next  = document.getElementById('poly-next');

    function show(i) {
        if (!imgEl) return;
        idx = (i + images.length) % images.length;
        imgEl.style.opacity = '0';
        setTimeout(() => { imgEl.src = images[idx]; imgEl.style.opacity = '1'; }, 200);
    }

    document.addEventListener('DOMContentLoaded', () => {
        if (prev) prev.addEventListener('click', () => show(idx - 1));
        if (next) next.addEventListener('click', () => show(idx + 1));
        show(0);
    });
})();
