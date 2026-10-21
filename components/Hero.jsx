import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F6F4EE] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 overflow-hidden">
      
      {/* LEFT COLUMN: BRAND TEXT */}
      <div className="flex flex-col z-10 max-w-full md:max-w-[50%] box-border">
        {/* Decorative Top Subtitle */}
        <span className="text-xs md:text-sm tracking-[0.3em] text-[#9A9386] uppercase font-light mb-4 block">
          ✧ ETHEREAL FLORA — EST. MMXIX
        </span>
        
        {/* Main Name Heading */}
        <h1 className="font-serif leading-[0.9] text-[#1E1E1E] uppercase tracking-tight mb-6 select-none overflow-wrap-break-word max-w-full"
            style={{ fontSize: 'clamp(3rem, 10vw, 7.5rem)' }}>
          Chantae<br />
          <span className="text-[#9A8973]">Sierra</span>
        </h1>
        
        {/* Bio Copy */}
        <p className="text-sm md:text-base text-[#5C574F] font-light max-w-md leading-relaxed tracking-wide mb-8">
          Beauty & fashion model. A wildflower muse moving between editorial stillness and runway motion — available for select campaigns worldwide.
        </p>

        {/* Scroll Indicator Alignment */}
        <span className="text-[10px] tracking-[0.2em] text-[#9A9386] uppercase font-light mt-auto hidden md:block">
          SCROLL TO EXPLORE ↓
        </span>
      </div>

      {/* RIGHT COLUMN: HERO PORTRAIT FRAME */}
      <div className="w-full md:w-[45%] mt-8 md:mt-0 flex justify-center items-center relative box-border">
        {/* Responsive container box holding the background layout */}
        <div className="w-full max-w-[450px] aspect-[11/14] relative overflow-hidden bg-zinc-200/50 shadow-sm rounded-sm">
          
          {/* BULLETPROOF VITE PUBLIC IMAGE INJECTION */}
          <img 
            src={`${window.location.origin}/chantaeclose14x11.jpg`} 
            alt="Chantae Sierra - editorial portrait" 
            className="w-full h-full object-cover object-center block relative z-10"
            onError={(e) => {
              // Fallback backup path if your repository folder has case-sensitivity overrides
              e.target.src = "/chantaeclose14x11.jpg";
            }}
          />

          {/* Vertical Editorial Label */}
          <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 rotate-90 origin-center hidden md:block whitespace-nowrap z-20">
            <p className="text-[10px] tracking-[0.4em] text-[#9A9386] uppercase font-light">
              BEAUTY & FASHION MODEL — EDITORIAL
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Location Footer Footer */}
      <div className="absolute bottom-6 right-12 hidden md:flex gap-6 text-[10px] tracking-[0.2em] text-[#9A9386] uppercase font-light">
        <span>PARIS</span>
        <span>•</span>
        <span>MILAN</span>
        <span>•</span>
        <span>NEW YORK</span>
      </div>

    </section>
  );
};

export default Hero;
