import LogoLoop from "./PartnerLogos.jsx";

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const techLogos = [
    {
        node: <SiReact />,
        title: "React",
        href: "https://react.dev"
    },
    {
        node: <SiNextdotjs />,
        title: "Next.js",
        href: "https://nextjs.org"
    },
    {
        node: <SiTypescript />,
        title: "TypeScript",
        href: "https://www.typescriptlang.org"
    },
    {
        node: <SiTailwindcss />,
        title: "Tailwind CSS",
        href: "https://tailwindcss.com"
    }
];


export default function PartnerLogos(){

    return (

        <section className="py-16 bg-white">

            <div className="max-w-7xl mx-auto px-4">

                <h2 className="text-3xl font-bold text-center mb-10">
                    Our Partners & Supporters
                </h2>


                <div 
                    style={{
                        height:"150px",
                        position:"relative",
                        overflow:"hidden"
                    }}
                >

                    <LogoLoop

                        logos={techLogos}

                        speed={80}

                        direction="left"

                        logoHeight={60}

                        gap={80}

                        hoverSpeed={0}

                        scaleOnHover

                        fadeOut

                        fadeOutColor="#ffffff"

                        ariaLabel="Partners"

                    />

                </div>

            </div>

        </section>

    );
}