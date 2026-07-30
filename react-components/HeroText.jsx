import SplitText from "./SplitText.jsx";

export default function HeroText() {
    return (
        <SplitText
            text="IndabaX Namibia 2026"
            className="text-5xl sm:text-6xl lg:text-7xl text-white font-bold mb-5 leading-[1.03] tracking-tight"
            tag="h1"
            textAlign="left"
            delay={80}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
        />
    );
}