"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md"> I'm currently open to new opportunities. Feel free to reach out if you have any questions or collaboration ideas — I'll do my best to respond promptly.</p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/VikyArthya" target="_blank" rel="noopener noreferrer">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/vikyarthyasaputra/" target="_blank" rel="noopener noreferrer">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <div className="flex flex-col space-y-6 text-sm text-gray-100 bg-[#18191E] border border-[#33353F] rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <Image src="/images/gmail.png" alt="Email" width={20} height={20} />
            <div>
              <span className="block text-white font-medium">Email Me</span>
              <a href="mailto:vikyarthya1945@gmail.com" className="text-[#9CA2A9] hover:underline">
                vikyarthya1945@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} />
            <div>
              <span className="block text-white font-medium">WhatsApp Me</span>
              <a href="https://wa.me/6287735397457" target="_blank" rel="noopener noreferrer" className="text-[#9CA2A9] hover:underline">
                +62 877-3539-7457
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Image src="/images/instagram.png" alt="Instagram" width={20} height={20} />
            <div>
              <span className="block text-white font-medium">Instagram</span>
              <a href="https://instagram.com/vikyarthyaa" target="_blank" rel="noopener noreferrer" className="text-[#9CA2A9] hover:underline">
                @vikyarthyaa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
