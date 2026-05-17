// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle hamburger icon
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }
});

// Smooth scrolling for anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar (frosted transparent when scrolling)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (!navbar) return;

    const threshold = 30; // px scrolled before applying frosted style
    const links = document.querySelectorAll('nav a');
    const btn = document.getElementById('mobile-menu-btn');
    const logoText = document.getElementById('nav-logo-text');

    if (window.scrollY > threshold) {
        // Apply frosted translucent navbar
        navbar.classList.add('backdrop-blur-md', 'bg-white/20', 'border-b', 'border-white/10', 'backdrop-saturate-110');
        navbar.classList.remove('bg-sky-500', 'shadow-lg', 'bg-transparent');

        // Update link colors for contrast: remove any previous color classes then add black
        links.forEach(a => {
            a.classList.remove('text-white', 'text-earth', 'text-black');
            a.classList.add('text-black');
        });

        if (btn) {
            btn.classList.remove('text-white', 'text-earth', 'text-black');
            btn.classList.add('text-earth');
        }

        // Logo text color
        if (logoText) {
            logoText.classList.remove('text-white', 'text-black', 'text-earth');
            logoText.classList.add('text-black');
        }
    } else {
        // At top: restore original solid navbar
        navbar.classList.remove('backdrop-blur-md', 'bg-white/20', 'border-b', 'border-white/10', 'backdrop-saturate-110');
        navbar.classList.add('bg-sky-500', 'shadow-lg');

        // Restore link colors to white: remove any previous color classes then add white
        links.forEach(a => {
            a.classList.remove('text-black', 'text-earth', 'text-white');
            a.classList.add('text-white');
        });

        if (btn) {
            btn.classList.remove('text-earth', 'text-white', 'text-black');
            btn.classList.add('text-white');
        }

        // Logo text color
        if (logoText) {
            logoText.classList.remove('text-black', 'text-earth', 'text-white');
            logoText.classList.add('text-white');
        }
    }
});

// Simple fade-in animation for cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation class when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to cards
    const cards = document.querySelectorAll('.bg-white.rounded-lg, .bg-gray-50.rounded-lg');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Tilt effect for cards
(function(){
    const supportsReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (supportsReducedMotion && supportsReducedMotion.matches) return;

    function bindTilt(el){
        const rect = el.getBoundingClientRect();
        el.addEventListener('pointermove', (e) => {
            const px = (e.clientX - rect.left) / rect.width;
            const py = (e.clientY - rect.top) / rect.height;
            const rotateY = (px - 0.5) * 12; // degrees
            const rotateX = (0.5 - py) * 8; // degrees
            el.style.transform = `translateZ(0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.03)`;
        });
        el.addEventListener('pointerleave', () => {
            el.style.transform = '';
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.tilt-card').forEach(bindTilt);
    });
})();

// Polygon viewer (highlight section)
(function(){
    const images = [
        'Resources/BACKGROUD.jpeg',
        'Resources/Hero Background.jfif',
        'Resources/BACKGROUD.jpeg'
    ];
    let idx = 0;
    const imgEl = document.getElementById('poly-image');
    const prev = document.getElementById('poly-prev');
    const next = document.getElementById('poly-next');

    function show(i){
        if (!imgEl) return;
        idx = (i + images.length) % images.length;
        imgEl.style.opacity = '0';
        setTimeout(() => {
            imgEl.src = images[idx];
            imgEl.style.opacity = '1';
        }, 200);
    }

    document.addEventListener('DOMContentLoaded', () => {
        if (prev) prev.addEventListener('click', () => show(idx - 1));
        if (next) next.addEventListener('click', () => show(idx + 1));
        show(0);
    });
})();

// Slideshow for About hero (10000ms interval)
document.addEventListener('DOMContentLoaded', function() {
    const slides = [document.getElementById('about-slide-0'), document.getElementById('about-slide-1')];
    if (!slides || !slides[0]) return;
    let idx = 0;
    setInterval(() => {
        const next = (idx + 1) % slides.length;
        slides[idx].style.opacity = '0';
        slides[next].style.opacity = '1';
        idx = next;
    }, 10000); // 10000ms (10 seconds)
});
