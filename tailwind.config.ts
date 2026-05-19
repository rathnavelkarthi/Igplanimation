import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        ink2: "#131313",
        paper: "#f5f3ee",
        obsidian: "#06060a",
        obsidian2: "#0c0c14",
        bone: "#e9e3d6",
        ember: "#ff7a45",
        cobalt: "#3b5cff",
        sage: "#a3b3a3"
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        italic: ["var(--font-italic)", "ui-serif", "Georgia", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        "mono-disp": ["var(--font-mono)", "ui-monospace", "Menlo", "monospace"]
      },
      letterSpacing: {
        tightest: "-0.055em",
        editorial: "-0.038em",
        wide2: "0.32em",
        wide3: "0.42em"
      },
      fontSize: {
        "display-sm": ["clamp(2.5rem, 7vw, 4rem)", { lineHeight: "0.95" }],
        display: ["clamp(3rem, 10vw, 7rem)", { lineHeight: "0.88" }],
        "display-lg": ["clamp(3.5rem, 13vw, 10rem)", { lineHeight: "0.86" }],
        "display-xl": ["clamp(4rem, 18vw, 16rem)", { lineHeight: "0.82" }]
      },
      backgroundImage: {
        "noise-svg":
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")"
      }
    }
  },
  plugins: []
};
export default config;
