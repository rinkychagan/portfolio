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
