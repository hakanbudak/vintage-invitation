"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LuxuryButton from "./LuxuryButton";
import { TinyOrnament } from "./LaceFrame";
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

function buildICS() {
  const { calendar } = invitation.venue;
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Ezgi-Esat//Wedding//TR",
    "BEGIN:VEVENT",
    `UID:ezgi-esat-${calendar.startUTC}@wedding`,
    `DTSTAMP:${calendar.startUTC}`,
    `DTSTART:${calendar.startUTC}`,
    `DTEND:${calendar.endUTC}`,
    `SUMMARY:${calendar.title}`,
    `DESCRIPTION:${calendar.details}`,
    `LOCATION:${calendar.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return (
    "data:text/calendar;charset=utf-8," +
    encodeURIComponent(lines.join("\r\n"))
  );
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
    <section className="relative z-10 w-full bg-cream text-ink">
      <div className="mx-auto flex min-h-[100svh] max-w-3xl flex-col items-center justify-center gap-6 px-6 py-20 text-center">
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="font-script leading-none text-ink"
          style={{ fontSize: "clamp(3rem, 10vw, 4.5rem)" }}
          aria-label={invitation.couple.monogram}
        >
          {invitation.couple.monogram}
        </motion.div>

        {/* Families */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.15 }}
          className="mt-4"
        >
          <p className="text-[0.82rem] uppercase tracking-[0.4em] text-ink/75 sm:text-[0.95rem]">
            Aileler
          </p>
          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-14">
            {invitation.families.map((f) => (
              <div key={f.side} className="flex flex-col items-center">
                <p
                  className="font-script leading-none text-ink"
                  style={{ fontSize: "clamp(2rem, 6vw, 2.6rem)" }}
                >
                  {f.side}
                </p>
                <p className="mt-2 text-[0.9rem] uppercase tracking-[0.3em] text-ink/80 sm:text-[1rem]">
                  {f.parents}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <TinyOrnament className="mt-4 h-3 w-32 text-ink/60" />

        {/* With love */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="mt-2"
        >
          <p className="text-[0.85rem] uppercase tracking-[0.4em] text-ink/75 sm:text-[0.95rem]">
            Sevgilerimizle
          </p>
          <h3
            className="mt-3 font-script leading-[0.9] text-ink"
            style={{ fontSize: "clamp(2.6rem, 10vw, 4.4rem)" }}
          >
            {invitation.couple.combined}
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.45 }}
          className="mx-auto max-w-md text-balance font-serif text-[1.05rem] italic text-ink/85 sm:text-xl"
        >
          {invitation.messages.invitation}
        </motion.p>

        <p className="mt-3 text-[0.82rem] uppercase tracking-[0.4em] text-ink/75 sm:text-[0.9rem]">
          Sizleri bekliyoruz
        </p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.55 }}
          className="mt-6 flex items-end justify-center gap-2 sm:gap-6"
        >
          {items.map(([label, value], i) => (
            <div key={label} className="flex flex-col items-center">
              <div className="flex items-baseline">
                <span
                  className="font-serif tabular-nums leading-none text-ink"
                  style={{ fontSize: "clamp(2rem, 8vw, 3.2rem)" }}
                  aria-live="polite"
                >
                  {value === undefined ? "—" : String(value).padStart(2, "0")}
                </span>
                {i < items.length - 1 && (
                  <span
                    className="mx-1 font-serif leading-none text-ink/60 sm:mx-2"
                    style={{ fontSize: "clamp(1.5rem, 6vw, 2.4rem)" }}
                  >
                    :
                  </span>
                )}
              </div>
              <span className="mt-2 text-[0.72rem] uppercase tracking-[0.3em] text-ink/70 sm:text-[0.85rem] sm:tracking-[0.4em]">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Secondary actions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.7 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
        >
          <LuxuryButton
            variant="outline-dark"
            href={buildICS()}
            download="ezgi-esat-dugun.ics"
            ariaLabel="Etkinliği takvime ekle"
          >
            Takvime Ekle
          </LuxuryButton>
        </motion.div>

        <p className="mt-8 text-[0.8rem] uppercase tracking-[0.4em] text-ink/65">
          İstanbul · 13.06.2026
        </p>
      </div>
    </section>
  );
}
