import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#D8A1A8] flex flex-col items-center py-4">
      <p className="font-teko text-[#4A4A4A] text-center text-sm md:text-base">
        © {new Date().getFullYear()} Rinky Chagan. Coded and designed with love.
      </p>
      <div className="flex space-x-4 mt-2">
        <a
          href="https://www.linkedin.com/in/rinky-chagan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4A4A4A]  transition-colors duration-300"
          aria-label="Visit Rinky Chagan's LinkedIn profile"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/rinkychagan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4A4A4A]  transition-colors duration-300"
          aria-label="Visit Rinky Chagan's GitHub profile"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
}
