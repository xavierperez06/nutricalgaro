"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const ServiceCard = ({ title, description, img, path }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col-reverse justify-between max-w-(--breakpoint-lg) rounded-xl shadow-lg bg-white hover:shadow-primary-color-700 hover:scale-105 lg:flex-row ">
      <div className="flex flex-col justify-between text-left p-6">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="mt-6">{description}</p>
        <div>
          <button
            className="mt-6 text-white bg-primary-color-700 pt-2 pb-2 pl-4 pr-4 rounded-md flex flex-row justify-center items-center hover:bg-primary-color-800 ease-linear duration-300"
            type="button"
            onClick={() => router.push(path)}
          >
            Leer más
          </button>
        </div>
      </div>
      <div className="relative w-full lg:w-80 h-80 p-4 flex justify-center">
        <div className="relative aspect-2/1 w-96 p-4 overflow-hidden rounded-xl">
          <Image
            src={img}
            alt=""
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
