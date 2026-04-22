"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { invitation } from "@/data/invitation";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diff(target: number): Parts {
  const now = Date.now();
  const delta = Math.max(0, target - now);
  const days = Math.floor(delta / 86_400_000);
  const hours = Math.floor((delta % 86_400_000) / 3_600_000);
  const minutes = Math.floor((delta % 3_600_000) / 60_000);
  const seconds = Math.floor((delta % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

export default function CountdownSection() {
  const target = new Date(invitation.weddingDateISO).getTime();
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(diff(target));
    const id = setInterval(() => setParts(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items: Array<[string, number | undefined]> = [
    ["Gün", parts?.days],
    ["Saat", parts?.hours],
    ["Dakika", parts?.minutes],
    ["Saniye", parts?.seconds],
  ];

  return (
    <section className="relative z-10 flex min-h-[100dvh] w-full items-center justify-center overflow-hidden px-6 py-24">
      {/* Lighter ivory-toned closing scene */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(243,234,216,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(243,234,216,0.04)_60%,rgba(243,234,216,0.08)_100%)]" />
      </div>

      <div className="relative w-full max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1 }}
          className="text-[0.62rem] uppercase tracking-[0.5em] text-ivory/75"
        >
          13 · Haziran · 2026
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.3, delay: 0.15 }}
          className="mt-4 font-script text-5xl text-ivory sm:text-7xl"
        >
          {invitation.couple.combined}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.3, delay: 0.3 }}
          className="mt-12 grid grid-cols-4 gap-2 sm:gap-6"
        >
          {items.map(([label, value]) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-[2px] border border-ivory/20 bg-ivory/[0.03] px-2 py-5 backdrop-blur-sm sm:px-4 sm:py-7"
            >
              <span
                className="font-serif text-3xl leading-none text-ivory tabular-nums sm:text-5xl"
                aria-live="polite"
              >
                {value === undefined ? "—" : String(value).padStart(2, "0")}
              </span>
              <span className="mt-3 text-[0.55rem] uppercase tracking-[0.4em] text-ivory/65 sm:text-[0.6rem]">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="mx-auto mt-14 max-w-md text-balance font-serif italic leading-relaxed text-ivory/80 sm:text-lg"
        >
          {invitation.messages.closing}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.7 }}
          className="mt-10 flex items-center justify-center gap-3 text-[0.6rem] uppercase tracking-[0.4em] text-ivory/60"
        >
          <span className="h-px w-8 bg-ivory/40" />
          <span>İstanbul</span>
          <span className="h-px w-8 bg-ivory/40" />
        </motion.div>
      </div>
    </section>
  );
}
