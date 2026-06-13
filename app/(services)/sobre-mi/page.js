import AboutMe from "@/public/assets/images/AboutMe_Page.webp";
import NextImage from "next/image";

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
          hoy constituyen el núcleo de mi trabajo
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
        faciliten la organización, el autocuidado y la construcción de hábitos
        sostenibles.
      </>
    ),
  },
];

const SobreMi = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-6">
      <div className="pointer-events-none absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary-color-200)]/40 opacity-50 mix-blend-multiply blur-3xl"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-[30rem] w-[30rem] translate-x-1/3 translate-y-1/3 rounded-full bg-amber-100/60 opacity-50 mix-blend-multiply blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left">
            <span className="mb-6 inline-flex items-center rounded-full bg-[var(--color-primary-color-100)] px-4 py-1.5 text-sm font-bold tracking-wider text-[var(--color-primary-color-700)] uppercase shadow-sm ring-1 ring-[var(--color-primary-color-200)]">
              Conocé mi historia
            </span>

            <h2 className="mb-6 bg-gradient-to-r from-[var(--color-primary-color-900)] via-[var(--color-primary-color-600)] to-[var(--color-primary-color-900)] bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">
              La historia detrás de mi enfoque
            </h2>

            <p className="mb-8 text-xl leading-relaxed font-medium text-slate-700">
              Soy{" "}
              <span className="text-main-color font-bold">
                María Belén Calgaro
              </span>
              , Licenciada en Nutrición egresada de la Universidad Nacional del
              Litoral.
            </p>

            {/* Highlighted Mission Card */}
            <div className="group relative mb-10 w-full">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[var(--color-primary-color-300)] to-amber-200 opacity-40 blur-lg transition duration-500 group-hover:opacity-70"></div>
              <div className="relative rounded-2xl bg-white/80 p-6 shadow-md ring-1 ring-slate-900/5 backdrop-blur-md transition duration-300 hover:shadow-lg">
                <svg
                  className="absolute -top-4 -left-4 h-10 w-10 text-[var(--color-primary-color-400)]/60"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="pl-4 text-lg leading-relaxed font-medium text-slate-800">
                  Mi objetivo es comprender qué puede estar influyendo en tu
                  salud y ayudarte a encontrar estrategias efectivas, realistas
                  y sostenibles para tu vida cotidiana.
                </p>
              </div>
            </div>

            {/* 2. Map through the data to render the history points dynamically */}
            <div className="space-y-6">
              {historyData.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-color-50)] text-[var(--color-primary-color-600)] ring-1 ring-[var(--color-primary-color-200)]">
                    {item.icon}
                  </div>
                  <p className="text-content text-justify leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image/Visuals */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -top-4 -right-4 h-full w-full rounded-3xl border-2 border-[var(--color-primary-color-200)] bg-transparent"></div>
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-amber-100/50"></div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-200 shadow-2xl">
              <NextImage
                src={AboutMe}
                alt="María Belén Calgaro - Nutricionista presencial y online en Rosario"
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="absolute -right-6 -bottom-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-color-100)] text-[var(--color-primary-color-600)]">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">UNL</p>
                <p className="text-xs text-slate-500">
                  Universidad Nacional del Litoral
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
