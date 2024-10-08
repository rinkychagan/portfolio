import React from "react";
import Stairs from "./../components/Stairs/stairs";
import { HiSparkles } from "react-icons/hi2";
import { PiStarFourFill } from "react-icons/pi";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Stairs>
      <div className="relative min-h-screen bg-[#CCEBD6]">
        <SectionOne />
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
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <section className="sticky top-0 bg-[#C6DA83] min-h-screen flex items-center justify-center px-4 py-6">
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 text-[#160923]"
        variants={FadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="flex-shrink-0">
          <PiStarFourFill className="text-[#F7E7CE] animate-wiggle w-10 h-10 sm:w-10 sm:h-10 mr-2 rotate-12" />
          <motion.img
            src="me.png"
            alt="Portrait of Rinky, a junior full-stack developer"
            className="w-64 lg:w-80 max-w-full object-cover -rotate-12"
          />
          <HiSparkles className="text-[#F7E7CE] animate-pulse w-10 h-10 sm:w-10 sm:h-10 rotate-12" />
        </div>
        <div className="text-center lg:text-left max-w-md lg:max-w-lg text-sm leading-relaxed font-bree-serif space-y-4">
          <HiSparkles className="text-[#F7E7CE] animate-pulse w-10 h-10 sm:w-10 sm:h-10 ml-20 rotate-12" />
          <motion.p
            className="text-lg font-semibold"
            variants={FadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <span className="text-3xl">H</span>ello there!
          </motion.p>
          <p>Nice to meet you!</p>
          <p>I'm Rinky, a junior full-stack developer from Portugal.</p>
          <p>
            I've been passionate about technology ever since I was a kid. It all
            started with my time on social media platforms like Tumblr, where
            everyone had these cool customized blogs. That’s probably where my
            love for web design began.
          </p>
          <p>
            Although I didn’t dive into the world of tech until recently, a
            chance encounter with a Bootcamp ad at a bus stop changed my life.
            That’s how I became a junior full-stack developer — thanks to a bus
            stop.
          </p>
          <p>
            I enjoy creating user-friendly and aesthetically pleasing
            experiences through front-end development.
          </p>
          <p>
            In my personal time, I like to get creative. I enjoy drawing and
            painting, both on paper and digitally, though I'm still learning how
            to render digitally. I’ve also recently started learning Blender. On
            top of that, I love crochet — one of my recent projects was a cozy
            sweater for winter. I’m also a big fan of concerts, cinema, and
            collecting figurines or music albums.
          </p>
          <p>
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
          <PiStarFourFill className="text-[#F7E7CE] animate-wiggle w-10 h-10 sm:w-10 sm:h-10 rotate-12" />
        </div>
        <HiSparkles className="text-[#F7E7CE] animate-pulse w-10 h-10 sm:w-20 sm:h-20 mr-2 mt-40 rotate-12" />
      </motion.div>
    </section>
  );
};
