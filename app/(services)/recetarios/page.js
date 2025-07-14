import ServiceContent from "@/components/ServiceContent";
import ImageRecetarios from "@/public/assets/images/Recetas.jpg";

const Recetarios = () => {
  return (
    <ServiceContent
      title="Recetarios"
      img={ImageRecetarios}
      content="Guías de cocina saludable pensadas para inspirarte y facilitarte el camino hacia una alimentación más nutritiva.
      Cada recetario está dedicado a una temática específica y reúne recetas sencillas, nutritivas y deliciosas, con indicaciones claras para que puedas ponerlas en práctica en tu día a día."
    />
  );
};
export default Recetarios;
