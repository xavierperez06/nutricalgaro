import Image from "next/image";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";

const IntagramImage = ({ img }) => {
  return (
    <div className="relative">
      <Image src={img} alt="/" className="w-full h-full" />
      {/* Overlay */}
      <div className="flex justify-center items-center w-full h-full absolute top-0 left-0 right-0 bottom-0 hover:bg-black/70 group z-2">
        <Link
          href="https://www.instagram.com/nutricalgaro/"
          target="_blank"
          className="text-gray-300 hidden group-hover:block"
        >
          <FaInstagram size={30} />
        </Link>
      </div>
    </div>
  );
};

export default IntagramImage;
