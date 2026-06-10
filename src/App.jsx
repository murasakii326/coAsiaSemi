const imgCoAsiaSemiSiteRedesigning2026051314421 = "/assets/cdfd26935d8ed9bb740469af6356bb883a96fbdd.png";
const imgSemiconductorChipsetsAndPcbB2026051719521 = "/assets/1b36518b0a837cd021b2bbcb296a55b7f2ed6990.png";
const imgLineArtLogoTurnkeySolution2026051719181 = "/assets/3f9cc0d68544c296215855b4096d14e03f97fb0d.png";
const img2026051720021 = "/assets/4c7e1305f0fc1ee92e0a4f6d8f7c7229758d9e5b.png";
const imgLineArtLogoPlatformDesign2026051719181 = "/assets/df65b5b49cb9c26842e71ece0f6ceb788f0972d0.png";
const imgModularServerArchitectureDigi2026051719531 = "/assets/e1b3932157623c72e83c8a3a935a81c3579790ff.png";
const imgMonolineLogoForIpService2026051719361 = "/assets/730841bc98b341b60f4523ee0562e92bb2d12079.png";
const imgModernKoreanTechWorkspaceVis2026051719531 = "/assets/ca544b79a7f953a58ce7be3ca69112b3aa5d4f61.png";
const imgFtLogo2 = "/assets/2085287d2076458d9cf127975adb79a49b370237.png";
const imgImage24 = "/assets/cf07a0889e394f02d181991b772b0d4eb0cd2aba.png";
const imgImage23 = "/assets/1b1a50a07fc4a9aa411bcd18e5e8544a5ab3b425.png";
const imgImage22 = "/assets/698d023e95f88fd743caefb82f584b729586810a.png";
const imgDigitalWorldMapRDNetwork2026051301162 = "/assets/8e553d19698d054f3d8cf326c5a7fc5a563dad5c.png";
const imgFrame23 = "/assets/4eeb8f3473f5ad9b1d909135681a59d8482c3440.png";
const imgLogoWhite2026051311521 = "/assets/2d918f504784b2cc9d3ac21db78eb1f886c08d4d.png";
const imgImage6 = "/assets/d3e9c819ee85a2ff05df1120276f6d80e0cfa86c.png";
const imgImage7 = "/assets/af34fbc30a994fe5daa8dd35feaab98c59a1a163.png";
const imgImage8 = "/assets/b75594b630f002b8e2e8ada88b85f84a4a68efdd.png";
const imgWhiteLogo2026051307591 = "/assets/41e68bbdbb16b94a2d86e75a013300f8a6b83b03.png";
const imgImage10 = "/assets/07c856c17ea2d50d696bb9c82cceb0eace1282c2.png";
const imgImage11 = "/assets/347bc44cad788d5b95b7ac2dbc92fdc11dac1b19.png";
const imgImage12 = "/assets/cc582d8da8c101d7b6cf1aee71722dbaa207f73a.png";
const img2026051310471 = "/assets/f42d22122a77b477f4cb9fc5130d9d868eb34f29.png";
const img2026051311122 = "/assets/80b5bce538871527d3a0ffa471b6f7e479d4e5ae.png";
const img2026051311121 = "/assets/d47855a378ce97dc1330ba6bc350d0d1c8e4c6b6.png";
const imgSemiconductorFabricationCleanr2026051720581 = "/assets/4c858866226c7b8877c4df59fbf7a4cd9b8a0580.png";
const imgFuturisticSoCDieNanostructures2026051310001 = "/assets/e76247229cecc537dad364619265b45c83d3c96d.png";
const img2026051310451 = "/assets/6d2978343e2255f38189091ff992241ba077d49c.png";
const img2026051311161 = "/assets/a3f22540250df8e16052843fa5c53af1cc7ba714.png";
const imgRoundedCorner2026051719181Vectorized = "/assets/1a15d7e2e73768772b59fb497a7eba0ef668181f.svg";
const imgLine12 = "/assets/3471588fb2ae328f73c562a2586fb484478467cc.svg";
const imgGroup180 = "/assets/1c1d2487c2d0559247c3751340b07583b8da6efb.svg";
const imgDigitalWorldMapRDNetwork2026051301161 = "/assets/5968dde33f884e0c5fd3cf822bea03b28429f763.svg";
const imgVector = "/assets/553988a51853a6dd5de08e42d86185f93ad5d9c5.svg";
const imgVector1 = "/assets/c4d2dc385e195858d48df6b1e61aac403f393a17.svg";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MapNetwork from './MapNetwork';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }
};

const fadeUpSlowVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
};


export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const newScale = Math.min(window.innerWidth / 1920, 1);
      setScale(newScale);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen w-full overflow-x-hidden flex justify-center">
      <div className="w-[1920px] origin-top bg-white" style={{ zoom: scale }}>

    <div className="bg-white relative size-full" data-node-id="552:4736" data-name="시안1">
      <motion.div
        className="absolute left-0 top-[1079px] w-[1920px] h-[1080px]"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="absolute h-[1080px] left-0 top-0 w-[1920px]" data-node-id="552:4737" data-name="CoAsia_semi_site_redesigning_202605131442 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-0.78%] max-w-none top-0 w-[100.78%]" src={imgCoAsiaSemiSiteRedesigning2026051314421} />
          </div>
        </div>
        <div className="absolute h-[1080px] left-0 top-0 w-[1920px]" data-node-id="552:4738" style={{ backgroundImage: "linear-gradient(-89.5998deg, rgba(71, 224, 255, 0) 0.19567%, rgba(22, 68, 77, 0) 41.364%, rgba(0, 0, 0, 0.427) 68.808%, rgba(0, 0, 0, 0.66) 98.616%)" }} />
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.8 }} variants={fadeUpVariants} className="absolute left-[175px] top-[722px] bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] h-[61.236px] w-[301.216px] rounded-[16.55px] flex items-center justify-center cursor-pointer hover:bg-[rgba(255,255,255,0.15)] transition-all" data-node-id="552:4739">
          <p className="[word-break:break-word] inter-regular font-normal text-[#f2f2f2] text-[21.515px] whitespace-nowrap" data-node-id="552:4741">
            LEARN MORE
          </p>
        </motion.div>
        <p className="[word-break:break-word] absolute inter-bold font-bold leading-[161.94000244140625%] left-[calc(50%-784px)] not-italic text-[37.116px] text-white top-[505px] w-[769px]" data-node-id="552:4742">
          우리는 삼성 파운드리와 ARM의 검증된 솔루션으로 반도체 설계의 새로운 기준을 제시합니다.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: false, amount: 0.15 }} 
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bg-white content-stretch flex flex-col h-[1080px] items-start left-0 pb-[136px] pt-[138px] px-[145px] top-[2159px] w-[1920px]" 
        data-node-id="567:193"
      >
        <div className="content-stretch flex flex-col gap-[73px] items-center relative shrink-0 w-[1630.366px]" data-node-id="567:191">
          <p className="[word-break:break-word] inter-regular font-normal leading-[normal] not-italic relative shrink-0 text-[45.378px] text-black text-center w-full" data-node-id="552:4745">
            핵심 사업 영역
          </p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }} className="gap-x-[30px] gap-y-[33px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] h-[677.578px] relative shrink-0 w-full" data-node-id="567:190">
            <motion.div variants={fadeUpVariants} whileHover={{ scale: 1.02, boxShadow: '0px 20px 40px rgba(0,0,0,0.1)' }} transition={{ duration: 0.4, ease: "easeOut" }} className="content-stretch flex gap-[10px] items-center justify-self-stretch relative self-stretch shrink-0 cursor-pointer overflow-hidden isolate transform-gpu bg-[#ebf1f2]" data-node-id="567:186">
              <div className="bg-[#ebf1f2] content-stretch flex h-[322.583px] items-start pb-[44px] pl-[19px] pr-[26px] pt-[20px] relative shrink-0 w-[263.292px]" data-node-id="567:182">
                <div className="content-stretch flex flex-col gap-[170px] items-start relative shrink-0 w-[218px]" data-node-id="567:178">
                  <div className="relative shrink-0 size-[35px]" data-node-id="552:4762" data-name="rounded_corner_202605171918 1 [Vectorized]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRoundedCorner2026051719181Vectorized} />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-node-id="567:174">
                    <p className="inter-semibold font-semibold relative shrink-0 text-[#545d5a] text-[20.099px] tracking-[-0.603px] w-full" data-node-id="552:4760">
                      SOC Design
                    </p>
                    <p className="inter-regular font-normal relative shrink-0 text-[#59786e] text-[13.064px] tracking-[-0.3919px] w-full" data-node-id="552:4761">
                      고객 맞춤형 최적화 아키텍처 설계 및 검증
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[322px] relative shrink-0 w-[527px]" data-node-id="552:4802" data-name="Semiconductor_chipsets_and_PCB_b…_202605171952 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[-6.96%] max-w-none top-[0.14%] w-[109.47%]" src={imgSemiconductorChipsetsAndPcbB2026051719521} />
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUpVariants} whileHover={{ scale: 1.02, boxShadow: '0px 20px 40px rgba(0,0,0,0.1)' }} transition={{ duration: 0.4, ease: "easeOut" }} className="content-stretch flex gap-[10px] items-center justify-self-stretch relative self-stretch shrink-0 cursor-pointer overflow-hidden isolate transform-gpu bg-[#ebf1f2]" data-node-id="567:187">
              <div className="bg-[#ebf1f2] content-stretch flex h-[322.583px] items-start pb-[27px] pl-[19px] pr-[17px] pt-[20px] relative shrink-0 w-[263.292px]" data-node-id="567:184">
                <div className="content-stretch flex flex-col gap-[171px] items-start relative shrink-0 w-[227.6px]" data-node-id="567:179">
                  <div className="h-[34px] opacity-61 relative shrink-0 w-[35px]" data-node-id="552:4798" data-name="Line_art_logo_Turnkey_Solution_202605171918 1">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[272.41%] left-[-73.33%] max-w-none top-[-58.62%] w-[263.33%]" src={imgLineArtLogoTurnkeySolution2026051719181} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[21px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-node-id="567:175">
                    <p className="inter-semibold font-semibold h-[19.864px] relative shrink-0 text-[#545d5a] text-[20.099px] tracking-[-0.603px] w-full" data-node-id="552:4751">
                      Turnkey Solution
                    </p>
                    <p className="inter-regular font-normal h-[30.148px] relative shrink-0 text-[#59786e] text-[13.064px] tracking-[-0.3919px] w-full" data-node-id="552:4752">
                      설계부터 테스트, 패키징까지 완벽한 원스톱 양산 체제
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[323px] relative shrink-0 w-[527px]" data-node-id="552:4804" data-name="창문에_써있는_테스트_202605172002 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[-9.8%] max-w-none top-[0.08%] w-[109.81%]" src={img2026051720021} />
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUpVariants} whileHover={{ scale: 1.02, boxShadow: '0px 20px 40px rgba(0,0,0,0.1)' }} transition={{ duration: 0.4, ease: "easeOut" }} className="content-stretch flex gap-[10px] items-center justify-self-stretch relative self-stretch shrink-0 cursor-pointer overflow-hidden isolate transform-gpu bg-[#ebf1f2]" data-node-id="567:189">
              <div className="bg-[#ebf1f2] content-stretch flex h-[321.578px] items-start pb-[29px] pl-[19px] pr-[17px] pt-[20px] relative shrink-0 w-[263.292px]" data-node-id="567:183">
                <div className="content-stretch flex flex-col gap-[164px] items-start relative shrink-0 w-[227.115px]" data-node-id="567:181">
                  <div className="h-[37px] opacity-61 relative shrink-0 w-[32px]" data-node-id="552:4799" data-name="Line_art_logo_Platform_Design_202605171918 1">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[219.44%] left-[-77.42%] max-w-none top-[-36.11%] w-[254.84%]" src={imgLineArtLogoPlatformDesign2026051719181} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[17px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-node-id="567:177">
                    <p className="inter-semibold font-semibold relative shrink-0 text-[#545d5a] text-[20.099px] tracking-[-0.603px] w-full" data-node-id="552:4755">
                      Platform Design
                    </p>
                    <p className="inter-regular font-normal h-[30.148px] relative shrink-0 text-[#59786e] text-[13.064px] tracking-[-0.3919px] w-full" data-node-id="552:4756">
                      실리콘 검증이 완료된 플랫폼 기반의 신속하고 안정적인 개발
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[321px] relative shrink-0 w-[527px]" data-node-id="552:4801" data-name="Modular_server_architecture_digi…_202605171953 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[-4.41%] max-w-none top-[0.07%] w-[109.13%]" src={imgModularServerArchitectureDigi2026051719531} />
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUpVariants} whileHover={{ scale: 1.02, boxShadow: '0px 20px 40px rgba(0,0,0,0.1)' }} transition={{ duration: 0.4, ease: "easeOut" }} className="content-stretch flex gap-[10px] items-center justify-self-stretch relative self-stretch shrink-0 cursor-pointer overflow-hidden isolate transform-gpu bg-[#ebf1f2]" data-node-id="567:188">
              <div className="bg-[#ebf1f2] content-stretch flex h-[321.578px] items-start pb-[29px] pl-[19px] pr-[17px] pt-[19px] relative shrink-0 w-[263.292px]" data-node-id="567:185">
                <div className="content-stretch flex flex-col gap-[167px] items-start relative shrink-0 w-[227.6px]" data-node-id="567:180">
                  <div className="h-[35px] opacity-77 relative shrink-0 w-[30px]" data-node-id="552:4800" data-name="Monoline_logo_for_IP_Service_202605171936 1">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[146.67%] left-[-34.62%] max-w-none top-[-23.33%] w-[169.23%]" src={imgMonolineLogoForIpService2026051719361} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[17px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-node-id="567:176">
                    <p className="inter-semibold font-semibold relative shrink-0 text-[#545d5a] text-[20.099px] tracking-[-0.603px] w-full" data-node-id="552:4747">
                      IP Service
                    </p>
                    <p className="inter-regular font-normal h-[30.148px] relative shrink-0 text-[#59786e] text-[13.064px] tracking-[-0.3919px] w-full" data-node-id="552:4748">
                      고성능·저전력에 최적화된 맞춤형 IP 솔루션 제공
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[321px] relative shrink-0 w-[527px]" data-node-id="552:4803" data-name="Modern_Korean_tech_workspace_vis…_202605171953 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[-9.06%] max-w-none top-0 w-[109.13%]" src={imgModernKoreanTechWorkspaceVis2026051719531} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute h-[234px] left-[1435px] top-[8961px] w-[217px]" data-node-id="552:4848" data-name="image 16" />
      <motion.div 
        initial={{ opacity: 0, y: 150 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: false, amount: 0.1 }} 
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bg-black content-stretch flex flex-col h-[552px] items-start left-0 pb-[17px] pt-[80px] px-[156px] top-[8730px] w-[1920px]" 
        data-node-id="567:219"
      >
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="567:218">
          <div className="col-1 content-stretch flex flex-col gap-[16px] items-center ml-0 mt-[418px] relative row-1 w-[1608px]" data-node-id="567:216">
            <div className="h-0 relative shrink-0 w-full" data-node-id="552:4849">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine12} />
              </div>
            </div>
            <p className="[word-break:break-word] inter-regular font-normal leading-[normal] not-italic relative shrink-0 text-[#ddd] text-[17.682px] text-center w-full" data-node-id="552:4847">
              @2026 CoAsia SEMI. All rights reserved.
            </p>
          </div>
          <div className="col-1 content-stretch flex flex-col gap-[110px] items-end ml-[11px] mt-0 relative row-1 w-[1591px]" data-node-id="567:215">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="567:214">
              <div className="h-[60px] relative shrink-0 w-[130px]" data-node-id="552:4820" data-name="ft_logo 2">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFtLogo2} />
              </div>
              <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-node-id="567:202">
                <div className="h-[74px] relative shrink-0 w-[74px] cursor-pointer group/sns transition-colors duration-300" data-node-id="552:4852" data-name="image 24">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-all duration-300 group-hover/sns:scale-110 group-hover/sns:-translate-y-2 group-hover/sns:rotate-[-6deg] group-hover/sns:drop-shadow-2xl" src={imgImage24} />
                </div>
                <div className="h-[74px] relative shrink-0 w-[74px] cursor-pointer group/sns transition-colors duration-300" data-node-id="552:4851" data-name="image 23">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-all duration-300 group-hover/sns:scale-110 group-hover/sns:-translate-y-2 group-hover/sns:rotate-[-6deg] group-hover/sns:drop-shadow-2xl" src={imgImage23} />
                </div>
                <div className="h-[74px] relative shrink-0 w-[74px] cursor-pointer group/sns transition-colors duration-300" data-node-id="552:4850" data-name="image 22">
                  <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full transition-all duration-300 group-hover/sns:scale-110 group-hover/sns:-translate-y-2 group-hover/sns:rotate-[-6deg] group-hover/sns:drop-shadow-2xl" src={imgImage22} />
                </div>
                <div className="h-[74px] relative shrink-0 w-[74px] cursor-pointer group/sns transition-colors duration-300" data-node-id="567:201">
                  <img alt="" className="absolute block inset-0 max-w-none object-contain size-full transition-all duration-300 group-hover/sns:scale-110 group-hover/sns:-translate-y-2 group-hover/sns:rotate-[-6deg] group-hover/sns:drop-shadow-2xl" src={imgGroup180} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex gap-[88px] items-start leading-[normal] not-italic relative shrink-0 text-[#ddd]" data-node-id="567:213">
              <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[238px]" data-node-id="567:208">
                <p className="inter-bold font-bold relative shrink-0 text-[20.987px] w-full" data-node-id="552:4843">
                  Company
                </p>
                <div className="content-stretch flex flex-col inter-regular font-normal gap-[9px] items-start relative shrink-0 text-[16.259px] w-full" data-node-id="567:207">
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4844">
                    About CoAsia SEMI
                  </p>
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4845">
                    Management Team
                  </p>
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4846">
                    Corporate Responsibility (CSR)
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[150px]" data-node-id="567:209">
                <p className="inter-bold font-bold relative shrink-0 text-[20.987px] w-full" data-node-id="552:4822">
                  CAREERS
                </p>
                <div className="content-stretch flex flex-col inter-regular font-normal gap-[9px] items-start relative shrink-0 text-[16.259px] w-full" data-node-id="567:206">
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4823">
                    Life at CoAsia SEMI
                  </p>
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4824">
                    Open Positions
                  </p>
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4825">
                    Internship Program
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[211px]" data-node-id="567:210">
                <p className="inter-bold font-bold relative shrink-0 text-[20.987px] w-full" data-node-id="552:4827">{`Legal & Copyright`}</p>
                <div className="content-stretch flex flex-col inter-regular font-normal gap-[9px] items-start relative shrink-0 text-[16.259px] w-full" data-node-id="567:205">
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4828">
                    Terms and Conditions
                  </p>
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4829">
                    Privacy Policy
                  </p>
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4830">
                    Cookie Settings
                  </p>
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4831">
                    Supply Chain Transparency
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[260px]" data-node-id="567:211">
                <p className="inter-bold font-bold relative shrink-0 text-[20.987px] w-full" data-node-id="552:4833">
                  Contact
                </p>
                <div className="content-stretch flex flex-col inter-regular font-normal gap-[9px] items-start relative shrink-0 text-[16.259px] w-full" data-node-id="567:204">
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4834">
                    Phone : 031-3462-2353
                  </p>
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4835">
                    Gmail : inquiries@coasiasemi.com
                  </p>
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4836">
                    Address : 대한민국 경기도 오산시
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[159px]" data-node-id="567:212">
                <p className="inter-bold font-bold relative shrink-0 text-[20.987px] w-full" data-node-id="552:4838">
                  QUICK LINKS
                </p>
                <div className="content-stretch flex flex-col inter-regular font-normal gap-[9px] items-start relative shrink-0 text-[16.259px] w-full" data-node-id="567:203">
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4839">
                    Sitemap
                  </p>
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4840">
                    Quality Management
                  </p>
                  <p className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4841">
                    Brand Assets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="absolute left-0 top-[7029px] w-[1920px] h-[1082px] z-10" data-node-id="567:225">
        <div className="-translate-x-1/2 absolute bg-black h-[1082px] left-1/2 top-0 w-[1920px]" data-node-id="552:4808" />
        <MapNetwork />
        <div className="absolute bg-[rgba(202,202,202,0.2)] content-stretch flex h-[121px] items-center justify-center left-[172px] pb-[24px] pl-[25px] pr-[27px] pt-[28px] top-[803px] w-[484px] z-20 pointer-events-none">
          <div className="[word-break:break-word] inter-regular font-normal leading-[0] not-italic relative shrink-0 text-[#c4c4c4] text-[18.727px] whitespace-nowrap">
            <p className="leading-[normal] mb-0">{`Korea (HQ): 대한민국 경기도 오산 (본사 및 R&D 센터)`}</p>
            <p className="leading-[normal] mb-0">USA: 미국 현지 지사</p>
            <p className="leading-[normal]">{`Taiwan / Vietnam: 해외 R&D 센터 및 협력 거점`}</p>
          </div>
        </div>
        <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col inter-regular font-normal gap-[24px] items-center leading-[normal] left-1/2 not-italic top-[91px] w-[1324px] pointer-events-none z-10">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.8 }} variants={fadeUpVariants} className="relative shrink-0 text-[45.378px] text-center text-white drop-shadow-md w-full">{`글로벌 R&D 네트워크`}</motion.p>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.8 }} variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
          }} className="relative shrink-0 text-white drop-shadow-md text-[36px] w-full text-center">
            전 세계 주요 거점 운영을 통해 글로벌 고객사에게 최적의 현지 밀착형 지원을 제공합니다.
          </motion.p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col h-[1080px] items-start left-0 pl-[356px] pr-[358px] py-[290px] top-[3240px] w-[1921px]" data-node-id="567:144">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.75%] max-w-none top-[0.02%] w-[100.73%]" src={imgFrame23} />
        </div>
        <div className="content-stretch flex flex-col gap-[106px] items-center relative shrink-0 w-[1207.397px]" data-node-id="567:143">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.8 }} variants={fadeUpVariants} className="[word-break:break-word] inter-bold font-bold leading-[normal] not-italic relative shrink-0 text-[45.378px] text-center text-white w-full" data-node-id="552:4902">
            글로벌 파트너십
          </motion.p>
          <div className="content-stretch flex flex-col gap-[38px] items-center relative shrink-0 w-full" data-node-id="567:142">
            <div className="overflow-hidden w-full relative shrink-0" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }} data-node-id="567:140">
              <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: 'linear', duration: 25 }} className="flex items-center shrink-0 w-max">
                <div className="flex gap-[73px] items-center shrink-0 pr-[120px]">
                  <div className="h-[145px] relative shrink-0 w-[194px]" data-node-id="552:4911" data-name="logo_를_white_로_바꿔줘_202605131152 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoWhite2026051311521} />
                  </div>
                  <div className="h-[86px] relative shrink-0 w-[160.397px]" data-node-id="552:4904" data-name="image 6">
                    <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage6} />
                  </div>
                  <div className="h-[110px] relative shrink-0 w-[307px]" data-node-id="552:4908" data-name="image 7">
                    <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage7} />
                  </div>
                  <div className="h-[83px] relative shrink-0 w-[327px]" data-node-id="552:4909" data-name="image 8">
                    <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage8} />
                  </div>
                </div>
                <div className="flex gap-[73px] items-center shrink-0 pr-[120px]">
                  <div className="h-[145px] relative shrink-0 w-[194px]" data-node-id="552:4911" data-name="logo_를_white_로_바꿔줘_202605131152 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoWhite2026051311521} />
                  </div>
                  <div className="h-[86px] relative shrink-0 w-[160.397px]" data-node-id="552:4904" data-name="image 6">
                    <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage6} />
                  </div>
                  <div className="h-[110px] relative shrink-0 w-[307px]" data-node-id="552:4908" data-name="image 7">
                    <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage7} />
                  </div>
                  <div className="h-[83px] relative shrink-0 w-[327px]" data-node-id="552:4909" data-name="image 8">
                    <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage8} />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="overflow-hidden w-full relative shrink-0" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }} data-node-id="567:141">
              <motion.div animate={{ x: ["-50%", "0%"] }} transition={{ repeat: Infinity, ease: 'linear', duration: 25 }} className="flex items-center shrink-0 w-max">
                <div className="flex gap-[59px] items-center shrink-0 pr-[120px]">
                  <div className="h-[132px] relative shrink-0 w-[236px]" data-node-id="552:4910" data-name="white_logoပြောင်းပေး_202605130759 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteLogo2026051307591} />
                  </div>
                  <div className="relative shrink-0 size-[156px]" data-node-id="552:4905" data-name="image 10">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
                  </div>
                  <div className="h-[78px] relative shrink-0 w-[210.503px]" data-node-id="552:4906" data-name="image 11">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
                  </div>
                  <div className="h-[140px] relative shrink-0 w-[248px]" data-node-id="552:4907" data-name="image 12">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
                  </div>
                </div>
                <div className="flex gap-[59px] items-center shrink-0 pr-[120px]">
                  <div className="h-[132px] relative shrink-0 w-[236px]" data-node-id="552:4910" data-name="white_logoပြောင်းပေး_202605130759 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteLogo2026051307591} />
                  </div>
                  <div className="relative shrink-0 size-[156px]" data-node-id="552:4905" data-name="image 10">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
                  </div>
                  <div className="h-[78px] relative shrink-0 w-[210.503px]" data-node-id="552:4906" data-name="image 11">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
                  </div>
                  <div className="h-[140px] relative shrink-0 w-[248px]" data-node-id="552:4907" data-name="image 12">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-white content-stretch flex h-[2709px] items-start left-1/2 pb-[182px] pl-[150px] pr-[138px] pt-[109px] top-[4320px] w-[1920px]" data-node-id="567:195">
        <div className="content-stretch flex flex-col gap-[118px] items-center relative shrink-0 w-[1632px]" data-node-id="567:161">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.8 }} variants={fadeUpVariants} className="[word-break:break-word] inter-regular font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[45.378px] text-black text-center w-[min-content]" data-node-id="552:4813">
            핵심 경쟁력
          </motion.p>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="567:160">
            <div className="col-1 content-stretch flex gap-[103px] items-center ml-0 mt-0 relative row-1" data-node-id="567:157">
              <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="h-[561.157px] relative shrink-0 w-[810px]" data-node-id="552:4805" data-name="삼성_파운드리_협력_솔루션_202605131047 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[117.59%] left-[-4.56%] max-w-none top-[-8.7%] w-[109.11%]" src={img2026051310471} />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }} className="content-stretch flex flex-col gap-[49px] items-start relative shrink-0 w-[613px]" data-node-id="567:146">
                <p className="[word-break:break-word] inter-semibold font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[40px] text-black tracking-[-1.2px] w-[min-content]" data-node-id="552:4861">
                  삼성 파운드리 공식 DSP 파트너십
                </p>
                <p className="[word-break:break-word] inter-regular font-normal leading-[126.55999755859375%] min-w-full not-italic relative shrink-0 text-[24px] text-black tracking-[-0.72px] w-[min-content]" data-node-id="552:4862">
                  삼성 파운드리와의 공식 협력 체계를 기반으로 안정적이고 최적화된 반도체 설계 서비스를 제공합니다. 최신 공정 기술과 검증된 개발 환경을 통해 높은 품질과 신뢰성을 보장합니다.
                </p>
                <div className="content-stretch flex gap-[20px] items-center relative shrink-0 group cursor-pointer" data-node-id="567:145">
                  <p className="[word-break:break-word] inter-regular font-normal leading-[normal] not-italic relative shrink-0 text-[#920000] text-[24px] group-hover:text-[#d32f2f] transition-colors tracking-[-0.72px] whitespace-nowrap" data-node-id="552:4864">
                    LEARN MORE
                  </p>
                  <div className="flex items-center justify-center relative shrink-0 group-hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-none rotate-180">
                      <div className="h-[18.896px] relative w-[11.632px]" data-node-id="552:4865" data-name="Vector">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-1 content-stretch flex gap-[99px] items-center ml-[98px] mt-[561px] relative row-1" data-node-id="567:156">
              <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="content-stretch flex flex-col gap-[49px] items-start relative shrink-0 w-[613px]" data-node-id="567:149">
                <p className="[word-break:break-word] inter-semibold font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[40px] text-black tracking-[-1.2px] w-[min-content]" data-node-id="552:4866">
                  원스톱 토탈 턴키 솔루션
                </p>
                <p className="[word-break:break-word] inter-regular font-normal leading-[126.55999755859375%] min-w-full not-italic relative shrink-0 text-[24px] text-black tracking-[-0.72px] w-[min-content]" data-node-id="552:4863">
                  설계부터 검증, 양산까지 전 과정을 통합 지원하여 개발 기간과 비용을 효율적으로 절감합니다. 고객 맞춤형 프로세스를 통해 빠르고 안정적인 제품 출시를 지원합니다.
                </p>
                <div className="content-stretch flex gap-[20px] items-center relative shrink-0 group cursor-pointer" data-node-id="567:147">
                  <p className="[word-break:break-word] inter-regular font-normal leading-[normal] not-italic relative shrink-0 text-[#920000] text-[24px] group-hover:text-[#d32f2f] transition-colors tracking-[-0.72px] whitespace-nowrap" data-node-id="552:4867">
                    LEARN MORE
                  </p>
                  <div className="flex items-center justify-center relative shrink-0 group-hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-none rotate-180">
                      <div className="h-[18.896px] relative w-[10px]" data-node-id="552:4868" data-name="Vector">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }} className="h-[560.149px] relative shrink-0 w-[810px]" data-node-id="552:4807" data-name="테스트_다_빼줘_202605131112 2">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[108.27%] left-[-0.02%] max-w-none top-0 w-[100.28%]" src={img2026051311122} />
                </div>
              </motion.div>
            </div>
            <div className="col-1 content-stretch flex gap-[103px] items-center ml-0 mt-[1119px] relative row-1" data-node-id="567:155">
              <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="h-[560.149px] relative shrink-0 w-[810px]" data-node-id="552:4806" data-name="테스트_다_빼줘_202605131112 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[108.27%] left-[-0.02%] max-w-none top-0 w-[100.28%]" src={img2026051311121} />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }} className="content-stretch flex flex-col gap-[49px] items-start relative shrink-0 w-[613px]" data-node-id="567:151">
                <p className="[word-break:break-word] inter-semibold font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[40px] text-black tracking-[-1.2px] w-[min-content]" data-node-id="552:4870">{`글로벌 R&D 네트워크 인프라`}</p>
                <p className="[word-break:break-word] inter-regular font-normal leading-[126.55999755859375%] min-w-full not-italic relative shrink-0 text-[24px] text-black tracking-[-0.72px] w-[min-content]" data-node-id="552:4869">
                  전 세계 주요 거점의 연구개발 센터와 협업 체계를 구축하여 글로벌 고객 대응 및 신속한 기술 지원이 가능합니다. 안정적인 커뮤니케이션과 연속적인 개발 환경을 제공합니다.
                </p>
                <div className="content-stretch flex gap-[20px] items-center relative shrink-0 group cursor-pointer" data-node-id="567:150">
                  <p className="[word-break:break-word] inter-regular font-normal leading-[normal] not-italic relative shrink-0 text-[#920000] text-[24px] group-hover:text-[#d32f2f] transition-colors tracking-[-0.72px] whitespace-nowrap" data-node-id="552:4871">
                    LEARN MORE
                  </p>
                  <div className="flex items-center justify-center relative shrink-0 group-hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-none rotate-180">
                      <div className="h-[18.896px] relative w-[10px]" data-node-id="552:4872" data-name="Vector">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="col-1 content-stretch flex gap-[97px] items-center ml-[101px] mt-[1678px] relative row-1" data-node-id="567:154">
              <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="content-stretch flex flex-col gap-[49px] items-start relative shrink-0 w-[613px]" data-node-id="567:153">
                <p className="[word-break:break-word] inter-semibold font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[40px] text-black tracking-[-1.2px] w-[min-content]" data-node-id="552:4874">
                  초미세 선단 공정 설계 전문성
                </p>
                <p className="[word-break:break-word] inter-regular font-normal leading-[126.55999755859375%] min-w-full not-italic relative shrink-0 text-[24px] text-black tracking-[-0.72px] w-[min-content]" data-node-id="552:4873">
                  첨단 나노 공정 기반의 설계 경험을 바탕으로 고성능·저전력 반도체 솔루션을 구현합니다. 최신 공정 최적화 기술을 적용하여 경쟁력 있는 칩 설계를 제공합니다.
                </p>
                <div className="content-stretch flex gap-[20px] items-center relative shrink-0 group cursor-pointer" data-node-id="567:152">
                  <p className="[word-break:break-word] inter-regular font-normal leading-[normal] not-italic relative shrink-0 text-[#920000] text-[24px] group-hover:text-[#d32f2f] transition-colors tracking-[-0.72px] whitespace-nowrap" data-node-id="552:4875">
                    LEARN MORE
                  </p>
                  <div className="flex items-center justify-center relative shrink-0 group-hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-none rotate-180">
                      <div className="h-[18.896px] relative w-[10px]" data-node-id="552:4876" data-name="Vector">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }} className="h-[567px] relative shrink-0 w-[821px]" data-node-id="552:4912" data-name="Semiconductor_fabrication_cleanr…_202605172058 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[108.12%] left-0 max-w-none top-[-5.55%] w-full" src={imgSemiconductorFabricationCleanr2026051720581} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[1080px] left-0 overflow-clip top-0 w-[1920px]" data-node-id="552:4913">
        <div className="absolute h-[1080px] left-0 top-0 w-[1920px] overflow-hidden bg-black" data-node-id="552:4914"><video autoPlay loop muted playsInline className="absolute h-full w-full object-cover opacity-80"><source src="/main-bg.mp4" type="video/mp4" /></video></div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial="hidden" animate="visible" variants={fadeInVariants} className="absolute left-[1669px] top-[55px] bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] h-[53.368px] w-[173.286px] rounded-[14.424px] flex items-center justify-center cursor-pointer hover:bg-[rgba(255,255,255,0.15)] transition-all" data-node-id="552:4915">
          <p className="[word-break:break-word] inter-regular font-normal text-[#f2f2f2] text-[22.357px] whitespace-nowrap" data-node-id="552:4917">
            CONTACT
          </p>
        </motion.div>
        <div className="absolute h-[60px] left-[66px] top-[52px] w-[130px]" data-node-id="552:4918" data-name="ft_logo 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFtLogo2} />
        </div>
        <div className="absolute contents left-[164px] top-[608px]" data-node-id="552:4919">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial="hidden" animate="visible" variants={fadeUpVariants} className="absolute left-[170px] top-[835px] bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] h-[74px] w-[374px] rounded-[20px] flex items-center justify-center cursor-pointer hover:bg-[rgba(255,255,255,0.15)] transition-all" data-node-id="552:4920">
            <p className="[word-break:break-word] inter-regular font-normal text-[26px] text-white whitespace-nowrap" data-node-id="552:4922">
              Explore CoAsia SEMI
            </p>
          </motion.div>
          <div className="[word-break:break-word] absolute inter-bold font-bold leading-[0] left-[164px] not-italic text-[40px] text-white top-[608px] whitespace-nowrap" data-node-id="552:4923">
            <p className="leading-[normal] mb-0">눈에 보이지 않지만</p>
            <p className="leading-[normal]">없으면 세상이 멈춥니다</p>
          </div>
          <p className="[word-break:break-word] absolute inter-regular font-normal leading-[normal] left-[167px] not-italic text-[24px] text-white top-[724.61px] tracking-[5.52px] whitespace-nowrap" data-node-id="552:4924">
            Designing the Invisible
          </p>
        </div>
        <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex inter-regular font-normal gap-[44.714px] items-center leading-[normal] left-[calc(50%-0.07px)] not-italic text-[25.963px] text-center text-white top-[67px] whitespace-nowrap" data-node-id="552:4925">
          <p className="relative shrink-0 cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4926">
            ABOUT
          </p>
          <p className="relative shrink-0 cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4927">
            BUSINESS
          </p>
          <p className="relative shrink-0 cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4928">
            TECHNOLOGY
          </p>
          <p className="relative shrink-0 cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4929">
            INSIGHTS
          </p>
          <p className="relative shrink-0 cursor-pointer hover:text-[#47e0ff] transition-colors" data-node-id="552:4930">
            CAREERS
          </p>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col h-[619px] items-start left-1/2 pb-[53px] pt-[91px] px-[151px] top-[8111px] w-[1920px]" data-node-id="567:198">
        <div className="content-stretch flex flex-col gap-[43px] items-center relative shrink-0 w-[1618px]" data-node-id="567:173">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.8 }} variants={fadeUpVariants} className="[word-break:break-word] inter-regular font-normal leading-[normal] not-italic relative shrink-0 text-[45.378px] text-black text-center w-full" data-node-id="552:4879">{`Latest Insights & News`}</motion.p>
          <div className="content-stretch flex gap-[25px] items-center relative shrink-0 w-full group/news" data-node-id="567:172">
            <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 flex-1 transition-all duration-700 ease-out group-hover/news:flex-[0.85] hover:!flex-[1.3] cursor-pointer group/item overflow-hidden isolate transform-gpu" data-node-id="567:169">
              <div className="h-[240px] relative shrink-0 w-full overflow-hidden isolate transform-gpu" data-node-id="552:4894" data-name="Futuristic_SoC_die_nanostructures_202605131000 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105" src={imgFuturisticSoCDieNanostructures2026051310001} />
                </div>
              </div>
              <div className="[word-break:break-word] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-[18.646px] min-w-[520px] transition-all duration-700 ease-out" data-node-id="552:4890">
                <p className="col-1 inter-regular font-normal h-[24.15px] leading-[normal] ml-0 mt-0 relative row-1 text-[#989898] w-[108.484px]" data-node-id="552:4891">
                  April 5,2026
                </p>
                <p className="col-1 inter-regular font-normal h-[24.15px] leading-[normal] ml-0 mt-[94.5px] relative row-1 text-[#505050] w-[114.567px]" data-node-id="552:4892">{`Read More >`}</p>
                <p className="col-1 inter-bold font-bold h-[24.15px] leading-[normal] ml-[1.01px] mt-[34.65px] relative row-1 text-black w-[407.576px]" data-node-id="552:4893">
                  코아시아세미, 차세대 4nm SoC 설계 프로젝트 수주
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 flex-1 transition-all duration-700 ease-out group-hover/news:flex-[0.85] hover:!flex-[1.3] cursor-pointer group/item overflow-hidden isolate transform-gpu" data-node-id="567:170">
              <div className="h-[240px] relative shrink-0 w-full overflow-hidden isolate transform-gpu" data-node-id="552:4887" data-name="한국인으로_해_202605131045 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105" src={img2026051310451} />
                </div>
              </div>
              <div className="[word-break:break-word] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-[18.646px] min-w-[520px] transition-all duration-700 ease-out" data-node-id="552:4883">
                <p className="col-1 inter-regular font-normal h-[24.15px] leading-[normal] ml-0 mt-0 relative row-1 text-[#989898] w-[124.706px]" data-node-id="552:4884">
                  March 3,2026
                </p>
                <p className="col-1 inter-regular font-normal h-[24.15px] leading-[normal] ml-0 mt-[94.5px] relative row-1 text-[#505050] w-[114.567px]" data-node-id="552:4885">{`Read More >`}</p>
                <div className="col-1 inter-bold font-bold h-[48.3px] ml-0 mt-[33.6px] relative row-1 text-black w-[493.755px] whitespace-pre-wrap" data-node-id="552:4886">
                  <p className="leading-[normal] mb-0">{`2026 국제 반도체 전시회 참가 및 최신 자동차용 반도체 플랫폼 `}</p>
                  <p className="leading-[normal]">솔루션 최초 공개</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 flex-1 transition-all duration-700 ease-out group-hover/news:flex-[0.85] hover:!flex-[1.3] cursor-pointer group/item overflow-hidden isolate transform-gpu" data-node-id="567:171">
              <div className="h-[240px] relative shrink-0 w-full overflow-hidden isolate transform-gpu" data-node-id="552:4901" data-name="사이즈_다시_202605131116 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105" src={img2026051311161} />
                </div>
              </div>
              <div className="[word-break:break-word] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-[18.646px] min-w-[520px] transition-all duration-700 ease-out" data-node-id="552:4897">
                <p className="col-1 inter-regular font-normal h-[24.15px] leading-[normal] ml-0 mt-0 relative row-1 text-[#989898] w-[114.567px]" data-node-id="552:4898">
                  Sep 20,2025
                </p>
                <p className="col-1 inter-regular font-normal h-[24.15px] leading-[normal] ml-0 mt-[95.55px] relative row-1 text-[#505050] w-[114.567px]" data-node-id="552:4899">{`Read More >`}</p>
                <div className="col-1 inter-bold font-bold h-[48.3px] ml-0 mt-[35.7px] relative row-1 text-black w-[484.631px] whitespace-pre-wrap" data-node-id="552:4900">
                  <p className="leading-[normal] mb-0">{`글로벌 디자인 센터 거점 확대 및 북미·베트남 현지 밀착형 고객 `}</p>
                  <p className="leading-[normal]">기술 지원 강화</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
  );
}
