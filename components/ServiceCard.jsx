import Image from "next/image";

const ServiceCard = ({ title, description, img }) => {
  return (
    <div className="flex justify-between max-w-screen-lg rounded-2xl shadow-lg hover:shadow-[#ebbf1a] flex-col-reverse md:flex-col-reverse lg:flex-row ">
      <div className="text-left p-10 ">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="mt-8 ">{description}</p>
        <div>
          <button className="mt-8 text-white bg-[#ebbf1a] pt-2 pb-2 pl-4 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#CDA616] ease-linear duration-300">
            Leer más
          </button>
        </div>
      </div>
      <div className="relative lg:w-full p-4 flex justify-center md:flex md:justify-center lg:inline-block">
        <Image
          src={img}
          alt="/"
          className="rounded-2xl object-cover h-48 w-96"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
