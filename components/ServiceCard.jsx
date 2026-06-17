import Image from "next/image";
import ButtonLink from "./common/ButtonLink";

const ServiceCard = ({ title, description, img, path }) => {
  return (
    <div className="card bg-base-100 border-base-200 group h-full w-96 overflow-hidden border shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <figure className="overflow-hidden">
        <Image
          src={img}
          alt={title}
          width={400}
          height={300}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </figure>

      <div className="card-body text-content flex flex-col">
        <h2 className="card-title group-hover:text-primary-color-700 text-2xl font-bold transition-colors duration-300">
          {title}
        </h2>

        <p className="flex-grow pt-2 text-left opacity-80">{description}</p>

        <div className="card-actions mt-auto justify-end pt-4">
          <ButtonLink href={path}>Conocé más</ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
