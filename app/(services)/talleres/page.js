import ImageViandas from "@/public/assets/images/TalleresViandas.webp";
import ImageEndocrinos from "@/public/assets/images/TallerEndocrinos.webp";
import ImageLideraTuCocina from "@/public/assets/images/TallerLideraTuCocina.webp";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal/Modal";
import OpenModalButton from "@/components/common/Modal/OpenModalButton";

export const metadata = {
  title: {
    absolute: "Talleres | Nutricionista María Belén Calgaro",
  },
};

const itemsLideraCocina = [
  "Un sistema para organizar tu cocina y menú semanal",
  "Ideas de menú (¡muchas!)",
  "Mis pre-listos salvadores",
  "Tips para comprar y stockear sin estrés",
  "Una lista de compras base",
  "Nociones claves de alimentación y cocina saludable",
];

const testomoniosLideraCocina = [
  "Lo más valioso creo que es la idea de 'estrategia', ponerla en marcha considerando la realidad de cada uno y llevándola a la práctica considerando 'prueba y error'.",
  "Lo más valioso que me llevo del taller es pensar en la organización de la compra de las comidas, en la manera de pensar las compras...",
  "Lo más valioso son las herramientas para organizar las comidas semanales. Y los modos y tiempo de guardado y caducidad de los alimentos.",
];

const itemsViandas = [
  {
    title: "Anatomía de la vianda",
    description:
      "Anatomía de la vianda: Qué poner en el tupper/plato para lograr saciedad real y nutrición completa.",
  },
  {
    title: "Logística y armado práctico",
    description:
      "Cuándo y cómo ensamblar tus comidas fácilmente para que te salven la semana.",
  },
  {
    title: "5 combinaciones estratégicas",
    description: " Ejemplos concretos para armar tus menús sin pensar de más.",
  },
  {
    title: "Tu despensa aliada",
    description:
      ' El "stock" inteligente de alimentos pre-listos (heladera, freezer y alacena) para armar viandas en minutos.',
  },
];

const testimoniosViandas = [
  "Mi experiencia fue enriquecedora, con conceptos claros, con tips que podemos implementar fácilmente, ampliando las posibilidades de menús. Simplemente excelente.",
  "Muy bueno, mucha información, buenos ejemplos, bien claro y graficado.",
  "Muy buen taller, interesante y concreta toda la información, espero empezar a poner en práctica todo lo aprendido.",
];

const itemsHormonas = [
  {
    title: "El impacto en tu cuerpo",
    description:
      "Qué son exactamente los disruptores endocrinos y de qué manera silenciosa interfieren con tu funcionamiento hormonal.",
  },
  {
    title: "La ciencia detrás del problema",
    description:
      "Ejemplos reales y evidencia clara sobre cómo la exposición a estos compuestos afecta nuestra salud a largo plazo.",
  },
  {
    title: "¿Dónde se esconden en tu entorno?",
    description:
      " Un recorrido práctico para identificarlos en tus alimentos, el agua, los productos de limpieza, tus cosméticos y los materiales de tu propia casa.",
  },
  {
    title: "Aprender a elegir",
    description:
      "Orientación paso a paso para leer etiquetas, hacer compras inteligentes y seleccionar productos verdaderamente seguros para tu hogar.",
  },
];

const Talleres = () => {
  const talleresData = [
    {
      id: "modal_lidera_cocina",
      title: "Taller Liderá tu cocina",
      image: ImageLideraTuCocina,
      description: (
        <>
          Liderá tu cocina <span className="font-bold">es estrategia</span>,
          organización realista y práctica{" "}
          <span className="font-bold">para una cocina nutritiva</span>,
          liberándote de la carga mental a la pregunta diaria{" "}
          <span className="font-bold">¿qué comemos hoy?</span>
        </>
      ),
      badgeText: undefined,
      href: "https://forms.gle/AMk9unKgVWjP5Nm78",
      modalContent: (
        <div className="space-y-4">
          <p>
            <span className="font-bold">
              ¿Sentís que decidir qué comer todos los días te consume más
              energía de la que debería?
            </span>{" "}
            Creé este taller para ayudarte a organizar tu alimentación de una
            forma simple, realista y sostenible, sin caer en la exigencia de
            hacer todo perfecto.
          </p>
          <p>Durante el taller te comparto:</p>
          <ul className="space-y-1">
            {itemsLideraCocina.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 shrink-0 text-[var(--color-primary-color-600)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="leading-relaxed text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-slate-100 pt-6">
            <h3 className="text-md mb-4 font-semibold tracking-wider text-gray-500">
              Testimonios de ediciones anteriores
            </h3>

            {testomoniosLideraCocina.map((testimony, index) => (
              <figure
                key={index}
                className="mb-2 rounded-r-xl border-l-4 border-[var(--color-primary-color-600)] bg-slate-50 px-5 py-2 shadow-sm"
              >
                <blockquote className="leading-relaxed text-slate-700 italic">
                  <span className="mr-1 font-serif text-2xl leading-none text-[var(--color-primary-color-600)]">
                    "
                  </span>
                  {testimony}
                  <span className="ml-1 font-serif text-2xl leading-none text-[var(--color-primary-color-600)]">
                    "
                  </span>
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "modal_viandas",
      title: "Taller Viandas saludables",
      image: ImageViandas,
      description: (
        <>
          Armar tu <span className="font-bold">vianda diaria</span> de forma{" "}
          <span className="font-bold">inteligente</span> y{" "}
          <span className="font-bold">nutritiva</span> es la finalidad de este
          taller.
        </>
      ),
      badgeText: undefined,
      href: "https://forms.gle/jjuETeVCEduSFLUR8",
      modalContent: (
        <div className="space-y-4">
          <p>
            Viandas que SÍ te nutren fuera de casa con estrategias que puedes
            sostener.
          </p>
          <p>
            Aprende a armar tu vianda diaria de forma inteligente y nutritiva.
            Una herramienta práctica para que puedas sostener una alimentación
            que cuide tu salud, incluso cuando tengas que comer fuera de casa.
          </p>
          <h2 className="text-md mb-4 font-semibold tracking-wider text-gray-500">
            Contenido
          </h2>
          <ul className="space-y-1">
            {itemsViandas.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <svg
                  className="h-6 w-6 shrink-0 text-[var(--color-primary-color-600)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <span className="font-semibold text-slate-700">
                    {item.title}:{" "}
                  </span>
                  <span className="leading-relaxed text-slate-700">
                    {item.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="text-md mb-4 font-semibold tracking-wider text-gray-500">
            Testimonios
          </h2>
          {testimoniosViandas.map((testimony, index) => (
            <figure
              key={index}
              className="mb-2 rounded-r-xl border-l-4 border-[var(--color-primary-color-600)] bg-slate-50 px-5 py-2 shadow-sm"
            >
              <blockquote className="leading-relaxed text-slate-700 italic">
                <span className="mr-1 font-serif text-2xl leading-none text-[var(--color-primary-color-600)]">
                  "
                </span>
                {testimony}
                <span className="ml-1 font-serif text-2xl leading-none text-[var(--color-primary-color-600)]">
                  "
                </span>
              </blockquote>
            </figure>
          ))}
        </div>
      ),
    },
    {
      id: "modal_endocrinos",
      title: "Taller Salud Hormonal y Entorno",
      image: ImageEndocrinos,
      description: (
        <>
          Hay <span className="font-bold">sustancias</span> presentes en nuestro
          entorno que{" "}
          <span className="font-bold">
            pueden interferir en nuestra salud hormonal.
          </span>{" "}
          Este taller es una <span className="font-bold">guía para</span>{" "}
          identificarlas y aprender cómo{" "}
          <span className="font-bold">reducir su exposición</span> en la vida
          cotidiana.
        </>
      ),
      badgeText: "Próximamente",
      href: "https://forms.gle/VkRj3DKSjFTd9iKU8",
      modalContent: (
        <div className="space-y-4">
          <p>
            Hay sustancias presentes en nuestro entorno que pueden interferir en
            nuestra salud hormonal. Este taller es una guía para identificarlas
            y aprender cómo reducir su exposición en la vida cotidiana.
          </p>
          <h2 className="text-md mb-4 font-semibold tracking-wider text-gray-500">
            Contenido
          </h2>
          <ul className="space-y-1">
            {itemsHormonas.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <svg
                  className="h-6 w-6 shrink-0 text-[var(--color-primary-color-600)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <span className="font-semibold text-slate-700">
                    {item.title}:{" "}
                  </span>
                  <span className="leading-relaxed text-slate-700">
                    {item.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Button href="/" variant="secondary" className="px-4 py-2 shadow-sm">
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
          mb="mb-6"
          badgeText="Aprendé a tu ritmo"
          title="Talleres"
          subtitle={
            <>
              En cada taller te comparto{" "}
              <span className="font-bold">herramientas prácticas</span> y{" "}
              <span className="font-bold">propuestas concretas</span> para que
              puedas llevar información en salud a{" "}
              <span className="font-bold">tu vida diaria</span>.
            </>
          }
        />
        <p className="text-content mx-auto mb-8 max-w-3xl text-center !text-gray-500 italic">
          Lo valioso de estos talleres es que cada uno está pensado para
          satisfacer necesidades que han surgido de años de escucha en el
          consultorio. <span className="font-semibold">Explorá</span> cada
          taller y elegí el que hoy estés necesitando.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {talleresData.map((taller) => (
            <Card
              key={taller.id}
              title={taller.title}
              img={taller.image}
              description={taller.description}
              secondaryAction={
                <OpenModalButton modalId={taller.id} variant="secondary">
                  Más info
                </OpenModalButton>
              }
              primaryAction={
                <Button
                  href={taller.href}
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full xl:w-auto"
                >
                  ¡Quiero sumarme!
                </Button>
              }
              badgeText={taller.badgeText}
            />
          ))}
        </div>

        {/* Render specific "Más info" Modals */}
        {talleresData.map((taller) => (
          <Modal
            key={`modal-${taller.id}`}
            id={taller.id}
            title={taller.title}
            content={taller.modalContent}
          />
        ))}
        <Modal
          id="my_modal_3"
          title="¡Gracias por tu interés!"
          content="Pronto estaremos lanzando los talleres, si querés ser de las primeras en enterarte, dejame tu mail y te aviso apenas estén disponibles."
        />
      </div>
    </section>
  );
};
export default Talleres;
