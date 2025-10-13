"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { UserRound } from "lucide-react";
import { brand } from "@/lib/content";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Trendy", href: "#trendy-men" },
  { label: "Modesty", href: "#modesty-women" },
  { label: "Colours", href: "#colours-kids" }
];

export default function Navbar({
  logoMounted,
  visible = true,
}: {
  logoMounted: boolean;
  visible?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    // Close the mobile drawer when the layout changes or on escape for accessibility.
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-opacity duration-500 ease-out",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!visible}
    >
      <div className="border-b border-[color:var(--brand-line)]/60 bg-white/85 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-6 md:gap-8">
          <motion.div
            layoutId="alfanarenterprises-logo"
            className="relative flex items-center md:flex-1"
          >
            <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
              <motion.div
                initial={false}
                animate={{ opacity: logoMounted ? 1 : 0, y: logoMounted ? 0 : -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex items-center"
              >
                <Image
                  src="/brand/alfanar-logo.svg"
                  alt={`${brand.name} logo`}
                  width={160}
                  height={40}
                  priority
                  sizes="(max-width: 768px) 120px, 160px"
                  className="h-8 w-auto md:h-10"
                />
              </motion.div>
              <span className="sr-only">{brand.name}</span>
            </Link>
          </motion.div>

          <nav className="hidden md:flex md:flex-1 md:justify-center md:gap-10 items-center text-[11px] uppercase tracking-[0.35em] text-[#2c2b2b]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-[#1b1b1b]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-end md:flex md:flex-1">
            <div className="inline-flex items-stretch overflow-hidden rounded-full border border-[color:var(--brand-line)]/70 bg-white/90 text-[11px] uppercase tracking-[0.35em] shadow-[0_18px_40px_rgba(18,18,18,0.08)]">
              <Link
                href="/login-signup?mode=login"
                className="flex items-center gap-2 px-4 py-2 text-[#2c2b2b] transition hover:text-[#1b1b1b]"
              >
                <UserRound className="h-4 w-4" />
                <span>Login</span>
              </Link>
              <span className="my-1 w-px bg-[color:var(--brand-line)]/50" />
              <Link
                href="/login-signup?mode=join"
                className="flex items-center gap-2 bg-[#1b1b1b] px-5 py-2 text-white transition hover:bg-[#121212]"
              >
                <span>Join</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--brand-line)] text-[#1b1b1b] transition hover:border-[#1b1b1b] md:hidden"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span
              className={`block h-0.5 w-5 transform rounded-full bg-current transition duration-300 ${
                menuOpen ? "translate-y-1.5 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`mt-1 block h-0.5 w-5 transform rounded-full bg-current transition duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`mt-1 block h-0.5 w-5 transform rounded-full bg-current transition duration-300 ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-b border-[color:var(--brand-line)]/60 bg-white/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur md:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-6 text-sm uppercase tracking-[0.35em] text-[#1b1b1b]">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              ))}
              <div className="rounded-3xl border border-[color:var(--brand-line)]/70 bg-white/85 p-5 text-center text-[11px] tracking-[0.3em] text-[#2c2b2b] shadow-[0_18px_40px_rgba(18,18,18,0.08)]">
                <div className="mb-3 flex justify-center text-[#1b1b1b]">
                  <UserRound className="h-5 w-5" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#6b6b6b]">
                  Member access
                </p>
                <div className="mt-4 flex gap-3">
                  <Link
                    href="/login-signup?mode=login"
                    className="flex-1 rounded-full border border-[color:var(--brand-line)]/60 px-3 py-2 text-[#1b1b1b] transition hover:border-[#1b1b1b]"
                    onClick={closeMenu}
                  >
                    Login
                  </Link>
                  <Link
                    href="/login-signup?mode=join"
                    className="flex-1 rounded-full bg-[#1b1b1b] px-3 py-2 text-white transition hover:bg-[#121212]"
                    onClick={closeMenu}
                  >
                    Join
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
