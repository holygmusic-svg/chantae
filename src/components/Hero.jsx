import React from 'react';
import heroImage from '../../public/chantaeclose14x11.jpg'; 

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 overflow-hidden">
      
      {/* LEFT COLUMN: BRAND TEXT */}
      <div className="flex flex-col z-10 max-w-full md:max-w-[50%] box-border">
        {/* Decorative Top Subtitle */}
        <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase font-light mb-4 block">
          ✧ ETHEREAL FLORA — EST. MMXIX
        </span>
        
        {/* Main Name Heading - Dynamic Fluid Typography */}
        <h1 className="font-serif leading-[0.9] text-gray-900 uppercase tracking-tight mb-6 select-none overflow-wrap-break-word max-w-full"
            style={{ fontSize: 'clamp(3rem, 10vw, 7.5rem)' }}>
          Chantae<br />
          <span className="text-gray-800">Sierra</span>
        </h1>
        
        {/* Bio Copy */}
        <p className="text-sm md:text-base text-gray-600 font-light max-w-md leading-relaxed tracking-wide">
          Beauty & fashion model. A wildflower muse moving between editorial stillness and runway motion — available for select campaigns worldwide.
        </p>
      </div>

      {/* RIGHT COLUMN: HERO PORTRAIT FRAME */}
      <div className="w-full md:w-[45%] mt-8 md:mt-0 flex justify-center items-center relative box-border">
        <div className="w-full max-w-[500px] aspect-[11/14] relative overflow-hidden bg-gray-50 shadow-sm border border-gray-100 rounded-sm">
          {/* 2. Bind the static asset variable here */}
          <img 
            src={heroImage} 
            alt="Chantae Sierra - Beauty & Fashion Model Editorial" 
            className="w-full h-full object-cover object-center block"
          />
          {/* Subtle Overlay Label */}
          <div className="absolute bottom-4 left-4 z-20">
            <p className="text-[10px] tracking-[0.2em] text-white uppercase font-light drop-shadow-sm bg-black/20 px-2 py-1 backdrop-blur-[2px]">
              Beauty & Fashion Model – Editorial
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
