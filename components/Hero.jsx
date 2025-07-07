"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Hero = ({ title, message }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover hero-img"
      ref={ref}
    >
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{title}</h2>
        <AnimatedText
          text={message}
          className="py-5 text-3xl text-white inline-block"
          triggerAnimation={isInView}
        />
      </div>
    </div>
  );
};

export default Hero;
