import { Reveal } from "./Reveal";
import { CONTENT } from "@/content";

export const Testimonials = () => (
  <section
    id="words"
    data-testid="testimonials-section"
    className="py-12 md:py-16 bg-[#1C1E1B] text-[#F9F6F0]"
  >
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <Reveal>
        <span className="label-ed text-[#A9967A]">Words from the field</span>
      </Reveal>
      <div className="mt-7 md:mt-9 grid grid-cols-12 gap-6 md:gap-7">
        {CONTENT.testimonials.map((q, i) => (
          <Reveal
            key={i}
            delay={i * 0.12}
            className="col-span-12 md:col-span-4"
          >
            <blockquote
              data-testid={`testimonial-${i + 1}`}
              className="border-t border-[#A9967A]/25 pt-4 md:pt-5 h-full flex flex-col"
            >
              <p className="font-serif-ed italic font-light text-xl md:text-2xl leading-snug flex-1">
                “{q.text}”
              </p>
              <cite className="label-ed text-[#A9967A] not-italic mt-4 md:mt-5 block">
                {q.source}
              </cite>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
