import { Reveal } from "./Reveal";
import { FloraMark } from "./Logo";
import { CONTENT } from "@/content";

const ABOUT_IMG = "https://squarespace-cdn.com";

export const About = () => (
  <section
    id="story"
    data-testid="about-section"
    className="relative py-20 md:py-32 bg-[#F9F6F0] w-full overflow-hidden"
  >
    {/* Clean 12-column grid splitting the layout in half at large screen sizes */}
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-8 lg:gap-12 items-center w-full">
      
      {/* --- LEFT COLUMN: TYPOGRAPHY (Takes up exactly half the screen width on desktop) --- */}
      <div className="col-span-12 lg:col-span-6 flex flex-col justify-center text-left relative z-10 w-full">
        <Reveal>
          <span className="label-ed text-[#A9967A] flex items-center gap-3">
            <FloraMark className="w-4 h-4" /> The Story
          </span>
        </Reveal>
        
        <div className="w-full mt-6">
          <h2 className="font-serif-ed font-light text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.5rem] leading-[1.1] tracking-tight text-[#1C1E1B] uppercase whitespace-normal break-words block">
            A muse grown <em className="italic text-[#A9967A]">wild</em>,
            <br />
            framed in <em className="italic">stillness</em>.
          </h2>
        </div>

        {/* Text paragraph wrappers safely locked inside the 50% left boundary */}
        <div className="mt-8 w-full max-w-xl">
          <Reveal delay={0.2}>
            <div className="space-y-5">
              {CONTENT.about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-[#5C5F5A]"
  style={{ maxWidth: "85%", pr: "2rem", display: "block" }}
>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* --- RIGHT COLUMN: IMAGE (Takes up exactly half the screen width on desktop) --- */}
      <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end relative mt-8 lg:mt-0 w-full">
        <Reveal delay={0.25} y={30}>
          <div className="relative w-full max-w-md lg:max-w-full">
            
            {/* Removed lg:translate-y-16 and lg:-translate-x-10 to stop the image from jumping into the text */}
            <div className="w-full h-auto overflow-hidden border border-[#A9967A]/30 rounded-sm bg-black/5 flex items-center justify-center">
              <img
                src={ABOUT_IMG}
                alt={`${CONTENT.name} — portrait structure`}
                data-testid="about-portrait-image"
                className="w-full h-auto max-h-[55vh] lg:max-h-[65vh] object-contain object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* Metadata layout tag attached neatly onto the bottom boundary edge */}
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
