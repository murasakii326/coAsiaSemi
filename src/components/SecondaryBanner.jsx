import React from 'react';

const SecondaryBanner = () => {
  return (
    <section className="relative w-[1920px] h-[1080px] bg-[#010a19] overflow-hidden flex flex-col justify-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920&h=1080"
          alt="World Map Background"
          className="w-[1920px] h-[1080px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-[160px] pb-[160px]">
        <div className="max-w-[1200px]">
          <h2 className="text-[48px] font-bold text-white leading-[1.4] mb-[60px]">
            우리는 삼성 파운드리와 ARM의 검증된 솔루션으<br/>
            로 반도체 설계의 새로운 기준을 제시합니다.
          </h2>
          <button className="px-[60px] py-[22px] border border-white/30 bg-black/30 backdrop-blur-sm rounded-[40px] text-white text-[20px] tracking-[0.05em] hover:bg-white/10 transition-colors">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecondaryBanner;
