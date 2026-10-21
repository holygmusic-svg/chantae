import { Reveal } from "./Reveal";
import { FloraMark } from "./Logo";
import { CONTENT } from "@/content";

// Swapping the Unsplash source path with your clean modeling image URL
const ABOUT_IMG = "https://squarespace-cdn.com";

export const About = () => (
  <section
    id="story"
    data-testid="about-section"
    className="relative py-24 md:py-36 bg-[#F9F6F0] overflow-hidden"
  >
    {/* Layout container updates to clear overlapping negative translations */}
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      
      {/* LEFT CONTENT COLUMN (Clean text wrapping margins) */}
      <div className="col-span-12 lg:col-span-7 relative z-10 w-full text-left">
        <Reveal>
          <span className="label-ed text-[#A9967A] flex items-center gap-3">
            <FloraMark className="w-4 h-4" /> The Story
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif-ed font-light text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mt-6">
            A muse grown <em className="italic text-[#A9967A]">wild</em>,
            <br />
            framed in <em className="italic">stillness</em>.
          </h2>
        </Reveal>
        {/* Removed lg:ml-24 to stop the text box from running rightwards */}
        <Reveal delay={0.2} className="mt-8 max-w-xl">
          {CONTENT.about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-base font-light leading-relaxed text-[#5C5F5A] ${i > 0 ? "mt-5" : ""}`}
            >
              {p}
            </p>
          ))}
        </Reveal>
      </div>

      {/* RIGHT CONTENT COLUMN (Image frame stays safely inside its column bounds) */}
      <div className="col-span-12 lg:col-span-5 w-full mt-8 lg:mt-0">
        <Reveal delay={0.25} y={50}>
          <div className="relative w-full max-w-md mx-auto lg:ml-auto">
            {/* Removed the negative translate class and shifted to h-auto / contain to fit the horizontal portrait */}
            <div className="w-full h-auto overflow-hidden border border-[#A9967A]/30 rounded-sm bg-black/5">
              <img
                src={ABOUT_IMG}
                alt={`${CONTENT.name} — portrait details`}
                data-testid="about-portrait-image"
                className="w-full h-auto max-h-[55vh] object-contain object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* Overlay stats tag repositioned safely below the fluid frame */}
            <div className="absolute -bottom-4 right-4 bg-[#F9F6F0] border border-[#A9967A]/30 px-5 py-3 shadow-xs">
              <span className="label-ed text-xs text-[#5C5F5A] tracking-wider">{CONTENT.about.stat}</span>
            </div>
          </div>
        </Reveal>
      </div>

    </div>
  </section>
);
