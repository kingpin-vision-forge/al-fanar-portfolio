"use client";
import { mediaFeatures } from "@/lib/content";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MediaShowcase() {
  return (
    <section
      id="media"
      className="mx-auto max-w-6xl px-6 py-24"
      aria-labelledby="media-heading"
    >
      <div className="flex flex-col gap-5 pb-12">
        <span className="text-[11px] uppercase tracking-[0.45em] text-[#7b7b7b]">
          Media & Gallery
        </span>
        <h2
          id="media-heading"
          className="serif text-4xl font-semibold text-[#1b1b1b] md:text-5xl"
        >
          Press spotlights on our maison moments
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-[#4a4a4a]">
          From architectural unveilings to artisan collaborations, discover the
          narratives defining the Alfanar Enterprises world across luxury media.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {mediaFeatures.map((feature) => (
          <Link
            key={feature.href}
            href={feature.href}
            className="group rounded-[32px] border border-[color:var(--brand-line)] bg-white/70 shadow-[0_14px_40px_rgba(22,22,22,0.08)] backdrop-blur"
          >
            <div
              className="h-56 w-full rounded-t-[32px] bg-[#eae2d6] transition duration-[1200ms] group-hover:scale-[1.01]"
              style={{
                backgroundImage: `url(${feature.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="space-y-4 p-7">
              <h3 className="serif text-xl font-semibold text-[#1b1b1b]">
                  {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#4b4b4b]">
                {feature.excerpt}
              </p>
              <motion.span
                aria-hidden="true"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-[#1b1b1b]"
                whileHover={{ x: 6 }}
              >
                View feature →
              </motion.span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
