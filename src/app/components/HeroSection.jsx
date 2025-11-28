"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500">Hello, I'm{""}</span>
            <br />
            <TypeAnimation sequence={["Viky Arthya Saputra", 1000, "Web Developer", 1000, "ERP Developer", 1000]} wrapper="span" speed={50} repeat={Infinity} />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Experienced ERP (Odoo) and Web Developer focused on integrating powerful enterprise systems. I create user-friendly solutions that streamline workflows and empower business scalability.
          </p>
          <Link
            href="/#contact"
            className="px-6 py-3 inline-block w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500
 hover:bg-slate-200 text-white"
          >
            Hire Me
          </Link>
          <button
            onClick={openModal}
            className="px-6 py-3 w-full sm:w-fit rounded-full mt-3 border-2 border-yellow-400 text-yellow-400 font-medium hover:bg-yellow-400 hover:text-[#181818] transform hover:scale-105 transition-all duration-300"
          >
            Show CV
          </button>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="group relative">
            <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] overflow-hidden relative border-2 border-yellow-400 transition-all duration-300 group-hover:border-yellow-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-yellow-400/50">
              <Image src="/images/profil.png" alt="Hero Image" width={400} height={400} className="object-cover w-full h-full" />
            </div>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 scale-150 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* CV Modal Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-6"
          onClick={closeModal}
        >
          <div
            className="relative bg-[#181818] rounded-lg max-w-6xl w-full h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-white text-xl font-semibold">My Curriculum Vitae</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-3xl font-bold leading-none transition-colors duration-300"
              >
                ×
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden p-6">
              <iframe
                src="/assets/Viky Arthya Saputra - CV.pdf"
                className="w-full h-full rounded-lg border border-gray-600 bg-white"
                title="CV - Viky Arthya Saputra"
                style={{ border: 'none' }}
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-4 border-t border-gray-700">
              <a
                href="/assets/Viky Arthya Saputra - CV.pdf"
                download="Viky Arthya Saputra - CV.pdf"
                className="px-4 py-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-yellow-400/30 transform hover:scale-105 transition-all duration-300"
              >
                Download PDF
              </a>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-700 text-gray-300 text-sm font-medium rounded-full hover:bg-gray-600 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
