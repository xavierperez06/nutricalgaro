import ServiceContent from "@/components/ServiceContent";
import ImageAtencionOnline from "@/public/assets/images/AtencionOnline.jpg";

export const metadata = {
  title: {
    absolute: "Consulta nutricional online | Nutricionista María Belén Calgaro",
  },
};

const Online = () => {
  return (
    <ServiceContent
      title="Consulta nutricional online"
      img={ImageAtencionOnline}
      content="Un espacio pensado para que puedas cuidar tu alimentación y tu salud desde donde estés.
En cada encuentro conversamos sobre tus objetivos, tus dudas y tu día a día. Te acompaño con información clara, herramientas prácticas y recomendaciones personalizadas. Si es necesario, también te indico análisis, estudios o mediciones que puedan ayudarnos a comprender mejor tu estado de salud. Mi objetivo es que te sientas escuchado/a, contenido/a y con la confianza de dar pasos firmes hacia cambios que te hagan bien de verdad."
    />
  );
};
export default Online;
