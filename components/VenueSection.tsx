"use client";

import { motion } from "framer-motion";
import LuxuryButton from "./LuxuryButton";
import { invitation } from "@/data/invitation";

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
  return "data:text/calendar;charset=utf-8," + encodeURIComponent(lines.join("\r\n"));
}

export default function VenueSection() {
  const { venue } = invitation;

  return (
    <section className="relative z-10 flex min-h-[100dvh] w-full items-center justify-center px-6 py-24">
      <div className="w-full max-w-xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1 }}
          className="text-[0.62rem] uppercase tracking-[0.5em] text-ivory/65"
        >
          Tören Mekânı
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-6 font-script text-4xl text-ivory sm:text-5xl"
        >
          {venue.name}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-6 space-y-1 font-serif text-base leading-relaxed text-ivory/85 sm:text-lg"
        >
          <p>{venue.addressLine1}</p>
          <p>{venue.addressLine2}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
        >
          <LuxuryButton href={venue.mapsUrl} ariaLabel="Konumu haritada aç">
            Konumu Aç
          </LuxuryButton>
          <LuxuryButton
            href={buildICS()}
            download="ezgi-esat-dugun.ics"
            ariaLabel="Etkinliği takvime ekle"
          >
            Takvime Ekle
          </LuxuryButton>
          <LuxuryButton href={invitation.rsvpUrl} ariaLabel="Katılım bildir">
            Katılım Bildir
          </LuxuryButton>
        </motion.div>
      </div>
    </section>
  );
}
