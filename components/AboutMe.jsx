"use client";

import { useRef } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import { useInView } from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="sobremi" ref={ref}>
      <div className="my-5 flex flex-col items-center justify-center text-center md:flex-row md:space-x-5 md:text-left lg:my-10 lg:py-16">
        <div className="rounded-full md:mt-2 md:w-1/2">
          <Image
            className="rounded-full"
            src="/assets/images/AboutMe.jpg"
            alt="María Belén Calgaro - Nutricionista presencial y online en Rosario"
            width={400}
            height={400}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <AnimatedText
            text="Hola, me llamo María Belén!"
            className="mt-6 text-4xl font-bold md:mt-0 md:text-7xl"
            triggerAnimation={isInView}
          />
          <p className="mt-4 mb-6 text-lg md:text-2xl">
            Soy{" "}
            <span className="text-main-color font-semibold">
              Licenciada en Nutrición{" "}
            </span>
            y te ayudo a crear hábitos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
