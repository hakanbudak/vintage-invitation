"use client";

import { motion } from "framer-motion";
import LaceFrame from "./LaceFrame";
import { invitation } from "@/data/invitation";

export default function InvitationCard() {
  const { couple, events } = invitation;
  return (
    <section className="relative z-10 flex min-h-[100dvh] w-full items-center justify-center px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2.5, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1.2, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[22rem] sm:max-w-md"
      >
        <div className="card-fabric relative aspect-[3/4] w-full rounded-[2px] shadow-glow">
          <LaceFrame />

          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-[0.62rem] uppercase tracking-[0.5em] text-ivory/70"
            >
              Düğün Daveti
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="mt-6 font-script text-5xl leading-[0.95] text-ivory sm:text-6xl"
            >
              {couple.bride}
            </motion.h2>

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.85, duration: 1.2 }}
              className="my-3 font-serif text-2xl italic text-ivory/70"
            >
              &amp;
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 1.2 }}
              className="font-script text-5xl leading-[0.95] text-ivory sm:text-6xl"
            >
              {couple.groom}
            </motion.h2>

            <div className="thin-divider my-8 w-3/5" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 1.1 }}
              className="space-y-3 text-ivory/85"
            >
              <EventLine
                label={events.henna.label}
                date={events.henna.date}
                day={events.henna.day}
              />
              <EventLine
                label={events.wedding.label}
                date={events.wedding.date}
                day={events.wedding.day}
                emphasize
              />
            </motion.div>

            <div className="thin-divider mt-8 w-3/5" />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 1.1 }}
              className="mt-6 text-[0.62rem] uppercase tracking-[0.45em] text-ivory/70"
            >
              İstanbul · 2026
            </motion.p>
          </div>
        </div>

        {/* Soft under-glow */}
        <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(182,154,107,0.18),transparent_70%)] blur-2xl" />
      </motion.div>
    </section>
  );
}

function EventLine({
  label,
  date,
  day,
  emphasize,
}: {
  label: string;
  date: string;
  day: string;
  emphasize?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-[0.62rem] uppercase tracking-[0.5em] text-ivory/55">
        {label}
      </span>
      <span
        className={`font-serif ${
          emphasize ? "text-2xl" : "text-xl"
        } tracking-wide text-ivory`}
      >
        {date}
      </span>
      <span className="text-[0.7rem] uppercase tracking-[0.35em] text-ivory/65">
        {day}
      </span>
    </div>
  );
}
