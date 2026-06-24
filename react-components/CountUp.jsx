import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function CountUp({ end, duration = 1.5 }) {

    const numberRef = useRef(null);

    useEffect(() => {

        const counter = {
            value: 0
        };


        gsap.to(counter, {

            value: end,

            duration: duration,

            ease: "power3.out",

            scrollTrigger: {
                trigger: numberRef.current,
                start: "top 80%",
                once: true
            },

            onUpdate: () => {

                numberRef.current.textContent =
                    Math.floor(counter.value);

            }

        });


    }, [end, duration]);


    return (
        <span ref={numberRef}>
            28
        </span>
    );
}