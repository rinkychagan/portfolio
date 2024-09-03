import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedText = ({ text, fontSizeClass = "text-9xl" }) => {
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
    "#D3F9D8",
    "#F7E09C",
    "#87CEEB",
    "#E5D6F0",
    "#FFC0CB",
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
      className={`flex cursor-pointer ${fontSizeClass}`}
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
