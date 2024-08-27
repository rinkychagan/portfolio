import React from "react";
import styles from "../styles/Home.module.css";
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
      className="sticky top-0 bg-[#448158] h-screen overflow-hidden
        "
    >
      <div className="h-screen w-screen items-center justify-center flex flex-col z-1 ">
        <AnimatedText text="rinky" />

        <p className={`text-sm mt-4 font-bree-serif text-[#EBE2D0]`}>
          junior fullstack developer from Portugal
        </p>
        <div className={styles.arrow}></div>
      </div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className={styles.border}>
      <div className={styles.skillp}>
        <p>
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
        </p>
      </div>
      <div className={styles.skillp}>
        <p>
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
          PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS • PROJECTS •
        </p>
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
