"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { brand, loadingPhrases } from "@/lib/content";

type Props = { onDone: () => void; setLogoMounted: (b: boolean) => void };

export default function LoadingGate({ onDone, setLogoMounted }: Props) {
  const [step, setStep] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const tick = setInterval(() => setStep((s) => s + 1), 900);
    const total = setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        setLogoMounted(true);
        onDone();
      }, 700);
    }, loadingPhrases.length * 1000 + 800);
    return () => {
      clearInterval(tick);
      clearTimeout(total);
    };
  }, []);

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
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 20, opacity: 1 }}
                    exit={{ y: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
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
