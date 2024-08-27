import React from "react";
import { motion } from "framer-motion";

export default function NoPage() {
  return (
    <div div className="relative overflow-hidden">
      <Content />
      <Static />
    </div>
  );
}

const Static = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[10%]"
    />
  );
};

const Content = () => {
  return (
    <section>
      <div className="h-screen text-center flex justify-center items-center flex-col text-white">
        <p className="text-6xl mb-2 font-bree-serif">...OOPS! Error 404!</p>
        <p className=" mb-2 font-chivo text-xl">This page doesn’t exist!</p>
        <div className="font-chivo flex flex-row">
          <a href="/home" className="hover:text-[#A1C85A]">
            Home
          </a>
        </div>
      </div>
    </section>
  );
};
