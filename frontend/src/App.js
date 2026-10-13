import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProductSection } from "@/components/ProductSection";
import { Featured } from "@/components/Featured";
import { StylingIdeas } from "@/components/StylingIdeas";
import { ShopByRoom } from "@/components/ShopByRoom";
import { OurStory } from "@/components/OurStory";
import { Reviews } from "@/components/Reviews";
import { FaqEnquiry } from "@/components/FaqEnquiry";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { pots, vases, wallArt, decorObjects } from "@/data/products";

function App() {
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
          id="pots"
          eyebrow="Priority One — Pots & Planters"
          title="Shop Pots & Planters"
          copy="Hand-cast cement pots, textured planters and sculptural floor pieces — the heart of Avora Homes."
          products={pots}
        />
        <ProductSection
          id="vases"
          eyebrow="Discover Our Vases"
          title="Vases That Hold a Room"
          copy="Sculptural ceramics, ribbed vessels and statement amphorae — find your perfect vase."
          products={vases}
          tone="cream"
        />
        <Featured />
        <StylingIdeas />
        <ProductSection
          id="wall-art"
          eyebrow="Handmade Paintings"
          title="Wall Art & Paintings"
          copy="Original textured canvases and framed artwork that complement cement and clay."
          products={wallArt}
          tone="cream"
          columns="sm:grid-cols-2"
        />
        <ProductSection
          id="decor"
          eyebrow="Table Decor"
          title="Decorative Objects"
          copy="Handcrafted tabletop accents — brass bowls and statement pieces to finish the scene."
          products={decorObjects}
          columns="sm:grid-cols-2 lg:grid-cols-3"
        />
        <ShopByRoom />
        <OurStory />
        <Reviews />
        <FaqEnquiry />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
