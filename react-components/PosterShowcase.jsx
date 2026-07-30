import { useEffect, useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

import ndinelagoNashandi from "../Resources/speakers/hero-posters/ndinelago-nashandi.jpeg";
import leoMaruwasa from "../Resources/speakers/hero-posters/leo-maruwasa.jpeg";
import stantinSiebritz from "../Resources/speakers/hero-posters/stantin-siebritz.jpeg";
import gbemilekeFalade from "../Resources/speakers/hero-posters/gbemileke-falade.jpeg";
import aitorBelenguer from "../Resources/speakers/hero-posters/aitor-belenguer.jpeg";
import andreVanDerWesthuizen from "../Resources/speakers/hero-posters/andre-van-der-westhuizen.jpeg";
import naftaliIndongo from "../Resources/speakers/hero-posters/naftali-indongo.jpeg";
import benjaminAkinmoyeje from "../Resources/speakers/hero-posters/benjamin-akinmoyeje.jpeg";
import wilbardLazarus from "../Resources/speakers/hero-posters/wilbard-lazarus.jpeg";
import yakubuShehu from "../Resources/speakers/hero-posters/yakubu-shehu.jpeg";
import taimeSylvester from "../Resources/speakers/hero-posters/taime-sylvester.jpeg";
import oyetayoOyebisi from "../Resources/speakers/hero-posters/oyetayo-oyebisi.jpeg";
import rachelLazarus from "../Resources/speakers/hero-posters/rachel-lazarus.jpeg";
import gabrielUunona from "../Resources/speakers/hero-posters/gabriel-uunona.jpeg";
import joaoJuliaLuzolo from "../Resources/speakers/hero-posters/joao-julia-luzolo.jpeg";
import attleeGamundani from "../Resources/speakers/hero-posters/attlee-gamundani.jpeg";
import stephenFashoto from "../Resources/speakers/hero-posters/stephen-fashoto.jpeg";
import abubakarKamagata from "../Resources/speakers/hero-posters/abubakar-kamagata.jpeg";
import kebaduMekuriaw from "../Resources/speakers/hero-posters/kebadu-mekuriaw.jpeg";
import tadesseKebede from "../Resources/speakers/hero-posters/tadesse-kebede.jpeg";
import werkinehEsheteYifru from "../Resources/speakers/hero-posters/werkineh-eshete-yifru.jpeg";

const SPEAKERS = [
  { src: ndinelagoNashandi, name: "Ndinelago Nashandi", role: "Chairperson, Deep Learning IndabaX Namibia" },
  { src: leoMaruwasa, name: "Leo Maruwasa", role: "Chief Information Officer, Access Bank Namibia" },
  { src: stantinSiebritz, name: "Stantin Siebritz", role: "Founder, New Creation Solutions" },
  { src: gbemilekeFalade, name: "Gbemileke Emmanuel Falade", role: "Senior Data Analyst & Data Scientist, Union Bank of Nigeria" },
  { src: aitorBelenguer, name: "Aitor Belenguer", role: "PhD Candidate, University of the Basque Country, Spain" },
  { src: andreVanDerWesthuizen, name: "André Van Der Westhuizen", role: "Head of Education, The IIE's Emeris Campus" },
  { src: naftaliIndongo, name: "Naftali Indongo", role: "Lecturer: Artificial Intelligence, NUST" },
  { src: benjaminAkinmoyeje, name: "Dr. Benjamin Akinmoyeje", role: "Microsoft Student Ambassador, Namibia" },
  { src: wilbardLazarus, name: "Wilbard Lazarus", role: "Founder, Mashoke Drones" },
  { src: yakubuShehu, name: "Yakubu Shehu", role: "Full-stack Software Developer, PhD Candidate, NUST" },
  { src: taimeSylvester, name: "Dr Taime Sylvester", role: "Senior Lecturer, Clinical Health Sciences, NUST" },
  { src: oyetayoOyebisi, name: "Oyetayo Oyebisi", role: "MSc Student, Pan African University, Kenya" },
  { src: rachelLazarus, name: "Rachel Lazarus", role: "Industrial Engineering Student, University of Pretoria" },
  { src: gabrielUunona, name: "Gabriel Uunona", role: "Coordinator: Learning Design (CILT), UNAM" },
  { src: joaoJuliaLuzolo, name: "João Julia Luzolo", role: "MSc Student (NUST), AI/ML Engineer" },
  { src: attleeGamundani, name: "Prof. Attlee Gamundani", role: "Associate Professor of Cybersecurity, NUST" },
  { src: stephenFashoto, name: "Prof. Stephen Fashoto", role: "Associate Professor of Data Science, NUST" },
  { src: abubakarKamagata, name: "Abubakar Hamisu Kamagata", role: "DAAD PhD Scholar" },
  { src: kebaduMekuriaw, name: "Kebadu Mekuriaw Adamu", role: "DAAD PhD Scholar" },
  { src: tadesseKebede, name: "Tadesse Kebede Guge", role: "DAAD PhD Scholar" },
  { src: werkinehEsheteYifru, name: "Werkineh Eshete Yifru", role: "DAAD PhD Scholar" },
];

const ROTATE_MS = 4500;

export default function PosterShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || prefersReducedMotion) return undefined;
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % SPEAKERS.length);
    }, ROTATE_MS);
    return () => clearTimeout(id);
  }, [index, paused, prefersReducedMotion]);

  const goTo = (next) => setIndex(((next % SPEAKERS.length) + SPEAKERS.length) % SPEAKERS.length);

  const current = SPEAKERS[index];
  const behindFar = SPEAKERS[(index + 2) % SPEAKERS.length];
  const behindNear = SPEAKERS[(index + 1) % SPEAKERS.length];

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        className="relative mx-auto w-full max-w-[280px]"
        role="region"
        aria-label="Speaker poster showcase"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-white/10"
          style={{ transform: "translate(14px, 18px) rotate(4deg)" }}
        >
          <img src={behindFar.src} alt="" className="w-full h-full object-cover opacity-25" />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-white/10"
          style={{ transform: "translate(7px, 9px) rotate(2deg)" }}
        >
          <img src={behindNear.src} alt="" className="w-full h-full object-cover opacity-45" />
        </div>

        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/15 bg-black/40">
          <AnimatePresence mode="wait" initial={false}>
            <m.img
              key={current.name}
              src={current.src}
              alt={`${current.name} — ${current.role}`}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.04, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98, y: -14 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute top-0 inset-x-0 h-1 bg-white/10 overflow-hidden">
            <div
              key={index}
              className="h-full w-full bg-orange origin-left poster-progress-fill"
              style={{
                animationDuration: `${ROTATE_MS}ms`,
                animationPlayState: paused || prefersReducedMotion ? "paused" : "running",
              }}
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-10">
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={current.name}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: 0.15 }}
              >
                <p className="text-white font-bold text-sm leading-tight">{current.name}</p>
                <p className="text-white/70 text-xs mt-1 leading-snug">{current.role}</p>
              </m.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous speaker"
            className="w-9 h-9 rounded-full border border-white/20 text-white/80 hover:bg-white/10 hover:text-white transition flex items-center justify-center"
          >
            <i className="fas fa-chevron-left text-xs" />
          </button>
          <span className="text-white/50 text-xs font-semibold tracking-widest">
            {String(index + 1).padStart(2, "0")} / {String(SPEAKERS.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next speaker"
            className="w-9 h-9 rounded-full border border-white/20 text-white/80 hover:bg-white/10 hover:text-white transition flex items-center justify-center"
          >
            <i className="fas fa-chevron-right text-xs" />
          </button>
        </div>
      </div>
    </LazyMotion>
  );
}
