import { Reveal } from "./Reveal";
import { FloraMark } from "./Logo";
import { CONTENT } from "@/content";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3OTI0NTcwMjJ8MA&ixlib=rb-4.1.0&q=85";

export const About = () => (
  <section
    id="story"
    data-testid="about-section"
    className="relative py-32 md:py-48"
  >
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-7 relative z-10">
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
        <Reveal delay={0.2} className="mt-12 max-w-lg lg:ml-24">
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

      <div className="col-span-12 lg:col-span-5 mt-16 lg:mt-0">
        <Reveal delay={0.25} y={50}>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden border border-[#A9967A]/40 lg:translate-y-16 lg:-translate-x-10">
              <img
                src={ABOUT_IMG}
                alt={`${CONTENT.name} — portrait in a structured coat`}
                data-testid="about-portrait-image"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 lg:right-6 bg-[#F9F6F0] border border-[#A9967A]/40 px-6 py-4">
              <span className="label-ed text-[#5C5F5A]">{CONTENT.about.stat}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
