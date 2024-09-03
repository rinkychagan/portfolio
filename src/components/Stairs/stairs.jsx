import React from "react";
import { motion } from "framer-motion";
import { opacity, expand } from "./anim";

export default function Layout({ children, backgroundColor }) {
  const anim = (variants, custom = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;

  return (
    <div className="stairs" style={{ backgroundColor }}>
      <motion.div
        {...anim(opacity)}
        className="transition-background fixed inset-0 bg-white z-10 pointer-events-none"
      />
      <div className="transition-container fixed inset-0 flex flex-col w-screen h-screen pointer-events-none z-20">
        {[...Array(nbOfColumns)].map((_, i) => {
          return (
            <motion.div
              key={i}
              {...anim(expand, nbOfColumns - i)}
              className="relative h-full w-full bg-white"
            />
          );
        })}
      </div>
      {children}
    </div>
  );
}
