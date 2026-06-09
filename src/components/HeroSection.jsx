import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-[1920px] h-[1080px] bg-[#010a19] overflow-hidden flex flex-col">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[1920px] h-[1080px] object-cover opacity-60"
        >
          <source src="/main-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 w-full h-[120px] px-[160px] flex justify-between items-center text-white">
        <div className="text-[32px] font-bold tracking-widest leading-none">
          CoAsia<br/><span className="text-[12px] font-normal tracking-[0.2em] text-gray-400">SEMI Corporation</span>
        </div>
        <div className="flex gap-[60px] text-[18px] tracking-[0.1em]">
          <a href="#" className="hover:text-gray-300">ABOUT</a>
          <a href="#" className="hover:text-gray-300">BUSINESS</a>
          <a href="#" className="hover:text-gray-300">TECHNOLOGY</a>
          <a href="#" className="hover:text-gray-300">INSIGHTS</a>
          <a href="#" className="hover:text-gray-300">CAREERS</a>
        </div>
        <button className="px-[40px] py-[16px] border border-white/40 rounded-full hover:bg-white hover:text-black transition-colors text-[18px]">
          CONTACT
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-grow px-[160px] flex flex-col justify-center pb-[100px]">
        <div className="max-w-[800px]">
          <h1 className="text-[52px] font-bold text-white leading-[1.3] mb-[20px]">
            눈에 보이지 않지만<br/>없으면 세상이 멈춥니다
          </h1>
          <p className="text-[28px] text-gray-300 tracking-[0.2em] mb-[60px]">
            Designing the Invisible
          </p>
          <button className="px-[50px] py-[20px] border border-white/30 bg-black/20 backdrop-blur-sm rounded-[30px] text-white text-[20px] hover:bg-white/10 transition-colors">
            Explore CoAsia SEMI
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
