import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0907",
        charcoal: "#141210",
        ivory: "#f3ead8",
        parchment: "#ece1c8",
        sage: "#59695b",
        bordeaux: "#3b1f1f",
        gold: "#b69a6b",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 40px 80px -30px rgba(0,0,0,0.9), 0 0 60px rgba(182,154,107,0.08)",
        envelope: "0 30px 60px -20px rgba(0,0,0,0.85)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)",
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-10px) scale(1.01)" },
        },
      },
      animation: {
        drift: "drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
