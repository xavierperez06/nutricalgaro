"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReviewCard from "./ReviewCard";

const ReviewSlider = ({ slideInfo }) => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={4000}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
    >
      {slideInfo.map((review, index) => (
        <div key={index}>
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
