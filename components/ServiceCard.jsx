import Image from "next/image";
import ButtonLink from "./common/ButtonLink";

const ServiceCard = ({ title, description, img, path }) => {
  return (
    <div className="flex max-w-(--breakpoint-lg) flex-col-reverse justify-between rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(235,191,26,0.40)] lg:flex-row">
      {" "}
      <div className="flex flex-col justify-between p-6 text-left">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-6 text-justify">{description}</p>
        <div>
          <ButtonLink href={path} className="mt-6">
            Leer más
          </ButtonLink>
        </div>
      </div>
      <div className="relative flex h-80 w-full justify-center p-4 lg:w-80">
        <div className="relative aspect-2/1 w-96 overflow-hidden rounded-xl p-4">
          <Image
            src={img}
            alt={`Servicio de nutrición: ${title}`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 384px, 90vw"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
