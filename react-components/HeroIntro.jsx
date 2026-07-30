import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import HeroCountdown from "./HeroCountdown.jsx";

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.13, delayChildren: 0.45 },
    },
};

const item = {
    hidden: { opacity: 0, y: 22 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function HeroIntro() {
    const reduceMotion = useReducedMotion();

    return (
        <LazyMotion features={domAnimation} strict>
            <m.div
                variants={container}
                initial={reduceMotion ? "show" : "hidden"}
                animate="show"
            >
                <m.p
                    variants={item}
                    className="mb-8 max-w-xl text-lg font-light leading-relaxed text-white/80 sm:text-xl"
                >
                    Advancing Inclusive and Responsible AI Innovation for a Digitally Empowered Namibia.
                </m.p>

                <m.div variants={item} className="mb-9">
                    <HeroCountdown />
                </m.div>

                <m.div variants={item} className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                        href="schedule.html"
                        className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-orange px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange/25 transition duration-300 hover:bg-orange/90 hover:shadow-orange/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                        View Programme
                        <i className="fas fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
                    </a>
                    <a
                        href="speakers.html"
                        className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/60 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                        Meet the Speakers
                    </a>
                </m.div>

                <m.div
                    variants={item}
                    className="flex flex-col gap-2.5 text-white/70 sm:flex-row sm:items-center sm:gap-7"
                >
                    <span className="inline-flex items-center gap-2.5">
                        <i className="fas fa-calendar-alt text-orange"></i>
                        <span className="text-sm font-medium">30 &ndash; 31 July 2026</span>
                    </span>
                    <span className="inline-flex items-center gap-2.5">
                        <i className="fas fa-map-marker-alt text-orange"></i>
                        <span className="text-sm font-medium">
                            6th Floor, HTTPS Building, NUST Lower Campus
                        </span>
                    </span>
                </m.div>
            </m.div>
        </LazyMotion>
    );
}
