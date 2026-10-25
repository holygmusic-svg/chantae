import { Reveal } from "./Reveal";
import { FloraMark } from "./Logo";

const experience = [
  "LUXE Brand International Miami Spring Preview Show at The LAB Miami (Wynwood)",
  "Melanin Day Art Basel Week Showcase at Arthood56 Gallery",
  "Art of Healing Community Center Fundraiser at Mosaic Miami",
  "Small Business Fashion Week Show Atlanta",
  "Haute Headz Salon Fashion for Cure",
  "Narcissus Fashion Show at Honey Lake Plantation Resort and Spa",
];

const training = [
  {
    school: "Marsha Doll Models",
    details: "Tallahassee, FL — Modeling & On-Camera Training",
    skills: [
      "Runway technique and posture",
      "Camera presence and posing",
      "Audition etiquette and commercial acting",
    ],
  },
  {
    school: "John Casablancas Centers",
    details: "JCVT Course of Instruction Program",
    period: "October 2026–Present",
    skills: [
      "Camera technique",
      "Performance presentation",
      "Industry auditioning standards",
      "Commercial acting",
      "On-camera presence",
      "Cold reading",
      "Monologue delivery",
    ],
  },
];

const Bullet = ({ children }) => (
  <li className="flex gap-3 items-start">
    <span aria-hidden="true" className="shrink-0 mt-[0.68em] h-1.5 w-1.5 rounded-full bg-[#A9967A]" />
    <span>{children}</span>
  </li>
);

export const Resume = () => (
  <section
    id="resume"
    data-testid="resume-section"
    className="scroll-mt-28 border-t border-[#A9967A]/25 py-20 md:py-28"
  >
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <span className="label-ed text-[#A9967A] flex items-center gap-3 mb-6">
              <FloraMark className="w-4 h-4" /> On Stage &amp; On Camera
            </span>
            <h2 className="font-serif-ed font-light text-5xl md:text-6xl tracking-tight">
              Resume
            </h2>
          </div>
          <span className="label-ed text-[#5C5F5A]">Experience &amp; Training</span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        <Reveal delay={0.1}>
          <div className="border-t border-[#A9967A]/50 pt-6">
            <h3 className="label-ed text-[#1C1E1B] mb-8">Experience</h3>
            <ul className="space-y-6 text-base md:text-lg leading-relaxed font-light text-[#5C5F5A]">
              {experience.map((entry) => (
                <Bullet key={entry}>{entry}</Bullet>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="border-t border-[#A9967A]/50 pt-6">
            <h3 className="label-ed text-[#1C1E1B] mb-8">Training</h3>
            <div className="space-y-10">
              {training.map((program) => (
                <div key={program.school}>
                  <div className="flex items-start gap-3">
                    <span aria-hidden="true" className="shrink-0 mt-[0.65em] h-1.5 w-1.5 rounded-full bg-[#A9967A]" />
                    <div>
                      <h4 className="text-lg md:text-xl font-medium text-[#1C1E1B]">{program.school}</h4>
                      <p className="text-base font-light text-[#5C5F5A] mt-1">{program.details}</p>
                      {program.period && (
                        <p className="label-ed text-[#A9967A] mt-2">{program.period}</p>
                      )}
                    </div>
                  </div>
                  <ul className="mt-4 ml-5 pl-4 border-l border-[#A9967A]/30 space-y-2 text-sm md:text-base leading-relaxed font-light text-[#5C5F5A]">
                    {program.skills.map((skill) => (
                      <Bullet key={skill}>{skill}</Bullet>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
