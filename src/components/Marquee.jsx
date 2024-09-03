import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Marquee = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      x: -scrollY * 0.3,
      transition: { duration: 0, ease: "linear" },
    });
  }, [scrollY, controls]);

  return (
    <div className="w-full h-24 overflow-hidden bg-[#E3F2E1] flex items-center relative">
      <motion.div
        className="flex whitespace-nowrap"
        animate={controls}
        style={{ whiteSpace: "nowrap", display: "flex" }}
      >
        <p className="text-[#5C8357] text-5xl font-lilita-one font-normal">
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
        </p>
      </motion.div>
    </div>
  );
};

export default Marquee;
