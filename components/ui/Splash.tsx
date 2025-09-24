'use client';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { CONFIG } from '@/lib/config';

export function Splash() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 1200);
    if (!reduce) {
      const interval = setInterval(
        () => setIdx((i) => (i + 1) % CONFIG.loadingMessages.length),
        350
      );
      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [reduce]);

  const msg = CONFIG.loadingMessages[idx] ?? CONFIG.loadingMessages[0];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-50 grid place-items-center bg-white dark:bg-neutral-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          aria-live="polite"
        >
          <div className="text-center">
            <motion.h1
              layoutId="brand-logo"
              className="text-3xl font-semibold tracking-tight"
            >
              {CONFIG.brand}
            </motion.h1>
            <div className="mt-3 text-sm opacity-70">
              {reduce ? CONFIG.loadingMessages[0] : msg}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
