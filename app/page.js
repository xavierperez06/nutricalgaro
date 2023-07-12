import Hero from "../components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Instagram from "@/components/Instagram";
import AboutMe from "@/components/AboutMe";

import ImgRecetas from "@/public/assets/images/Recetas.jpg";
import ImgTalleres from "@/public/assets/images/Talleres.jpg";
import ImgOnline from "@/public/assets/images/AtencionOnline.jpg";
import ImgPresencial from "@/public/assets/images/AtencionPresencial.jpg";
import Contact from "@/components/Contact";
import ReviewSlider from "@/components/ReviewSlider";
import { reviews } from "@/constants";
import Map from "@/components/Map";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero
        title="Nutricalgaro"
        message="Acompaño procesos. Cambio de hábitos. Salud digestiva. Relación sana comida-cuerpo-mente"
      />
      <div className="flex flex-col self-center justify-center text-center items-center">
        <AboutMe />
        <section id="services" className="max-w-screen-xl mb-20">
          <h1 className="text-5xl font-bold text-main-color m-10">Servicios</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 p-4 ">
            <ServiceCard
              title="Recetas"
              description="Las más ricas y sanas recetas que vas a encontrar en todo internet jeje"
              img={ImgRecetas}
            />
            <ServiceCard
              title="Talleres"
              description="Talleres enfocado en mejorar tu alimentación de manera personalizada y rica."
              img={ImgTalleres}
            />
            <ServiceCard
              title="Atención Online"
              description="Tu consultas también pueden ser por Whatsapp, Zoom, o Google Meets."
              img={ImgOnline}
            />
            <ServiceCard
              title="Atención Presencial"
              description="Talleres enfocado en mejorar tu alimentación de manera personalizada y rica."
              img={ImgPresencial}
            />
          </div>
        </section>
      </div>
      <section className="bg-[#FAE48D] h-[500px] flex flex-col justify-normal items-center mb-10">
        <h1 className="text-2xl font-bold text-white my-10 sm:text-5xl text-center">
          Amables palabras de mis pacientes
        </h1>
        <ReviewSlider slideInfo={reviews} />
      </section>
      <div className="flex flex-col self-center justify-center text-center items-center">
        <Instagram />
        <section>
          <h1 className="text-5xl font-bold text-main-color m-10">Contacto</h1>
          <Contact />
          <Map
            latitude={-32.95714561109396}
            longitude={-60.63709198858796}
            zoom={15}
          />
        </section>
      </div>
    </main>
  );
}
