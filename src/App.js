import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Toaster } from "sonner";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Digitals } from "@/components/Digitals";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  const onAnchor = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el && lenisRef.current) {
      lenisRef.current.scrollTo(el, { duration: 1.4 });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#1C1E1B] relative">
      <div className="noise-overlay" aria-hidden="true" />
      <Toaster position="bottom-right" />
      <Nav onAnchor={onAnchor} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Digitals />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
