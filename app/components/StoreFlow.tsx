"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FlowingMenu from "@/app/components/reactbits/FlowingMenu";
import { stores } from "@/lib/content";

const flowingMenuItems = stores.map((store) => ({
  link: store.galleryHref,
  text: store.name.replace("Alfanar Enterprises — ", ""),
  image: store.image,
}));

export default function StoreFlow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStore = stores[activeIndex];

  return (
    <section
      id="stores"
      className="border-b border-[color:var(--navy-300)]/30 bg-gradient-to-b from-white via-[#f4f6ff] to-[var(--navy-300)]/10"
      aria-labelledby="stores-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col gap-5 pb-14 text-[color:var(--ink)]">
          <span className="text-[10px] font-semibold uppercase tracking-[0.48em] text-[color:var(--navy-700)]">
            Our Stores
          </span>
          <h2
            id="stores-heading"
            className="text-4xl font-black uppercase leading-tight md:text-5xl"
          >
            Flagship addresses engineered for energy
          </h2>
          <p className="max-w-2xl text-sm font-medium leading-relaxed text-[color:var(--ink)]/75">
            Glide through each destination via our flowing carousel; hover or
            focus on a location to reveal concierge details, timings and links.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div className="relative h-[560px] overflow-hidden rounded-[36px] border border-white/12 bg-gradient-to-b from-[var(--navy-900)] to-[var(--navy)] shadow-[0_30px_80px_rgba(5,12,70,0.5)]">
            <FlowingMenu
              items={flowingMenuItems}
              onActive={(index) => setActiveIndex(index)}
              activeIndex={activeIndex}
            />
          </div>

          <motion.div
            key={activeStore.slug}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex h-full flex-col justify-between rounded-[32px] border border-[color:var(--navy-300)]/35 bg-white/95 p-10 text-[color:var(--ink)] shadow-[0_24px_70px_rgba(8,16,80,0.12)] backdrop-blur"
          >
            <div className="space-y-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[color:var(--navy-700)]/70">
                {activeStore.city}, {activeStore.state}
              </p>
              <h3 className="text-3xl font-black uppercase text-[color:var(--ink)]">
                {activeStore.name}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--ink)]/75">
                {activeStore.address}
              </p>
              <p className="text-sm leading-relaxed text-[color:var(--ink)]/75">
                {activeStore.blurb}
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-[24px] border border-[color:var(--navy-300)]/35 bg-gradient-to-b from-white to-[var(--navy-300)]/12 p-5 text-sm text-[color:var(--ink)]/80">
                <p className="text-lg font-black uppercase text-[color:var(--ink)]">Timings</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-[color:var(--navy-700)]/70">
                  {activeStore.timings}
                </p>
              </div>

              <div className="grid gap-3 text-sm">
                <Link
                  href={activeStore.galleryHref}
                  className="flex items-center justify-between rounded-full border border-transparent bg-gradient-to-r from-[var(--navy)] to-[var(--navy-700)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-[color:var(--cream)] transition hover:shadow-[0_20px_55px_rgba(12,40,180,0.35)]"
                >
                  View gallery
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href={activeStore.mapHref}
                  className="flex items-center justify-between rounded-full border border-[color:var(--navy-300)]/45 bg-white/80 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-[color:var(--navy-900)] transition hover:border-[color:var(--navy)] hover:text-[color:var(--navy)]"
                >
                  Open map
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>

              <div className="rounded-[24px] border border-[color:var(--navy-300)]/35 bg-gradient-to-b from-white to-[var(--navy-300)]/12 p-5 text-sm text-[color:var(--ink)]/80">
                <p className="text-lg font-black uppercase text-[color:var(--ink)]">
                  Contact concierge
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.4em] text-[color:var(--navy-700)]/70">
                  {activeStore.contact.phone} • {activeStore.contact.email}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
