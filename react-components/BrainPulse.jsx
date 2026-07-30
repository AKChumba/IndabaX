import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

const SONAR_RINGS = [0, 1, 2];

// Each orbit is a full-size wrapper that rotates; nodes sit at `top` (a % of the
// container), so the orbit radius scales with the container instead of being
// pinned to pixel values.
const ORBITS = [
    { top: 1.5, duration: 30, direction: 1, size: "h-2.5 w-2.5", angles: [0, 68, 140, 212, 290] },
    { top: 15, duration: 21, direction: -1, size: "h-1.5 w-1.5", angles: [34, 128, 236, 310] },
];

export default function BrainPulse() {
    const reduceMotion = useReducedMotion();

    return (
        <LazyMotion features={domAnimation} strict>
            <m.div
                className="relative mx-auto aspect-square w-72 sm:w-80 lg:ml-auto lg:mr-0 lg:w-[23rem]"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
                {/* Ambient glow, breathing slowly behind everything */}
                <m.div
                    aria-hidden="true"
                    className="absolute -inset-10 rounded-full blur-3xl"
                    style={{
                        background:
                            "radial-gradient(closest-side, rgba(232,93,4,0.55), rgba(232,93,4,0.12) 60%, transparent)",
                    }}
                    animate={reduceMotion ? undefined : { opacity: [0.55, 0.9, 0.55] }}
                    transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
                />

                {/* Sonar rings — expand outward and fade, staggered into a continuous pulse */}
                {!reduceMotion &&
                    SONAR_RINGS.map((i) => (
                        <m.span
                            key={i}
                            aria-hidden="true"
                            className="absolute inset-0 rounded-full border border-orange/50"
                            initial={{ scale: 0.66, opacity: 0 }}
                            animate={{ scale: 1.55, opacity: [0, 0.5, 0] }}
                            transition={{ duration: 4.2, ease: "easeOut", repeat: Infinity, delay: i * 1.4 }}
                        />
                    ))}

                {/* Orbit paths + travelling nodes */}
                {ORBITS.map((orbit, oi) => (
                    <m.div
                        key={oi}
                        aria-hidden="true"
                        className="absolute inset-0"
                        animate={reduceMotion ? undefined : { rotate: orbit.direction * 360 }}
                        transition={{ duration: orbit.duration, ease: "linear", repeat: Infinity }}
                    >
                        <div
                            className="absolute rounded-full border border-dashed border-white/30"
                            style={{ inset: `${orbit.top}%` }}
                        />
                        {orbit.angles.map((angle) => (
                            <div
                                key={angle}
                                className="absolute inset-0"
                                style={{ transform: `rotate(${angle}deg)` }}
                            >
                                <span
                                    className={`absolute left-1/2 -translate-x-1/2 rounded-full bg-peach shadow-[0_0_12px_3px_rgba(254,207,151,0.6)] ${orbit.size}`}
                                    style={{ top: `${orbit.top}%` }}
                                />
                            </div>
                        ))}
                    </m.div>
                ))}

                {/* Containment ring */}
                <m.div
                    aria-hidden="true"
                    className="absolute inset-[22%] rounded-full bg-orange/15 ring-1 ring-white/10"
                    animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
                    transition={{ duration: 3.4, ease: "easeInOut", repeat: Infinity }}
                />

                {/* Core orb + brain icon */}
                <m.div
                    className="absolute inset-[30%] flex items-center justify-center rounded-full bg-gradient-to-br from-orange to-dune ring-1 ring-white/25"
                    style={{ boxShadow: "0 0 80px 14px rgba(232,93,4,0.45)" }}
                    animate={reduceMotion ? undefined : { scale: [1, 1.05, 1] }}
                    transition={{ duration: 3.4, ease: "easeInOut", repeat: Infinity }}
                    whileHover={{ scale: 1.09 }}
                >
                    <m.i
                        className="fas fa-brain text-5xl text-white sm:text-6xl"
                        animate={
                            reduceMotion
                                ? undefined
                                : {
                                      filter: [
                                          "drop-shadow(0 0 8px rgba(255,255,255,0.4))",
                                          "drop-shadow(0 0 22px rgba(255,255,255,0.85))",
                                          "drop-shadow(0 0 8px rgba(255,255,255,0.4))",
                                      ],
                                  }
                        }
                        transition={{ duration: 3.4, ease: "easeInOut", repeat: Infinity }}
                    />
                </m.div>
            </m.div>
        </LazyMotion>
    );
}
