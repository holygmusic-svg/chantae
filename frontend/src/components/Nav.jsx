import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FloraMark } from "./Logo";
import { CONTENT } from "@/content";

const links = [
  { label: "Story", href: "#story" },
  { label: "Resume", href: "#resume" },
  { label: "Digitals", href: "#digitals" },
  { label: "Zcard", href: "/Chantae_Sierra_ZCard_Download.pdf", pdf: true },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Words", href: "#words" },
];

export const Nav = ({ onAnchor }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="site-nav"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        scrolled
          ? "bg-[#F9F6F0]/70 backdrop-blur-xl border-b border-[#A9967A]/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-12 py-5">
        <a
          href="#top"
          data-testid="nav-logo-link"
          onClick={(e) => onAnchor(e, "#top")}
          className="flex shrink-0 items-center gap-3 group"
        >
          <FloraMark className="w-6 h-6 text-[#1C1E1B] transition-transform duration-500 group-hover:rotate-90" />
          <span className="font-serif-ed text-base 2xl:text-lg tracking-[0.13em] uppercase whitespace-nowrap">
            {CONTENT.name}
          </span>
        </a>
        <nav className="hidden xl:flex items-center gap-3 2xl:gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              onClick={l.pdf ? undefined : (e) => onAnchor(e, l.href)}
              target={l.pdf ? "_blank" : undefined}
              rel={l.pdf ? "noopener noreferrer" : undefined}
              className="label-ed !tracking-[0.14em] whitespace-nowrap text-[#5C5F5A] hover:text-[#1C1E1B] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid="nav-booking-button"
            onClick={(e) => onAnchor(e, "#contact")}
            className="label-ed !tracking-[0.14em] whitespace-nowrap border border-[#1C1E1B] px-5 py-2.5 rounded-full hover:bg-[#1C1E1B] hover:text-[#F9F6F0] transition-colors duration-300"
          >
            Booking
          </a>
        </nav>
        <div className="xl:hidden flex items-center gap-3">
          <a
            href="#contact"
            data-testid="nav-booking-button-mobile"
            onClick={(e) => { setMobileMenuOpen(false); onAnchor(e, "#contact"); }}
            className="label-ed border border-[#1C1E1B] px-4 py-2 rounded-full"
          >
            Booking
          </a>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="p-2 text-[#1C1E1B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Site sections"
          className="xl:hidden absolute top-full left-0 right-0 border-t border-b border-[#A9967A]/30 bg-[#F9F6F0]/95 backdrop-blur-xl px-6 md:px-12 py-5 grid grid-cols-2 gap-x-5 gap-y-5"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (!l.pdf) onAnchor(e, l.href);
              }}
              target={l.pdf ? "_blank" : undefined}
              rel={l.pdf ? "noopener noreferrer" : undefined}
              className="label-ed text-[#5C5F5A] hover:text-[#1C1E1B] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </motion.header>
  );
};
