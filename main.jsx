import { createRoot } from "react-dom/client";

import HeroText from "./react-components/HeroText.jsx";
import HeroIntro from "./react-components/HeroIntro.jsx";
import BrainPulse from "./react-components/BrainPulse.jsx";
import CountUp from "./react-components/CountUp.jsx";
import LogoLoop from "./react-components/LogoLoop.jsx";
import unamLogo from "./Resources/unam.webp";
import nustLogo from "./Resources/nust.webp";
import mtcLogo from "./Resources/mtc.webp";
import indabaXLogo from "./Resources/IndabaX_Logo.webp";

const heroText = document.getElementById("hero-text");

if (heroText) {
    createRoot(heroText).render(
        <HeroText />
    );
}

const heroIntro = document.getElementById("hero-intro");

if (heroIntro) {
    createRoot(heroIntro).render(
        <HeroIntro />
    );
}

const brainPulse = document.getElementById("brain-pulse-root");

if (brainPulse) {
    createRoot(brainPulse).render(
        <BrainPulse />
    );
}

const speakers = document.getElementById("speakers-count");

if (speakers) {
    createRoot(speakers).render(
        <CountUp end={24}/>
    );
}

const attendees = document.getElementById("attendees-count");

 if (attendees) {
    createRoot(attendees).render(
        <CountUp end={512}/>
    );
 }

const workshops = document.getElementById("workshops-count");

if (workshops) {
    createRoot(workshops).render(
        <CountUp end={18}/>
    );
 }

 const logoLoop = document.getElementById("logo-loop-root");

if (logoLoop) {
    createRoot(logoLoop).render(

        <LogoLoop

            logos={[
                {
                    src: unamLogo,
                    alt: "Logo 1"
                },
                {
                    src: nustLogo,
                    alt: "Logo 2"
                },
                {
                    src: mtcLogo,
                    alt: "Logo 3"
                },
                {
                    src: indabaXLogo,
                    alt: "Logo 4"
                }
            ]}

            speed={60}
            direction="left"
            logoHeight={70}
            gap={60}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"

        />

    );
}