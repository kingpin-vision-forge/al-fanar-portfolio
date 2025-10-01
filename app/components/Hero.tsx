"use client";
import { useEffect, useState } from "react";
import { heroBanners, brand } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % heroBanners.length),
      5200
    );
    return () => clearInterval(t);
  }, []);

  const banner = heroBanners[idx];

  return (
    <section
      className="relative min-h-[580px] overflow-hidden pt-16 md:min-h-[720px] md:pt-0"
      id="top"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={banner.image}
          initial={{ opacity: 0.4, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${banner.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(200deg,rgba(16,16,16,0.45)0%,rgba(16,16,16,0.2)45%,rgba(246,241,232,0.72)100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-16 text-[#1b1b1b] md:justify-center md:pb-0">
        <div className="max-w-2xl space-y-6">
          <motion.span
            key={banner.tone + idx}
            className="inline-flex items-center border border-[color:var(--brand-line)] px-4 py-1 text-[10px] uppercase tracking-[0.45em] text-[#6c6c6c]"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
          >
            {brand.strapline}
          </motion.span>

          <AnimatePresence mode="wait">
            <motion.h1
              key={banner.headline}
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -28, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="serif text-5xl font-semibold leading-tight md:text-7xl"
            >
              {banner.headline}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={banner.sub}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl text-base text-[#3d3d3d] md:text-lg"
            >
              {banner.sub}
            </motion.p>
          </AnimatePresence>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href={banner.cta.href}
              className="inline-flex items-center gap-3 border-b border-[#1b1b1b] pb-2 text-xs uppercase tracking-[0.5em] text-[#1b1b1b] transition hover:text-black"
            >
              {banner.cta.label}
              <span aria-hidden="true">→</span>
            </Link>

            <div className="flex items-center gap-2">
              {heroBanners.map((_, indicatorIdx) => (
                <span
                  key={indicatorIdx}
                  className={`block h-[2px] w-10 transition ${
                    indicatorIdx === idx ? "bg-[#1b1b1b]" : "bg-[#d2cdc2]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
