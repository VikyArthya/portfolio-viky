"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found | Viky Arthya Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-[#181818] text-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Text with Gradient */}
          <h1 className="text-9xl font-bold mb-4 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-[#ADB7BE] mb-8 max-w-2xl mx-auto">
            The page you're looking for seems to have vanished into the digital void.
            Don't worry, even the best code sometimes has bugs!
          </p>
        </motion.div>

        {/* Error Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="relative mx-auto w-64 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative flex items-center justify-center h-full">
              <div className="text-6xl animate-bounce">🔍</div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 text-white font-medium rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
          >
             Back to Home
          </Link>

          <Link
            href="/#projects"
            className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-medium rounded-full hover:bg-yellow-400 hover:text-[#181818] transform hover:scale-105 transition-all duration-300 text-lg"
          >
             View My Projects
          </Link>
        </motion.div>

        {/* Fun Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-sm text-[#ADB7BE]"
        >
          <p className="mb-2">While you're here, did you know?</p>
          <p className="text-yellow-400 font-medium">
            "The first 404 error was created in 1993 by Tim Berners-Lee!"
          </p>
        </motion.div>

        {/* Navigation Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 pt-8 border-t border-[#333333]"
        >
          <p className="text-[#ADB7BE] mb-4">You might be interested in:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "About Me", href: "/#about" },
              { name: "Skills", href: "/#skills" },
              { name: "Projects", href: "/#projects" },
              { name: "Contact", href: "/#contact" }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-4 py-2 bg-[#333333] text-white text-sm rounded-full hover:bg-gradient-to-br hover:from-yellow-400 hover:via-amber-500 hover:to-orange-500 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;