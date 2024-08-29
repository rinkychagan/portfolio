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
        className="h-[50em] w-[80em] rounded-lg flex items-center justify-center align-center shadow shadow-2xl"
        style={{
          backgroundColor: color,
          rotate: getRandomRotation(),
        }}
      >
        <motion.div
          ref={container}
          style={{ opacity: scrollYProgress }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 font-chivo"
        >
          <img
            src={image}
            alt="images"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="flex flex-col p-4 text-center md:text-left">
            <p className="text-xl md:text-2xl font-bold mb-2 font-teko ">
              {title}
            </p>
            <p className="mb-2">
              <span className="font-bold">Description:</span> {description}
            </p>
            <p className="mb-4 md:mb-8">
              <span className="font-bold">Technologies:</span> {technology}
            </p>
            <a href={github} className="self-center md:self-start">
              <FaGithubSquare className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
