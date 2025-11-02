"use client";

import { ReactNode, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Lenis from "lenis";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number>(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (lenisRef.current) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      normalizeWheel: true,
      gestureOrientation: "vertical",
    });

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;

    const handleResize = () => {
      lenis.resize();
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) return;
    // snap back to top when navigation changes
    lenisRef.current.scrollTo(0, { immediate: true });
  }, [pathname, searchParams]);

  return <>{children}</>;
}
