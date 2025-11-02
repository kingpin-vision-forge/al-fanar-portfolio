"use client";
import Link from "next/link";
import { categoryCards } from "@/lib/content";
import { defaultEase } from "@/lib/motion";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

export default function BrandsPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  const headingVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 44 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: defaultEase,
        },
      },
    }),
    []
  );

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 60, rotateX: 5 },
      visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.8, ease: defaultEase },
      },
    }),
    []
  );

  return (
    <>
      <section
        ref={sectionRef}
        className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-white via-[#f4f6ff] to-[var(--navy-300)]/10 px-6 py-28"
      >
        <motion.div
          className="mx-auto flex w-full max-w-6xl flex-col gap-12 text-center text-[color:var(--ink)]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.span
            variants={headingVariants}
            className="text-xs font-semibold uppercase tracking-[0.48em] text-[color:var(--navy-700)]"
          >
            Our Three Brands
          </motion.span>
          <motion.h2
            variants={headingVariants}
            className="text-5xl font-black uppercase leading-tight md:text-6xl"
          >
            Tailored universes crafted with electric precision
          </motion.h2>
          <motion.p
            variants={headingVariants}
            className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-[color:var(--ink)]/75"
          >
            Explore the trio of ateliers shaping Alfanar—from precision menswear
            to radiant modesty and kinetic children’s drops.
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-12 grid w-full max-w-6xl gap-12 md:grid-cols-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { delayChildren: 0.18, staggerChildren: 0.18 },
            },
          }}
        >
          {categoryCards.map((card) => (
            <Link key={card.slug} href={card.to} className="group">
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="space-y-6 rounded-[36px] border border-[color:var(--navy-300)]/35 bg-white/95 p-8 text-[color:var(--ink)] shadow-[0_30px_80px_rgba(8,16,80,0.12)] transition duration-500 backdrop-blur"
              >
                <div className="relative h-[24rem] overflow-hidden rounded-[36px] bg-gradient-to-b from-white to-[var(--navy-300)]/12 shadow-lg">
                  <div
                    className="absolute inset-0 transition duration-[1200ms] group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.3),transparent_60%)]" />
                </div>

                <div className="space-y-3 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[color:var(--navy-700)]/70">
                    {card.title}
                  </p>
                  <h3 className="text-3xl font-black uppercase text-[color:var(--ink)]">
                    {card.tagline}
                  </h3>
                  <span className="inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.5em] text-[color:var(--navy-700)] transition group-hover:text-[color:var(--navy-300)]">
                    View collection
                    <motion.span
                      aria-hidden="true"
                      animate={{ x: [0, 6, 0] }}
                      transition={{ repeat: Infinity, duration: 2.4 }}
                    >
                      →
                    </motion.span>
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>
    </>
  );
}
