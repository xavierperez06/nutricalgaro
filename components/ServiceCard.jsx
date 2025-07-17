"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const ServiceCard = ({ title, description, img, path }) => {
  const router = useRouter();

  return (
    <div className="hover:shadow-primary-color-700 flex max-w-(--breakpoint-lg) flex-col-reverse justify-between rounded-xl bg-white shadow-lg hover:scale-105 lg:flex-row">
      <div className="flex flex-col justify-between p-6 text-left">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-6 text-justify">{description}</p>
        <div>
          <button
            className="bg-primary-color-700 hover:bg-primary-color-800 mt-6 flex cursor-pointer flex-row items-center justify-center rounded-md pt-2 pr-4 pb-2 pl-4 text-white duration-300 ease-linear"
            type="button"
            onClick={() => router.push(path)}
          >
            Leer más
          </button>
        </div>
      </div>
      <div className="relative flex h-80 w-full justify-center p-4 lg:w-80">
        <div className="relative aspect-2/1 w-96 overflow-hidden rounded-xl p-4">
          <Image
            src={img}
            alt={`Imagen del servicio home: ${title}`}
            fill
            className="object-cover"
            quality={90}
            sizes="(min-width: 1024px) 384px, 100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
