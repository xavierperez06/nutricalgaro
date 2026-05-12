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
    name: "Virginia",
    age: 34,
    location: "Rosario, Santa Fe, Argentina",
    description: (
      <>
        Gracias, Belén, por acompañarme con tanta calidez y profesionalismo. Me
        ayudaste a <strong>mejorar mi salud de forma integral</strong>, a
        transitar mi proceso con <strong>endometrosis</strong> y hoy también a{" "}
        <strong>vivir mi embarazo con más bienestar y conciencia</strong>.
        Gracias por tu trato tan humano, amoroso y cercano.
      </>
    ),
  },
  {
    name: "Melisa",
    age: 38,
    location: "Tres Arroyos, Buenos Aires, Argentina",
    description: (
      <>
        Mi experiencia personal con Belén fue muy positiva. Acompañamiento
        cálido e integral. Gran profesional que{" "}
        <strong>me ayudó a revertir síntomas digestivos</strong>
      </>
    ),
  },
  {
    name: "Roxana",
    age: 59,
    location: "Rosario, Santa Fe, Argentina",
    description: (
      <>
        Defino mi experiencia de tratamiento con Belén como un amoroso recorrido
        por los desafíos de comprender la famosa frase{" "}
        <strong>"somos lo que comemos"</strong>. Cada encuentra renueva esa
        tarea que no es fácil y para la cual Belén es una excelente compañera y{" "}
        <strong>mis laboratorios los testigos</strong>.
      </>
    ),
  },
  {
    name: "Bárbara",
    age: 29,
    location: "Esperanza, Santa Fe, Argentina",
    description: (
      <>
        Excelente profesional! Me sirvió mucho que{" "}
        <strong>
          dedicara tiempo a explicarme el porqué de los cambios de hábitos,
          acoplándolos a mi estilo de vida y gustos
        </strong>
        , lo hizo de una forma integrada a mis necesidades haciéndolo real y
        posible de realizar! Gracias por el acompañamiento.
      </>
    ),
  },
  {
    name: "Leonor",
    age: 59,
    location: "Rosario, Santa Fe, Argentina",
    description: (
      <>
        Muchas gracias María Belén, estoy feliz de conocerte, encontré una{" "}
        <strong>profesional comprometida</strong> y un ser humano que{" "}
        <strong>acompaña y escucha cálidamente.</strong>
      </>
    ),
  },
  {
    name: "Gisela",
    age: 44,
    location: "Rosario, Santa Fe, Argentina",
    description: (
      <>
        Belén, quería agradecerte porque el trabajo con vos fue más que
        beneficioso. Logré incorporar hábitos, organizarme mejor con las comidas
        y probar nuevos alimentos. Además,{" "}
        <strong>
          el enfoque interdisciplinario hizo que mejoraran muchísimo mis
          síntomas. ¡Estoy muy agradecida!.
        </strong>
      </>
    ),
  },
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
