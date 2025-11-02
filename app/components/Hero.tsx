"use client";

import { heroBanners } from "@/lib/content";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, Variants, useScroll, useTransform, useSpring } from "framer-motion";

type HeroProps = {
  className?: string;
};

export default function Hero({ className }: HeroProps) {
  const [showBanners, setShowBanners] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const bannersRef = useRef<HTMLDivElement>(null);
  const MotionLink = useMemo(() => motion(Link), []);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroLift = useSpring(useTransform(scrollYProgress, [0, 1], [0, -120]), {
    stiffness: 120,
    damping: 22,
    mass: 0.35,
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.18, 0.08, 0]);

  useEffect(() => {
    if (showBanners && bannersRef.current) {
      // Scroll slightly less to avoid scrolling too far
      const yOffset = -150; // Increased offset to scroll 150 pixels less to reduce scroll distance further
      const y =
        bannersRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [showBanners]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const heroStack: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      className={cn(
        "relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#f4f6ff] to-[var(--navy-300)]/10 px-6 py-20 md:min-h-screen md:py-28",
        "border-b border-[color:var(--navy-300)]/30",
        className
      )}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 hidden h-full w-full bg-[radial-gradient(circle_at_top,rgba(18,48,255,0.18)0%,rgba(18,48,255,0)_55%)] md:block"
        style={{ opacity: glowOpacity }}
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
        className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center md:gap-16"
        style={{ y: heroLift, opacity: heroOpacity }}
      >
        <motion.div
          variants={heroStack}
          className="flex flex-col items-center gap-6 md:gap-8"
        >
          <motion.span
            variants={heroStack}
            className="inline-flex items-center gap-3 rounded-full border border-[color:var(--navy-300)]/60 bg-white/70 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.5em] text-[color:var(--navy-700)] backdrop-blur"
          >
            Momentum In Motion
          </motion.span>
          <motion.h2
            variants={heroStack}
            className="text-4xl font-black uppercase leading-tight text-[color:var(--ink)] md:text-6xl lg:text-[64px]"
          >
            Elevate Every{" "}
            <span className="text-transparent bg-gradient-to-r from-[var(--navy)] via-[var(--navy-700)] to-[var(--navy-300)] bg-clip-text">
              Stride
            </span>
          </motion.h2>
          <motion.p
            variants={heroStack}
            className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-[color:var(--ink)]/80 md:text-lg"
          >
            Engineered silhouettes and breathable layers inspired by the world’s
            leading sport houses. Built for families that move fast and live
            louder.
          </motion.p>
          <motion.div
            variants={heroStack}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 65px rgba(12, 40, 180, 0.40)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onClick={() => setShowBanners(!showBanners)}
              className="inline-flex items-center gap-3 rounded-full bg-[length:200%_200%] bg-gradient-to-r from-[var(--navy)] via-[var(--navy-700)] to-[var(--navy-300)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--cream)] shadow-[0_18px_55px_rgba(12,40,180,0.32)] transition-[background-position]"
            >
              Explore Drops
              <motion.span
                aria-hidden="true"
                animate={{ x: showBanners ? [0, 4, 0] : [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
              >
                →
              </motion.span>
            </motion.button>
            <MotionLink
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 18px 45px rgba(12, 40, 180, 0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="inline-flex items-center gap-3 rounded-full border border-[color:var(--navy-300)]/55 bg-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--navy-900)] backdrop-blur transition hover:border-[color:var(--navy)] hover:text-[color:var(--navy)]"
            >
              Talk Styling
              <motion.span
                aria-hidden="true"
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut",
                }}
              >
                ↗
              </motion.span>
            </MotionLink>
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showBanners && (
          <motion.div
            ref={bannersRef}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="mx-auto mt-14 grid w-full max-w-5xl gap-8 px-6 md:grid-cols-3 md:px-0"
          >
            {heroBanners.map(({ headline, sub, cta }) => (
              <motion.div
                key={headline}
                variants={itemVariants}
                className="space-y-3 rounded-[32px] border border-[color:var(--navy-300)]/35 bg-white/90 p-8 text-left text-[color:var(--ink)] shadow-[0_18px_60px_rgba(8,16,80,0.12)] backdrop-blur"
              >
                <h3 className="text-2xl font-black uppercase tracking-[0.2em] text-[color:var(--ink)]">
                  {headline}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--ink)]/75">
                  {sub}
                </p>
                <motion.div whileHover={{ x: 4 }}>
                  <Link
                    href={cta.href}
                    className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--navy-700)] transition hover:text-[color:var(--navy-300)]"
                  >
                    {cta.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
