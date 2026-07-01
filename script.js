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

// Feature counter animation
document.addEventListener("DOMContentLoaded", () => {

    const featureSection = document.querySelector("#features");

    if (!featureSection) return;


    const counters = featureSection.querySelectorAll(".counter");


    function startCounting(){

        counters.forEach(counter => {

            counter.innerText = "0";

            const target = Number(counter.dataset.target);


            let count = 0;

            const speed = target / 100;


            function update(){

                count += speed;


                if(count < target){

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }
                else{

                    counter.innerText = target;

                }

            }


            update();

        });

    }



    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{


            if(entry.isIntersecting){

                startCounting();

            }


        });


    },{

        threshold:0.6

    });



    observer.observe(featureSection);


});

// Polygon image viewer
(function () {

    const images = [
        'Resources/photo.jpg',
        'Resources/question.jpg',
        'Resources/stage.jpg'
    ];

    let idx = 0;

    const imgEl = document.getElementById('poly-image');
    const prev = document.getElementById('poly-prev');
    const next = document.getElementById('poly-next');
    const dotContainer = document.getElementById('poly-dots');


    function updateDots(){

        const dots = document.querySelectorAll('#poly-dots button');

        dots.forEach((dot,index)=>{

            if(index === idx){

                dot.classList.remove('bg-white/50');

                dot.classList.add(
                    'bg-white/80',
                    'scale-125'
                );

            }
            else{

                dot.classList.add('bg-white/50');

                dot.classList.remove(
                    'bg-white/80',
                    'scale-125'
                );

            }

        });

    }



    function createDots(){

    if(!dotContainer) return;


    images.forEach((image,index)=>{

        const dot = document.createElement('button');


        dot.className =
        "w-3 h-3 rounded-full bg-white/80 border border-black transition-all duration-300";


        dot.addEventListener('click',()=>{

            show(index);

        });


        dotContainer.appendChild(dot);

    });

}



    function show(i){

        if(!imgEl) return;


        idx = (i + images.length) % images.length;


        imgEl.style.opacity = '0';


        setTimeout(()=>{


            imgEl.src = images[idx];

            imgEl.style.opacity = '1';


            updateDots();


        },500);


    }



    function nextImage(){

        show(idx + 1);

    }



    document.addEventListener('DOMContentLoaded',()=>{


        createDots();


        show(0);



        if(prev){

            prev.addEventListener('click',()=>{

                show(idx-1);

            });

        }



        if(next){

            next.addEventListener('click',()=>{

                show(idx+1);

            });

        }



        setInterval(()=>{

            nextImage();

        },4000);


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


