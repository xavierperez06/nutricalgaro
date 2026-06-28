import Hero from "@/components/Hero";
import Card from "@/components/Card";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import ReviewSlider from "@/components/ReviewSlider";
import { reviews, services } from "@/constants";
import Button from "@/components/common/Button";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero
        title="Nutrición integrativa para mejorar tu salud hormonal y digestiva desde hábitos sostenibles"
        highlightedText="Nutrición integrativa"
        message={`Te acompaño a identificar y construir hábitos de alimentación y estilo de vida sostenibles, adaptados a tu realidad y respaldados por la evidencia científica.\nMejorar tu salud digestiva y hormonal puede tener un impacto positivo en tu bienestar general y tu salud reproductiva.`}
      />
      <div className="yello-bg flex flex-col items-center justify-center self-center text-center">
        <AboutMe />
        <section
          id="servicios"
          className="mb-20 max-w-(--breakpoint-xl) scroll-mt-18 items-center"
        >
          <div className="mb-2 flex flex-col items-center justify-center px-4">
            <h2 className="text-main-color mt-5 mb-5 text-center text-4xl font-bold md:text-5xl">
              ¿Cómo puedo ayudarte?
            </h2>
            <div className="mx-auto flex max-w-3xl items-center justify-center gap-6 py-4">
              <div className="hidden h-[2px] flex-1 rounded-full bg-gradient-to-r from-transparent to-[#FAE48D] md:block"></div>
              <p className="max-w-xl text-center text-xl font-light text-gray-600">
                Encontrá la modalidad de{" "}
                <span className="font-semibold">acompañamiento</span> que mejor
                se adapte {""}
                <span className="font-semibold">a tu necesidad</span> hoy.
              </p>
              <div className="hidden h-[2px] flex-1 rounded-full bg-gradient-to-l from-transparent to-[#FAE48D] md:block"></div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 items-center justify-center gap-6 px-4 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              return (
                <Card
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  primaryAction={
                    <Button href={service.path}>Conocé más</Button>
                  }
                  img={service.img}
                />
              );
            })}
          </div>
        </section>
      </div>
      <section className="flex min-h-[500px] flex-col items-center justify-center bg-gradient-to-b from-[#FAE48D] to-[#f7db69] px-4 py-10 md:py-20">
        <div className="w-full max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-slate-700 sm:text-5xl">
            Amables palabras de mis pacientes
          </h2>

          <div className="mx-auto w-full">
            <ReviewSlider slideInfo={reviews} />
          </div>
        </div>
      </section>
      <div className="mb-16 flex flex-col items-center justify-center self-center text-center">
        <section id="contacto" className="scroll-mt-18">
          <h2 className="text-main-color m-10 text-5xl font-bold">Contacto</h2>
          <Contact />
        </section>
      </div>
    </div>
  );
}
