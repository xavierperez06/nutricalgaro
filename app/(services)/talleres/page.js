import ServiceContent from "@/components/ServiceContent";
import ImageTalleres from "@/public/assets/images/TalleresContent.jpg";

export const metadata = {
  title: {
    absolute: "Talleres | Nutricionista María Belén Calgaro",
  },
};

const Talleres = () => {
  const getContent = () => (
    <div className="flex flex-col gap-2 text-justify">
      <p>
        Encuentros grupales online diseñados para profundizar en temas
        específicos de salud y nutrición.
      </p>
      <p>
        En cada taller te comparto información actualizada y basada en evidencia
        científica, junto con herramientas prácticas y recomendaciones para que
        puedas llevar esos conocimientos a tu vida diaria. Siempre reservo un
        espacio para responder tus dudas y acompañarte en el proceso. Podés
        participar en vivo o acceder luego a las grabaciones para verlo a tu
        ritmo.
      </p>
      <h2 className="mt-2 font-bold">Taller Liderá tu cocina</h2>
      <p>
        En Liderá tu cocina, te enseño ideas y trucos de cocina para que puedas
        llevar una alimentación saludable en la cotidianidad: ¡que la falta de
        tiempo o gusto por estar en la cocina, no sean un impedimento para
        cuidar de ti y de tu alimentación!
      </p>
      <h2 className="mt-2 font-bold">Taller Modulá tu microbiota</h2>
      <p>
        Conocer la importancia de esta comunidad de microorganismos que viven en
        nosotros (microbiota) así como los diferentes factores que podemos usar
        a nuestro favor para modularla, es el principal objetivo de este taller.
      </p>
      <h2 className="mt-2 font-bold">Taller Viandas saludables</h2>
      <p>
        Armar tu vianda cotidiana de forma inteligente y nutritiva es la
        finalidad de este taller.
      </p>
      <h2 className="mt-2 font-bold">Taller Personalizá tu alimentación</h2>
      <p>
        A través de este taller te propongo conocer lineamientos básicos para
        llevar tu alimentación de forma saludable, respondiendo a los
        interrogantes: ¿cuándo?, ¿cuánto?, ¿qué?, ¿cómo?. Además, te ayudo a
        resolver tus principales inquietudes alimentarias.
      </p>
      <h2 className="mt-2 font-bold">
        Taller Nutrición y Ciclo Menstrual: Alimentando tu Ritmo Interno
      </h2>
      <p>
        Un taller dedicado a nosotras, para conocer nuestro ciclo y revisar qué
        hábitos de autocuidado nos convienen a fin de cuidar de nosotras y
        nuestra salud femenina.
      </p>
    </div>
  );
  return (
    <ServiceContent
      title="Talleres"
      img={ImageTalleres}
      content={getContent()}
    />
  );
};
export default Talleres;
