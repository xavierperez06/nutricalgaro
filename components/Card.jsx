import Image from "next/image";
import Button from "./common/Button";

const Card = ({
  title,
  description,
  img,
  primaryAction, // Expects a React component
  secondaryAction, // Expects a React component
}) => {
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

        <div
          className={`card-actions mt-auto ${secondaryAction ? "justify-between" : "justify-end"} pt-4`}
        >
          {secondaryAction}
          {primaryAction}
        </div>
      </div>
    </div>
  );
};

export default Card;
