"use client";
import { categoryCards } from "@/lib/content";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMemo, useRef } from "react";

const cardDescriptions: Record<string, string> = {
  mens: "Sharp layering and engineered tailoring that flexes from boardrooms to breezy weekends.",
  womens: "Fluid silhouettes, tonal embroidery, and modest profiles hand-finished for confident gatherings.",
  children: "Durable fabrics and color stories built to keep up with playground sprints and festival selfies.",
};

type CategoryGridProps = {
  className?: string;
};

export default function CategoryGrid({ className }: CategoryGridProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  const headerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      },
    }),
    [],
  );

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 60, rotateX: 5 },
      visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      },
    }),
    [],
  );

  return (
    <section
      id="brands"
      aria-labelledby="category-heading"
      ref={sectionRef}
      className={cn(
        "relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-white via-[#f4f6ff] to-[var(--navy-300)]/10 px-6 py-20 md:flex md:min-h-screen md:items-center md:justify-center md:py-28",
        "border-b border-[color:var(--navy-300)]/30",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-16 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--navy-300)]/35 to-transparent sm:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 bottom-16 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--navy-300)]/35 to-transparent sm:block"
      />

      <motion.div
        className="mx-auto flex w-full max-w-6xl flex-col gap-10 text-center text-[color:var(--ink)]"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.span
          variants={headerVariants}
          className="text-xs font-semibold uppercase tracking-[0.48em] text-[color:var(--navy-700)]"
        >
          Three Capsules
        </motion.span>
        <motion.h2
          variants={headerVariants}
          id="category-heading"
          className="text-3xl font-black uppercase leading-tight md:text-5xl lg:text-6xl"
        >
          Tailored universes with clubhouse energy
        </motion.h2>
        <motion.p
          variants={headerVariants}
          className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-[color:var(--ink)]/75"
        >
          Discover three immersive drop universes curated to transition from refined evenings to kinetic playdates without missing a beat.
        </motion.p>
      </motion.div>

      <motion.div
        className="mx-auto mt-10 grid w-full max-w-6xl gap-8 md:mt-0 md:grid-cols-3"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: { delayChildren: 0.2, staggerChildren: 0.16 },
          },
        }}
      >
        {categoryCards.map((card) => (
          <Link key={card.slug} href={card.to} className="group">
            <motion.article
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="flex h-full flex-col justify-between rounded-[32px] border border-[color:var(--navy-300)]/35 bg-white/95 p-6 text-left text-[color:var(--ink)] shadow-[0_24px_70px_rgba(8,16,80,0.12)] transition duration-500 backdrop-blur"
            >
              <div className="relative h-[16rem] overflow-hidden rounded-[28px] bg-gradient-to-b from-white to-[var(--navy-300)]/12 shadow-lg md:h-[22rem]">
                <div
                  className="absolute inset-0 transition duration-[1200ms] group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.35),transparent_65%)]" />
              </div>

              <div className="flex flex-1 flex-col items-start gap-1 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[color:var(--navy-700)]/80">
                  {card.title}
                </p>
                <h3 className="text-2xl font-black uppercase text-[color:var(--ink)]">
                  {card.tagline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]/70">
                  {cardDescriptions[card.slug] ?? card.tagline}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-[color:var(--navy-700)] transition group-hover:text-[color:var(--navy-300)]">
                View collection
                <motion.span
                  aria-hidden="true"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 2.1 }}
                >
                  →
                </motion.span>
              </span>
            </motion.article>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
