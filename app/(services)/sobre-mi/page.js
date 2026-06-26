import AboutMe from "@/public/assets/images/AboutMe_Page.webp";

import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/common/Button";
import HighlightImage from "@/components/common/HighlightImage";

// 1. We extract the repeating data into a clean array outside the component
// to prevent it from being recreated on every render.
const historyData = [
  {
    id: "investigacion",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    text: (
      <>
        Durante mi formación imaginaba que mi futuro profesional estaría ligado
        a la investigación. Aunque finalmente elegí la práctica clínica, ese{" "}
        <strong className="font-semibold text-slate-800">
          espíritu investigador sigue guiando mi trabajo
        </strong>
        : me impulsa a mantenerme actualizada, cuestionar lo establecido y
        buscar herramientas respaldadas por la evidencia.
      </>
    ),
  },
  {
    id: "habitos",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    text: (
      <>
        Mis primeros años de ejercicio estuvieron enfocados en la nutrición
        clínica general y trastornos de la conducta alimentaria. Esa experiencia
        me enseñó algo central:{" "}
        <strong className="font-semibold">
          los cambios de hábitos no ocurren por fuerza de voluntad, sino cuando
          comprendemos las razones detrás de nuestras conductas.
        </strong>
      </>
    ),
  },
  {
    id: "dos-areas",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    ),
    text: (
      <>
        Con el tiempo, mi práctica fue orientándose hacia{" "}
        <strong className="font-semibold">dos áreas</strong> que{" "}
        <strong className="font-semibold">
          hoy constituyen el núcleo de mi trabajo y estudio
        </strong>
        : la salud hormonal femenina y la salud digestiva.
      </>
    ),
  },
  {
    id: "salud-hormonal",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
    text: (
      <>
        En <span className="font-semibold">salud hormonal</span> acompaño a
        mujeres que desean comprender mejor su ciclo menstrual, mejorar síntomas
        asociados a alteraciones hormonales y cuidar su salud reproductiva. Mi
        interés por la fertilidad natural comenzó siendo muy joven y continúa
        hasta hoy. Actualmente formo parte de{" "}
        <span className="font-semibold">FertilitySystem</span>, un equipo
        interdisciplinario que acompaña a parejas a comprender mejor su salud
        reproductiva y a identificar las causas que pueden estar afectando su
        fertilidad, mediante la Naprotecnología y el Modelo Creighton.
      </>
    ),
  },
  {
    id: "salud-digestiva",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    text: (
      <>
        En paralelo, me especialicé en{" "}
        <span className="font-semibold">salud digestiva</span>, acompañando a
        personas con trastornos funcionales digestivos, intolerancias
        alimentarias y otras afecciones relacionadas con el sistema digestivo.
        En esta área cuento con formación específica como {""}
        <span className="font-semibold">
          Diplomada en Nutrición Digesto-Absortiva
        </span>
        .
      </>
    ),
  },
  {
    id: "educacion",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    text: (
      <>
        Además de la consulta individual, disfruto profundamente de la educación
        alimentaria. Por eso{" "}
        <span className="font-semibold">he desarrollado </span>
        talleres, masterclass y otros recursos digitales para acercar{" "}
        <span className="font-semibold">herramientas prácticas</span> que
        facilitan la organización, el autocuidado y la construcción de hábitos
        sostenibles.
      </>
    ),
  },
];

const SobreMi = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-6">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left">
            <div className="mb-8">
              <Button
                href="/"
                variant="secondary"
                className="!px-4 !py-2 !shadow-sm"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Volver
              </Button>
            </div>

            <SectionHeader
              align="left"
              badgeText="Conocé mi historia"
              title="La historia detrás de mi enfoque"
            />

            {/* 2. Map through the data to render the history points dynamically */}
            <div className="space-y-6">
              {historyData.map((item) => (
                <div key={item.id} className="flex gap-1">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-color-50)] text-[var(--color-primary-color-600)] ring-1 ring-[var(--color-primary-color-200)]">
                    {item.icon}
                  </div>
                  <p className="text-content leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex w-full justify-center">
              <Button
                href="/#servicios"
                variant="flashy"
                className="group gap-3"
              >
                <svg
                  className="h-6 w-6 shrink-0 text-white transition-transform group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Replaced Calendar with a Clipboard-Check icon to better represent personalized plans and services */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                <span>Conocé mis servicios</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Image/Visuals */}
          <HighlightImage
            className="md:mt-30 lg:max-w-none"
            src={AboutMe}
            alt="María Belén Calgaro - Nutricionista presencial y online en Rosario"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            cardTitle="UNL"
            cardText="Universidad Nacional del Litoral"
          />
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
