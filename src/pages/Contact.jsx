import React from "react";
import Stairs from "./../components/Stairs/stairs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiSparkles } from "react-icons/hi2";
import { PiStarFourFill } from "react-icons/pi";

export default function Contact() {
  const handleClick = () => {
    navigator.clipboard.writeText("rinkychagan@gmail.com").then(() => {
      toast("Copied!");
    });
  };

  return (
    <div>
      <Stairs>
        <div className="min-h-screen bg-[#F1DCC9] py-6 flex flex-col justify-center items-center sm:py-8 text-[#F56C9A]">
          <div className="flex items-center mb-4 mt-2">
            <HiSparkles className="animate-pulse w-10 h-10 sm:w-10 sm:h-10 mr-2 rotate-12" />
            <h3 className="font-bold text-4xl sm:text-5xl lg:text-6xl font-bree-serif text-center">
              Contact me here:
            </h3>
            <PiStarFourFill className="animate-pulse w-8 h-8 sm:w-10 sm:h-10 ml-2 pt-4 mt-8 -rotate-3" />
          </div>
          <button
            onClick={handleClick}
            className="text-xl sm:text-2xl hover:underline font-chivo mt-2"
          >
            rinkychagan@gmail.com
          </button>
          <ToastContainer position="top-center" />

          <a
            href="https://www.linkedin.com/in/rinky-chagan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl sm:text-2xl hover:underline font-chivo"
          >
            LinkedIn
          </a>
          <PiStarFourFill className="animate-pulse w-8 h-8 sm:w-10 sm:h-10 ml-12 pt-4 -rotate-3" />
        </div>
      </Stairs>
    </div>
  );
}
