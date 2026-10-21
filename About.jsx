import { Reveal } from "./Reveal";
import { FloraMark } from "./Logo";
import { CONTENT } from "@/content";

const ABOUT_IMG = "https://squarespace-cdn.com";

export const About = () => (
  <section
    id="story"
    data-testid="about-section"
    className="relative py-16 md:py-28 bg-[#F9F6F0] w-full overflow-hidden"
  >
    {/* Swapped standard grid to a responsive Flex-Row with explicit tablet breaks to stop overlapping */}
    <div className="max-w-[1340px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 w-full">
      
      {/* --- LEFT TEXT PANEL (Forced to take up 55% space on desktop, 100% on mobile) --- */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center text-left relative z-10">
        <Reveal>
          <span className="label-ed text-[#A9967A] flex items-center gap-3">
            <FloraMark className="w-4 h-4" /> The Story
          </span>
        </Reveal>
        
        {/* Dynamic header scaling locks typography inside the left viewport zone */}
        <div className="w-full max-w-2xl mt-6">
          <h2 className="font-serif-ed font-light text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[5rem] leading-[1.05] tracking-tight text-[#1C1E1B] uppercase whitespace-normal break-words block">
            A muse grown <em className="italic text-[#A9967A]">wild</em>,
            <br />
            framed in <em className="italic">stillness</em>.
          </h2>
        </div>

        {/* Text paragraph wrappers safely constrained below the header layout */}
        <div className="mt-8 max-w-xl w-full">
          {CONTENT.about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-sm sm:text-base md:text-lg font-light leading-relaxed text-[#5C5F5A] ${i > 0 ? "mt-5" : ""}`}
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* --- RIGHT PHOTO PANEL (Forced to take up 40% space on desktop, 100% on mobile) --- */}
      <div className="w-full lg:w-[40%] flex justify-center lg:justify-end relative mt-6 lg:mt-0">
        <Reveal delay={0.25} y={30}>
          <div className="relative w-full max-w-md sm:max-w-sm lg:max-w-full">
            
            {/* Aspect box container prevents graphic clipping regardless of screen stretching */}
            <div className="w-full h-auto overflow-hidden border border-[#A9967A]/30 rounded-sm bg-black/5 flex items-center justify-center">
              <img
                src={ABOUT_IMG}
                alt={`${CONTENT.name} — portrait structure`}
                data-testid="about-portrait-image"
                className="w-full h-auto max-h-[50vh] lg:max-h-[65vh] object-contain object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* The stat metadata tag anchors safely under the picture boundary */}
            <div className="absolute -bottom-4 right-4 bg-[#F9F6F0] border border-[#A9967A]/30 px-5 py-2.5 shadow-sm z-20">
              <span className="label-ed text-xs tracking-wider text-[#5C5F5A]">
                {CONTENT.about.stat}
              </span>
            </div>

          </div>
        </Reveal>
      </div>

    </div>
  </section>
);
