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
            An organic <strong><em className="italic text-[#A9967A]">muse</em></strong>,
            <br />
            timelessly <strong><em className="italic">framed</em></strong>...
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 max-w-xl">
          <p className="text-base md:text-lg font-light leading-relaxed text-[#5C5F5A]">
            Chantae Sierra possesses a <strong><em className="italic">rare, luminous presence</em></strong>--the kind of <strong><em className="italic">quiet elegance</em></strong> that commands attention the moment that she enters a space. Flowing with an <strong><em className="italic">effortless grace</em></strong>, she carries a <strong><em className="italic">radiant warmth</em></strong> and a <strong><em className="italic">brilliant unforgettable smile</em></strong> that instantly elevates the energy of any room. A true embodiment of <strong><em className="italic">celestial beauty and modern sophistication</em></strong>, her captivating energy brings an <strong><em className="italic">undeniable, glowing vitality</em></strong> to every frame.
          </p>
          <p className="text-base md:text-lg font-light leading-relaxed text-[#5C5F5A] mt-6">
            Represented across Paris, Milan, New York, and Miami, she collaborates with photographers, producers, stylists and maisons who believe an image or work of art should only be <strong><em className="italic">Timeless</em></strong>.
          </p>
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
