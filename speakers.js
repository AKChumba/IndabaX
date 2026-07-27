// Speakers grid + bio modal for IndabaX Namibia 2026
// Data sourced from the official "Speakers.docx" bio pack.

import nashandiPhoto from "./Resources/speakers/nashandi.webp";
import aniciaPetersPhoto from "./Resources/speakers/anicia-peters.webp";
import leoMaruwasaPhoto from "./Resources/speakers/leo-maruwasa.webp";
import stantinSiebritzPhoto from "./Resources/speakers/stantin-siebritz.webp";
import gbemilekeFaladePhoto from "./Resources/speakers/gbemileke-falade.webp";
import taimeSylvesterPhoto from "./Resources/speakers/taime-sylvester.webp";
import aitorBelenguerPhoto from "./Resources/speakers/aitor-belenguer.webp";
import pretoriaStudentPhoto from "./Resources/speakers/pretoria-student.webp";
import oyetayoOyebisiPhoto from "./Resources/speakers/oyetayo-oyebisi.webp";
import andreVanDerWesthuizenPhoto from "./Resources/speakers/andre-van-der-westhuizen.webp";
import stephenFashotoPhoto from "./Resources/speakers/stephen-fashoto.webp";
import benjaminAkinmoyejePhoto from "./Resources/speakers/benjamin-akinmoyeje.webp";
import yakubuShehuPhoto from "./Resources/speakers/yakubu-shehu.webp";
import placeholderLogo from "./Resources/Logo1.webp";
import naftaliPhoto from "./Resources/Naftali.webp";

const speakers = [
    {
        category: "Chairperson",
        name: "Ms Ndinelago Nashandi",
        role: "Chairperson, Deep Learning IndabaX Namibia",
        bio: "Lecturer in the Department of Software Engineering at the Namibia University of Science and Technology (NUST) and Chairperson of Deep Learning IndabaX Namibia. She is also a PhD candidate in Computer Science, researching AI-driven approaches to complex, domain-specific problems using planning and search techniques. She has chaired and coordinated several innovation initiatives, including programming competitions and the NUST-Ballerina Hackathon, supporting students and aspiring innovators in strengthening their programming and problem-solving skills. Her interests span artificial intelligence, distributed systems, algorithms, software engineering and functional programming languages. Through Deep Learning IndabaX Namibia, she leads initiatives connecting researchers, students, industry professionals and policymakers, and she is part of the team supporting the Namibia National Olympiad in Artificial Intelligence.",
        session: "",
        image: nashandiPhoto
    },
    {
        category: "Keynote",
        name: "Prof. Dr Anicia Peters",
        role: "CEO, National Commission on Research, Science and Technology (NCRST)",
        bio: "Prof. Dr Anicia Peters is CEO of the National Commission on Research, Science and Technology (NCRST) and Co-Chair of the 4IR Working Group of the African Union's Africa Scientific, Research and Innovation Council (ASRIC). She serves on the ACM 4.0/4.1 Presidential Task Force on Regional Offices, founded the AfriCHI conference series, and chaired Namibia's Presidential Task Force on the Fourth Industrial Revolution (2021-2022). She previously served as Pro-Vice Chancellor for Research, Innovation and Development at the University of Namibia and as Faculty Dean for Computing and Informatics at NUST, where she co-established the Namibia-India Centre of Excellence in Information Technology. She holds a PhD and MSc in Human-Computer Interaction from Iowa State University, has over 30 years of academic, industry and directorship experience, and has received numerous international awards for her work in human-centred and responsible AI.",
        session: "Keynote Address",
        image: aniciaPetersPhoto
    },
    {
        category: "Keynote",
        name: "Mr Leo Maruwasa",
        role: "Chief Information Officer, Access Bank Namibia",
        bio: "Leo Maruwasa is Chief Information Officer of Access Bank Namibia, the greenfield Namibian subsidiary of Access Bank - the Nigerian banking group with more than 42 million customers and operations in over 16 countries. He leads the bank's full-stack technology build, from data-centre infrastructure and core banking to digital channels, payments and regulatory technology. A computer scientist and economist by training and a certified IT governance specialist (COBIT), he has spent more than two decades building institutions across banking, telecommunications, health and the public sector, including Namibia's Celbux mobile-money platform, Cell One, and exchange-control and analytics platforms for the Bank of Namibia.",
        session: "The Last Mile Is the Whole Race: Deploying Inclusive & Responsible AI Inside a Frontier-Market Bank",
        image: leoMaruwasaPhoto
    },
    {
        category: "Keynote",
        name: "Mr Stantin Siebritz",
        role: "Founder, New Creation Solutions",
        bio: "Stantin Siebritz is a Namibian technologist, entrepreneur and educator with over 20 years' experience in software development, artificial intelligence and digital transformation. He is Founder of New Creation Solutions and Head of ICT and Emerging Technology at the Performance Development Centre, leading projects across AI, data engineering and infrastructure strategy. A Computer Science graduate from NUST, where he has also lectured in AI, he serves on Namibia's National AI Strategy Committee as Chairperson for Compute Infrastructure and is a regular AI columnist for The Brief.",
        session: "",
        image: stantinSiebritzPhoto
    },
    {
        category: "Technical Talk",
        name: "Mr Gbemileke Emmanuel Falade",
        role: "Senior Data Analyst and Data Scientist, Union Bank of Nigeria",
        bio: "Gbemileke Emmanuel Falade is a Senior Data Analyst and Data Scientist deploying production AI and machine learning systems in Nigerian banking and fintech. He holds an MSc in Data Science with Distinction from the University of East London and a BSc in Mathematics from the University of Ilorin, and currently works in the Advanced Analytics function of a leading Nigerian bank. He is also an independent data consultant and Data Analytics Instructor.",
        session: "AI in Finance: Mapping the Opportunity and Deploying Customer Intelligence across African Financial Institutions",
        image: gbemilekeFaladePhoto
    },
    {
        category: "Technical Talk",
        name: "Dr Taime Sylvester",
        role: "Biomedical Scientist and Senior Lecturer, Clinical Health Sciences, NUST",
        bio: "Dr Taime Sylvester is a biomedical scientist and molecular biologist with over a decade of experience in infectious-disease research, health-systems strengthening and capacity building in Africa. Her work focuses on harnessing science and technology - including data, diagnostics and AI - to improve public-health outcomes in resource-limited settings. As founder of Solal Scientific Solutions and chair of TB Free Namibia, she is passionate about making science more accessible and inclusive, and advocates for women's leadership in STEM.",
        session: "Closing the Credentialing Gap: Making Applied AI Count as a Recognised Vocational Competency in Namibia",
        image: taimeSylvesterPhoto
    },
    {
        category: "Technical Talk",
        name: "Mr Aitor Belenguer",
        role: "PhD Candidate, University of the Basque Country, UPV/EHU, Spain",
        bio: "Aitor Belenguer obtained his Bachelor's degree in Computer Science from the University of the Basque Country (Spain) in 2021 and his Master's degree in Computational Engineering and Intelligent Systems from the same university in 2022. He is currently a PhD student at UPV/EHU and a member of the Intelligent Systems Group (ISG) at the San Sebastian Faculty of Computer Sciences, collaborating with the Intelligent Systems and Advanced Telecommunications (ISAT) group at the University of the Western Cape. His research covers IoT devices performing collaborative tasks, focusing on information-exchange security, performance, and decentralised federated learning.",
        session: "Advances in Robust Decentralised Federated Learning",
        image: aitorBelenguerPhoto
    },
    {
        category: "Technical Talk",
        name: "Presenter to be confirmed",
        role: "Honours Student, Industrial and Systems Engineering, University of Pretoria",
        bio: "An Honours student in Industrial and Systems Engineering at the University of Pretoria, with a background in software development and a passion for using technology to solve complex real-world problems. Interests lie at the intersection of artificial intelligence, industrial engineering and optimisation, particularly the scheduling of machinery and production systems, with academic focus on production scheduling, operations research, simulation modelling and machine-learning applications in industry.",
        session: "Pattern Recognition for Automated Job Scheduling in Smart Manufacturing",
        image: pretoriaStudentPhoto
    },
    {
        category: "Technical Talk",
        name: "Mr Oyetayo Oyebisi",
        role: "MSc Student, Pan African University Institute for Basic Sciences, Technology and Innovation, Kenya",
        bio: "Oyebisi Oyetayo is an AI researcher, data scientist and statistician with a strong passion for developing intelligent solutions to real-world challenges using machine learning and statistical modelling. He holds a First Class Bachelor's degree in Statistics from the University of Ilorin, Nigeria, and is completing an MSc in Statistics at Pan African University under the African Union Scholarship. His research spans deep learning, explainable AI, predictive analytics, computer vision, healthcare AI and trustworthy machine learning, including work on fraud detection, disease prediction and weather classification, with papers presented at international conferences.",
        session: "A Multi-Layer Trust Evaluation Framework for Assessing Consistency Between Statistical Inference and Explainable Artificial Intelligence in Clinical Breast Cancer Prediction",
        image: oyetayoOyebisiPhoto
    },
    {
        category: "Technical Talk",
        name: "Mr André van der Westhuizen",
        role: "Head of Education, The IIE's Emeris Campus",
        bio: "André van der Westhuizen is the Head of Education at The IIE's Emeris campus in Sandton. He completed his initial teacher training with a Bachelor of Education in Further Education and Training at the University of Pretoria and began his career teaching Geography at a public high school in Gauteng. He holds multiple postgraduate qualifications spanning psychology, inclusive education, higher education and research supervision, and is actively engaged in training pre-service teachers. André primarily lectures research methodology and research design to final-year Bachelor of Education students and supervises their research projects.",
        session: "Problematic or Promising? Exploring Student Perspectives in Using ChatGPT to Develop a Research Problem Statement",
        image: andreVanDerWesthuizenPhoto
    },
    {
        category: "Lightning Talk",
        name: "Prof. Stephen Fashoto",
        role: "Associate Professor of Data Science, Faculty of Computing and Informatics, NUST",
        bio: "Prof. Stephen Gbenga Fashoto is Associate Professor of Data Science in the Department of Informatics, Faculty of Computing and Informatics at NUST, and Community Lead of the Central Steering Committee of IndabaX in Africa. He was a Research Visiting Fellow at the University of Oxford in 2022 on an AFOX Grant, and previously held academic and ICT-leadership posts at the University of Swaziland, Kampala International University and Redeemer's University, Nigeria. He holds a BSc (Honours) and MSc in Computer Science & Mathematics from the University of Port Harcourt and a PhD in Computer Science from the University of Ilorin, with over twenty years of teaching and research experience spanning computer-science education, machine learning, computational intelligence, health informatics and data mining. Co-presented with Ms Jovita Mateus (Lecturer, Computer Science, NUST) and Mr Naftali Indongo (Lecturer, Software Engineering, NUST).",
        session: "Use of Databricks with PySpark for Big Data",
        image: stephenFashotoPhoto
    },
    {
        category: "Lightning Talk",
        name: "Ms Jovita Mateus",
        role: "Lecturer, Computer Science, NUST",
        bio: "Co-presenter, alongside Prof. Stephen Fashoto and Mr Naftali Indongo, of the lightning talk on using Databricks and PySpark for big-data processing and analytics.",
        session: "Use of Databricks with PySpark for Big Data",
        image: placeholderLogo
    },
    {
        category: "Lightning Talk",
        name: "Mr Naftali Indongo",
        role: "Lecturer, Software Engineering, NUST",
        bio: "Co-presenter, alongside Prof. Stephen Fashoto and Ms Jovita Mateus, demonstrating modern data-engineering platforms and distributed analytics tools for big data.",
        session: "Use of Databricks with PySpark for Big Data",
        image: naftaliPhoto
    },
    {
        category: "Technical Demo",
        name: "Dr Benjamin Akintunde Akinmoyeje",
        role: "Microsoft Student Ambassador, Namibia",
        bio: "Benjamin is a recent postgraduate student and Microsoft Student Ambassador, a two-time Tableau Student Ambassador, and a data-visualisation enthusiast. His PhD research in Informatics examined social media and cultural hegemony at the Department of Informatics, NUST. He enjoys mentoring and is honing his skills in AI ethics, responsible AI and academic pedagogy in the age of AI. Research interests include mHealth, persuasive technologies for mHealth, open source, open data and ICT for social innovation. Co-presented with Mr Quang Thinh Lam, Microsoft Student Ambassador, New Zealand.",
        session: "Reducing Redundancy in Student Research Proposals Using Open-Source Hybrid RAG-Based Knowledge Retrieval",
        image: benjaminAkinmoyejePhoto
    },
    {
        category: "Technical Demo",
        name: "Mr Quang Thinh Lam",
        role: "Microsoft Student Ambassador, New Zealand",
        bio: "Co-presenter, alongside Dr Benjamin Akintunde Akinmoyeje, of the technical demonstration on hybrid retrieval-augmented generation and open-source knowledge-retrieval systems for reducing redundancy in student research proposals.",
        session: "Reducing Redundancy in Student Research Proposals Using Open-Source Hybrid RAG-Based Knowledge Retrieval",
        image: placeholderLogo
    },
    {
        category: "Technical Demo",
        name: "Mr Yakubu Shehu",
        role: "Full-Stack Software Developer and PhD Candidate, NUST",
        bio: "Mr Shehu is a full-stack, freelance software developer and PhD candidate at NUST. He completed his Master's degree at NUST, working with his supervisor to develop an AI-based image-detection model to assist with wildlife detection in Namibian wildlife conservancies. He has continued finding new ways to integrate AI into his software-development work, most recently building a Namibian Currency Detection Model, which he demonstrates live.",
        session: "Building Your Own Chatbot in 10 Minutes",
        image: yakubuShehuPhoto
    }
];

// Display order for the section headers on the page
const categoryOrder = ["Chairperson", "Keynote", "Technical Talk", "Lightning Talk", "Technical Demo"];
const categoryLabels = {
    "Chairperson": "Chairperson",
    "Keynote": "Keynote Speakers",
    "Technical Talk": "Technical Talks",
    "Lightning Talk": "Lightning Talk",
    "Technical Demo": "Technical Demos"
};

const container = document.getElementById('speakers-sections');

categoryOrder.forEach(category => {
    const group = speakers
        .map((s, i) => ({ ...s, index: i }))
        .filter(s => s.category === category);
    if (!group.length) return;

    const section = document.createElement('div');
    section.className = 'mb-16 last:mb-0';

    const heading = document.createElement('h2');
    heading.className = 'text-3xl font-bold text-earth mb-8 pb-3 border-b-2 border-orange/30';
    heading.textContent = categoryLabels[category];
    section.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8';

    group.forEach(s => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-200 cursor-pointer group';
        card.dataset.index = s.index;
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
                ${s.session ? `<p class="text-sm text-gray-500 leading-relaxed line-clamp-2 italic">${s.session}</p>` : `<p class="text-sm text-gray-500 leading-relaxed line-clamp-2">${s.bio}</p>`}
                <button class="absolute bottom-4 right-4 text-xs font-semibold text-white bg-orange hover:bg-brand-peach px-4 py-2 rounded-full transition-colors duration-200" data-index="${s.index}" aria-label="Read full bio for ${s.name}">
                    Read Bio
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
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
        sessionLabel.textContent = s.category === "Lightning Talk" ? "Lightning Talk"
            : s.category === "Technical Demo" ? "Technical Demonstration"
                : s.category === "Keynote" ? "Keynote Session"
                    : "Session";
        document.getElementById('speaker-modal-session').textContent = s.session;
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
