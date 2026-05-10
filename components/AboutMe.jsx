"use client";

import { useRef } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import { useInView } from "framer-motion";
import imgAboutMe from "@/public/assets/images/AboutMe.jpg";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="sobremi" ref={ref}>
      <div className="my-5 flex flex-col items-center justify-center text-center md:flex-row md:space-x-5 md:text-left lg:my-10 lg:ml-5 lg:py-16">
        <div className="rounded-full p-2 md:mt-2 md:w-1/2">
          <Image
            src={imgAboutMe}
            alt="María Belén Calgaro - Nutricionista presencial y online en Rosario"
            width={400}
            height={400}
            className="rounded-full"
            sizes="(max-width: 768px) 100vw, 400px"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "400px",
            }}
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
