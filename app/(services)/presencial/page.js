import ServiceContent from "@/components/ServiceContent";
import ImagePresencial from "@/public/assets/images/Presencial.jpg";

export const metadata = {
  title: {
    absolute: "Consultorio presencial | Nutricionista María Belén Calgaro",
  },
};

const Presencial = () => {
  return (
    <ServiceContent
      title="Consultorio presencial"
      img={ImagePresencial}
      content="Un espacio para trabajar juntos en tu salud y bienestar.
En el consultorio nos vemos cara a cara para conversar sobre tus objetivos, tu historia de salud y tu día a día. Trabajo con un enfoque centrado en el cambio de hábitos, a través de una planificación que se adapte a tu realidad.
Si lo considero necesario, realizamos evaluaciones de composición corporal para sumar información útil al abordaje. Además, te ofrezco herramientas prácticas para que puedas incorporar cambios sostenibles en tu alimentación y en tu vida cotidiana.
Mi prioridad, como siempre, es que te sientas cómodo/a, escuchado/a y acompañado/a en cada paso de este camino.
"
    />
  );
};
export default Presencial;
