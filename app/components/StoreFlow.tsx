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
      className="border-t border-[color:var(--brand-line)] bg-[#f2ece1]"
      aria-labelledby="stores-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col gap-5 pb-14">
          <span className="text-[11px] uppercase tracking-[0.45em] text-[#7d7d7d]">
            Our Stores
          </span>
          <h2
            id="stores-heading"
            className="serif text-4xl font-semibold text-[#1b1b1b] md:text-5xl"
          >
            Flagship addresses curated as maison experiences
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-[#4a4a4a]">
            Glide through each destination via our flowing carousel; hover or
            focus on a location to reveal concierge details, timings and links.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div className="relative h-[560px] overflow-hidden rounded-[36px] border border-[color:var(--brand-line)] bg-[#060010] shadow-[0_30px_60px_rgba(24,22,32,0.28)]">
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
            className="flex h-full flex-col justify-between rounded-[32px] border border-[color:var(--brand-line)] bg-white/80 p-10 shadow-[0_20px_50px_rgba(20,20,20,0.08)] backdrop-blur"
          >
            <div className="space-y-5">
              <p className="text-[10px] uppercase tracking-[0.45em] text-[#7d7d7d]">
                {activeStore.city}, {activeStore.state}
              </p>
              <h3 className="serif text-3xl font-semibold text-[#1b1b1b]">
                {activeStore.name}
              </h3>
              <p className="text-sm leading-relaxed text-[#4a4a4a]">
                {activeStore.address}
              </p>
              <p className="text-sm leading-relaxed text-[#4a4a4a]">
                {activeStore.blurb}
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-[24px] border border-[color:var(--brand-line)] bg-white/70 p-5 text-sm text-[#4a4a4a]">
                <p className="serif text-lg font-semibold text-[#1b1b1b]">Timings</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-[#7f7f7f]">
                  {activeStore.timings}
                </p>
              </div>

              <div className="grid gap-3 text-sm">
                <Link
                  href={activeStore.galleryHref}
                  className="flex items-center justify-between rounded-full border border-[#1b1b1b] px-5 py-3 text-[11px] uppercase tracking-[0.4em] text-[#1b1b1b] transition hover:bg-[#1b1b1b] hover:text-white"
                >
                  View gallery
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href={activeStore.mapHref}
                  className="flex items-center justify-between rounded-full border border-transparent bg-[#1b1b1b]/5 px-5 py-3 text-[11px] uppercase tracking-[0.4em] text-[#1b1b1b] transition hover:bg-[#1b1b1b] hover:text-white"
                >
                  Open map
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>

              <div className="rounded-[24px] border border-[color:var(--brand-line)] bg-white/70 p-5 text-sm text-[#4a4a4a]">
                <p className="serif text-lg font-semibold text-[#1b1b1b]">
                  Contact concierge
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.4em] text-[#7f7f7f]">
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
