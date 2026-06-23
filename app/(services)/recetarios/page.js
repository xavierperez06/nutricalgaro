import ServiceContent from "@/components/ServiceContent";
import ImageRecetarios from "@/public/assets/images/Recetas_Card.webp";

export const metadata = {
  title: {
    absolute: "Recetarios | Nutricionista María Belén Calgaro",
  },
};

const Recetarios = () => {
  return (
    <ServiceContent
      title="Recetarios con propósito"
      img={ImageRecetarios}
      content="Recetarios inspiracionales para tu día a día.
      Cada recetario está dedicado a una temática específica y reúne recetas sencillas, nutritivas y deliciosas, con indicaciones claras para que puedas ponerlas en práctica en tu cotidianidad."
    />
  );
};
export default Recetarios;
