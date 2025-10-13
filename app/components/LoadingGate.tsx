"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { brand, loadingPhrases } from "@/lib/content";

type Props = { onDone: () => void; setLogoMounted: (b: boolean) => void };

const PHRASE_DURATION_MS = 1200;
const EXIT_DURATION_MS = 1500;

export default function LoadingGate({ onDone, setLogoMounted }: Props) {
  const [step, setStep] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    setStep(0);
    setExiting(false);

    if (!loadingPhrases.length) {
      setLogoMounted(true);
      onDone();
      return;
    }

    let tickId: ReturnType<typeof setInterval> | null = null;
    let exitTimeout: ReturnType<typeof setTimeout> | null = null;
    let finalizeTimeout: ReturnType<typeof setTimeout> | null = null;

    const startExit = () => {
      setExiting(true);
      finalizeTimeout = setTimeout(() => {
        setLogoMounted(true);
        onDone();
      }, EXIT_DURATION_MS);
    };

    if (loadingPhrases.length > 1) {
      let current = 0;
      tickId = setInterval(() => {
        current += 1;

        setStep((prev) => Math.min(prev + 1, loadingPhrases.length - 1));

        if (current >= loadingPhrases.length - 1) {
          if (tickId) {
            clearInterval(tickId);
            tickId = null;
          }
          if (!exitTimeout) {
            exitTimeout = setTimeout(startExit, PHRASE_DURATION_MS);
          }
        }
      }, PHRASE_DURATION_MS);
    } else {
      exitTimeout = setTimeout(startExit, PHRASE_DURATION_MS);
    }

    return () => {
      if (tickId) clearInterval(tickId);
      if (exitTimeout) clearTimeout(exitTimeout);
      if (finalizeTimeout) clearTimeout(finalizeTimeout);
    };
  }, [onDone, setLogoMounted]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f6f1e8]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <motion.div
            layoutId="alfanarenterprises-logo"
            className="relative flex h-28 items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 210, damping: 22 }}
          >
            <div className="flex items-center">
              <span className="serif text-4xl font-extrabold tracking-[0.2em] text-[#1b1b1b] whitespace-nowrap font-[Lora, serif]">
                {brand.name}
              </span>
              <div className="ml-4 h-12 overflow-visible flex items-center" style={{ width: '14rem' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={step}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 10, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="serif text-2xl font-semibold tracking-[0.2em] text-[#1b1b1b] whitespace-nowrap w-full text-left font-[Georgia, serif]"
                  >
                    {loadingPhrases[step % loadingPhrases.length]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
