import { Instagram, Music2 } from "lucide-react";
import { FloraMark } from "./Logo";
import { CONTENT } from "@/content";

export const Footer = () => (
  <footer
    data-testid="site-footer"
    className="border-t border-[#A9967A]/40 py-16"
  >
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
      <div>
        <div className="flex items-center gap-3">
          <FloraMark className="w-7 h-7 text-[#1C1E1B]" />
          <span className="font-serif-ed text-2xl tracking-[0.12em] uppercase">
            {CONTENT.name}
          </span>
        </div>
        <p className="label-ed text-[#5C5F5A] mt-4">
          {CONTENT.brand} — {CONTENT.tagline}
        </p>
      </div>
      <div className="flex items-center gap-8">
        <a
          href={CONTENT.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="footer-instagram-link"
          className="flex items-center gap-2 label-ed text-[#5C5F5A] hover:text-[#1C1E1B] transition-colors duration-300"
        >
          <Instagram className="w-4 h-4" /> Instagram
        </a>
        <a
          href={CONTENT.socials.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="footer-tiktok-link"
          className="flex items-center gap-2 label-ed text-[#5C5F5A] hover:text-[#1C1E1B] transition-colors duration-300"
        >
          <Music2 className="w-4 h-4" /> TikTok
        </a>
      </div>
      <span className="label-ed text-[#5C5F5A]">
        © MMXXVI {CONTENT.brand}. All rights reserved.
      </span>
    </div>
  </footer>
);
