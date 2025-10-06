import { heroBanners } from "@/lib/content";
import Link from "next/link";
import { cn } from "@/lib/utils";

type HeroProps = {
  className?: string;
};

export default function Hero({ className }: HeroProps) {
  return (
    <section
      id="top"
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white/80 px-6 py-28",
        "shadow-[0_35px_120px_-60px_rgba(17,17,17,0.25)] backdrop-blur-sm",
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

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 text-center">
        <span className="text-sm uppercase tracking-[0.45em] text-[#2d3748]">
          Our Collections
        </span>
        <h2 className="serif text-5xl font-semibold text-[#1b1b1b] md:text-6xl">
          Discover Alfanar Enterprises
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#4a4a4a]">
          Explore our tailored universes crafted with couture precision for every family member.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-5xl gap-8 md:grid-cols-3">
        {heroBanners.map(({ headline, sub, cta }) => (
          <div key={headline} className="space-y-3 rounded-[32px] border border-[color:var(--brand-line)]/60 bg-white/80 p-8 text-center shadow-[0_18px_60px_rgba(15,15,15,0.05)]">
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
