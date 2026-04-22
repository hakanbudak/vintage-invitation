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
    const t = setTimeout(onOpen, reduce ? 200 : 1600);
    return () => clearTimeout(t);
  }, [opening, onOpen, reduce]);

  const trigger = () => {
    if (!opening) setOpening(true);
  };

  return (
    <div className="relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-center px-6 pb-[max(1.5rem,var(--safe-bottom))] pt-[max(2.5rem,var(--safe-top))]">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="mb-3 text-center text-[0.68rem] uppercase tracking-[0.45em] text-ivory/70"
      >
        {invitation.messages.heroHint}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 0.5 }}
        className="mb-10 text-center font-script text-5xl leading-none text-ivory sm:text-6xl md:text-7xl"
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
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        aria-label="Zarfı aç"
        className="relative h-56 w-[19rem] max-w-[88vw] cursor-pointer shadow-envelope focus:outline-none focus-visible:ring-1 focus-visible:ring-ivory/70 sm:h-64 sm:w-[22rem]"
      >
        {/* Envelope body */}
        <div className="absolute inset-0 rounded-sm bg-gradient-to-b from-parchment to-[#d9caa6]">
          <div className="absolute inset-0 rounded-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_40%)]" />
          <div className="absolute inset-1 rounded-sm border border-ink/15" />
          <div className="absolute inset-[0.55rem] rounded-sm border border-ink/10" />
        </div>

        {/* Back triangles (static) */}
        <div className="absolute inset-x-0 bottom-0 top-1/2 overflow-hidden rounded-b-sm">
          <div className="absolute inset-x-0 top-0 h-full bg-[#d9caa6]" />
          <div
            className="absolute inset-x-0 top-0 h-full"
            style={{
              background:
                "linear-gradient(135deg,#c9b88f 0%, #d9caa6 50%, #c9b88f 100%)",
              clipPath: "polygon(0 0, 50% 85%, 100% 0, 100% 100%, 0 100%)",
            }}
          />
        </div>

        {/* Card peeking out */}
        <motion.div
          initial={{ y: 0 }}
          animate={opening ? { y: reduce ? -10 : -140, opacity: [1, 1, 0.9] } : { y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-1/2 z-10 h-[78%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-gradient-to-b from-ivory to-[#e7dcc0] shadow-[inset_0_0_0_1px_rgba(11,9,7,0.12)]"
        >
          <div className="flex h-full w-full flex-col items-center justify-center px-4">
            <p className="font-script text-3xl text-ink/80 sm:text-4xl">
              {invitation.couple.combined}
            </p>
            <div className="my-2 h-px w-16 bg-ink/25" />
            <p className="text-[0.6rem] uppercase tracking-[0.4em] text-ink/55">
              13 · 06 · 2026
            </p>
          </div>
        </motion.div>

        {/* Envelope flap (animates open) */}
        <motion.div
          initial={{ rotateX: 0 }}
          animate={opening ? { rotateX: reduce ? -180 : -175 } : { rotateX: 0 }}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
          style={{
            transformOrigin: "top",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
          className="absolute inset-x-0 top-0 z-20 h-[58%] origin-top"
        >
          <div
            className="h-full w-full"
            style={{
              background:
                "linear-gradient(180deg,#e3d3ad 0%, #c9b88f 100%)",
              clipPath: "polygon(0 0, 50% 100%, 100% 0)",
              filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.35))",
            }}
          />

          {/* Wax-seal style monogram */}
          <div className="pointer-events-none absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2">
            <div className="relative grid h-14 w-14 place-items-center rounded-full bg-bordeaux/90 shadow-[0_4px_10px_rgba(0,0,0,0.4)] ring-1 ring-black/20">
              <span className="font-script text-[1.35rem] text-ivory/95">
                {invitation.couple.monogram}
              </span>
              <span className="absolute -inset-1 rounded-full border border-bordeaux/60" />
            </div>
          </div>
        </motion.div>
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: opening ? 0 : 0.7 }}
        transition={{ duration: 1.4, delay: 1.3 }}
        className="mt-8 text-center text-[0.7rem] uppercase tracking-[0.4em] text-ivory/70"
      >
        {invitation.messages.openEnvelope}
      </motion.p>
    </div>
  );
}
