import React, { useEffect } from "react";
import styles from "../styles/About.module.css";

export default function About() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E9F99B";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.divider}>
          <div className={styles.text}>
            <div className={styles.about}>
              <h2 className={styles.abouttitle}>About Me</h2>
              <p className={styles.aboutparagraph}>
                Hey there! I'm Rinky Chagan, a Junior Fullstack Developer with a
                passion for blending technology and creativity. I recently
                graduated from the Bytes4Future bootcamp, where I honed my
                skills in the MERN stack and discovered my love for crafting
                user-friendly and visually stunning web experiences.{" "}
              </p>
              <p className={styles.aboutparagraph}>
                Before diving into the world of coding, I studied Equipment
                Design at art school, where I got my hands dirty with
                woodworking, AutoCAD, and 3ds Max. My artistic side is fueled by
                hobbies like crochet and drawing, which keep my creativity
                flowing and my patience sharp.
              </p>
              <p className={styles.aboutparagraph}>
                Fun fact: I used to be a dental assistant! This taught me the
                importance of precision, organization, and staying calm under
                pressure—all skills I bring to my coding projects.
              </p>
              <p className={styles.aboutparagraph}>
                When I'm not coding, you'll find me drawing/painting,
                crocheting, listening to music or gaming!
              </p>
              <p className={styles.aboutparagraph}>
                Let's create something amazing together!
              </p>
            </div>
          </div>
          <div className={styles.sep}>
            <div className={styles.photo}>PHOTO</div>
          </div>
        </div>
      </div>

      <div className={styles.border}>
        <div className={styles.skillp}>
          <p>
            SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS •
            SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS •
            SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS •
            SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS •
            SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS •
            SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS •
            SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS •
          </p>
        </div>
        <div className={styles.skillp}>
          <p>
            SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS •
            SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS •
            SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS •
            SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS •
            SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS •
            SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS •
            SKILLS • SKILLS • SKILLS • SKILLS • SKILLS • SKILLS •
          </p>
        </div>
      </div>

      <div className={styles.secondcontainer}>
        <div className={styles.listskills}>
          <div className={styles.education}>
            <p className={styles.title}>Education</p>
            <ul>
              <li>
                <p className={styles.year}>2024</p>
                <p className={styles.school}>Bytes4Future </p>
                <p className={styles.role}>Junior Full-stack Developer </p>
              </li>
              <li>
                <p className={styles.year}>2020-2021</p>
                <p className={styles.school}>SA Formações </p>
                <p className={styles.role}>Dentist Assistant Course </p>
              </li>
              <li>
                <p className={styles.year}>2016-2019</p>
                <p className={styles.school}>
                  Escola Artistica Antonio Arroio{" "}
                </p>
                <p className={styles.role}>Equipment Design</p>
              </li>
            </ul>
          </div>
          <div className={styles.experienceandtech}>
            <div className={styles.wall}>
              <div>
                <p className={styles.title}>Experience</p>
                <ul>
                  <li>
                    <p className={styles.year}>2021-2022</p>
                    <p className={styles.school}>Clinica Oral XXI</p>
                    <p className={styles.role}>Dentist’s Assistant</p>
                  </li>
                </ul>
              </div>
              <div>
                <p className={styles.title}>Technical Skills</p>
                <ul>
                  <div className={styles.twolist}>
                    <div className={styles.listing}>
                      <li className={styles.info}>HTML + CSS </li>
                      <li className={styles.info}>Figma</li>
                      <li className={styles.info}>Javascript</li>
                      <li className={styles.info}>React.js</li>
                    </div>
                    <div className={styles.listing}>
                      <li className={styles.info}>Next.js</li>
                      <li className={styles.info}>Express.js</li>
                      <li className={styles.info}>AutoCAD + 3DsMax</li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <p className={styles.title}>Languages</p>
            <ul className={styles.row}>
              <li className={styles.info}>Portuguese</li>
              <li className={styles.info}>Gujurati</li>
              <li className={styles.info}>English</li>
              <li className={styles.info}>Hindi</li>
            </ul>
          </div>

          <div>
            <p className={styles.title}>Soft Skills</p>
            <ul className={styles.row}>
              <li className={styles.info}>Timekeeping</li>
              <li className={styles.info}>Creativity</li>
              <li className={styles.info}>Organization</li>
              <li className={styles.info}>Attention to detail</li>
              <li className={styles.info}>Adaptability</li>
            </ul>
          </div>
        </div>

        <a
          className={styles.toaster}
          href="cv_rinky.pdf"
          download="cv_rinky.pdf"
        >
          <img src="toast.png" alt="toaster" />
        </a>
      </div>
    </div>
  );
}


const Homee = () => {

  return (
   

  )
}

 const HeroTry = ({ scrollYProgress }) => {
  return (
    <section className="sticky top-0 bg-pink-500">
      <div className=" h-screen flex items-center justify-center gap-2 flex-col ">
        <img className={` ${styles.logo}`} src="logo.png" alt="logo" />

        <p className={`text-start ${styles.job}`}>
          Junior Fullstack Developer || Rinky Chagan
        </p>

        <div className={styles.arrow}></div>
      </div>
    </section>
  );
};




const SectionTwo = () => {
  return (
    <section className="relative bg-yellow-200 h-screen">
      <div className=" h-screen flex items-center justify-center ">
        <div className="flex flex-col">
          <div className="bg-pink-400 max-w-xs border flex-1 p-8 rounded-md m-4 ">
            <h3 className="mb-5">Education</h3>
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <p className="mr-4">- </p>
                <div>
                  <p>2024</p>
                  <p>Bytes4Future</p>
                  <p>Junior Fullstack Developer</p>
                </div>
              </div>

              <div className="flex flex-row items-center">
                <p className="mr-4">-</p>

                <div>
                  <p>2021</p>
                  <p>SA Formação</p>
                  <p>Dental Assistant</p>
                </div>
              </div>

              <div className="flex flex-row items-center">
                <p className="mr-4">-</p>
                <div>
                  <p>2016 - 2019</p>
                  <p>Escola Artistica Antonio Arroio</p>
                  <p>Equipment Design</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-pink-400 rounded-md max-w-xs border flex-1 p-8 m-4">
            <h3 className="mb-5">Experience</h3>
            <div className="flex  flex-col">
              <div className="flex flex-row items-center">
                <p className="mr-4">- </p>
                <div>
                  <p>2021-2022</p>
                  <p>Oral XXI</p>
                  <p>Dental Assistant</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-pink-400 max-w-xs border flex-1 p-8 rounded-md m-4">
            <h3 className="mb-5">Technical Skills</h3>
            <div className="flex flex-col">
              <li>HTML + CSS</li>
              <li>Javascript</li>
              <li>React.JS</li>
              <li>Express.JS</li>
              <li>Mongo.DB</li>
              <li>AutoCAD + 3ds Max</li>
            </div>
          </div>

          <div className="bg-pink-400 max-w-xs  border flex-1 p-8 rounded-md m-4">
            <h3 className="mb-5">Soft Skills</h3>
            <div className="flex flex-col">
              <li>Creativity</li>
              <li>Timekeeping</li>
              <li>Curiosity</li>
              <li>Adaptability</li>
              <li>Self-motivation</li>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-pink-400 max-w-xs border  flex-1 p-8 rounded-md m-4">
            <h3 className="mb-5">Languages</h3>
            <div className="flex flex-col">
              <li>Portuguese</li>
              <li>Gujarati</li>
              <li>English</li>
              <li>Hindi</li>
            </div>
          </div>

          <div className="bg-pink-400 max-w-xs border flex-1 p-8 rounded-md m-4">
            <h3 className="mb-5">Hobbies</h3>
            <div className="flex flex-col">
              <li>Crochet</li>
              <li>Drawing + Painting</li>
              <li>Gaming</li>
              <li>Listening to music</li>
            </div>
          </div>
          <a href="cv_rinky.png" download="cv_rinky.png">
            <img className="w-52" src="cvdownload.png" alt="download my cv" />
          </a>
        </div>
      </div>
    </section>
  );
};



const SectionTwo = () => {
  return (
    <section className="relative bg-yellow-200 h-screen">
      <div className="min-h-screen flex flex-col items-center justify-center md:flex-row md:h-screen gap-4 md:gap-20">
        <div>
          <h4>Skills:</h4>
        </div>
        <div>
          <Accordion />
        </div>
      </div>
    </section>
  );
};


<div className="h-screen flex items-center justify-center flex-col">
          <p className={`text-[#D0F809] text-8xl ${styles.title} `}>
            Thank you
            <span className={`text-white ${styles.noshadow}`}>
              ,
              <br /> <span className="ml-20">let’s work together!</span>
            </span>
          </p>

          <div
            className={`text-end ml-12 mt-4 text-[#D0F809] ${styles.socials}`}
          >
            <div className="flex flex-row gap-2 items-center text-end">
              <FaLinkedin />
              <p>Rinky Chagan</p>
            </div>

            <div className="flex flex-row gap-2 items-center text-end">
              <MdEmail />
              <p>rinkychagan@gmail.com</p>
            </div>
          </div>
        </div>
      </section>


              <h1
          className={` text-[calc(25vw+2rem)] md:text-[calc(25vw+6rem)] leading-[.9] text-center w-full  ${styles.title}`}
        >
          <span className="text-green-200">r</span>
          <span className="text-white">i</span>
          <span className="text-green-200">n</span>
          <span className="text-yellow-200">k</span>
          <span className="text-white ">y</span>
        </h1>



const ProjectOne = ({ scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0.25, 0.5], [0, -100]);

  return (
    <motion.div className=" relative bg-teal-800 h-screen " style={{ y }}>
      <div className="h-screen flex items-center justify-center flex-row gap-24 pd-4">
        <img
          src="travel.png"
          alt="travel agency"
          className="w-1/2 shadow shadow-lg"
        />

        <div className="text-white w-1/3">
          <h4 className="text-5xl mb-5">WonderGo</h4>
          <p></p>
        </div>
      </div>
    </motion.div>
  );
};
const ProjectTwo = ({ scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0.5, 0.5], [0, -100]);

  return (
    <motion.section className="relative bg-gray-900 h-screen z-3" style={{ y }}>
      <div className="h-screen flex items-center justify-center flex-row gap-24 pd-4">
        <img
          src="eccomerce.png"
          alt="ecommerce website"
          className="w-1/2 shadow shadow-lg"
        />

        <div className="text-white w-1/3">
          <h4 className="text-5xl mb-5">Fabio's E-commerce Website</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            dolor ducimus earum non doloribus explicabo hic vero dolore
            voluptates, quia voluptatem perspiciatis nemo sequi consequatur
            sapiente aut alias? Iusto, quae. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Provident dolor ducimus earum non
            doloribus explicabo hic vero dolore voluptates, quia voluptatem
            perspiciatis nemo sequi consequatur sapiente aut alias? Iusto, quae.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            dolor ducimus earum non doloribus explicabo hic vero dolore
            voluptates, quia voluptatem perspiciatis nemo sequi consequatur
            sapiente aut alias? Iusto, quae. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Provident dolor ducimus earum non
            doloribus explicabo hic vero dolore voluptates, quia voluptatem
            perspiciatis nemo sequi consequatur sapiente aut alias? Iusto, quae.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            dolor ducimus earum non doloribus explicabo hic vero dolore
            voluptates, quia voluptatem perspiciatis nemo sequi consequatur
            sapiente aut alias? Iusto, quae.
          </p>
        </div>
      </div>
    </motion.section>
  );
};



import React, { useState } from "react";
import Stairs from "./../components/Stairs/stairs";
import { HiSparkles } from "react-icons/hi2";
import { PiStarFourFill } from "react-icons/pi";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/5 h-screen bg-[#557F59] flex flex-col items-center p-4">
        <button
          onClick={() => setActiveSection("about")}
          className={`text-2xl font-bold mb-4 ${
            activeSection === "about" ? "text-white" : "text-gray-300"
          }`}
        >
          About Me
        </button>
        <button
          onClick={() => setActiveSection("skills")}
          className={`text-2xl font-bold ${
            activeSection === "skills" ? "text-white" : "text-gray-300"
          }`}
        >
          Skills
        </button>
      </div>

      {/* Main Content */}
      <Stairs>
        <div className="w-4/5 min-h-screen">
          {activeSection === "about" ? <SectionOne /> : <SectionTwo />}
        </div>
      </Stairs>
    </div>
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

const SectionTwo = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [800, 1000], [1, 1]);
  const translateY = useTransform(scrollY, [800, 1000], [0.1, 0]);
  const bgColor = useTransform(scrollY, [800, 1000], ["#CCEBD6", "#FAF7F0"]);

  return (
    <motion.section
      style={{ backgroundColor: bgColor }}
      className="relative min-h-screen flex items-center justify-center"
    >
      <motion.div
        className="flex flex-col items-center gap-6 px-4 py-6"
        style={{ opacity, y: translateY }}
      >
        <h2 className="text-4xl font-semibold mb-4 font-bree-serif flex items-center text-[#557F59]">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center rounded-lg shadow-md p-4 bg-[#557F59] text-[#F4D8E6] ">
            <FaReact className="text-5xl mb-2" />
            <h3 className="text-xl font-bold font-chivo">Frontend</h3>
            <p className="font-bree-serif">React</p>
            <p className="font-bree-serif">JavaScript</p>
            <p className="font-bree-serif">HTML/CSS</p>
            <p className="font-bree-serif">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center rounded-lg shadow-md p-4 bg-[#F4D8E6] text-[#557F59]">
            <FaNodeJs className="text-5xl mb-2" />
            <h3 className="text-xl font-bold font-chivo">Backend</h3>
            <p className="font-bree-serif">Node.js</p>
            <p className="font-bree-serif">MongoDB</p>
            <p className="font-bree-serif">Express</p>
          </div>
          <div className="flex flex-col items-center rounded-lg shadow-md p-4 bg-[#557F59] text-[#F4D8E6] ">
            <FaFigma className="text-5xl mb-2" />
            <h3 className="text-xl font-bold font-chivo">Design Tools</h3>
            <p className="font-bree-serif">Figma</p>
            <p className="font-bree-serif">AutoCAD</p>
            <p className="font-bree-serif">3ds Max</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
