import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskedLine } from "./Reveal";
import { FloraMark } from "./Logo";
import { CONTENT } from "@/content";

// Swapping the Pexels link with your new modeling photo asset path
const HERO_IMG = "assets/hero-image.jpg";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-24 md:pt-32 bg-[#F9F6F0]"
    >
      {/* Container switches from stacked vertically on mobile to a multi-column setup on larger displays */}
      <div className="relative max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-12 flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center flex-1">
        
        {/* LEFT PANEL: NAME AND INTRO TEXT */}
        <motion.div style={{ y: textY }} className="col-span-12 lg:col-span-7 relative z-10 w-full text-left">
          <MaskedLine delay={0.35}>
            <span className="label-ed text-[#A9967A] flex items-center gap-3">
              <FloraMark className="w-4 h-4" /> {CONTENT.brand} — {CONTENT.est}
            </span>
          </MaskedLine>
          
          {/* Constrained typography containers to prevent collisions */}
          <h1 className="font-serif-ed font-light uppercase leading-[0.95] tracking-tight mt-6 max-w-full">
            <MaskedLine delay={0.5} className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] block break-words">
              {CONTENT.nameLine1}
            </MaskedLine>
            <MaskedLine delay={0.65} className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] italic text-[#A9967A] block break-words mt-1">
              {CONTENT.nameLine2}
            </MaskedLine>
          </h1>
          
          <MaskedLine delay={0.9} className="mt-8 max-w-md">
            <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-[#5C5F5A]">
              {CONTENT.heroIntro}
            </p>
          </MaskedLine>
        </motion.div>

        {/* RIGHT PANEL: PORTFOLIO PHOTO */}
        <div className="col-span-12 lg:col-span-5 relative w-full mt-6 lg:mt-0 flex justify-center lg:justify-end">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md lg:max-w-full overflow-hidden border border-[#A9967A]/40 rounded-sm bg-black/5"
            data-testid="hero-portrait-frame"
          >
            {/* Using object-contain and setting height auto preserves your horizontal portrait outline perfectly */}
            <motion.img
              src={HERO_IMG}
              alt={`${CONTENT.name} — editorial portrait`}
              data-testid="hero-portrait-image"
              style={{ y: imgY, scale: 1.05 }}
              className="w-full h-auto max-h-[60vh] lg:max-h-[70vh] object-contain object-center will-change-transform"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="hidden xl:flex absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 origin-center label-ed text-[#5C5F5A] whitespace-nowrap"
          >
            {CONTENT.tagline} — Editorial
          </motion.div>
        </div>
      </div>

      {/* FOOTER SCROLL DECORATION LINKS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 1 }}
        className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-12 pb-8 flex items-end justify-between mt-auto"
      >
        <span className="label-ed text-[#5C5F5A] text-xs tracking-wider" data-testid="hero-scroll-hint">
          Scroll to explore ↓
        </span>
        <span className="label-ed text-[#5C5F5A] text-xs tracking-wider hidden sm:block">
          {CONTENT.cities}
        </span>
      </motion.div>
    </section>
  );
};
