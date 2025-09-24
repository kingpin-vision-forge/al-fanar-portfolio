'use client';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { CONFIG } from '@/lib/config';
import { Container } from './Container';
import { Search, User, ShoppingBag, Menu, X } from '@/components/icons';
import { useCart } from '@/store/cart';
import { CartDrawer } from './CartDrawer';
import { track } from '@/lib/analytics';

export function Navbar() {
  const { open, toggle } = useCart();
  const [mobile, setMobile] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 8);
  });

  const navClasses = scrolled
    ? 'supports-[backdrop-filter]:bg-white/75 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/90 shadow-sm'
    : 'bg-transparent';

  return (
    <motion.header className="fixed inset-x-0 top-0 z-40" layout>
      <div className={`transition-colors duration-300 backdrop-blur border-b border-neutral-200/60 dark:border-neutral-800/60 ${navClasses}`}>
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight focus-visible:outline-none" aria-label="Alfanar Fashion home">
              <motion.span layoutId="brand-logo">{CONFIG.brand}</motion.span>
            </Link>

            <nav className="hidden md:flex gap-6" aria-label="Primary">
              {CONFIG.brandsNav.map((b) => (
                <Link
                  key={b}
                  href={`/${b.toLowerCase()}`}
                  className="text-sm font-medium transition-opacity hover:opacity-80 focus-visible:underline"
                  onClick={() => track('click_nav_tab', { tab: b })}
                >
                  {b}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                aria-label="Search"
                className="rounded-full p-2 transition hover:bg-neutral-100 focus-visible:ring"
                onClick={() => track('click_search')}
              >
                <Search size={20} />
              </button>
              <button
                aria-label="Account"
                className="rounded-full p-2 transition hover:bg-neutral-100 focus-visible:ring"
              >
                <User size={20} />
              </button>
              <button
                aria-label="Cart"
                className="rounded-full p-2 transition hover:bg-neutral-100 focus-visible:ring"
                onClick={() => toggle(true)}
              >
                <ShoppingBag size={20} />
              </button>
              <button
                className="rounded-full p-2 transition hover:bg-neutral-100 focus-visible:ring md:hidden"
                aria-expanded={mobile}
                aria-label="Menu"
                onClick={() => {
                  setMobile((m) => !m);
                  track('toggle_mobile_nav', { open: !mobile });
                }}
              >
                {mobile ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {mobile && (
            <div className="md:hidden pb-4 space-y-2" aria-label="Mobile navigation">
              {CONFIG.brandsNav.map((b) => (
                <Link
                  key={b}
                  href={`/${b.toLowerCase()}`}
                  className="block rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-visible:outline focus-visible:ring"
                  onClick={() => {
                    setMobile(false);
                    track('click_nav_tab', { tab: b, device: 'mobile' });
                  }}
                >
                  {b}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-2 text-sm opacity-75">
                <Link href={CONFIG.legal.privacy}>Privacy</Link>
                <Link href={CONFIG.legal.terms}>Terms</Link>
                <Link href="#contact">Contact</Link>
                <Link href="#newsletter">Newsletter</Link>
              </div>
            </div>
          )}
        </Container>
      </div>
      <CartDrawer open={open} onClose={() => toggle(false)} />
    </motion.header>
  );
}
