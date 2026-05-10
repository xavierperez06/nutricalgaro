import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ name, age, location, review }) => {
  return (
    <div className="m-auto flex min-h-[300px] max-w-[400px] items-center justify-center bg-white p-6 shadow-2xl sm:max-w-[600px]">
      <div className="">
        <div className="mt-1 mb-3 flex justify-center">
          <FaQuoteLeft size={50} className="text-primary-color-700" />
        </div>
        <p className="my-2 text-xl">{review}</p>
        <p className="mb-2 font-bold">{name}</p>
        <p className="italic">
          {age} años, {location}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
