import React from "react";
import Stairs from "./../components/Stairs/stairs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiSparkles } from "react-icons/hi2";
import { PiStarFourFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const handleClick = () => {
    navigator.clipboard
      .writeText("rinkychagan@gmail.com")
      .then(() => {
        toast.success("Copied!");
      })
      .catch((err) => {
        toast.error("Failed to copy!");
        console.error("Clipboard write failed", err);
      });
  };

  const TypewriterText = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }, [currentIndex, text]);

    return (
      <h3 className="font-bold text-4xl sm:text-5xl lg:text-6xl font-bree-serif text-center mb-4 text-[#4a3a69]">
        {displayedText}
      </h3>
    );
  };

  return (
    <div>
      <Stairs>
        <div className="min-h-screen bg-[#D6E6D2] py-6 flex flex-col justify-center items-center sm:py-8 text-[#4a3a69]">
          <div className="flex flex-col sm:flex-row items-center mb-4 mt-2">
            <HiSparkles className="animate-wiggle w-10 h-10 sm:w-20 sm:h-20 mr-2 rotate-12 text-[#c63c6f]" />

            <TypewriterText className="" text="Contact me here:" />

            <PiStarFourFill className="animate-pulse w-8 h-8 sm:w-10 sm:h-10 ml-2 mt-4 -rotate-3 text-[#c63c6f]" />
          </div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <button
              onClick={handleClick}
              className="text-xl sm:text-2xl bg-[#c63c6f] text-[#FCF0E4] px-4 py-2 rounded hover:bg-[#882449] focus:outline-none focus:ring-2 focus:ring-[#A8D5BA] mb-4"
              aria-label="Copy email address to clipboard"
            >
              rinkychagan@gmail.com
            </button>
            <ToastContainer position="top-center" />

            <a
              href="https://www.linkedin.com/in/rinky-chagan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl hover:underline font-chivo text-[#4a3a69]"
              aria-label="Visit Rinky Chagan's LinkedIn profile"
            >
              LinkedIn
            </a>
          </motion.div>

          <PiStarFourFill className="animate-wiggle w-8 h-8 sm:w-10 sm:h-10 mt-4 -rotate-3 text-[#c63c6f]" />
        </div>
      </Stairs>
    </div>
  );
}
