import { Reveal } from "./Reveal";
import { CONTENT } from "@/content";

export const Digitals = () => (
  <section
    id="digitals"
    data-testid="digitals-section"
    className="py-24 md:py-32 border-y border-[#A9967A]/40"
  >
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="font-serif-ed font-light text-4xl md:text-6xl tracking-tight">
            Digitals
          </h2>
          <span className="label-ed text-[#5C5F5A]">
            Stats for agencies &amp; casting — unretouched polaroids on request
          </span>
        </div>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 border-t border-l border-[#A9967A]/40">
        {CONTENT.digitals.map((d, i) => (
          <Reveal key={d.label} delay={i * 0.05} y={20}>
            <div
              data-testid={`digitals-stat-${d.label.toLowerCase()}`}
              className="border-r border-b border-[#A9967A]/40 px-5 py-8 h-full hover:bg-[#EBE6DF]/60 transition-colors duration-500"
            >
              <div className="font-serif-ed font-light text-2xl md:text-[1.7rem] leading-tight">
                {d.value}
              </div>
              <div className="label-ed text-[#5C5F5A] mt-3">{d.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
