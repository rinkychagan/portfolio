import React from "react";
import styles from "../styles/Home.module.css";
import Marquee from "../components/Marquee";
import Stairs from "./../components/Stairs/stairs";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimationText";
import Card from "../components/Projects/Projects";
import { data } from "../components/Projects/data";

export default function Home() {
  return (
    <Stairs>
      <main className="relative">
        <Hero />
        <AboutMe />
        <Marquee />
        <ProjectOne />
      </main>
    </Stairs>
  );
}

const Hero = () => {
  return (
    <section className="sticky top-0 bg-[#c63c6f] h-screen overflow-hidden ">
      <div className="h-screen w-screen items-center justify-center flex flex-col z-1 ">
        <AnimatedText text="rinky" />

        <p className={`text-sm mt-4 font-bree-serif text-[#fff]`}>
          junior fullstack developer
        </p>
        <div className={styles.arrow}></div>
      </div>
    </section>
  );
};

const AboutMe = () => {
  const FadeIn = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
      },
    },
  };

  return (
    <div className="bg-[#c6da83]  relative">
      <motion.div className="h-screen flex flex-col md:flex-row items-center justify-center p-4 text-[#333333]">
        <motion.div
          className="md:w-1/2 font-chivo flex md:flex-row flex-col md:gap-8"
          variants={FadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl md:text-8xl font-bold mb-4 font-bree-serif">
              Welcome!
            </h2>
          </div>
          <div className="md:mt-2 text-base md:text-lg mb-2">
            <p className="">
              I'm Rinky, a junior full-stack developer based in Portugal! I have
              a passion for creating dynamic and user-friendly web applications,
              with experience in both front-end and back-end development. I
              enjoy merging art with technology.
            </p>
            <p className="">
              I specialize in technologies such as React, Express.js,
              Tailwind.CSS, and I enjoy tackling new challenges and learning
              along the way.
            </p>
            <p className="">
              Here you will find some of the work I've done, I hope you enjoy!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const ProjectOne = () => {
  return (
    <motion.div className="bg-[#5C8357] relative">
      <div className="">
        {data.map((project, i) => {
          return <Card key={`p_${i}`} {...project} i={i} />;
        })}
      </div>
    </motion.div>
  );
};
