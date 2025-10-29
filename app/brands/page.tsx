"use client";
import Link from "next/link";
import { categoryCards } from "@/lib/content";
import { motion } from "framer-motion";

export default function BrandsPage() {
  return (
    <>
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-white via-[#f4f6ff] to-[var(--navy-300)]/10 px-6 py-28">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 text-center text-[color:var(--ink)]">
          <span className="text-xs font-semibold uppercase tracking-[0.48em] text-[color:var(--navy-700)]">
            Our Three Brands
          </span>
          <h2 className="text-5xl font-black uppercase leading-tight md:text-6xl">
            Tailored universes crafted with electric precision
          </h2>
          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-[color:var(--ink)]/75">
            Inspired by the icons of Indian luxury — Raymond, Biba and FirstCry — each capsule mixes signature silhouettes with the Alfanar Enterprises touch.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-3 mt-12">
          {categoryCards.map((card) => (
            <Link key={card.slug} href={card.to} className="group">
              <motion.div
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
        </div>
      </section>
    </>
  );
}
