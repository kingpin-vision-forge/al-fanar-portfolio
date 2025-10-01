"use client";
import { categoryCards } from "@/lib/content";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CategoryGrid() {
  return (
    <section
      className="mx-auto max-w-6xl px-6 pb-24 pt-24"
      aria-labelledby="category-heading"
    >
      <div className="flex flex-col gap-5 pb-12">
        <span className="text-[11px] uppercase tracking-[0.45em] text-[#818181]">
          THREE REDIRECTIONS
        </span>
        <h2
          id="category-heading"
          className="serif text-4xl font-semibold text-[#1b1b1b] md:text-5xl"
        >
          Tailored universes crafted with couture precision
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-[#4a4a4a]">
          Inspired by the icons of Indian luxury — Raymond, Biba and FirstCry —
          each capsule mixes signature silhouettes with the Alfanar Enterprises touch.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {categoryCards.map((card) => (
          <Link key={card.slug} id={card.slug} href={card.to} className="group">
            <motion.div
              whileHover={{ y: -6 }}
              className="space-y-5"
            >
              <div className="relative h-[22rem] overflow-hidden rounded-[36px] bg-[#f0e7da]">
                <div
                  className="absolute inset-0 transition duration-[1200ms] group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
              </div>

              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-[0.4em] text-[#808080]">
                  {card.title}
                </p>
                <h3 className="serif text-2xl font-semibold text-[#1b1b1b]">
                  {card.tagline}
                </h3>
                <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[#1b1b1b]">
                  View collection
                  <motion.span
                    aria-hidden="true"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 2.4 }}
                  >
                    →
                  </motion.span>
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
