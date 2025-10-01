"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { brand } from "@/lib/content";

const navItems = [
  { label: "Men", href: "#mens" },
  { label: "Women", href: "#womens" },
  { label: "Children", href: "#children" },
  { label: "About", href: "#about" },
  { label: "Media", href: "#media" },
  { label: "Stores", href: "#stores" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ logoMounted }: { logoMounted: boolean }) {
  return (
    <div className="sticky top-0 z-40 border-b border-[color:var(--brand-line)] bg-[#f6f1e8]/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <motion.div layoutId="alfanarenterprises-logo" className="relative">
          <motion.span
            initial={false}
            animate={{ opacity: logoMounted ? 1 : 0, y: logoMounted ? 0 : -6 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="serif block text-[30px] font-semibold tracking-[0.32em] text-[#1b1b1b] md:text-2xl md:tracking-[0.28em]"
          >
            {brand.name}
          </motion.span>
        </motion.div>

        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.4em] text-[#7a7a7a] md:flex">
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

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login-signup"
            className="rounded-full border border-[color:var(--brand-line)] px-5 py-2 text-[11px] uppercase tracking-[0.4em] text-[#1b1b1b] transition hover:border-[#1b1b1b]"
          >
            Login/Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
