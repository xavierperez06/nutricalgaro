import Image from "next/image";

const ServiceCard = ({ title, description, img }) => {
  return (
    <div className="flex justify-between max-w-screen-lg rounded-2xl shadow-lg hover:shadow-[#ebbf1a] sm:flex-col-reverse md:flex-col-reverse lg:flex-row ">
      <div className="text-left p-10 ">
        <h1 className="text-main-color font-bold text-5xl">{title}</h1>
        <p className="mt-8 ">{description}</p>
        <div>
          <button className="mt-8 text-white bg-[#ebbf1a] pt-2 pb-2 pl-4 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#CDA616] ease-linear duration-300">
            Leer más
          </button>
        </div>
      </div>
      <div className="relative lg:w-full p-4">
        <Image
          src={img}
          alt="/"
          width={270}
          height={200}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
