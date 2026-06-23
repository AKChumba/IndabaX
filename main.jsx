import React from "react";
import { createRoot } from "react-dom/client";
import MagicRings from "./react-components/MagicRings.jsx";

const root = createRoot(
    document.getElementById("react-bit")
);

root.render(
    <MagicRings
    color="#F4A261"
    colorTwo="#E85D04"
    speed={0.4}
    ringCount={5}
    followMouse={true}
    mouseInfluence={0.3}
    clickBurst={true}
/>
);