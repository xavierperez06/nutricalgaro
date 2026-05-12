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
          <h2 className="text-main-color lg:mg-10 m-5 text-5xl font-bold">
            ¿Cómo puedo ayudarte?
          </h2>
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
      <section className="mb-16 flex min-h-[500px] flex-col items-center justify-center bg-gradient-to-b from-[#FAE48D] to-[#f7db69] px-4 py-20">
        <div className="w-full max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-gray-400 sm:text-5xl">
            Amables palabras de mis pacientes
          </h2>

          <div className="mx-auto w-full">
            <ReviewSlider slideInfo={reviews} />
          </div>
        </div>
      </section>
      <div className="mb-8 flex flex-col items-center justify-center self-center text-center">
        <section id="contacto">
          <h2 className="text-main-color m-10 text-5xl font-bold">Contacto</h2>
          <Contact />
        </section>
      </div>
    </div>
  );
}
