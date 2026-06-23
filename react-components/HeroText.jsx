import SplitText from "./SplitText.jsx";

export default function HeroText() {
    return (
        <SplitText
            text="IndabaX Namibia 2026"
            className="text-5xl lg:text-6xl text-white font-bold mb-6"
            delay={80}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
        />
    );
}