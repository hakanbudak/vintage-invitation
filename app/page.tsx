"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FloralBackground from "@/components/FloralBackground";
import IntroEnvelope from "@/components/IntroEnvelope";
import InvitationCard from "@/components/InvitationCard";
import FamilySection from "@/components/FamilySection";
import VenueSection from "@/components/VenueSection";
import CountdownSection from "@/components/CountdownSection";

export default function Page() {
  const [opened, setOpened] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!opened) return;
    // Smooth scroll into invitation once the envelope opens
    const t = setTimeout(() => {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
    return () => clearTimeout(t);
  }, [opened]);

  return (
    <main className="relative min-h-[100dvh] w-full overflow-x-hidden">
      {/* Persistent dark floral backdrop */}
      <div className="fixed inset-0 -z-10">
        <FloralBackground />
      </div>

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.section
            key="intro"
            className="relative min-h-[100dvh] w-full"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <IntroEnvelope onOpen={() => setOpened(true)} />
          </motion.section>
        ) : (
          <motion.div
            key="invite"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div ref={cardRef}>
              <InvitationCard />
            </div>
            <FamilySection />
            <VenueSection />
            <CountdownSection />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
