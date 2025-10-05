"use client";
import Link from "next/link";
import { contactChannels } from "@/lib/content";

export default function ContactStrip() {
  return (
    <section
      id="contact"
      className="border-t border-[color:var(--brand-line)] bg-transparent"
      aria-labelledby="contact-heading"
    >
      <div className="flex flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between text-white">
        <div className="space-y-3">
          <span className="text-[11px] uppercase tracking-[0.45em] text-[#2c2b2b]">
            Contact
          </span>
          <h2 id="contact-heading" className="serif text-3xl font-semibold text-[#1a1a1a]">
            Concierge for every wardrobe question
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {contactChannels.map((channel) => (
            <Link
              key={channel.value}
              href={channel.href}
className="rounded-[28px] border border-white/20 px-6 py-5 text-left text-sm text-[#2c2b2b] transition hover:border-white hover:bg-white hover:text-black break-words shadow-lg hover:shadow-xl bg-gradient-to-b from-[#f9d6d6] to-[#ede7e0]"
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
