import React from "react";
import Stairs from "./../components/Stairs/stairs";
import { HiSparkles } from "react-icons/hi2";
import { PiStarFourFill } from "react-icons/pi";
// import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  return (
    <Stairs>
      <div className="relative min-h-screen">
        <SectionOne />
        <SectionTwo />
      </div>
    </Stairs>
  );
}

const SectionOne = () => {
  const FadeIn = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0.2,
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <section className="sticky top-0 bg-[#C6DA83] min-h-screen flex items-center justify-center px-4 py-6">
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 text-[#160923] max-w-5xl mx-auto"
        variants={FadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="flex-shrink-0">
          <PiStarFourFill className="text-[#F7E7CE] animate-wiggle w-8 h-8 sm:w-10 sm:h-10 mr-2 rotate-12 hidden lg:block" />
          <motion.img
            src="me.png"
            alt="Portrait of Rinky, a junior full-stack developer"
            className="hidden lg:block w-64 lg:w-80 max-w-full object-cover -rotate-12"
          />
          <HiSparkles className="text-[#F7E7CE] animate-pulse w-8 h-8 sm:w-10 sm:h-10 rotate-12 hidden lg:block" />
        </div>
        <div className="text-center lg:text-left max-w-md lg:max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed font-bree-serif space-y-4">
          <HiSparkles className="text-[#F7E7CE] animate-pulse w-8 h-8 sm:w-10 sm:h-10 ml-20 rotate-12 hidden lg:block" />
          <motion.p
            className="text-lg font-semibold"
            variants={FadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <span className="text-3xl">H</span>ello there!
          </motion.p>
          <p className="text-sm sm:text-base">Nice to meet you!</p>
          <p className="text-sm sm:text-base">
            I'm Rinky, a junior full-stack developer from Portugal.
          </p>
          <p className="text-sm sm:text-base">
            I've been passionate about technology ever since I was a kid. It all
            started with my time on social media platforms like Tumblr, where
            everyone had these cool customized blogs. That’s probably where my
            love for web design began.
          </p>
          <p className="text-sm sm:text-base">
            Although I didn’t dive into the world of tech until recently, a
            chance encounter with a Bootcamp ad at a bus stop changed my life.
            That’s how I became a junior full-stack developer — thanks to a bus
            stop.
          </p>
          <p className="text-sm sm:text-base">
            I enjoy creating user-friendly and aesthetically pleasing
            experiences through front-end development.
          </p>
          <p className="text-sm sm:text-base hidden lg:block">
            In my personal time, I like to get creative. I enjoy drawing and
            painting, both on paper and digitally, though I'm still learning how
            to render digitally. I’ve also recently started learning Blender. On
            top of that, I love crochet — one of my recent projects was a cozy
            sweater for winter. I’m also a big fan of concerts, cinema, and
            collecting figurines or music albums.
          </p>
          <p className="text-sm sm:text-base">
            Thank you for taking the time to learn a bit about me! I'm currently
            exploring new opportunities and would love to connect. Please feel
            free to
            <a
              className="hover:underline cursor-pointer ml-1 mr-1"
              href="cvdownload.pdf"
              download="cvdownload.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              download my CV
            </a>
            to learn more about my skills and experience. Don’t hesitate to
            reach out, I look forward to hearing from you!
          </p>
          <PiStarFourFill className="text-[#F7E7CE] animate-wiggle w-8 h-8 sm:w-10 sm:h-10 rotate-12 hidden lg:block" />
        </div>
        <HiSparkles className="text-[#F7E7CE] animate-pulse w-8 h-8 sm:w-10 sm:h-10 mr-2 mt-40 rotate-12 hidden lg:block" />
      </motion.div>
    </section>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SectionTwo = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [600, 800], [0, 1]);
  const translateY = useTransform(scrollY, [700, 800], [20, 0]);

  return (
    <motion.section
      style={{ opacity, y: translateY }}
      className="relative min-h-screen flex items-center justify-center bg-[#F56C9A] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-[#FFC1E3]"
        animate={{
          scale: [1, 1.05, 1],
          transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        style={{ zIndex: -1 }}
      />
      <motion.div className="flex md:flex-row flex-col items-center gap-12 px-6 py-8 text-[#448158] relative">
        <h2 className="text-4xl md:text-8xl font-bold mb-4 font-bree-serif">
          Skills_
        </h2>
        <div className="grid gap-6 max-w-4xl w-full text-base md:text-lg font-bree-serif md:mb-4">
          {[
            "Frontend: React, JavaScript, HTML/CSS, Tailwind CSS",
            "Backend: Node.js, MongoDB, Express",
            "Design Tools: Figma, AutoCAD, 3ds Max",
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center min-w-[300px] bg-[#FFF1F4] p-4 rounded-lg border-2 border-[#F56C9A] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p>
                <span className="font-bold">{skill.split(":")[0]}:</span>{" "}
                {skill.split(":")[1]}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};
