import React from 'react';

const news = [
  {
    date: 'April 5, 2026',
    title: '코아시아세미, 차세대 4nm SoC 설계 프로젝트 수주',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
  },
  {
    date: 'March 3, 2026',
    title: '2026 국제 반도체 전시회 참가 및 최신 자동차용 반도체 플랫폼 솔루션 최초 공개',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
  },
  {
    date: 'Sep 20, 2025',
    title: '글로벌 디자인 센터 거점 확대 및 북미·베트남 현지 밀착형 고객 기술 지원 강화',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
  }
];

const InsightsNews = () => {
  return (
    <section className="w-[1920px] bg-[#f8f9fa] pt-[160px] pb-[180px] flex flex-col items-center">
      <h2 className="text-[54px] font-bold text-black mb-[120px]">Latest Insights & News</h2>

      <div className="flex gap-[60px] w-[1600px]">
        {news.map((item, index) => (
          <div key={index} className="flex-1 cursor-pointer group">
            <div className="w-full h-[320px] overflow-hidden mb-[30px]">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex justify-between items-center text-[18px]">
                <span className="text-[#989898] font-normal">{item.date}</span>
                <span className="text-[#666] font-medium group-hover:text-[#b22222] transition-colors">Read More &gt;</span>
              </div>
              <h3 className="text-[24px] font-bold text-black leading-[1.4] group-hover:text-[#b22222] transition-colors line-clamp-3">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsightsNews;
