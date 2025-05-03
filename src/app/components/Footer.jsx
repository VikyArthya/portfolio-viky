import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F] bg-[#0f0f0f] text-white py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo and Tagline */}
        <div className="text-center md:text-left">
          <Image src="/images/logo.png" alt="Logo" width={80} height={80} className="mx-auto md:mx-0 mb-2" />
          <p className="text-sm text-slate-400">Building with passion & precision.</p>
        </div>
        <div className="text-sm text-slate-500 text-center md:text-right">&copy; {new Date().getFullYear()} Viky. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
