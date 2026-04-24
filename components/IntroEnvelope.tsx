"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { invitation } from "@/data/invitation";

type Props = {
  onOpen: () => void;
};

export default function IntroEnvelope({ onOpen }: Props) {
  const reduce = useReducedMotion();
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    if (!opening) return;
    const t = setTimeout(onOpen, reduce ? 200 : 1400);
    return () => clearTimeout(t);
  }, [opening, onOpen, reduce]);

  const trigger = () => {
    if (!opening) setOpening(true);
  };

  return (
    <div className="relative z-10 flex h-[100svh] min-h-[100svh] w-full flex-col items-center justify-center gap-4 overflow-hidden px-5 pb-[max(0.75rem,var(--safe-bottom))] pt-[max(0.75rem,var(--safe-top))] sm:gap-6">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.95, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-center text-[0.78rem] uppercase tracking-[0.35em] text-ivory/90 sm:text-[0.9rem] sm:tracking-[0.4em]"
      >
        Size bir mektubumuz var
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        className="text-center font-script leading-[0.9] text-ivory drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)]"
        style={{ fontSize: "clamp(2.8rem, 13vw, 5.5rem)" }}
      >
        {invitation.couple.combined}
      </motion.h1>

      <motion.button
        type="button"
        onClick={trigger}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            trigger();
          }
        }}
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.012 }}
        whileTap={{ scale: 0.988 }}
        aria-label="Zarfı aç"
        className="group relative cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ivory/70"
        style={{
          width: "min(82vw, 24rem)",
          aspectRatio: "1.6 / 1",
        }}
      >
        {/* Soft shadow under envelope */}
        <div className="absolute -inset-x-2 -bottom-2 top-1/3 -z-0 rounded-[4px] bg-black/40 blur-xl" />

        <EnvelopeSVG
          monogram={invitation.couple.monogram}
          opening={opening}
          reduce={!!reduce}
        />
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: opening ? 0 : 0.95 }}
        transition={{ duration: 1.0, delay: 0.9 }}
        className="whitespace-nowrap text-center text-[0.72rem] uppercase tracking-[0.28em] text-ivory/90 sm:text-[0.85rem] sm:tracking-[0.38em]"
      >
        Zarfı açmak için dokunun
      </motion.p>
    </div>
  );
}

// Scalloped-lace landscape envelope. Closed state has the flap covering the
// top triangle; on tap the flap folds up and the card slides out from behind.
function EnvelopeSVG({
  monogram,
  opening,
  reduce,
}: {
  monogram: string;
  opening: boolean;
  reduce: boolean;
}) {
  const W = 400;
  const H = 250;
  // V-tip of the flap at the vertical center of the envelope.
  const V = { x: W / 2, y: H * 0.55 };

  // Scallops count along each flap diagonal.
  const nScallops = 14;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id="paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5ecd4" />
          <stop offset="100%" stopColor="#e5d6ae" />
        </linearGradient>
        <linearGradient id="flapFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6edd5" />
          <stop offset="100%" stopColor="#ead9b0" />
        </linearGradient>
      </defs>

      {/* Envelope body (back panel) */}
      <rect
        x="0"
        y="0"
        width={W}
        height={H}
        rx="3"
        fill="url(#paper)"
        stroke="rgba(82,54,28,0.25)"
        strokeWidth="0.7"
      />

      {/* Seams of the folded paper back — faint guide lines */}
      <g stroke="rgba(82,54,28,0.15)" strokeWidth="0.5" fill="none">
        <path d={`M 0 ${H} L ${V.x} ${V.y} L ${W} ${H}`} />
      </g>

      {/* Peek card behind the flap — slides up on open.
          Below the flap (z-order: drawn before flap), above body. */}
      <motion.g
        initial={{ y: 0 }}
        animate={opening ? { y: reduce ? -30 : -120 } : { y: 0 }}
        transition={{
          duration: 1.1,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <rect
          x={W * 0.1}
          y={H * 0.22}
          width={W * 0.8}
          height={H * 0.62}
          rx="2"
          fill="#faf1da"
          stroke="rgba(82,54,28,0.25)"
          strokeWidth="0.6"
        />
        <text
          x={W / 2}
          y={H * 0.45}
          textAnchor="middle"
          fontFamily="var(--font-script)"
          fontSize="28"
          fill="#2a1514"
        >
          Ezgi &amp; Esat
        </text>
        <line
          x1={W * 0.38}
          y1={H * 0.5}
          x2={W * 0.62}
          y2={H * 0.5}
          stroke="rgba(42,21,20,0.4)"
          strokeWidth="0.6"
        />
        <text
          x={W / 2}
          y={H * 0.6}
          textAnchor="middle"
          fontFamily="var(--font-serif)"
          fontSize="10"
          fill="rgba(42,21,20,0.7)"
          letterSpacing="3"
        >
          13 · 06 · 2026
        </text>
      </motion.g>

      {/* Flap — animated via framer-motion. rotateX origin at top center of envelope */}
      <motion.g
        initial={{ rotateX: 0 }}
        animate={opening ? { rotateX: reduce ? -180 : -172 } : { rotateX: 0 }}
        transition={{ duration: 1.0, ease: [0.65, 0, 0.35, 1] }}
        style={{
          transformOrigin: `${W / 2}px 0px`,
          transformBox: "view-box",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Flap triangle — from top corners down to the V-tip */}
        <path
          d={`M 0 0 L ${V.x} ${V.y} L ${W} 0 Z`}
          fill="url(#flapFill)"
          stroke="rgba(82,54,28,0.3)"
          strokeWidth="0.6"
        />

        {/* Subtle drop shadow at the flap's bottom edges */}
        <path
          d={`M 0 0 L ${V.x} ${V.y} L ${W} 0`}
          stroke="rgba(0,0,0,0.12)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Scalloped lace along the two diagonal flap edges */}
        <LaceDiagonal
          from={{ x: 0, y: 0 }}
          to={V}
          count={nScallops}
          radius={6}
        />
        <LaceDiagonal
          from={V}
          to={{ x: W, y: 0 }}
          count={nScallops}
          radius={6}
        />

        {/* Script monogram centered on the flap, just above V-tip */}
        <text
          x={V.x}
          y={V.y - 12}
          textAnchor="middle"
          fontFamily="var(--font-script)"
          fontSize="56"
          fill="#2a1514"
          style={{ letterSpacing: "-1px" }}
        >
          {monogram}
        </text>
      </motion.g>
    </svg>
  );
}

// Renders scalloped lace along a line segment — small overlapping semicircles
// on the "inside" side of the flap, plus a delicate filigree dot pattern.
function LaceDiagonal({
  from,
  to,
  count,
  radius,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  count: number;
  radius: number;
}) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy);
  // Unit vector along the edge
  const ux = dx / len;
  const uy = dy / len;
  // Perpendicular pointing inward (into flap body, i.e. up-inward)
  // For a triangle apex-down flap, inward is toward the flap interior (up).
  // Since both diagonals go from top corner to center, inward perpendicular is (-uy, ux)
  const nx = -uy;
  const ny = ux;

  const scallops = [];
  for (let i = 0; i < count; i++) {
    const t = (i + 0.5) / count;
    const cx = from.x + dx * t + nx * radius * 0.9;
    const cy = from.y + dy * t + ny * radius * 0.9;
    scallops.push(
      <circle
        key={`s-${i}`}
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke="rgba(255,252,240,0.92)"
        strokeWidth="0.9"
      />
    );
  }

  // Inner filigree dots
  const dots = [];
  for (let i = 0; i < count * 2; i++) {
    const t = (i + 0.5) / (count * 2);
    const cx = from.x + dx * t + nx * radius * 2.2;
    const cy = from.y + dy * t + ny * radius * 2.2;
    dots.push(<circle key={`d-${i}`} cx={cx} cy={cy} r="0.8" fill="rgba(255,252,240,0.85)" />);
  }

  return (
    <g>
      {/* base edge line */}
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke="rgba(255,252,240,0.85)"
        strokeWidth="0.6"
      />
      {scallops}
      {dots}
    </g>
  );
}
