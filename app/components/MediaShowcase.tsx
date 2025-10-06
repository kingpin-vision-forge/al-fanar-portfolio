"use client";
import { mediaFeatures } from "@/lib/content";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MediaShowcaseProps = {
  className?: string;
};

export default function MediaShowcase({ className }: MediaShowcaseProps) {
  return (
    <section
      id="media"
      aria-labelledby="media-heading"
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white/75 px-6 py-28",
        "shadow-[0_40px_140px_-80px_rgba(18,18,18,0.4)] backdrop-blur-sm",
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

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="mb-4 text-center">
          <span className="text-[11px] uppercase tracking-[0.45em] text-[#2c2b2b]">
            Media & Gallery
          </span>
          <h2
            id="media-heading"
            className="serif text-4xl font-semibold text-[#1b1b1b] md:text-5xl mt-4"
          >
            Press spotlights on our maison moments
          </h2>
        <p className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-[#4a4a4a]">
          From architectural unveilings to artisan collaborations, discover the
          narratives defining the Alfanar Enterprises world across luxury media.
        </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {mediaFeatures.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="group rounded-[32px] border border-[color:var(--brand-line)]/70 bg-white/85 shadow-[0_20px_60px_rgba(22,22,22,0.09)] backdrop-blur"
            >
              <div
                className="h-56 w-full rounded-t-[32px] bg-[#eae2d6] transition duration-[1200ms] group-hover:scale-[1.01]"
              style={{
                backgroundImage: `url(${feature.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="space-y-4 p-7 text-center">
              <h3 className="serif text-xl font-semibold text-[#1b1b1b]">
                  {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#4b4b4b]">
                {feature.excerpt}
              </p>
              <motion.span
                aria-hidden="true"
                className="inline-flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.4em] text-[#1b1b1b]"
                whileHover={{ x: 6 }}
              >
                View feature →
              </motion.span>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
}
