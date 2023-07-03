"use client";

import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ name, age, location, review }) => {
  return (
    <div className="bg-white m-auto max-w-[600px] min-h-[300px] flex justify-center items-center p-6 shadow-2xl">
      <div className="">
        <div className="flex justify-center mt-1 mb-3">
          <FaQuoteLeft size={50} className="text-[#ebbf1a]" />
        </div>
        <p className="text-xl my-2">{review}</p>
        <p className="mb-2 font-bold">{name}</p>
        <p className="italic">
          {age} años, {location}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
