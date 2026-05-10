import imgRecetas from "@/public/assets/images/Recetas.jpg";
import imgTalleres from "@/public/assets/images/TalleresAvatar.png";
import imgOnline from "@/public/assets/images/AtencionOnline.jpg";
import imgPresencial from "@/public/assets/images/Presencial.jpg";

export const footerLinks = [
  {
    title: "Redes Sociales",
    links: [
      { title: "Instagram", url: "https://www.instagram.com/nutricalgaro/" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { title: "Tel: (+54) 9 3416757952", url: "/" },
      {
        title: "Email: nutricalgaro@gmail.com",
        url: "mailto:nutricalgaro@gmail.com",
      },
      { title: "Dirección: Maipu 1827 | Rosario", url: "/" },
    ],
  },
];

export const reviews = [
  {
    name: "Román",
    age: 34,
    location: "Rosario, Santa Fe, Argentina",
    description: (
      <>
        Gracias al acompañamiento de Belén, logré{" "}
        <strong className="font-bold">
          {" "}
          incorporar alimentos que antes no podía
        </strong>{" "}
        y aprendí a cuidar mucho más la calidad de mi alimentación.
      </>
    ),
  },
];

export const services = [
  {
    title: "Recetarios terapéuticos",
    description:
      "Guías de cocina saludable pensadas para inspirarte y facilitarte el camino hacia una alimentación más nutritiva.",
    img: imgRecetas,
    path: "/recetarios",
  },
  {
    title: "Talleres",
    description:
      "Encuentros grupales online diseñados para profundizar en temas específicos de salud y nutrición.",
    img: imgTalleres,
    path: "/talleres",
  },
  {
    title: "Consulta nutricional online",
    description:
      "Un espacio pensado para que puedas cuidar tu alimentación y tu salud desde donde estés.",
    img: imgOnline,
    path: "/online",
  },
  {
    title: "Consultorio presencial",
    description: "Un espacio para trabajar juntos en tu salud y bienestar.",
    img: imgPresencial,
    path: "/presencial",
  },
];
