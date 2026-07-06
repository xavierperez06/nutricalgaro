import { AiOutlineWhatsApp, AiOutlineBulb } from "react-icons/ai";
import { HiOutlineBookOpen } from "react-icons/hi";
import ConsultasImage1 from "@/public/assets/images/Consultas_Pic01.webp";
import NextImage from "next/image";

const Links = () => {
  const message = "Hola, quiero agendar una consulta.";
  const whatsappUrl = `https://wa.me/5493416757952?text=${encodeURIComponent(message)}`;

  const cards = [
    {
      id: 1,
      title: "Turnos",
      description: "¡Hablemos por WhatsApp!",
      icon: <AiOutlineWhatsApp className="text-5xl text-white" />,
      link: whatsappUrl,
    },
    {
      id: 2,
      title: "Talleres",
      description: "Haz clic para ver los talleres disponibles.",
      icon: <AiOutlineBulb className="text-5xl text-white" />,
      link: "/talleres",
    },
    {
      id: 3,
      title: "Recursos para tu bienestar",
      description: "Haz clic para ver los recursos disponibles.",
      icon: <HiOutlineBookOpen className="text-5xl text-white" />,
      link: "/recetarios",
    },
  ];

  return (
    <div className="from-primary-color-800 via-primary-color-500 to-primary-color-300 flex min-h-screen w-screen flex-col items-center justify-center overflow-x-hidden bg-gradient-to-br px-4 py-10">
      <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-6 text-center">
        <NextImage
          className="mask mask-squircle mx-auto h-auto w-[80%]"
          src={ConsultasImage1}
          alt="Links de contacto con la nutricionista María Belén Calgaro"
        />
        <h1 className="text-3xl font-bold tracking-wider text-white">
          María Belén Calgaro
          <div className="text-xl font-normal text-white md:text-2xl">
            Licenciada en Nutrición. MP 1284
          </div>
        </h1>
        <h2 className="mb-4 text-center text-xl tracking-wider text-gray-500">
          Acompaño a adoptar hábitos de autocuidado. Mi área de mayor
          experiencia es la salud hormonal femenina y la salud digestiva.{" "}
        </h2>
        <span className="mb-4 inline-block rounded-full border border-pink-700 bg-pink-700/10 px-3 py-1 text-lg font-bold tracking-widest text-pink-700 uppercase">
          ¿Cómo puedo ayudarte?
        </span>
        {cards.map((card) => {
          const isExternal = card.link.startsWith("http");

          return (
            <div
              key={card.id}
              className="group relative w-full transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="pointer-events-none absolute -inset-6 z-0 p-[26px]"
                style={{
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              >
                <div className="aura absolute inset-6 rounded-2xl text-pink-400">
                  <div className="h-full w-full rounded-2xl"></div>
                </div>
              </div>

              <a
                href={card.link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="relative z-10 flex w-full cursor-pointer items-center rounded-2xl border border-white/20 bg-white/10 p-4 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:shadow-xl"
              >
                <div className="mr-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {card.icon}
                </div>
                <div className="flex flex-col text-left">
                  <h2 className="text-2xl font-bold tracking-tight text-pink-700">
                    {card.title}
                  </h2>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
