import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { FloraMark } from "./Logo";
import { CONTENT } from "@/content";

const LAYOUT = [
  { span: "col-span-12 md:col-span-7", ratio: "aspect-[4/5] md:aspect-[7/8]" },
  { span: "col-span-12 md:col-span-5", ratio: "aspect-[3/4] md:aspect-[5/8]" },
  { span: "col-span-12 md:col-span-5", ratio: "aspect-[3/4] md:aspect-[5/7]" },
  { span: "col-span-12 md:col-span-7", ratio: "aspect-[4/5] md:aspect-[7/6]" },
];

const shots = CONTENT.gallery.map((g, i) => ({ ...g, ...LAYOUT[i % LAYOUT.length] }));

export const Gallery = () => {
  const [open, setOpen] = useState(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir) => setOpen((o) => (o === null ? o : (o + dir + shots.length) % shots.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  return (
    <section
      id="portfolio"
      data-testid="gallery-section"
      className="py-32 md:py-48"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex items-end justify-between mb-20">
            <h2 className="font-serif-ed font-light text-4xl md:text-6xl tracking-tight flex items-center gap-4">
              Portfolio <FloraMark className="w-8 h-8 text-[#A9967A]" />
            </h2>
            <span className="label-ed text-[#5C5F5A] hidden md:block">
              Selected editorials — tap to view
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
          {shots.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className={s.span}>
              <figure className="group" data-testid={`gallery-item-${i + 1}`}>
                <button
                  type="button"
                  data-testid={`gallery-open-${i + 1}`}
                  onClick={() => setOpen(i)}
                  aria-label={`View ${s.label} full screen`}
                  className={`block w-full ${s.ratio} overflow-hidden border border-[#A9967A]/40 cursor-pointer`}
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </button>
                <figcaption className="flex items-center justify-between mt-4">
                  <span className="font-serif-ed italic text-xl text-[#1C1E1B]">
                    {s.label}
                  </span>
                  <span className="label-ed text-[#5C5F5A]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            data-testid="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={close}
            className="fixed inset-0 z-[200] bg-[#1C1E1B]/95 backdrop-blur-md flex items-center justify-center p-6 md:p-16"
          >
            <button
              type="button"
              data-testid="lightbox-close-button"
              aria-label="Close viewer"
              onClick={close}
              className="absolute top-6 right-6 md:top-10 md:right-12 text-[#F9F6F0] hover:text-[#A9967A] transition-colors duration-300"
            >
              <X className="w-7 h-7" strokeWidth={1} />
            </button>
            <button
              type="button"
              data-testid="lightbox-prev-button"
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-[#F9F6F0] hover:text-[#A9967A] transition-colors duration-300"
            >
              <ChevronLeft className="w-9 h-9" strokeWidth={1} />
            </button>
            <button
              type="button"
              data-testid="lightbox-next-button"
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); step(1); }}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-[#F9F6F0] hover:text-[#A9967A] transition-colors duration-300"
            >
              <ChevronRight className="w-9 h-9" strokeWidth={1} />
            </button>
            <motion.figure
              key={open}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <img
                src={shots[open].src}
                alt={shots[open].alt}
                data-testid="lightbox-image"
                className="w-full max-h-[72vh] object-contain border border-[#A9967A]/40"
              />
              <figcaption className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mt-6">
                <div>
                  <div
                    data-testid="lightbox-caption-title"
                    className="font-serif-ed italic text-2xl md:text-3xl text-[#F9F6F0]"
                  >
                    {shots[open].label}
                  </div>
                  <div className="text-sm font-light text-[#F9F6F0]/70 mt-2">
                    {shots[open].caption}
                  </div>
                </div>
                <span className="label-ed text-[#A9967A]">
                  {String(open + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
