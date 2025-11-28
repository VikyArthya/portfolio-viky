"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

// Custom CSS untuk menyembunyikan scrollbar
const scrollbarHide = `
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
`;

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="space-y-4">
        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-lg font-semibold text-white">Full Stack Developer</h3>
              <p className="text-blue-400 font-medium">Universitas Dian Nuswantoro</p>
            </div>
            <div className="text-sm text-gray-400">
              <p>Nov 2025 - Present</p>
              <p className="text-xs">Full-time</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-lg font-semibold text-white">Wordpress Developer Freelance</h3>
              <p className="text-blue-400 font-medium">Adspesialis</p>
            </div>
            <div className="text-sm text-gray-400">
              <p>Apr 2025 - Present</p>
              <p className="text-xs">Remote</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-lg font-semibold text-white">ERP Developer</h3>
              <p className="text-blue-400 font-medium">ERP INDONESIA</p>
              <p className="text-xs text-gray-400 mt-1">Odoo & 1Ci Enterprise</p>
            </div>
            <div className="text-sm text-gray-400">
              <p>Jun 2025 - Nov 2025</p>
              <p className="text-xs">Contract</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-lg font-semibold text-white">Full Stack Web Developer</h3>
              <p className="text-blue-400 font-medium">Obji Dev</p>
            </div>
            <div className="text-sm text-gray-400">
              <p>Dec 2024 - May 2025</p>
              <p className="text-xs">Full-time</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-4">
        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700">
          <div className="flex items-start">
            <div>
              <h3 className="text-lg font-semibold text-white">Programming Languages</h3>
              <p className="text-blue-400 mt-1">PHP, Python, JavaScript</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700">
          <div className="flex items-start">
            <div>
              <h3 className="text-lg font-semibold text-white">Frameworks & CMS</h3>
              <p className="text-blue-400 mt-1">Odoo, Laravel, Django, WordPress, React.js</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700">
          <div className="flex items-start">
            <div>
              <h3 className="text-lg font-semibold text-white">Databases</h3>
              <p className="text-blue-400 mt-1">PostgreSQL, MySQL</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700">
          <div className="flex items-start">
            <div>
              <h3 className="text-lg font-semibold text-white">Tools & Technologies</h3>
              <p className="text-blue-400 mt-1">Git, HTML, CSS, Tailwind CSS, Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-4">
        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-lg font-semibold text-white">Bachelor of Informatics Engineering</h3>
              <p className="text-blue-400 font-medium">Dian Nuswantoro University</p>
            </div>
            <div className="text-sm text-gray-400">
              <p>Expected 2026</p>
              <p className="text-xs">Undergraduate</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-lg font-semibold text-white">Software Engineering</h3>
              <p className="text-blue-400 font-medium">SMK 8 Semarang</p>
            </div>
            <div className="text-sm text-gray-400">
              <p>2021 - 2024</p>
              <p className="text-xs">Vocational High School</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <div className="space-y-4">
        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-lg font-semibold text-white">Golang Back End Development</h3>
              <p className="text-blue-400 font-medium">Lumoshive Academy</p>
              <Link href="https://bit.ly/vikyGolang" className="text-xs text-gray-400 hover:text-blue-400 mt-1 inline-block">
                View Certificate →
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              <p>2024</p>
              <p className="text-xs">Professional Certificate</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-lg font-semibold text-white">TOEFL Certification</h3>
              <p className="text-blue-400 font-medium">Dian Nuswantoro University</p>
              <Link href="https://bit.ly/vikyTOEFL" className="text-xs text-gray-400 hover:text-blue-400 mt-1 inline-block">
                View Certificate →
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              <p>2023</p>
              <p className="text-xs">Language Proficiency</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-lg font-semibold text-white">IT Support Professional</h3>
              <p className="text-blue-400 font-medium">PLN Jateng & DIY</p>
              <Link href="https://bit.ly/vikyPLN" className="text-xs text-gray-400 hover:text-blue-400 mt-1 inline-block">
                View Certificate →
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              <p>2023</p>
              <p className="text-xs">Professional Training</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-700">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div className="mb-2 sm:mb-0">
              <h3 className="text-lg font-semibold text-white">Data Statistician</h3>
              <p className="text-blue-400 font-medium">DISKOMINFO Jateng</p>
              <Link href="https://bit.ly/vikyDISKOMINFO" className="text-xs text-gray-400 hover:text-blue-400 mt-1 inline-block">
                View Certificate →
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              <p>2022</p>
              <p className="text-xs">Data Analysis Certificate</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <>
      <style jsx>{scrollbarHide}</style>
      <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/images/about.png"} width={500} height={500} className="rounded-3xl" alt="About Me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I build bridges between powerful enterprise systems and custom web solutions. As an experienced ERP Developer (Odoo) and a versatile Web Developer, my goal is to create seamless, efficient, and user-friendly applications that drive business growth. I am passionate about diving deeper into ERP systems and understanding the core business processes they empower.
          </p>
          <div className="overflow-x-auto mt-8 scrollbar-hide">
            <div className="flex flex-row justify-start space-x-2 min-w-max pb-2">
              <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                {""} Experience {""}
              </TabButton>
              <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                {""} Skills {""}
              </TabButton>
              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                {""} Education {""}
              </TabButton>
              <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>
                {""} Certification {""}
              </TabButton>
            </div>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutSection;
