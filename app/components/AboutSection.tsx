"use client";
import { aboutCopy, brand } from "@/lib/content";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AboutSectionProps = {
  className?: string;
};

export default function AboutSection({ className }: AboutSectionProps) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#f4f6ff] to-[var(--navy-300)]/10 px-6 py-32",
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

      <div className="mx-auto w-full max-w-6xl px-2 text-[color:var(--ink)]">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.48em] text-[color:var(--navy-700)]">
            About Alfanar
          </span>
          <h2
            id="about-heading"
            className="mt-4 text-5xl font-black uppercase leading-tight md:text-6xl"
          >
            {aboutCopy.heading}
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base font-medium leading-relaxed text-[color:var(--ink)]/80">
            {aboutCopy.intro}
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="flex flex-col gap-7">
            <div className="space-y-6">
              {aboutCopy.highlights.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-[28px] border border-[color:var(--navy-300)]/35 bg-white/95 p-7 text-left text-[color:var(--ink)] shadow-[0_24px_70px_rgba(8,16,80,0.12)] backdrop-blur-lg"
                >
                  <h3 className="text-xl font-black uppercase tracking-[0.25em] text-[color:var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]/75">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div className="rounded-[32px] border border-[color:var(--navy-300)]/35 bg-white/95 p-10 text-left text-[color:var(--ink)] shadow-[0_26px_70px_rgba(8,16,80,0.12)] backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[color:var(--navy-700)]">
                Philosophy
              </p>
              <p className="serif mt-5 text-2xl font-semibold leading-[1.4] text-[color:var(--ink)]">
                {brand.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {aboutCopy.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-[color:var(--navy-300)]/35 bg-gradient-to-b from-white to-[var(--navy-300)]/12 py-8 text-center text-[color:var(--ink)] shadow-[0_18px_55px_rgba(8,16,80,0.12)]"
                >
                  <p className="text-3xl font-black uppercase text-[color:var(--ink)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.45em] text-[color:var(--navy-700)]/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
