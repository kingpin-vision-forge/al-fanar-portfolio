"use client";
import Link from "next/link";
import { contactChannels } from "@/lib/content";
import { cn } from "@/lib/utils";
import { defaultEase } from "@/lib/motion";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

type ContactStripProps = {
  className?: string;
};

export default function ContactStrip({ className }: ContactStripProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: defaultEase },
      },
    }),
    [],
  );

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#f4f6ff] to-[var(--navy-300)]/10 px-6 py-28",
        "border-b border-[color:var(--navy-300)]/30",
        className,
      )}
      ref={sectionRef}
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
        className="flex w-full max-w-6xl flex-col gap-12 rounded-[36px] border border-[color:var(--navy-300)]/35 bg-white/95 px-8 py-16 text-center text-[color:var(--ink)] shadow-[0_32px_80px_rgba(8,16,80,0.15)] backdrop-blur-lg md:flex-row md:items-center md:justify-between md:px-12 md:py-20 md:text-left"
        initial={{ opacity: 0.75, scale: 0.98, y: 40 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0.75, scale: 0.98, y: 40 }}
        transition={{ duration: 0.65, ease: defaultEase }}
      >
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, ease: defaultEase, delay: 0.1 }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.48em] text-[color:var(--navy-700)]">
            Contact
          </span>
          <h2 id="contact-heading" className="text-4xl font-black uppercase leading-tight md:text-5xl">
            Concierge for every wardrobe play
          </h2>
        </motion.div>
        <motion.div
          className="grid justify-center gap-5 md:grid-cols-4 md:justify-start"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.18 } },
          }}
        >
          {contactChannels.map((channel) => (
            <motion.div key={channel.value} variants={cardVariants} className="h-full">
              <Link
                href={channel.href}
                className="flex h-full flex-col justify-between rounded-[28px] border border-[color:var(--navy-300)]/35 bg-gradient-to-b from-white to-[var(--navy-300)]/12 px-6 py-5 text-center text-sm text-[color:var(--ink)] shadow-[0_18px_55px_rgba(8,16,80,0.15)] transition hover:-translate-y-1 hover:border-[color:var(--navy)] hover:text-[color:var(--navy)] md:text-left"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[color:var(--navy-700)]/70">
                  {channel.label}
                </p>
                <p className="mt-3 text-sm font-semibold break-words text-[color:var(--ink)]">
                  {channel.value}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
