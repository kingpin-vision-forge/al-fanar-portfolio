"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { UserRound } from "lucide-react";
import { brand } from "@/lib/content";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "OUR BRANDS", href: "#brands" },
  { label: "GALLERY", href: "#gallery" },
  { label: "MEDIA", href: "#media" },
  { label: "CONTACT", href: "#contact" },
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

  const handleSmoothScroll = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

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

  useEffect(() => {
    // Dispatch custom event to notify SiteBackground about menu state
    window.dispatchEvent(new CustomEvent("menuToggle", { detail: menuOpen }));
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-opacity duration-500 ease-out",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!visible}
    >
      <div className="border-b border-white/10 bg-gradient-to-b from-[var(--navy-900)] to-[var(--navy)] text-[color:var(--cream)] shadow-[0_28px_90px_rgba(5,12,70,0.45)]">
        <div className="mx-auto flex h-20 w-full items-center justify-between gap-3 px-4 md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6 md:px-[10%]">
          <motion.div layoutId="alfanarenterprises-logo" className="relative flex items-center md:justify-self-start">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <motion.div
                initial={false}
                animate={{ opacity: logoMounted ? 1 : 0, y: logoMounted ? 0 : -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex items-center"
              >
                <Image
                  src="/brand/upscaled-alfanar.png"
                  alt={`${brand.name} logo`}
                  width={150}
                  height={42}
                  priority
                  sizes="(max-width: 768px) 120px, 150px"
                  className="h-8 w-auto md:h-10"
                />
              </motion.div>
              <span className="sr-only">{brand.name}</span>
            </Link>
          </motion.div>

          <nav className="hidden items-center text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--cream)]/75 transition md:col-start-2 md:flex md:justify-center md:gap-6">
            {navItems.map((item) => {
              const isHashLink = item.href.startsWith("#");
              if (isHashLink) {
                return (
                  <button
                    key={item.href}
                    onClick={() => handleSmoothScroll(item.href)}
                    className="transition hover:text-[color:var(--cream)]"
                  >
                    {item.label}
                  </button>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-[color:var(--cream)]"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center md:flex md:justify-self-end">
            <Link
              href="/login-signup"
              className="ml-auto inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--cream)] shadow-[0_20px_55px_rgba(12,40,180,0.32)] transition hover:border-white hover:text-[color:var(--cream)] hover:shadow-[0_26px_70px_rgba(12,40,180,0.45)] backdrop-blur whitespace-nowrap"
            >
              <UserRound className="h-4 w-4" />
              Login / Sign Up
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[color:var(--cream)] transition hover:border-white/40 md:hidden"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <div className="flex flex-col items-center justify-center space-y-1">
              <span
                className={`block h-0.5 w-5 transform rounded-full bg-current transition duration-300 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 transform rounded-full bg-current transition duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-5 transform rounded-full bg-current transition duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-30 bg-[color:var(--navy-900)]/85 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 z-40 h-full w-4/5 max-w-sm bg-gradient-to-b from-[var(--navy-900)] to-[var(--navy)] text-[color:var(--cream)] shadow-[0_40px_90px_rgba(5,12,70,0.45)] md:hidden"
            >
              <div className="relative flex h-full flex-col px-6 py-8">
                <button
                  type="button"
                  className="absolute top-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[color:var(--cream)] transition hover:border-white/40"
                  onClick={closeMenu}
                  aria-label="Close navigation"
                >
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <span className="block h-0.5 w-5 transform rounded-full bg-current rotate-45 translate-y-1.5" />
                    <span className="block h-0.5 w-5 transform rounded-full bg-current opacity-0" />
                    <span className="block h-0.5 w-5 transform rounded-full bg-current -rotate-45 -translate-y-1.5" />
                  </div>
                </button>
                <nav className="mt-16 flex flex-col gap-6 text-lg uppercase tracking-[0.3em] text-[color:var(--cream)]/80">
                  {navItems.map((item) => {
                    const isHashLink = item.href.startsWith("#");
                    if (isHashLink) {
                      return (
                        <button
                          key={item.href}
                          onClick={() => handleSmoothScroll(item.href)}
                          className="transition hover:text-[color:var(--navy-300)]"
                        >
                          {item.label}
                        </button>
                      );
                    }
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="transition hover:text-[color:var(--navy-300)]"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="mt-auto rounded-3xl border border-white/15 bg-white/10 p-6 text-center text-[11px] tracking-[0.3em] text-[color:var(--cream)]/80 shadow-[0_24px_60px_rgba(5,12,70,0.5)] backdrop-blur">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-[color:var(--slate)]">
                    Member access
                  </p>
                  <Link
                    href="/login-signup"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-3 text-[color:var(--cream)] transition hover:border-white hover:text-[color:var(--navy-300)] whitespace-nowrap"
                    onClick={closeMenu}
                  >
                    <UserRound className="h-4 w-4" />
                    Login / Sign Up
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
