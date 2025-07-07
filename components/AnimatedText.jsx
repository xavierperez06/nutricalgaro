"use client";

import { motion } from "framer-motion";

const textAnimation = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08, // It will delay each children by 0.08 seconds, so each word can appear in different time
    },
  },
};

const wordAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "", triggerAnimation = false }) => {
  return (
    <div className="py-2 flex items-center justify-center overflow-hidden">
      <motion.h1
        className={`inline-block text-black ${className}`}
        variants={textAnimation}
        initial="initial"
        animate={triggerAnimation ? "animate" : "initial"}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            variants={wordAnimation}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
