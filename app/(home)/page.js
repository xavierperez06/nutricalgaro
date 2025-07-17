import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import ReviewSlider from "@/components/ReviewSlider";
import { reviews, services } from "@/constants";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero
        title="Construyendo hábitos de autocuidado"
        message={`Salud digestiva\nSanar vínculo mente cuerpo alimento\nSalud hormonal femenina`}
      />
      <div className="yello-bg flex flex-col items-center justify-center self-center text-center">
        <AboutMe />
        <section id="servicios" className="mb-20 max-w-(--breakpoint-xl)">
          <h1 className="text-main-color lg:mg-10 m-5 text-5xl font-bold">
            ¿Cómo puedo ayudarte?
          </h1>
          <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service) => {
              return (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  img={service.img}
                  path={service.path}
                />
              );
            })}
          </div>
        </section>
      </div>
      <section className="mb-10 flex h-[500px] flex-col items-center justify-normal bg-[#FAE48D]">
        <h1 className="my-10 text-center text-2xl font-bold text-white sm:text-5xl">
          Amables palabras de mis pacientes
        </h1>
        <ReviewSlider slideInfo={reviews} />
      </section>
      <div className="mb-8 flex flex-col items-center justify-center self-center text-center">
        <section id="contacto">
          <h1 className="text-main-color m-10 text-5xl font-bold">Contacto</h1>
          <Contact />
        </section>
      </div>
    </div>
  );
}
