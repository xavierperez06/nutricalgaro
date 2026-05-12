import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ name, age, location, review }) => {
  return (
    <div className="m-auto flex min-h-[300px] max-w-[400px] items-center justify-center rounded-2xl bg-white p-8 shadow-xl shadow-yellow-900/10 sm:max-w-[600px]">
      <div className="">
        <div className="mt-1 mb-4 flex justify-center">
          <FaQuoteLeft size={40} className="text-primary-color-700" />
        </div>
        <p className="mb-6 text-center text-justify text-lg leading-relaxed text-gray-700">
          {review}
        </p>
        <div className="flex flex-col items-center">
          <p className="text-base font-bold text-gray-900">{name}</p>
          <p className="text-sm font-medium text-gray-500">
            {age} años, {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
