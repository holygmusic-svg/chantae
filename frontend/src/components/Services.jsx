import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import { CONTENT } from "@/content";

export const Services = () => (
  <section
    id="services"
    data-testid="services-section"
    className="py-12 md:py-16 bg-[#EBE6DF]/50"
  >
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <Reveal>
        <div className="flex items-end justify-between mb-7 md:mb-9">
          <h2 className="font-serif-ed font-light text-4xl md:text-6xl tracking-tight">
            Services
          </h2>
          <span className="label-ed text-[#5C5F5A] hidden md:block">
            Available worldwide
          </span>
        </div>
      </Reveal>
      <div>
        {CONTENT.services.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div
              data-testid={`service-item-${s.n}`}
              className="group grid grid-cols-12 gap-4 items-baseline border-t border-[#A9967A]/25 py-5 md:py-6 hover:bg-[#F9F6F0] transition-colors duration-500 px-2 md:px-4"
            >
              <span className="col-span-2 md:col-span-1 font-serif-ed italic text-xl md:text-2xl text-[#A9967A]">
                {s.n}
              </span>
              <h3 className="col-span-10 md:col-span-4 font-serif-ed font-light text-xl md:text-3xl tracking-tight">
                {s.title}
              </h3>
              <p className="col-span-10 col-start-3 md:col-span-6 md:col-start-6 text-sm md:text-base font-light leading-relaxed text-[#5C5F5A]">
                {s.desc}
              </p>
              <ArrowUpRight className="hidden md:block col-span-1 justify-self-end w-5 h-5 text-[#A9967A] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-[opacity,transform] duration-500" />
            </div>
          </Reveal>
        ))}
        <div className="border-t border-[#A9967A]/25" />
      </div>
    </div>
  </section>
);
