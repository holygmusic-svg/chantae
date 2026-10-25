import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskedLine } from "./Reveal";
import { FloraMark } from "./Logo";
import { CONTENT } from "@/content";

const HERO_IMG = "/images/chantae/hero-smile.jpg";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-28 md:pt-32"
    >
      <div className="relative max-w-[1600px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center flex-1">
        <motion.div style={{ y: textY }} className="min-w-0 relative z-10">
          <MaskedLine delay={0.35}>
            <span className="label-ed text-[#A9967A] flex items-center gap-3">
              <FloraMark className="w-4 h-4" /> {CONTENT.brand} — {CONTENT.est}
            </span>
          </MaskedLine>
          <h1 className="font-serif-ed font-light uppercase leading-[0.9] tracking-tighter mt-8">
            <MaskedLine delay={0.5} className="text-[13vw] lg:text-[clamp(4rem,6.4vw,7.25rem)]">
              {CONTENT.nameLine1}
            </MaskedLine>
            <MaskedLine delay={0.65} className="text-[13vw] lg:text-[clamp(4rem,6.4vw,7.25rem)] italic text-[#A9967A]">
              {CONTENT.nameLine2}
            </MaskedLine>
          </h1>
          <MaskedLine delay={0.9} className="mt-10 max-w-md">
            <p className="text-base md:text-lg font-light leading-relaxed text-[#5C5F5A]">
              {CONTENT.heroIntro}
            </p>
          </MaskedLine>
        </motion.div>

        <div className="min-w-0 relative mt-12 lg:mt-0">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] max-w-md mx-auto lg:ml-auto overflow-hidden border border-[#A9967A]/40"
            data-testid="hero-portrait-frame"
          >
            <motion.img
              src={HERO_IMG}
              alt={`${CONTENT.name} — editorial portrait`}
              data-testid="hero-portrait-image"
              style={{ y: imgY }}
              className="w-full h-full object-contain bg-[#EEEAE4] will-change-transform"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 origin-center label-ed text-[#5C5F5A] whitespace-nowrap"
          >
            {CONTENT.tagline} — Editorial
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 1 }}
        className="max-w-[1600px] mx-auto w-full px-6 md:px-12 pb-10 flex items-end justify-between"
      >
        <span className="label-ed text-[#5C5F5A]" data-testid="hero-scroll-hint">
          Scroll to explore ↓
        </span>
        <span className="label-ed text-[#5C5F5A] hidden sm:block">
          {CONTENT.cities}
        </span>
      </motion.div>
    </section>
  );
};
