"use client";
import Link from "next/link";
import { contactChannels } from "@/lib/content";

export default function ContactStrip() {
  return (
    <section
      id="contact"
      className="border-t border-[color:var(--brand-line)] bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <span className="text-[11px] uppercase tracking-[0.45em] text-[#7c7c7c]">
            Contact
          </span>
          <h2 id="contact-heading" className="serif text-3xl font-semibold text-[#1b1b1b]">
            Concierge for every wardrobe question
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {contactChannels.map((channel) => (
            <Link
              key={channel.value}
              href={channel.href}
              className="rounded-[28px] border border-[color:var(--brand-line)] px-6 py-5 text-left text-sm text-[#4a4a4a] transition hover:border-[#1b1b1b] hover:bg-[#1b1b1b] hover:text-white"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-current/70">
                {channel.label}
              </p>
              <p className="mt-3 text-sm font-medium">{channel.value}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
