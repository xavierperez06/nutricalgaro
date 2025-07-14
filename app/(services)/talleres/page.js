import ServiceContent from "@/components/ServiceContent";
import ImageTalleres from "@/public/assets/images/TalleresContent.jpg";

const Talleres = () => {
  return (
    <ServiceContent
      title="Talleres"
      img={ImageTalleres}
      content="Encuentros grupales online diseñados para profundizar en temas
          específicos de salud y nutrición. En cada taller te comparto
          información actualizada y basada en evidencia científica, junto con
          herramientas prácticas y recomendaciones para que puedas llevar esos
          conocimientos a tu vida diaria. Siempre reservo un espacio para
          responder tus dudas y acompañarte en el proceso. Podés participar en
          vivo o acceder luego a las grabaciones para verlo a tu ritmo."
    />
  );
};
export default Talleres;
