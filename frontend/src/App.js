import { useEffect, useState } from "react";
import Lenis from "lenis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProductSection } from "@/components/ProductSection";
import { Ingredients } from "@/components/Ingredients";
import { Benefits } from "@/components/Benefits";
import { HowToUse } from "@/components/HowToUse";
import { OurStory } from "@/components/OurStory";
import { Reviews } from "@/components/Reviews";
import { FaqEnquiry } from "@/components/FaqEnquiry";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import AdminPage from "@/pages/AdminPage";
import { packs } from "@/data/products";

const Storefront = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      anchors: { offset: -88 },
    });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-sand font-sans text-ink antialiased">
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ProductSection
          id="packs"
          eyebrow="Shop PachAmrit"
          title="Choose Your Pack"
          copy="Start with the 50g trial pouch, stock up on the 100g jar, or grab the combo and save — every order is packed fresh and shipped within 24 hours."
          products={packs}
          columns="sm:grid-cols-2 lg:grid-cols-3"
        />
        <Ingredients />
        <Benefits />
        <HowToUse />
        <OurStory />
        <Reviews />
        <FaqEnquiry />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" richColors />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Storefront />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
