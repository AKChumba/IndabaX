// for the committee cards and modal
    const playBtn = document.getElementById('playBtn');
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            alert('Video player would start playing. Add a <video> element with your actual video source.');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== "#" && href !== "") {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    document.querySelectorAll('.stat').forEach(stat => {
        stat.addEventListener('mouseenter', () => {
            stat.style.transform = 'translateX(5px)';
        });
        stat.addEventListener('mouseleave', () => {
            stat.style.transform = 'translateX(0)';
        });
    });

    const readMoreLinks = document.querySelectorAll('.read-more-link');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.highlight-card');
            const title = card.querySelector('.card-label').innerText;
            alert(`Opening "${title}" article - Add your modal or page navigation here`);
        });
    });

    document.querySelectorAll('.highlight-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            console.log('Card hovered');
        });
    });

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('.card-image').forEach(img => {
            imageObserver.observe(img);
        });
    }

    const viewAllBtn = document.querySelector('.inline-block.bg-brand-brown');
    if (viewAllBtn && viewAllBtn.getAttribute('href').startsWith('#')) {
        viewAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const members = [
        {
            name: "Dr. Nashandi",
            role: "Conference Chair",
            shortBio: "Leading the strategic vision and overall coordination ensures runs smoothly.",
            fullBio: "Dr. Nashandi is a professor of Computer Science with 15+ years in academic. She has chaired over 20 international Conferences and is dedicated to fostering inclusive tech communities across Africa.",
            image: "Resources/Nashandi.jpg"
        },
        {
            name: "TK Hambira",
            role: "Technical Program Chair",
            shortBio: "Manages peer-review and scientific tracks ensure all work is done and runs smoothely .",
            fullBio: "TK leads the technical programme committee ensuring high-quality double-blind review. He is a senior researcher in AI ethics and has previously managed programme committees for workshops.",
            image: "Resources/Hambira.jpg"
        },
        {
            name: "Liina Massipa",
            role: "Sponsorship & Partnerships",
            shortBio: "Connects with industry partners and funding bodies.",
            fullBio: "Liina has built partnerships with top tech companies, securing sponsorships and fostering collaboration between academia and industry. She believes in impactful networking for the African AI community.",
            image: "Resources/Massipa.jpg"
        },
        {
            name: "Member 3",
            role: "Workshop & Tutorial Chair",
            shortBio: "Coordinates pre-conference workshops and hands-on sessions.",
            fullBio: "Member 3 is passionate about knowledge exchange. He has organised more than 30 workshops covering data science, cloud computing, and responsible AI across NUST and regional institutions.",
            image: "Resources/Nashandi.jpg"
        },
        {
            name: "Member 4",
            role: "Logistics & Operations",
            shortBio: "Ensures smooth on-site and virtual experience.",
            fullBio: "Member 4 is a seasoned event manager with expertise in hybrid conference logistics. He makes sure every session runs on time and every attendee at NUST feels welcomed.",
            image: "Resources/Hambira.jpg"
        },
        {
            name: "Dr. Bean",
            role: "Publications Chair",
            shortBio: "Oversees proceedings and open-access archives.",
            fullBio: "Bean manages the publication workflow, indexing, and DOI registration. He advocates for open science and transparent peer review within the Deep Learning Indaba community.",
            image: "Resources/Massipa.jpg"
        }
    ];

    const grid = document.getElementById('committee-grid');
    members.forEach((m, i) => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-200 cursor-pointer group';
        card.dataset.index = i;
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View bio for ${m.name}`);

        card.innerHTML = `
            <div class="overflow-hidden h-56">
                <img src="${m.image}" alt="${m.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
            </div>
            <div class="p-5 pb-14 relative">
                <h3 class="text-lg font-bold text-brand-peach">${m.name}</h3>
                <p class="text-xs font-semibold uppercase tracking-wider text-brand-burgundy mt-0.5 mb-2">${m.role}</p>
                <p class="text-sm text-gray-500 leading-relaxed">${m.shortBio}</p>
                <button class="absolute bottom-4 right-4 text-xs font-semibold text-white bg-orange hover:bg-brand-peach px-4 py-2 rounded-full transition-colors duration-200" data-index="${i}" aria-label="Read full bio for ${m.name}">
                    Read Bio
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    const modal = document.getElementById('bio-modal');
    const panel = document.getElementById('modal-panel');
    const closeBtn = document.getElementById('modal-close');
    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');
    const counter = document.getElementById('modal-counter');
    let currentIndex = 0;

    function populateModal(index) {
        const m = members[index];
        document.getElementById('modal-img').src = m.image;
        document.getElementById('modal-img').alt = m.name;
        document.getElementById('modal-name').textContent = m.name;
        document.getElementById('modal-role').textContent = m.role;
        document.getElementById('modal-bio').textContent = m.fullBio;
        document.getElementById('modal-contact').textContent = '\u2709 ' + m.name.toLowerCase().replace(/ /g, '.') + '@indabaxnamibia.org';
        counter.textContent = (index + 1) + ' / ' + members.length;
    }

    function openModal(index) {
        currentIndex = index;
        populateModal(currentIndex);
        modal.classList.remove('hidden');
        requestAnimationFrame(() => {
            modal.classList.remove('opacity-0');
            panel.classList.remove('scale-95', 'opacity-0');
        });
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.add('opacity-0');
        panel.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 220);
    }

    function navigate(dir) {
        currentIndex = (currentIndex + dir + members.length) % members.length;
        populateModal(currentIndex);
    }

    document.addEventListener('click', (e) => {
        const target = e.target.closest('[data-index]');
        if (target && modal.classList.contains('hidden')) {
            openModal(Number(target.dataset.index));
        }
    });

    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', () => navigate(-1));
    nextBtn.addEventListener('click', () => navigate(1));
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const focused = document.activeElement.closest('[data-index]');
            if (focused) openModal(Number(focused.dataset.index));
        }
        if (!modal.classList.contains('hidden')) {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') navigate(1);
            if (e.key === 'ArrowLeft') navigate(-1);
        }
    });

    document.getElementById('year').textContent = new Date().getFullYear();

    document.querySelectorAll('.footer-link, .social-link span:last-child').forEach(function(link) {
        link.style.position = 'relative';
    });

    const footerObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, i) {
            if (entry.isIntersecting) {
                setTimeout(function() {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 80);
                footerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('footer > div:first-child > div > div').forEach(function(col) {
        col.style.opacity = '0';
        col.style.transform = 'translateY(20px)';
        col.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        footerObserver.observe(col);
    });

    document.querySelector('.border-brand-brown').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
