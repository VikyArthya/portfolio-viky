"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500">Hello, I'm{""}</span>
            <br />
            <TypeAnimation sequence={["Viky Arthya", 1000, "Web Developer", 1000, "Fullstack Developer", 1000]} wrapper="span" speed={50} repeat={Infinity} />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            I am a passionate web developer with expertise in Laravel, PHP, MySQL, PostgreSQL, Next.Js, and Tailwind CSS. I have a strong interest and talent in web development, covering both frontend and backend aspects.
          </p>
          <Link
            href="/#contact"
            className="px-6 py-3 inline-block w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500
 hover:bg-slate-200 text-white"
          >
            Hire Me
          </Link>
          <button
            className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500
 hover:bg-slate-800 text-white  mt-3"
          >
            <Link href="https://drive.google.com/file/d/12vQDy7aRa0EGhviea1z7a7XJVu8cX7mj/view" className="block bg-[#121212 hover:bg-yellow-400 rounded-full px-5 py-2">
              Download CV
            </Link>
          </button>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] overflow-hidden relative">
            <Image src="/images/profil.png" alt="Hero Image" width={400} height={400} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
