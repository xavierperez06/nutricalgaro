import Image from "next/image";
import AnimatedText from "./AnimatedText";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="flex text-center flex-col items-center justify-center my-10 py-16 md:flex-row md:space-x-5 md:text-left">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full"
            src="/assets/images/AboutMe_Profile.jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <AnimatedText
            text="Hola, me llamo María Belén!"
            className="text-4xl mt-6 font-bold md:text-7xl md:mt-0"
          />
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            Soy{" "}
            <span className="font-semibold text-main-color">
              Licenciada en Nutrición{" "}
            </span>
            y tengo los cachetes más besables del planeta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
