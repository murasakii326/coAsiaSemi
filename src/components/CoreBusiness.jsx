import React from 'react';

const businessPillars = [
  {
    title: 'SOC Design',
    description: '고객 맞춤형 최적화 아키텍처 설계 및 검증',
    imageUrl: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=600',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    title: 'Turnkey Solution',
    description: '설계부터 테스트, 패키징까지 완벽한 원스톱 양산 체제',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    icon: 'M22 12h-4l-3 9L9 3l-3 9H2'
  },
  {
    title: 'Platform Design',
    description: '실리콘 검증이 완료된 플랫폼 기반의 신속하고 안정적인 개발',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
    icon: 'M4 4h16v16H4z'
  },
  {
    title: 'IP Service',
    description: '고성능·저전력에 최적화된 맞춤형 IP 솔루션 제공',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
  }
];

const CoreBusiness = () => {
  return (
    <section className="w-[1920px] bg-white pt-[180px] pb-[160px] flex flex-col items-center">
      <h2 className="text-[54px] font-bold text-black mb-[120px]">핵심 사업 영역</h2>

      <div className="grid grid-cols-2 gap-x-[40px] gap-y-[40px] w-[1600px]">
        {businessPillars.map((pillar, index) => (
          <div 
            key={index}
            className="flex bg-[#f5f7f8] rounded-[8px] overflow-hidden shadow-sm h-[380px]"
          >
            {/* Text & Icon Side */}
            <div className="w-[320px] p-[50px] flex flex-col justify-between">
              <div className="w-[40px] h-[40px] text-gray-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={pillar.icon} />
                </svg>
              </div>
              <div>
                <h3 className="text-[26px] font-bold text-[#333] mb-[16px]">{pillar.title}</h3>
                <p className="text-[18px] text-[#666] leading-[1.6]">{pillar.description}</p>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="flex-1">
              <img 
                src={pillar.imageUrl} 
                alt={pillar.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreBusiness;
