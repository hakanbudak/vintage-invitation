"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  intensity?: "full" | "soft" | "whisper";
  className?: string;
};

// Editorial moody floral composition built entirely with SVG so the whole
// invitation ships without external image assets.
export default function FloralBackground({
  intensity = "full",
  className = "",
}: Props) {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1a1310_0%,#0b0907_55%,#050403_100%)]" />

      {/* Subtle burgundy warmth at the very edges */}
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_bottom,rgba(59,31,31,0.45),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: intensity === "whisper" ? 0.35 : 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <svg
          viewBox="0 0 800 1200"
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
        >
          <defs>
            <radialGradient id="petal" cx="50%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#f6ecd6" stopOpacity="1" />
              <stop offset="55%" stopColor="#d8c9a6" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#4e4632" stopOpacity="0.15" />
            </radialGradient>
            <radialGradient id="petalDim" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#e5d8b6" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#9a8c6a" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2a2418" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="stem" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3c4a38" />
              <stop offset="100%" stopColor="#1f2a1f" />
            </linearGradient>
            <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5b6d52" />
              <stop offset="100%" stopColor="#23311f" />
            </linearGradient>
            <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.4" />
            </filter>
          </defs>

          {/* Back greenery */}
          <g opacity="0.75">
            <path
              d="M40,1200 C80,900 30,700 120,480 C200,280 160,140 240,40"
              stroke="url(#stem)"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M760,1200 C720,940 790,720 700,520 C620,340 680,180 600,40"
              stroke="url(#stem)"
              strokeWidth="3"
              fill="none"
            />
            <ellipse cx="150" cy="520" rx="55" ry="20" fill="url(#leaf)" transform="rotate(-30 150 520)" filter="url(#soft)" />
            <ellipse cx="230" cy="310" rx="70" ry="22" fill="url(#leaf)" transform="rotate(35 230 310)" filter="url(#soft)" />
            <ellipse cx="660" cy="640" rx="60" ry="20" fill="url(#leaf)" transform="rotate(30 660 640)" filter="url(#soft)" />
            <ellipse cx="610" cy="300" rx="75" ry="24" fill="url(#leaf)" transform="rotate(-25 610 300)" filter="url(#soft)" />
          </g>

          {/* Large top-left calla lily */}
          <g transform="translate(90,120) rotate(-15)">
            <path
              d="M0,0 C-60,80 -30,220 80,240 C180,255 240,160 200,60 C170,-10 80,-50 0,0 Z"
              fill="url(#petal)"
              opacity="0.95"
            />
            <path
              d="M90,70 C70,130 100,200 150,210"
              stroke="#c9b083"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M110,100 L115,220"
              stroke="#b69a6b"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>

          {/* Large bottom-right calla lily */}
          <g transform="translate(560,860) rotate(20)">
            <path
              d="M0,0 C-70,90 -30,240 90,260 C210,280 270,160 220,50 C190,-20 80,-60 0,0 Z"
              fill="url(#petal)"
              opacity="0.95"
            />
            <path
              d="M100,80 C80,150 115,225 170,235"
              stroke="#c9b083"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M125,110 L130,235"
              stroke="#b69a6b"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>

          {/* Smaller supporting bloom */}
          <g transform="translate(420,60) rotate(10)" opacity="0.9">
            <path
              d="M0,0 C-40,50 -20,150 60,160 C140,170 180,100 150,30 C130,-10 60,-40 0,0 Z"
              fill="url(#petalDim)"
            />
            <path
              d="M75,100 L78,160"
              stroke="#b69a6b"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>

          <g transform="translate(40,780) rotate(-30)" opacity="0.85">
            <path
              d="M0,0 C-40,50 -20,150 60,160 C140,170 180,100 150,30 C130,-10 60,-40 0,0 Z"
              fill="url(#petalDim)"
            />
          </g>
        </svg>
      </motion.div>

      {/* Floating drift layer */}
      {!reduce && intensity !== "whisper" && (
        <motion.div
          className="absolute inset-0"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute left-[10%] top-[62%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(243,234,216,0.06),transparent_70%)] blur-2xl" />
          <div className="absolute right-[8%] top-[20%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(182,154,107,0.08),transparent_70%)] blur-2xl" />
        </motion.div>
      )}

      {/* Vignette on top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.55)_80%,rgba(0,0,0,0.95)_100%)]" />
    </div>
  );
}
