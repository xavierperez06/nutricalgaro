"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";

const ServiceContent = ({ img, title, content }) => {
  return (
    <>
      <div className="bg-primary-color-300 flex min-h-[200px] justify-center">
        <AnimatedText
          text={title}
          className="text-6xl font-bold text-white"
          triggerAnimation={true}
        />
      </div>
      <div className="ml-6 pt-6 lg:ml-20">
        <Link
          href="/#servicios"
          className="text-primary-color-700 border-primary-color-300 hover:bg-primary-color-200 inline-flex items-center rounded-md border px-3 py-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
          <span className="ml-1 text-lg font-medium">Volver</span>
        </Link>
      </div>
      <div className="relative flex flex-col lg:flex-row lg:justify-center">
        <div className="max-w-(--breakpoint-xl)">
          <div className="">
            <Image
              className="p-6"
              src={img}
              alt={`Imagen del servicio: ${title}`}
              width={700}
              height={300}
              priority
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
        </div>
        <div className="bg-primary-color-200 max-w-[800px] self-start p-6 shadow-2xl lg:mt-20 lg:-ml-32">
          {content}
        </div>
      </div>
    </>
  );
};

export default ServiceContent;
