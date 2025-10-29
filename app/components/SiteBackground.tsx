"use client";
import dynamic from "next/dynamic";
import GradualBlur from "@/components/GradualBlur";
import { useEffect, useState } from "react";

const Silk = dynamic(() => import("@/app/components/reactbits/SilkBg"), {
  ssr: false,
});

export default function SiteBackground() {
  const [blurOpacity, setBlurOpacity] = useState(0.85);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = Math.min(scrollTop / docHeight, 1);
      setBlurOpacity(0.85 * (1 - scrollFraction));
    };

    const handleMenuToggle = (event: CustomEvent) => {
      setMenuOpen(event.detail);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("menuToggle", handleMenuToggle as EventListener);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("menuToggle", handleMenuToggle as EventListener);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-50 opacity-80">
        <Silk speed={5.2} scale={1.08} color="#dce2ff" noiseIntensity={0.9} rotation={0.28} />
      </div>
      <GradualBlur
        target="page"
        position="bottom"
        height="12rem"
        strength={3.2}
        divCount={8}
        curve="bezier"
        opacity={menuOpen ? 0 : blurOpacity}
        className="pointer-events-none md:opacity-100"
      />
    </>
  );
}
