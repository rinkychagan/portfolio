import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";

export default function Card({
  title,
  description,
  color,
  github,
  technology,
  image,
  i,
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "start start"],
  });

  const getRandomRotation = () => {
    return Math.random() * 10 - 5;
  };

  return (
    <div className="h-screen relative sticky top-0 flex items-center justify-center overflow-hidden">
      <motion.div
        className="h-[40em] w-full max-w-[70em] flex-shrink-0 flex-grow-0 rounded-lg flex flex-col items-center justify-center 
        bg-[#E3F2E1] text-[#C63C6F] p-6 md:p-12 overflow-hidden shadow-lg border-4 border-solid border-[#C63C6F]"
        style={{
          rotate: getRandomRotation(),
        }}
      >
        <p className="text-lg md:text-2xl font-bold mb-4 font-teko text-center w-full">
          {title}
        </p>
        <motion.div
          ref={container}
          style={{ opacity: scrollYProgress }}
          className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 p-4 md:p-6 font-chivo w-full h-full overflow-hidden"
        >
          <img
            src={image}
            alt={`Screenshot of ${title}`}
            className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 border-4 border-solid border-[#C63C6F]"
          />
          <div className="flex flex-col text-center md:text-left w-full md:w-auto  overflow-y-auto">
            <p className="mb-2 text-sm md:text-base">
              <span className="font-bold">Description:</span> {description}
            </p>
            <p className="mb-4 md:mb-8 text-sm md:text-base">
              <span className="font-bold">Technologies:</span> {technology}
            </p>
            <a href={github} className="self-center md:self-start">
              <FaGithubSquare className="w-8 h-8 text-[#C63C6F] hover:text-[#882449]" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
