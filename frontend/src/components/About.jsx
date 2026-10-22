import { Reveal } from "./Reveal";
import { FloraMark } from "./Logo";
import { CONTENT } from "@/content";

const ABOUT_IMG = "/images/chantae/story.jpg";

export const About = () => (
  <section
    id="story"
    data-testid="about-section"
    className="relative py-24 md:py-36 scroll-mt-28"
  >
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      <div className="min-w-0 relative z-10">
        <Reveal>
          <span className="label-ed text-[#A9967A] flex items-center gap-3">
            <FloraMark className="w-4 h-4" /> The Story
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif-ed font-light text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mt-8">
            A muse grown <em className="italic text-[#A9967A]">wild</em>,
            <br />
            framed in <em className="italic">stillness</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 max-w-xl">
          {CONTENT.about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-base md:text-lg font-light leading-relaxed text-[#5C5F5A] ${i > 0 ? "mt-6" : ""}`}
            >
              {p}
            </p>
          ))}
        </Reveal>
      </div>

      <div className="min-w-0 mt-10 lg:mt-0">
        <Reveal delay={0.25} y={50}>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden border border-[#A9967A]/40 bg-[#EEEAE4]">
              <img
                src={ABOUT_IMG}
                alt={`${CONTENT.name} — portrait in a structured coat`}
                data-testid="about-portrait-image"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 bg-[#F9F6F0] border border-[#A9967A]/40 px-6 py-4">
              <span className="label-ed text-[#5C5F5A]">{CONTENT.about.stat}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
