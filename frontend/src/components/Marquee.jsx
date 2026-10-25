import MarqueeLib from "react-fast-marquee";
import { FloraMark } from "./Logo";

const items = [
  "Editorial",
  "Runway",
  "Campaign",
  "Beauty",
  "Film",
  "Muse",
  "Print",
];

export const Marquee = () => (
  <div
    data-testid="editorial-marquee"
    className="border-y border-[#A9967A]/40 py-6 md:py-8 overflow-hidden bg-[#EBE6DF]/60"
  >
    <MarqueeLib speed={28} gradient={false} pauseOnHover>
      {items.map((word) => (
        <span key={word} className="flex items-center">
          <span className="font-serif-ed italic font-light text-4xl md:text-6xl text-[#1C1E1B] mx-8 md:mx-14">
            {word}
          </span>
          <FloraMark className="w-5 h-5 md:w-7 md:h-7 text-[#A9967A]" />
        </span>
      ))}
    </MarqueeLib>
  </div>
);
