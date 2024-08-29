import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full h-24 overflow-hidden bg-[#ebe2d0] flex items-center relative">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        <p className="text-[#448158] text-5xl font-lilita-one font-normal">
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
        </p>
        <p className="text-[#448158] text-5xl font-lilita-one font-normal">
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
