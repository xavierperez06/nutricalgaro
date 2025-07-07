"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const ServiceCard = ({ title, description, img, path }) => {
  const router = useRouter();

  return (
    <div className="flex justify-between max-w-screen-lg rounded-xl shadow-lg bg-white hover:shadow-primary-color-700 hover:scale-105 md:flex-col-reverse lg:flex-row ">
      <div className="flex flex-col justify-between text-left p-6">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="mt-8">{description}</p>
        <div>
          <button
            className="mt-8 text-white bg-primary-color-700 pt-2 pb-2 pl-4 pr-4 rounded-md flex flex-row justify-center items-center hover:bg-primary-color-800 ease-linear duration-300"
            type="button"
            onClick={() => router.push(path)}
          >
            Leer más
          </button>
        </div>
      </div>
      <div className="relative lg:w-full p-4 flex justify-center md:flex md:justify-center lg:inline-block">
        <Image
          src={img}
          alt="/"
          className="rounded-xl object-cover h-48 w-96"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
