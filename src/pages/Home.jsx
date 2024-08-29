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
    <section
      section
      className="sticky top-0 bg-[#448158] h-screen overflow-hidden "
    >
      <div className="h-screen w-screen items-center justify-center flex flex-col z-1 ">
        <AnimatedText text="rinky" />

        <p className={`text-sm mt-4 font-bree-serif text-[#EBE2D0]`}>
          junior fullstack developer
        </p>
        <div className={styles.arrow}></div>
      </div>
    </section>
  );
};

const AboutMe = () => {
  return (
    <div className="bg-[#F56C9A] relative">
      <div className="h-screen flex flex-col md:flex-row items-center justify-center p-4 text-[#EBE2D0]">
        <div className="md:w-1/2 font-teko">
          <h2 className="text-2xl md:text-6xl font-bold mb-2 font-lilita-one">
            Welcome!
          </h2>
          <p className="text-base md:text-2xl mb-2">
            I'm Rinky, a junior full-stack developer based in Portugal! I have a
            passion for creating dynamic and user-friendly web applications,
            with experience in both front-end and back-end development. I enjoy
            merging art with technology.
          </p>
          <p className="text-base md:text-2xl mb-2">
            I specialize in technologies such as React, Express.js,
            Tailwind.CSS, and I enjoy tackling new challenges and learning along
            the way.
          </p>
          <p className="text-base md:text-2xl">
            Here you will find some of the work I've done, I hope you enjoy!
          </p>
        </div>
      </div>
    </div>
  );
};

const ProjectOne = () => {
  return (
    <motion.div className="bg-[#F5B5CF] relative">
      <div className="">
        {data.map((project, i) => {
          return <Card key={`p_${i}`} {...project} i={i} />;
        })}
      </div>
    </motion.div>
  );
};
