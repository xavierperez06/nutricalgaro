import Image from "next/image";
import Button from "./common/Button";

const Card = ({
  title,
  description,
  img,
  primaryAction,
  secondaryAction,
  badgeText,
}) => {
  return (
    <div className="indicator h-full w-full">
      {badgeText && (
        <span className="indicator-item indicator-center md:indicator-end badge bg-primary-color-600 z-10 border-none px-4 py-3 text-sm font-medium tracking-wide text-gray-900 shadow-md">
          {badgeText}
        </span>
      )}
      <div className="card bg-base-100 border-base-200 group h-full w-full overflow-hidden border shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
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
    </div>
  );
};

export default Card;
