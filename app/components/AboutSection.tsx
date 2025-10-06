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
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden border-y border-[color:var(--brand-line)] bg-gradient-to-b from-white/85 via-white/65 to-white/80 px-6 py-32",
        "shadow-[0_55px_160px_-90px_rgba(21,21,21,0.45)] backdrop-blur",
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

      <div className="mx-auto w-full max-w-6xl px-2 text-[#1b1b1b]">
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.45em] text-[#2d3748]">
            About Alfanar Enterprises
          </span>
          <h2
            id="about-heading"
            className="serif text-5xl font-semibold text-[#1b1b1b] md:text-6xl mt-4"
          >
            {aboutCopy.heading}
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[#2d3748]">
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
                  className="rounded-[28px] border border-[color:var(--brand-line)] bg-white/80 p-7 shadow-[0_20px_60px_rgba(25,25,25,0.08)] backdrop-blur"
                >
                  <h3 className="serif text-xl font-semibold text-[#1b1b1b]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#2d3748]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div className="rounded-[32px] border border-[color:var(--brand-line)] bg-white/85 p-10 shadow-[0_26px_70px_rgba(20,20,20,0.07)]">
              <p className="text-[11px] uppercase tracking-[0.45em] text-[#2d3748]">
                Philosophy
              </p>
              <p className="serif mt-5 text-2xl font-semibold leading-[1.4] text-[#1b1b1b]">
                {brand.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-5">
              {aboutCopy.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-[color:var(--brand-line)] bg-white/80 py-8 text-center shadow-[0_18px_55px_rgba(22,22,22,0.07)]"
                >
                  <p className="serif text-3xl font-semibold text-[#1b1b1b]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.45em] text-[#7a7a7a]">
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
