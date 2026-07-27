// Speakers grid + bio modal for IndabaX Namibia 2026

const speakers = [
    {
        name: "Ms Ndinelago Nashandi",
        role: "Chairperson, Deep Learning IndabaX Namibia",
        bio: "Lecturer in the Department of Software Engineering at NUST and a PhD candidate in Computer Science. Her research spans AI planning, search techniques, distributed systems, algorithms and software engineering.",
        session: "",
        image: "Resources/Nashandi.webp"
    },
    {
        name: "Prof. Dr Anicia Peters",
        role: "Chief Executive Officer, National Commission on Research, Science and Technology",
        bio: "An internationally recognised researcher and technology leader with extensive experience in human-computer interaction, responsible AI, research leadership, innovation and national digital-policy development.",
        session: "",
        image: "Resources/Logo1.webp"
    },
    {
        name: "Mr Leo Maruwasa",
        role: "Chief Information Officer, Access Bank Namibia",
        bio: "A digital-banking and fintech leader specialising in scalable banking platforms and the application of artificial intelligence within financial services.",
        session: "AI in Banking and Financial Services: Transforming Namibia's Digital Economy",
        image: "Resources/Logo1.webp"
    },
    {
        name: "Mr Stantin Siebritz",
        role: "Founder, New Creation Solutions",
        bio: "Head of ICT and Emerging Technology at the Performance Development Centre, with more than 20 years of experience in software development, artificial intelligence and digital transformation.",
        session: "",
        image: "Resources/Logo1.webp"
    },
    {
        name: "Mr Gbemileke Emmanuel Falade",
        role: "Senior Data Analyst and Data Scientist, Union Bank of Nigeria",
        bio: "A data professional experienced in deploying production artificial-intelligence and machine-learning systems within banking and fintech environments.",
        session: "AI in Finance: Mapping the Opportunity and Deploying Customer Intelligence across African Financial Institutions",
        image: "Resources/Logo1.webp"
    },
    {
        name: "Dr Taime Sylvester",
        role: "Biomedical Scientist and Senior Lecturer, NUST",
        bio: "A biomedical scientist and molecular biologist whose work centres on infectious-disease research, health-system strengthening, scientific capacity development and the responsible use of AI in healthcare.",
        session: "Closing the Credentialing Gap: Making Applied AI Count as a Recognised Vocational Competency in Namibia",
        image: "Resources/Logo1.webp"
    },
    {
        name: "Mr Aitor Belenguer",
        role: "PhD Candidate, University of the Basque Country, Spain",
        bio: "A researcher working in intelligent systems, Internet of Things technologies, collaborative computing, information-exchange security and decentralised federated learning.",
        session: "Advances in Robust Decentralised Federated Learning",
        image: "Resources/Logo1.webp"
    },
    {
        name: "Mr Oyetayo Oyebisi",
        role: "MSc Researcher, Pan African University Institute for Basic Sciences, Technology and Innovation",
        bio: "An AI researcher, data scientist and statistician specialising in explainable AI, predictive analytics, healthcare AI, computer vision and trustworthy machine learning.",
        session: "A Multi-Layer Trust Evaluation Framework for Assessing Consistency Between Statistical Inference and Explainable Artificial Intelligence in Clinical Breast Cancer Prediction",
        image: "Resources/Logo1.webp"
    },
    {
        name: "Mr André van der Westhuizen",
        role: "Head of Education, The IIE's Emeris Campus",
        bio: "An educator and researcher with expertise in teacher education, inclusive education, higher education, research methodology and research supervision.",
        session: "Problematic or Promising? Exploring Student Perspectives in Using ChatGPT to Develop a Research Problem Statement",
        image: "Resources/Logo1.webp"
    },
    {
        name: "Prof. Stephen Fashoto",
        role: "Associate Professor of Data Science, NUST",
        bio: "An experienced academic and researcher specialising in machine learning, computational intelligence, health informatics, data mining, computer-science education and optimisation.",
        session: "Lightning Talk: Use of Databricks with PySpark for Big Data",
        image: "Resources/Stephan.webp"
    },
    {
        name: "Ms Jovita Mateus",
        role: "Lecturer in Computer Science, NUST",
        bio: "Co-presenter of the lightning talk examining the use of Databricks and PySpark for big-data processing and analytics.",
        session: "",
        image: "Resources/Logo1.webp"
    },
    {
        name: "Mr Naftali Indongo",
        role: "Lecturer in Software Engineering, NUST",
        bio: "Co-presenter of the practical big-data session, demonstrating modern data-engineering platforms and distributed analytics tools.",
        session: "",
        image: "Resources/Naftali.webp"
    },
    {
        name: "Dr Benjamin Akintunde Akinmoyeje",
        role: "Microsoft Student Ambassador and AI Researcher",
        bio: "A researcher and mentor interested in responsible AI, AI ethics, open data, mobile health, persuasive technologies and ICT for social innovation.",
        session: "Technical Demonstration: Reducing Redundancy in Student Research Proposals Using Open-Source Hybrid RAG-Based Knowledge Retrieval",
        image: "Resources/Logo1.webp"
    },
    {
        name: "Mr Quang Thinh Lam",
        role: "Microsoft Student Ambassador, New Zealand",
        bio: "Co-presenter of the technical demonstration on hybrid retrieval-augmented generation and open-source knowledge-retrieval systems.",
        session: "",
        image: "Resources/Logo1.webp"
    },
    {
        name: "Mr Yakubu Shehu",
        role: "Full-Stack Software Developer and PhD Candidate, NUST",
        bio: "A software developer and AI researcher with experience in intelligent image-detection systems, wildlife-monitoring applications and Namibian currency-recognition technologies.",
        session: "Technical Demonstration: Building Your Own Chatbot in 10 Minutes",
        image: "Resources/Logo1.webp"
    }
];

const grid = document.getElementById('speakers-grid');

speakers.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-200 cursor-pointer group';
    card.dataset.index = i;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View bio for ${s.name}`);

    card.innerHTML = `
        <div class="overflow-hidden h-56 bg-gray-100">
            <img src="${s.image}" alt="${s.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
        </div>
        <div class="p-5 pb-14 relative">
            <h3 class="text-lg font-bold text-brand-peach">${s.name}</h3>
            <p class="text-xs font-semibold uppercase tracking-wider text-brand-burgundy mt-0.5 mb-2">${s.role}</p>
            ${s.session ? `<p class="text-sm text-gray-500 leading-relaxed line-clamp-2">${s.session}</p>` : `<p class="text-sm text-gray-500 leading-relaxed line-clamp-2">${s.bio}</p>`}
            <button class="absolute bottom-4 right-4 text-xs font-semibold text-white bg-orange hover:bg-brand-peach px-4 py-2 rounded-full transition-colors duration-200" data-index="${i}" aria-label="Read full bio for ${s.name}">
                Read Bio
            </button>
        </div>
    `;
    grid.appendChild(card);
});

const modal = document.getElementById('speaker-modal');
const panel = document.getElementById('speaker-modal-panel');
const closeBtn = document.getElementById('speaker-modal-close');
const prevBtn = document.getElementById('speaker-modal-prev');
const nextBtn = document.getElementById('speaker-modal-next');
const counter = document.getElementById('speaker-modal-counter');
const sessionWrap = document.getElementById('speaker-modal-session-wrap');
const sessionLabel = document.getElementById('speaker-modal-session-label');
let currentIndex = 0;

function populateModal(index) {
    const s = speakers[index];
    document.getElementById('speaker-modal-img').src = s.image;
    document.getElementById('speaker-modal-img').alt = s.name;
    document.getElementById('speaker-modal-name').textContent = s.name;
    document.getElementById('speaker-modal-role').textContent = s.role;
    document.getElementById('speaker-modal-bio').textContent = s.bio;

    if (s.session) {
        sessionWrap.classList.remove('hidden');
        sessionLabel.textContent = s.session.startsWith('Lightning Talk') ? 'Lightning Talk'
            : s.session.startsWith('Technical Demonstration') ? 'Technical Demonstration'
                : 'Session';
        document.getElementById('speaker-modal-session').textContent = s.session.replace(/^(Lightning Talk|Technical Demonstration):\s*/, '');
    } else {
        sessionWrap.classList.add('hidden');
    }

    counter.textContent = (index + 1) + ' / ' + speakers.length;
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
    currentIndex = (currentIndex + dir + speakers.length) % speakers.length;
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
