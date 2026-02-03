"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Hero = ({ title, message }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="hero-img relative mb-12 flex h-screen items-center justify-center bg-cover bg-fixed"
      ref={ref}
    >
      {/* overlay */}
      <div className="absolute top-0 right-0 bottom-0 left-0 z-2 bg-black/50" />
      <div className="z-2 -mt-40 p-5 text-white">
        {title && <h1 className="text-6xl font-bold">{title}</h1>}
        <AnimatedText
          text={message}
          className="inline-block py-5 text-left text-4xl text-white"
          triggerAnimation={isInView}
        />
      </div>
    </div>
  );
};

export default Hero;
