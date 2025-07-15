"use client";

import Image from "next/image";

import AnimatedText from "@/components/AnimatedText";

const ServiceContent = ({ img, title, content }) => {
  return (
    <>
      <div className="bg-primary-color-300 min-h-[200px] flex justify-center">
        <AnimatedText
          text={title}
          className="text-white text-6xl font-bold"
          triggerAnimation={true}
        />
      </div>
      <div className="flex flex-col relative lg:flex-row lg:justify-center">
        <div className="max-w-(--breakpoint-xl)">
          <div className="">
            <Image className="p-6" src={img} alt="" width={700} height={300} />
          </div>
        </div>
        <div className="p-6 max-w-[800px] self-start bg-primary-color-200 lg:-ml-32 lg:mt-20">
          {content}
        </div>
      </div>
    </>
  );
};

export default ServiceContent;
