// for the committee cards and modal
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
            name: "Ms Ndinelago Nashandi",
            role: "Lecturer: Software Engineering",
            shortBio: "Leading the strategic vision and overall coordination ensures runs smoothly.",
            fullBio: "Dr. Nashandi is a professor of Computer Science with 15+ years in academic. She has chaired over 20 international Conferences and is dedicated to fostering inclusive tech communities across Africa.",
            image: "Resources/Nashandi.webp"
        },
        {
            name: "Mr. Naftali Indongo",
            role: "Lecturer: Software Engineering",
            shortBio: "Manages peer-review and scientific tracks, ensuring all work runs smoothly.",
            fullBio: "Mr. Indongo is a passionate software engineering lecturer with a focus on AI and machine learning. He has been instrumental in developing the curriculum for AI courses at NUST and is committed to mentoring the next generation of AI researchers.",
            image: "Resources/Naftali.webp"
        },
        {
            name: "Dr. Sebastian Mukumbira",
            role: "Lecturer: Informatics",
            shortBio: "Connects with industry partners and funding bodies.",
            fullBio: "Dr. Mukumbira is a senior lecturer in Informatics and has extensive experience in industry-academia collaborations. He has successfully secured funding for multiple AI research projects and is passionate about bridging the gap between research and real-world applications.",
            image: "Resources/Sebastian.webp"
        },
        {
            name: "Prof. Stephen Fashoto",
            role: "Associate Professor: Informatics",
            shortBio: "Coordinates pre-conference workshops and hands-on sessions.",
            fullBio: "Prof. Fashoto is an expert in machine learning and data science. He has organized numerous workshops and believes in practical, hands-on learning experiences for students and professionals alike.",
            image: "Resources/Stephan.webp"
        },
        {
            name: "Ms. Ndeshihafela Kakwambi",
            role: "Lecturer: INCEIT",
            shortBio: "Ensures smooth on-site and virtual experience.",
            fullBio: "Ms. Kakwambi is a lecturer at the Namibia Centre of Excellence in Information Technology, dedicated to providing high-quality education and fostering innovation in the field.",
            image: "Resources/Ndeshihafela.webp"
        },
        {
            name: "Prof. Attle M. Gamundani",
            role: "Associate Professor: Cybersecurity",
            shortBio: "Oversees proceedings and open-access archives.",
            fullBio: "Prof. Gamundani is a cybersecurity expert with a focus on open-access research. He ensures that all conference proceedings are archived and accessible to the global research community.",
            image: "Resources/prof.webp"
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

