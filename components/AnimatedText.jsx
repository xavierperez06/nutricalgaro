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
    <div className="flex items-center overflow-hidden py-2">
      <motion.h1
        className={`inline-block text-black ${className}`}
        variants={textAnimation}
        initial="initial"
        animate={triggerAnimation ? "animate" : "initial"}
      >
        {text.split("\n").map((line, lineIdx) => (
          <span key={`line-${lineIdx}`}>
            {line.split(" ").map((word, wordIdx) => (
              <motion.span
                key={`word-${lineIdx}-${wordIdx}`}
                variants={wordAnimation}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
            <br />
          </span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
