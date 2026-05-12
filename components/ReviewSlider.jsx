"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons
import ReviewCard from "./ReviewCard";

const ReviewSlider = ({ slideInfo }) => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={6000}
      showArrows={true}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute top-1/2 left-0 z-10 flex -translate-y-1/2 cursor-pointer items-center justify-center p-2 text-gray-400 transition-colors hover:text-gray-900 sm:left-4"
          >
            <FaChevronLeft size={40} />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute top-1/2 right-0 z-10 flex -translate-y-1/2 cursor-pointer items-center justify-center p-2 text-gray-400 transition-colors hover:text-gray-900 sm:right-4"
          >
            <FaChevronRight size={40} />
          </button>
        )
      }
    >
      {slideInfo.map((review, index) => (
        <div key={index} className="py-8">
          <ReviewCard
            age={review.age}
            location={review.location}
            name={review.name}
            review={review.description}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ReviewSlider;
