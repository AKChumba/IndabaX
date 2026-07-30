import React from "react";
import { createRoot } from "react-dom/client";

import PosterShowcase from "./react-components/PosterShowcase.jsx";

const posterRoot = document.getElementById("poster-showcase-root");

if (posterRoot) {
  createRoot(posterRoot).render(<PosterShowcase />);
}
