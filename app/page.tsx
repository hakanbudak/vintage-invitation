"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FloralBackground from "@/components/FloralBackground";
import IntroEnvelope from "@/components/IntroEnvelope";
import InvitationCard from "@/components/InvitationCard";
import CountdownSection from "@/components/CountdownSection";

export default function Page() {
  const [opened, setOpened] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!opened) return;
    const t = setTimeout(() => {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => clearTimeout(t);
  }, [opened]);

  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Persistent dark floral backdrop — explicit z-0 behind content */}
      <div className="fixed inset-0" style={{ zIndex: 0 }}>
        <FloralBackground />
      </div>

      {/* All foreground content lives above the backdrop */}
      <div className="relative" style={{ zIndex: 1 }}>
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.section
              key="intro"
              className="relative w-full"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <IntroEnvelope onOpen={() => setOpened(true)} />
            </motion.section>
          ) : (
            <motion.div
              key="invite"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            >
              <div ref={cardRef}>
                <InvitationCard />
              </div>
              <CountdownSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
