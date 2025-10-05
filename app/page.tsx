"use client";
import { useState } from "react";
import LoadingGate from "@/app/components/LoadingGate";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import CategoryGrid from "@/app/components/CategoryGrid";
import AboutSection from "@/app/components/AboutSection";
import MediaShowcase from "@/app/components/MediaShowcase";
import StoreFlow from "@/app/components/StoreFlow";
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
      <main className="w-full max-w-7xl mx-auto px-4">
        <FadeInOnScroll>
          <Hero />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <CategoryGrid />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <AboutSection />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <MediaShowcase />
        </FadeInOnScroll>
        {/* <StoreFlow /> */}
        <FadeInOnScroll>
          <ContactStrip />
        </FadeInOnScroll>
      </main>
      <Footer />
    </>
  );
}
