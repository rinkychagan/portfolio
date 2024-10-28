import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const openOrClosed = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.7, 0, 0.24, 1],
        staggerChildren: 0.3,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.5, ease: [0.7, 0, 0.24, 1] },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.7, 0, 0.24, 1],
      },
    },
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-transparent z-50">
        <a
          href="/home"
          className="text-[#c63c6f] font-chivo font-semibold text-lg"
        >
          rinky
        </a>
        <div className="flex justify-end">
          <TiThMenu
            className="w-12 h-12 bg-[#E3F2E1] p-2 rounded-full cursor-pointer text-[#c63c6f]"
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        </div>
      </div>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            className="fixed top-0 right-0 w-full h-full bg-[#E3F2E1] z-40 flex flex-col justify-between items-center text-4xl lg:w-[20%] shadow shadow-lg"
            variants={openOrClosed}
            animate={openMenu ? "open" : "closed"}
            initial={"closed"}
          >
            <div className="flex flex-col items-center justify-center flex-grow font-teko">
              <motion.a
                href="/home"
                className="block p-4 text-[#c63c6f] hover:underline"
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                Home
              </motion.a>
              <motion.a
                href="/about"
                className="block p-4 text-[#c63c6f] hover:underline"
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                About
              </motion.a>
              <motion.a
                href="/projects"
                className="block p-4 text-[#c63c6f] hover:underline"
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                Projects
              </motion.a>
              <motion.a
                href="/contact"
                className="block p-4 text-[#c63c6f] hover:underline"
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                Contact
              </motion.a>
            </div>
            <div className="flex space-x-4 mb-8">
              <motion.a
                href="https://www.linkedin.com/in/rinky-chagan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 text-[#c63c6f] hover:underline text-sm font-chivo"
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/rinkychagan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 text-[#c63c6f] hover:underline text-sm font-chivo"
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                Github
              </motion.a>
              <motion.a
                href="cvdownload.pdf"
                download="cvdownload.pdf"
                className="p-4 text-[#c63c6f] hover:underline text-sm font-chivo"
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
