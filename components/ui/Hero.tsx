'use client';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { CONFIG } from '@/lib/config';
import { track } from '@/lib/analytics';
import { ChevronLeft, ChevronRight } from '@/components/icons';

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const banners = CONFIG.hero.banners;

  useEffect(() => {
    if (reduce) return;
    const rotation = setInterval(() => {
      if (!paused) {
        setIndex((i) => (i + 1) % banners.length);
      }
    }, CONFIG.hero.rotationMs);
    return () => clearInterval(rotation);
  }, [banners.length, paused, reduce]);

  useEffect(() => {
    const banner = banners[index];
    track('view_hero_banner', { index, src: banner.src });
  }, [banners, index]);

  const goTo = (next: number) => {
    const newIndex = (next + banners.length) % banners.length;
    setIndex(newIndex);
  };

  const current = banners[index];
  const prioritySrcs = useMemo(() => new Set([banners[0]?.src]), [banners]);

  return (
    <section
      className="relative flex min-h-[70vh] items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 -z-10">
        <AnimatePresence initial={false}>
          <motion.div
            key={current.src}
            className="absolute inset-0"
            initial={{ opacity: 0.4, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              priority={prioritySrcs.has(current.src)}
              sizes="(min-width: 1280px) 100vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 py-24 text-white">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-white/80">New Season, New Silhouettes</p>
          <h1 className="mt-3 text-4xl font-semibold md:text-6xl">{CONFIG.hero.headline}</h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">{CONFIG.hero.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={CONFIG.hero.cta.href}
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200 focus-visible:ring"
              onClick={() => track('click_cta', { label: CONFIG.hero.cta.label })}
            >
              {CONFIG.hero.cta.label}
            </Link>
            {CONFIG.hero.secondaryCTAs.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:ring"
                onClick={() => track('click_cta', { label: cta.label })}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
        {banners.map((banner, i) => (
          <button
            key={banner.src}
            type="button"
            aria-label={`Go to banner ${i + 1}`}
            onClick={() => goTo(i)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className={`h-2 w-8 rounded-full transition ${
              index === i ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-y-0 left-4 hidden items-center md:flex">
        <button
          type="button"
          aria-label="Previous banner"
          className="rounded-full bg-white/20 p-3 text-white transition hover:bg-white/40 focus-visible:ring"
          onClick={() => goTo(index - 1)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 hidden items-center md:flex">
        <button
          type="button"
          aria-label="Next banner"
          className="rounded-full bg-white/20 p-3 text-white transition hover:bg-white/40 focus-visible:ring"
          onClick={() => goTo(index + 1)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
