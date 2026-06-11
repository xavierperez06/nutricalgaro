"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import ButtonLink from "./common/ButtonLink";
import AnimatedText from "./AnimatedText";

const Hero = ({ title, message }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Helper function to find and style "nutricion integrativa"
  const renderTitle = (text) => {
    if (!text) return null;
    const parts = text.split(/(nutrici[oó]n integrativa)/i);

    return parts.map((part, i) =>
      part.toLowerCase() === "nutricion integrativa" ||
      part.toLowerCase() === "nutrición integrativa" ? (
        <span
          key={i}
          className="mx-1 inline-block -rotate-2 transform rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-400 px-4 py-1 text-white shadow-md"
        >
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div
      className="hero-img relative mb-12 flex h-screen items-center justify-end overflow-hidden bg-cover bg-fixed"
      ref={ref}
    >
      {/* Main Glassmorphism Card */}
      <div className="relative z-2 flex w-full items-center justify-center lg:justify-end lg:pr-20">
        <div className="group flex max-w-[90%] flex-col items-center rounded-2xl border border-white/50 bg-white/55 p-4 text-center shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] lg:max-w-2xl xl:max-w-3xl xl:p-6 2xl:p-10">
          {title && (
            <h1 className="mb-4 text-2xl leading-[1.4] font-extrabold tracking-tight text-slate-700 lg:text-3xl 2xl:text-[34px]">
              {renderTitle(title)}
            </h1>
          )}

          <div className="mb-2 h-2 w-26 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200 opacity-80 transition-all duration-500 group-hover:w-40 xl:mb-6" />

          <AnimatedText
            text={message}
            className="inline-block text-left text-xl leading-relaxed font-medium text-slate-700"
            triggerAnimation={isInView}
          />
          <ButtonLink href="/#servicios" className="mt-6">
            Explorar servicios
          </ButtonLink>
        </div>
      </div>

      {/* Scrolling Text Marquee Container */}
      <div className="absolute bottom-0 left-0 z-10 flex w-full overflow-hidden border-t border-white/30 bg-white/40 py-3 backdrop-blur-sm">
        <motion.div
          className="flex w-max whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="mx-6 text-sm font-semibold tracking-[0.2em] text-slate-700 uppercase"
            >
              Entender tu cuerpo es el primer paso para cuidarlo mejor
              <span className="mx-6 text-yellow-500">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
