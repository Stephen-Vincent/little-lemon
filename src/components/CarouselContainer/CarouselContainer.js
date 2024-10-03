import React from "react";
import TestimonialCard from "../Testimonial-Cards/TestimonialCard";
import "./CarouselContainer.css";

const CarouselContainer = ({ testimonials }) => {
  return (
    <div className="carousel-container">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          image={testimonial.image}
          name={testimonial.name}
          city={testimonial.city}
          rating={testimonial.rating}
          review={testimonial.review}
        />
      ))}
    </div>
  );
};

export default CarouselContainer;
