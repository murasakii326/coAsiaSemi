import React from 'react';

const GlobalPartnership = () => {
  return (
    <section className="relative w-[1920px] h-[700px] bg-[#00050b] flex flex-col items-center justify-center overflow-hidden">
      {/* Background glowing effects placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-[54px] font-bold text-white mb-[100px] tracking-wide">글로벌 파트너십</h2>

        {/* Logos Container */}
        <div className="flex flex-col gap-[80px] w-[1400px] items-center">
          {/* Top Row */}
          <div className="flex justify-between w-full items-center px-[40px]">
            <span className="text-[42px] font-bold text-white tracking-widest italic">SAFE™</span>
            <span className="text-[56px] font-bold text-white lowercase">arm</span>
            <span className="text-[48px] font-bold text-white tracking-widest">SYNOPSYS</span>
            <span className="text-[52px] font-bold text-white lowercase tracking-widest">cādence</span>
          </div>
          
          {/* Bottom Row */}
          <div className="flex justify-center gap-[120px] w-full items-center">
            <span className="text-[42px] font-bold text-white">Ansys</span>
            <span className="text-[36px] font-bold text-white tracking-[0.2em] uppercase">Siemens</span>
            <span className="text-[42px] font-bold text-white">Amkor</span>
            <span className="text-[48px] font-black text-white tracking-widest">JCET</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartnership;
