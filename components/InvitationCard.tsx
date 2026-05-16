"use client";

import { motion } from "framer-motion";
import LaceFrame, { TinyOrnament } from "./LaceFrame";
import LuxuryButton from "./LuxuryButton";
import { invitation } from "@/data/invitation";

export default function InvitationCard() {
  const { couple, events, venue } = invitation;

  return (
    <section className="relative z-10 flex min-h-[100svh] w-full flex-col items-center justify-center px-5 py-14 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[22rem] sm:max-w-md"
        style={{ aspectRatio: "4 / 5" }}
      >
        {/* Translucent fabric interior */}
        <div className="lace-veil absolute inset-3 rounded-[2px] bg-black/40 ring-1 ring-ivory/20" />

        {/* Scalloped lace frame */}
        <LaceFrame />

        {/* Content */}
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center sm:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1.1 }}
            className="font-script leading-[0.9] text-ivory"
            style={{ fontSize: "clamp(2.8rem, 11vw, 4.6rem)" }}
          >
            Düğünümüze
            <br />
            Davet
          </motion.h2>

          <div className="thin-divider mt-6 w-28" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65, duration: 1.0 }}
            className="mt-6 font-serif text-[1rem] uppercase tracking-[0.36em] text-ivory sm:text-[1.1rem]"
          >
            {couple.bride} &amp; {couple.groom}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.85, duration: 1.0 }}
            className="mt-5 flex flex-col items-center gap-2 font-serif uppercase tracking-[0.3em] text-ivory"
          >
            <span className="text-[1.05rem] font-medium sm:text-[1.25rem]">
              {events.henna.label} &middot; {events.henna.date}
            </span>
            <span className="text-[1.05rem] font-medium sm:text-[1.25rem]">
              {events.wedding.label} &middot; {events.wedding.date}
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Below-card info */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, delay: 0.3 }}
        className="mt-12 flex w-full max-w-md flex-col items-center text-center"
      >
        <p
          className="font-script leading-none text-ivory"
          style={{ fontSize: "clamp(1.5rem, 5.5vw, 2.2rem)" }}
        >
          Hot Salon Davet
        </p>

        <TinyOrnament className="mt-5 h-3 w-28 text-ivory/75" />

        <p className="mt-5 font-serif text-[0.88rem] uppercase tracking-[0.32em] text-ivory sm:text-[1rem]">
          {venue.addressLine2}
        </p>
        <p className="mt-2 font-serif text-[0.88rem] uppercase tracking-[0.28em] text-ivory/90 sm:text-[1rem]">
          {events.wedding.date}
        </p>

        <p className="mt-3 font-serif text-[0.95rem] italic text-ivory/85 sm:text-[1.05rem]">
          {venue.addressLine1}
        </p>

        <div className="mt-8">
          <LuxuryButton href={venue.mapsUrl} ariaLabel="Adresi ve konumu aç">
            Adres &amp; Konumu Aç
          </LuxuryButton>
        </div>
      </motion.div>
    </section>
  );
}
