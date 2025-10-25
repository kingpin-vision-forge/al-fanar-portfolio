"use client";
import Link from "next/link";
import { contactChannels } from "@/lib/content";
import { cn } from "@/lib/utils";

type ContactStripProps = {
  className?: string;
};

export default function ContactStrip({ className }: ContactStripProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden border-y border-[color:var(--brand-line)] bg-gradient-to-b from-white/50 via-white/30 to-white/45 px-6 py-28",
        "shadow-[0_45px_140px_-80px_rgba(20,20,20,0.4)] backdrop-blur-lg",
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

      <div className="flex w-full max-w-6xl flex-col gap-12 rounded-[36px] border border-[color:var(--brand-line)]/70 bg-white/90 px-8 py-16 shadow-[0_32px_70px_rgba(18,18,18,0.09)] backdrop-blur-lg md:px-12 md:py-20 md:flex-row md:items-center md:justify-between text-center md:text-left">
        <div className="space-y-4 text-[#1a1a1a]">
          <span className="text-[11px] uppercase tracking-[0.45em] text-[#2c2b2b]">
            Contact
          </span>
          <h2 id="contact-heading" className="serif text-4xl font-semibold">
            Concierge for every wardrobe question
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-4 justify-center md:justify-start">
          {contactChannels.map((channel) => (
            <Link
              key={channel.value}
              href={channel.href}
              className="rounded-[28px] border border-[color:var(--brand-line)]/60 bg-gradient-to-b from-[#f9d6d6] to-[#ede7e0] px-6 py-5 text-center md:text-left text-sm text-[#2c2b2b] shadow-[0_18px_55px_rgba(20,20,20,0.1)] transition hover:-translate-y-1 hover:border-[color:var(--brand-line)] hover:text-black"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-current/70">
                {channel.label}
              </p>
              <p className="mt-3 text-sm font-medium break-words">{channel.value}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
