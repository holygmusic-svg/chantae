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
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full">
      
      {/* --- LEFT TEXT PANEL --- */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center text-left relative z-10">
        <Reveal>
          <span className="label-ed text-[#A9967A] flex items-center gap-3">
            <FloraMark className="w-4 h-4" /> The Story
          </span>
        </Reveal>
        
        <div className="w-full max-w-xl mt-6">
          <h2 className="font-serif-ed font-light text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] leading-[1.05] tracking-tight text-[#1C1E1B] uppercase whitespace-normal break-words block">
            A muse grown <em className="italic text-[#A9967A]">wild</em>,
            <br />
            framed in <em className="italic">stillness</em>.
          </h2>
        </div>

        {/* FIX: Added absolute percentage capping and right-side padding boundary constraints */}
        <div className="mt-8 w-full max-w-lg lg:w-[90%] xl:w-[85%] pr-4 sm:pr-6 lg:pr-8 block z-20">
          <Reveal delay={0.2}>
            <div>
              {CONTENT.about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-sm sm:text-base md:text-lg font-light leading-relaxed text-[#5C5F5A] break-words whitespace-normal ${i > 0 ? "mt-5" : ""}`}
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* --- RIGHT PHOTO PANEL --- */}
      <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative mt-6 lg:mt-0">
        <Reveal delay={0.25} y={30}>
          <div className="relative w-full max-w-md">
            
            <div className="w-full h-auto overflow-hidden border border-[#A9967A]/30 rounded-sm bg-black/5 flex items-center justify-center">
              <img
                src={ABOUT_IMG}
                alt={`${CONTENT.name} — portrait structure`}
                data-testid="about-portrait-image"
                className="w-full h-auto max-h-[50vh] lg:max-h-[65vh] object-contain object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            
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
