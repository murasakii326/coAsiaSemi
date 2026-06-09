import React from 'react';

const GlobalNetwork = () => {
  return (
    <section className="relative w-[1920px] h-[1080px] bg-[#00050b] overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 z-0">
        {/* Placeholder for the large world map node network */}
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-[#00050b] to-[#00050b]" />
        
        {/* Glowing Nodes (Approximations) */}
        <div className="absolute top-[400px] left-[600px] w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_20px_4px_rgba(96,165,250,0.6)]" />
        <span className="absolute top-[370px] left-[580px] text-blue-300 text-sm font-bold tracking-widest">USA</span>
        
        <div className="absolute top-[350px] left-[1300px] w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_20px_4px_rgba(96,165,250,0.6)]" />
        <span className="absolute top-[320px] left-[1280px] text-blue-300 text-sm font-bold tracking-widest">KOREA</span>
        
        <div className="absolute top-[450px] left-[1280px] w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_20px_4px_rgba(96,165,250,0.6)]" />
        <span className="absolute top-[480px] left-[1260px] text-blue-300 text-sm font-bold tracking-widest">TAIWAN</span>
        
        <div className="absolute top-[500px] left-[1240px] w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_20px_4px_rgba(96,165,250,0.6)]" />
        <span className="absolute top-[530px] left-[1220px] text-blue-300 text-sm font-bold tracking-widest">VIETNAM</span>
      </div>

      <div className="relative z-10 pt-[160px] text-center max-w-[1200px]">
        <h2 className="text-[54px] font-bold text-white mb-[40px]">글로벌 R&D 네트워크</h2>
        <p className="text-[28px] text-[#949494] leading-[1.6]">
          전 세계 주요 거점 운영을 통해 글로벌 고객사에게 최적의 현지 밀착형 지원을 제공합니다.
        </p>
      </div>

      {/* Info Box */}
      <div className="absolute bottom-[160px] left-[160px] bg-white/5 backdrop-blur-md border border-white/10 rounded-[12px] p-[40px] z-10 w-[700px]">
        <div className="text-[20px] text-[#c4c4c4] leading-[2.2]">
          <p>Korea (HQ): 대한민국 경기도 오산 (본사 및 R&D 센터)</p>
          <p>USA: 미국 현지 지사</p>
          <p>Taiwan / Vietnam: 해외 R&D 센터 및 협력 거점</p>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
