import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black/95 backdrop-blur-lg text-white py-12">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <Link href="/" className="group relative inline-block mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400 transition-all duration-300 group-hover:border-yellow-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-400/50">
                <Image src="/images/profil.png" alt="Viky Arthya" width={100} height={100} className="object-cover w-full h-full" />
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 scale-150"></div>
            </Link>
            <p className="text-sm text-gray-400">"Building Scalable Solutions for Modern Business."</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { title: "About", path: "#about" },
              { title: "Projects", path: "#projects" },
              { title: "Contact", path: "#contact" }
            ].map((link, index) => (
              <div key={index} className="relative group">
                <Link
                  href={link.path}
                  className="relative text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium group-hover:text-yellow-400"
                >
                  {link.title}
                </Link>
                {/* Underline effect */}
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Viky Arthya Saputra.</p>
            <p className="text-xs mt-1">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
