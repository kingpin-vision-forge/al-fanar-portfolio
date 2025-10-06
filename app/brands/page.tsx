"use client";
import Link from "next/link";
import { categoryCards } from "@/lib/content";
import { motion } from "framer-motion";

export default function BrandsPage() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-white/90 px-6 py-28 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 text-center">
        <span className="text-sm uppercase tracking-[0.45em] text-[#2c2b2b]">
          Our Three Brands
        </span>
        <h2 className="serif text-5xl font-semibold text-[#1b1b1b] md:text-6xl">
          Tailored universes crafted with couture precision
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-[#4a4a4a] mx-auto">
          Inspired by the icons of Indian luxury — Raymond, Biba and FirstCry — each capsule mixes signature silhouettes with the Alfanar Enterprises touch.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-3 mt-12">
        {categoryCards.map((card) => (
          <Link key={card.slug} href={card.to} className="group">
            <motion.div
              whileHover={{ y: -8 }}
              className="space-y-6 rounded-[36px] border border-[color:var(--brand-line)]/70 bg-white/90 p-8 shadow-[0_30px_80px_rgba(16,16,16,0.1)] transition duration-500"
            >
              <div className="relative h-[24rem] overflow-hidden rounded-[36px] bg-[#f0e7da] shadow-lg">
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
                <p className="text-xs uppercase tracking-[0.5em] text-[#707070]">
                  {card.title}
                </p>
                <h3 className="serif text-3xl font-semibold text-[#1b1b1b]">
                  {card.tagline}
                </h3>
                <span className="inline-flex items-center gap-4 text-sm uppercase tracking-[0.5em] text-[#1b1b1b]">
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
      </div>
    </section>
  );
}
