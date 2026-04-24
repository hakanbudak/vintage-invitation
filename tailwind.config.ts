import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0706",
        charcoal: "#181310",
        ivory: "#f6ecd4",
        cream: "#fbf3dd",
        parchment: "#e9d9ae",
        sage: "#6a7f66",
        emerald: "#3d5a46",
        bordeaux: "#591321",
        wine: "#7a1b2c",
        plum: "#2b0f1a",
        gold: "#c9a44a",
        champagne: "#e2c27b",
        blush: "#c38a7a",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 40px 80px -30px rgba(0,0,0,0.95), 0 0 80px rgba(201,164,74,0.12)",
        envelope: "0 30px 60px -20px rgba(0,0,0,0.9), 0 0 40px rgba(122,27,44,0.18)",
        card: "0 25px 60px -15px rgba(0,0,0,0.85), inset 0 0 0 1px rgba(201,164,74,0.35)",
      },
      keyframes: {
        drift: {
          "0%,100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-10px) scale(1.01)" },
        },
        pulseHint: {
          "0%,100%": { opacity: "0.55", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(-3px)" },
        },
      },
      animation: {
        drift: "drift 9s ease-in-out infinite",
        pulseHint: "pulseHint 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
