"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc list-inside pl-2">
        <li>PHP</li>
        <li>Laravel, Codeigniter</li>
        <li>Git</li>
        <li>MySQL, PostgreSQL</li>
        <li>Next.Js, React.Js</li>
        <li>HTML, CSS, Javascript, Tailwind CSS, Bootsrap</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc list-inside pl-2">
        <li>Dian Nuswantoro University - Bachelor of Informatics Engineering</li>
        <li>SMK 8 Semarang - Software Engineering</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc list-inside pl-2">
        <li>Golang Back End - Lumoshive Academy</li>
        <li>TOEFL - Dian Nuswantoro University</li>
        <li>Data Statistician - DISKOMINFO Jateng</li>
        <li>IT Support - PLN Jateng & DIY</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/images/about.png"} width={500} height={500} className="rounded-3xl" alt="About Me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate web developer with expertise in Laravel, PHP, MySQL, PostgreSQL, React.js, and Tailwind CSS. I have a strong interest and talent in web development, covering both frontend and backend aspects.
          </p>
          <div className="flex flex-row justify-start mt-8">
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
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
