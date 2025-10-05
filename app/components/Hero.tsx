import { heroBanners } from "@/lib/content";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-24" id="top">
      <div className="flex flex-col gap-5 pb-20 text-center">
        <span className="text-sm uppercase tracking-[0.45em] text-[#2d3748]">
          Our Collections
        </span>
        <h2 className="serif text-5xl font-semibold text-[#1b1b1b] md:text-6xl">
          Discover Alfanar Enterprises
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-[#4a4a4a] mx-auto">
          Explore our tailored universes crafted with couture precision for every family member.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {heroBanners.map(({ headline, sub, cta }) => (
          <div key={headline} className="space-y-2 text-center">
            <h3 className="serif text-3xl font-semibold text-[#1b1b1b]">{headline}</h3>
            <p className="text-base leading-relaxed text-[#4c4c4c]">{sub}</p>
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center gap-3 text-sm uppercase tracking-[0.4em] text-[#1b1b1b] transition hover:text-black"
            >
              {cta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
