"use client";
import { useState } from "react";
import LoadingGate from "@/app/components/LoadingGate";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import CategoryGrid from "@/app/components/CategoryGrid";
import AboutSection from "@/app/components/AboutSection";
import MediaShowcase from "@/app/components/MediaShowcase";
import ContactStrip from "@/app/components/ContactStrip";
import Footer from "@/app/components/Footer";
import FadeInOnScroll from "@/app/components/FadeInOnScroll";

export default function LandingPage() {
  const [gateDone, setGateDone] = useState(false);
  const [logoMounted, setLogoMounted] = useState(false);

  return (
    <>
      {!gateDone && (
        <LoadingGate
          onDone={() => setGateDone(true)}
          setLogoMounted={setLogoMounted}
        />
      )}
      <Navbar logoMounted={logoMounted} visible={gateDone} />
      <main className="relative flex w-full flex-col overflow-hidden">
        <FadeInOnScroll className="h-full w-full" offset={42} duration={1.05} parallax={false}>
          <Hero />
        </FadeInOnScroll>
        <FadeInOnScroll className="h-full w-full" offset={96} delay={0.08}>
          <CategoryGrid />
        </FadeInOnScroll>
        <FadeInOnScroll className="h-full w-full" offset={84} delay={0.12}>
          <AboutSection />
        </FadeInOnScroll>
        <FadeInOnScroll className="h-full w-full" offset={84} delay={0.14}>
          <MediaShowcase />
        </FadeInOnScroll>
        {/* <StoreFlow /> */}
        <FadeInOnScroll className="h-full w-full" offset={84} delay={0.16}>
          <ContactStrip />
        </FadeInOnScroll>
      </main>
      <Footer />
    </>
  );
}
