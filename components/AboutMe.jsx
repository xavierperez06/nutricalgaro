"use client";

import { useRef } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import { useInView } from "framer-motion";
import imgAboutMe from "@/public/assets/images/AboutMe.jpg";
import ButtonLink from "./common/ButtonLink";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="sobremi" ref={ref}>
      <div className="my-5 flex flex-col items-center justify-center p-4 text-center md:gap-8 md:text-left lg:my-10 lg:ml-5 lg:flex-row lg:py-16">
        <div className="flex justify-center rounded-full p-2 md:mt-2 lg:justify-end">
          <div className="hover-3d w-full max-w-[400px]">
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
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="md:mt-2 lg:w-3/5">
          <AnimatedText
            text="Quién soy"
            className="mt-6 text-2xl font-bold text-slate-700 md:mt-0 md:text-5xl"
            triggerAnimation={isInView}
          />
          <div className="text-content l mt-3 space-y-4 text-justify md:mb-6">
            <p>
              Soy{" "}
              <span className="text-main-color text-xl font-semibold">
                María Belén Calgaro
              </span>
              , <span className="font-semibold">Licenciada en Nutrición</span>{" "}
              egresada de la Universidad Nacional del Litoral.
            </p>
            <p>
              Desde <span className="font-semibold">hace más de 10 años</span>{" "}
              acompaño a personas en{" "}
              <span className="font-semibold">
                procesos de cambio de hábitos
              </span>
              , ayudándolas a mejorar su salud desde una mirada integral y
              basada en evidencia científica.
            </p>
            <p>
              A lo largo de los años he confirmado algo que veo todos los días
              en la consulta:{" "}
              <span className="font-semibold">
                la alimentación importa mucho, pero rara vez explica por sí sola
                lo que le ocurre a una persona.
              </span>{" "}
              Por eso, además de la alimentación, trabajo considerando factores
              como el descanso, el estrés, el movimiento, la salud emocional,
              las rutinas y el contexto en el que cada persona vive.{" "}
            </p>
            <p className="text-center text-gray-500 italic">
              Mi objetivo es comprender qué puede estar influyendo en tu salud y
              ayudarte a encontrar estrategias efectivas, realistas y
              sostenibles para tu vida cotidiana.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <ButtonLink href="/sobre-mi" className="shadow-md">
                Conocé mi historia
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
