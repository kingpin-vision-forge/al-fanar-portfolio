"use client";
import { categoryCards } from "@/lib/content";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CategoryGridProps = {
  className?: string;
};

export default function CategoryGrid({ className }: CategoryGridProps) {
  return (
    <section
      id="brands"
      aria-labelledby="category-heading"
      className={cn(
        "relative min-h-[80vh] md:flex md:min-h-screen md:items-center md:justify-center w-full overflow-hidden bg-white/70 px-6 py-16 md:py-28",
        "shadow-[0_45px_140px_-75px_rgba(19,19,19,0.35)] backdrop-blur-sm",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-16 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--brand-line)]/70 to-transparent sm:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 bottom-16 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--brand-line)]/70 to-transparent sm:block"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 text-center md:text-center">
        <span className="text-sm uppercase tracking-[0.45em] text-[#2c2b2b]">
          THREE REDIRECTIONS
        </span>
        <h2
          id="category-heading"
          className="serif text-3xl md:text-5xl lg:text-6xl font-semibold text-[#1b1b1b] text-center"
        >
          Tailored universes crafted with couture precision
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-[#4a4a4a] mx-auto text-center">
          Inspired by the icons of Indian luxury — Raymond, Biba and FirstCry —
          each capsule mixes signature silhouettes with the Alfanar Enterprises touch.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-3 mt-8 md:mt-0">
        {categoryCards.map((card) => (
          <Link key={card.slug} href="/brands" className="group">
            <motion.div
              whileHover={{ y: -6 }}
              className="space-y-5 rounded-[36px] border border-[color:var(--brand-line)]/60 bg-white/85 p-6 shadow-[0_22px_60px_rgba(16,16,16,0.06)] transition duration-500"
            >
              <div className="relative h-[16rem] md:h-[22rem] overflow-hidden rounded-[36px] bg-[#f0e7da] shadow-lg">
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

              <div className="space-y-2 text-center">
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
