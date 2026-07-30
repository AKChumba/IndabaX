import { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";

// Conference runs 30–31 July 2026, 08:30–16:30 CAT (UTC+2).
const EVENT_START = new Date("2026-07-30T08:30:00+02:00");
const EVENT_END = new Date("2026-07-31T16:30:00+02:00");
const DAY_TWO_START = new Date("2026-07-31T00:00:00+02:00");

function readClock(now) {
    if (now < EVENT_START) {
        const total = Math.max(0, Math.floor((EVENT_START - now) / 1000));
        return {
            phase: "before",
            days: Math.floor(total / 86400),
            hours: Math.floor((total % 86400) / 3600),
            minutes: Math.floor((total % 3600) / 60),
            seconds: total % 60,
        };
    }
    if (now <= EVENT_END) {
        return { phase: "live", day: now >= DAY_TWO_START ? 2 : 1 };
    }
    return { phase: "after" };
}

function Tile({ value, label }) {
    return (
        <div className="flex flex-col items-center rounded-xl bg-white/10 px-3 py-2.5 ring-1 ring-white/20 backdrop-blur-md sm:px-4 sm:py-3">
            <span className="text-2xl font-bold tabular-nums leading-none text-white sm:text-3xl">
                {String(value).padStart(2, "0")}
            </span>
            <span className="mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/60">
                {label}
            </span>
        </div>
    );
}

export default function HeroCountdown() {
    const reduceMotion = useReducedMotion();
    const [clock, setClock] = useState(() => readClock(new Date()));

    useEffect(() => {
        const id = setInterval(() => setClock(readClock(new Date())), 1000);
        return () => clearInterval(id);
    }, []);

    if (clock.phase === "live") {
        return (
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 ring-1 ring-white/25 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                    {!reduceMotion && (
                        <m.span
                            className="absolute inline-flex h-full w-full rounded-full bg-orange"
                            animate={{ scale: [1, 2.4], opacity: [0.7, 0] }}
                            transition={{ duration: 1.6, ease: "easeOut", repeat: Infinity }}
                        />
                    )}
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange" />
                </span>
                <span className="text-sm font-bold uppercase tracking-[0.14em] text-white">
                    Happening now &middot; Day {clock.day}
                </span>
            </div>
        );
    }

    if (clock.phase === "after") {
        return (
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
                That&rsquo;s a wrap &middot; Thank you for joining us
            </p>
        );
    }

    return (
        <div>
            <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/50">
                Doors open in
            </p>
            <div className="flex gap-2.5 sm:gap-3">
                <Tile value={clock.days} label="Days" />
                <Tile value={clock.hours} label="Hrs" />
                <Tile value={clock.minutes} label="Min" />
                {reduceMotion ? (
                    <Tile value={clock.seconds} label="Sec" />
                ) : (
                    <AnimatePresence mode="popLayout" initial={false}>
                        <m.div
                            key={clock.seconds}
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <Tile value={clock.seconds} label="Sec" />
                        </m.div>
                    </AnimatePresence>
                )}
            </div>
        </div>
    );
}
