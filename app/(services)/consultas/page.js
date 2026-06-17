import SectionHeader from "@/components/SectionHeader";
import ButtonLink from "@/components/common/ButtonLink";
import HighlightImage from "@/components/common/HighlightImage";
import ConsultasImage1 from "@/public/assets/images/Consultas_Pic01.jpg";
import ConsultasImage2 from "@/public/assets/images/Consultas_Pic02.jpg";

export const metadata = {
  title: {
    absolute: "Consultas | Nutricionista María Belén Calgaro",
  },
};

const message = "Hola, quiero agendar una consulta.";
const whatsappUrl = `https://wa.me/5493416757952?text=${encodeURIComponent(message)}`;

const consultationDetails = [
  "Evaluación de tu historia clínica, antecedentes, estudios y hábitos de alimentación y estilo de vida.",
  "Planificación personalizada de alimentación y hábitos según tus objetivos y necesidades.",
  "Recomendaciones prácticas y adaptadas a tu realidad.",
  "Valoración de composición corporal o mediciones antropométricas cuando el motivo de consulta lo requiera.",
  "Solicitud de análisis complementarios si son necesarios.",
  "Acompañamiento y seguimiento orientado a la construcción de hábitos sostenibles.",
  "Acceso a descuentos exclusivos en los materiales digitales de la web.",
  "Duración aproximada: 40 minutos.",
];

const renderReservationButton = () => (
  <div className="flex justify-center">
    <ButtonLink
      href={whatsappUrl}
      variant="flashy"
      target="_blank"
      rel="noopener noreferrer"
      className="group gap-3"
    >
      <svg
        className="h-6 w-6 shrink-0 text-white transition-transform group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span>Reservá tu consulta</span>
    </ButtonLink>
  </div>
);

const Consultas = () => {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badgeText="Repensá tus hábitos"
          title="Consultas"
          subtitle="Online & Presencial"
        />
        <div className="grid items-start gap-12 p-2 lg:grid-cols-2 lg:gap-16">
          <div className="text-content flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-slate-700">
              ¿Cómo es una consulta?
            </h2>
            <p>
              En consulta conversamos sobre tus objetivos, tu historia de salud,
              tu alimentación y hábitos que forman parte de tu día a día. A
              partir de esa información, elaboro{" "}
              <span className="font-semibold">un plan</span> de alimentación y
              de hábitos en el estilo de vida, adaptado a tu realidad, y que
              estén influyendo en tu salud, siempre{" "}
              <span className="font-semibold">
                con foco en cambios sostenibles
              </span>{" "}
              en el tiempo.
            </p>
            <p>
              Si es necesario, revisamos estudios previos, solicito análisis
              complementarios, realizamos mediciones que aporten información
              relevante para el abordaje o indico suplementación oportuna. Así
              mismo, si el motivo de consulta lo amerita, puedo sugerir la
              consulta con otros profesionales que complementen el proceso de
              atención.
            </p>
            <p className="text-center text-gray-500 italic">
              Mi objetivo es acompañarte con herramientas prácticas, información
              basada en evidencia y un seguimiento cercano para que puedas
              avanzar con confianza hacia una mejor salud y bienestar.
            </p>
            {renderReservationButton()}
          </div>
          <div className="max-h-160 rounded-2xl">
            <HighlightImage
              src={ConsultasImage1}
              alt="María Belén Calgaro - Nutricionista presencial y online en Rosario"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-last max-h-160 rounded-2xl lg:order-first">
            <HighlightImage
              src={ConsultasImage2}
              alt="María Belén Calgaro - Que incluye la consulta"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="text-content order-first flex flex-col gap-6 p-2 lg:order-last">
            <h2 className="text-4xl font-bold text-slate-700">
              ¿Qué incluye la consulta?
            </h2>
            <ul className="space-y-4">
              {consultationDetails.map((item, index) => (
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
            {renderReservationButton()}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Consultas;
