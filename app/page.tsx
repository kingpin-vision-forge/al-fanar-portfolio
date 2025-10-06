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
      <Navbar logoMounted={logoMounted} />
      <main className="relative flex w-full flex-col overflow-hidden">
        <FadeInOnScroll className="h-full w-full">
          <Hero />
        </FadeInOnScroll>
        <FadeInOnScroll className="h-full w-full">
          <CategoryGrid />
        </FadeInOnScroll>
        <FadeInOnScroll className="h-full w-full">
          <AboutSection />
        </FadeInOnScroll>
        <FadeInOnScroll className="h-full w-full">
          <MediaShowcase />
        </FadeInOnScroll>
        {/* <StoreFlow /> */}
        <FadeInOnScroll className="h-full w-full">
          <ContactStrip />
        </FadeInOnScroll>
      </main>
      <Footer />
    </>
  );
}
