"use client";

import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";

export default function FamilySection() {
  const { families, messages } = invitation;
  return (
    <section className="relative z-10 flex min-h-[100dvh] w-full items-center justify-center px-6 py-24">
      <div className="w-full max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2 }}
          className="text-[0.62rem] uppercase tracking-[0.5em] text-ivory/65"
        >
          Aileler
        </motion.p>

        <div className="mt-10 grid grid-cols-1 items-start gap-14 sm:grid-cols-2 sm:gap-10">
          {families.map((f, i) => (
            <motion.div
              key={f.side}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, delay: 0.2 + i * 0.2 }}
              className="flex flex-col items-center"
            >
              <h3 className="font-script text-4xl text-ivory sm:text-5xl">
                {f.side}
              </h3>
              <div className="thin-divider my-4 w-20" />
              <p className="font-serif text-base tracking-[0.25em] text-ivory/80 sm:text-lg">
                {f.parents}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="mx-auto mt-16 max-w-xl"
        >
          <Ornament />
          <p className="mt-8 text-balance font-serif text-lg italic leading-relaxed text-ivory/85 sm:text-xl">
            “{messages.invitation}”
          </p>
          <Ornament flip />
        </motion.div>
      </div>
    </section>
  );
}

function Ornament({ flip }: { flip?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 16"
      className={`mx-auto h-4 w-48 text-ivory/70 ${flip ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.7"
    >
      <path d="M2,8 L70,8" />
      <path d="M130,8 L198,8" />
      <circle cx="100" cy="8" r="2" fill="currentColor" />
      <path d="M80,8 Q90,2 100,8 Q110,14 120,8" />
      <path d="M70,8 Q75,4 80,8" />
      <path d="M120,8 Q125,12 130,8" />
    </svg>
  );
}
