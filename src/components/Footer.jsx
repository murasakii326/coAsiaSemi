import React from 'react';

const Footer = () => {
  return (
    <footer className="w-[1920px] bg-black text-[#ddd] pt-[100px] pb-[40px] flex flex-col items-center">
      <div className="w-[1600px] flex justify-between items-start mb-[140px]">
        {/* Logo and Socials */}
        <div className="flex flex-col gap-[30px]">
          <div className="text-[32px] font-bold text-white tracking-widest leading-none">
            CoAsia<br/><span className="text-[12px] font-normal tracking-[0.2em] text-gray-400">SEMI Corporation</span>
          </div>
        </div>

        {/* Links Columns */}
        <div className="flex gap-[120px]">
          <div className="flex flex-col gap-[30px]">
            <h4 className="text-[20px] font-bold text-white">Company</h4>
            <ul className="flex flex-col gap-[12px] text-[16px] text-gray-400">
              <li><a href="#" className="hover:text-white">About CoAsia SEMI</a></li>
              <li><a href="#" className="hover:text-white">Management Team</a></li>
              <li><a href="#" className="hover:text-white">Corporate Responsibility (CSR)</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-[30px]">
            <h4 className="text-[20px] font-bold text-white">CAREERS</h4>
            <ul className="flex flex-col gap-[12px] text-[16px] text-gray-400">
              <li><a href="#" className="hover:text-white">Life at CoAsia SEMI</a></li>
              <li><a href="#" className="hover:text-white">Open Positions</a></li>
              <li><a href="#" className="hover:text-white">Internship Program</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-[30px]">
            <h4 className="text-[20px] font-bold text-white">Legal & Copyright</h4>
            <ul className="flex flex-col gap-[12px] text-[16px] text-gray-400">
              <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Cookie Settings</a></li>
              <li><a href="#" className="hover:text-white">Supply Chain Transparency</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-[30px]">
            <h4 className="text-[20px] font-bold text-white">Contact</h4>
            <ul className="flex flex-col gap-[12px] text-[16px] text-gray-400">
              <li>Phone : 031-3462-2353</li>
              <li>Gmail : inquiries@coasiasemi.com</li>
              <li>Address : 대한민국 경기도 오산시</li>
            </ul>
          </div>

          <div className="flex flex-col gap-[30px]">
            <h4 className="text-[20px] font-bold text-white">QUICK LINKS</h4>
            <ul className="flex flex-col gap-[12px] text-[16px] text-gray-400">
              <li><a href="#" className="hover:text-white">Sitemap</a></li>
              <li><a href="#" className="hover:text-white">Quality Management</a></li>
              <li><a href="#" className="hover:text-white">Brand Assets</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[1600px] border-t border-gray-800 pt-[40px] flex justify-center text-[16px] text-gray-500">
        &copy; 2026 CoAsia SEMI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
