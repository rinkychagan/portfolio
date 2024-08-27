import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedText = ({ text }) => {
  const [fonts] = useState([
    "Arial",
    "Verdana",
    "Courier New",
    "Georgia",
    "Times New Roman",
    "Teko",
    "Bree Serif",
    "Chivo",
  ]);

  const [colors] = useState([
    "#94BAD0",
    "#F5B5CF",
    "#EBE2D0",
    "#A1C85A",
    "#C68BF5",
  ]);

  const [currentFonts, setCurrentFonts] = useState([]);
  const [letterColors, setLetterColors] = useState([]);
  const [isAnimating, setIsAnimating] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const initializeColors = () => {
      const uniqueColors = text.split("").map((_, index) => {
        return colors[index % colors.length];
      });

      setLetterColors(uniqueColors);
      setCurrentFonts(
        text.split("").map(() => {
          return fonts[Math.floor(Math.random() * fonts.length)];
        })
      );
    };

    initializeColors();

    const interval = setInterval(() => {
      if (isAnimating) {
        setCurrentFonts(
          text.split("").map(() => {
            return fonts[Math.floor(Math.random() * fonts.length)];
          })
        );
      }
    }, 400);

    return () => clearInterval(interval);
  }, [fonts, colors, text, isAnimating]);

  const handleToggle = () => {
    setIsAnimating((prev) => !prev);
    if (isAnimating) {
      controls.stop();
    } else {
      controls.start({});
    }
  };

  return (
    <div
      className="text-9xl"
      style={{ display: "flex", cursor: "pointer" }}
      onClick={handleToggle}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          animate={controls}
          style={{
            display: "inline-block",
            fontFamily: currentFonts[index],
            color: letterColors[index],
            transition: isAnimating ? "font-family 5s ease" : "none",
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
