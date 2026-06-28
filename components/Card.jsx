import Image from "next/image";

const Card = ({
  title,
  description,
  img,
  primaryAction,
  secondaryAction,
  badgeText,
}) => {
  return (
    <div className="indicator group h-full w-full">
      {badgeText && (
        <span className="indicator-item indicator-center badge z-10 rounded-none border border-pink-300 bg-pink-50 px-4 py-4 text-lg font-medium tracking-wide text-pink-600 shadow-[0_4px_14px_0_rgba(244,114,182,0.39)] transition-all duration-500 ease-out group-hover:scale-120 group-hover:bg-pink-100 group-hover:shadow-[0_8px_24px_0_rgba(244,114,182,0.6)]">
          {badgeText}
        </span>
      )}
      <div className="card bg-base-100 border-base-200 h-full w-full overflow-hidden border shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
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
