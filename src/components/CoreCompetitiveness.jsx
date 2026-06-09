import React from 'react';

const competencies = [
  {
    title: '삼성 파운드리 공식 DSP 파트너십',
    description: '삼성 파운드리와의 공식 협력 체계를 기반으로 안정적이고 최적화된 반도체 설계 서비스를 제공합니다. 최신 공정 기술과 검증된 개발 환경을 통해 높은 품질과 신뢰성을 보장합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800',
    align: 'right'
  },
  {
    title: '원스톱 토탈 턴키 솔루션',
    description: '설계부터 검증, 양산까지 전 과정을 통합 지원하여 개발 기간과 비용을 효율적으로 절감합니다. 고객 맞춤형 프로세스를 통해 빠르고 안정적인 제품 출시를 지원합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    align: 'left'
  },
  {
    title: '글로벌 R&D 네트워크 인프라',
    description: '전 세계 주요 거점의 연구개발 센터와 협업 체계를 구축하여 글로벌 고객 대응 및 신속한 기술 지원이 가능합니다. 안정적인 커뮤니케이션과 연속적인 개발 환경을 제공합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    align: 'right'
  },
  {
    title: '초미세 선단 공정 설계 전문성',
    description: '첨단 나노 공정 기반의 설계 경험을 바탕으로 고성능·저전력 반도체 솔루션을 구현합니다. 최신 공정 최적화 기술을 적용하여 경쟁력 있는 칩 설계를 제공합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    align: 'left'
  }
];

const CoreCompetitiveness = () => {
  return (
    <section className="w-[1920px] bg-white pt-[180px] pb-[160px] flex flex-col items-center">
      <h2 className="text-[54px] font-bold text-black mb-[140px]">핵심 경쟁력</h2>

      <div className="flex flex-col gap-[160px] w-[1440px]">
        {competencies.map((comp, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-between ${
              comp.align === 'left' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            {/* Image Box */}
            <div className="w-[800px] h-[500px]">
              <img 
                src={comp.imageUrl} 
                alt={comp.title} 
                className="w-full h-full object-cover rounded-[4px] shadow-lg"
              />
            </div>

            {/* Text Box */}
            <div className="w-[500px] flex flex-col items-start">
              <h3 className="text-[36px] font-bold text-black mb-[30px] tracking-tight">
                {comp.title}
              </h3>
              <p className="text-[20px] text-gray-700 leading-[1.6] mb-[40px]">
                {comp.description}
              </p>
              <a
                href="#"
                className="text-[#b22222] text-[20px] font-medium tracking-wide hover:underline"
              >
                LEARN MORE &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreCompetitiveness;
