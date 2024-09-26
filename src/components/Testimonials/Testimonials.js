import React from "react";
import "./Testimonials.css";
import TestimonialCard from "../Testimonial-Cards/TestimonialCard";
import Avatar1 from "../../assets/avatar1.png";
import Avatar2 from "../../assets/avatar2.png";
import Avatar3 from "../../assets/avatar3.png";
import Avatar4 from "../../assets/avatar4.png";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        <TestimonialCard
          image={Avatar1}
          name="Joe Blogs"
          city="New York"
          rating="5"
          review="The lemon chicken was incredible, and the staff made us feel like family!"
        />
        <TestimonialCard
          image={Avatar2}
          name="Mary Jane"
          city="Chicago"
          rating="4"
          review="Delicious food with a fresh twist, but the seating can feel a bit cramped."
        />
        <TestimonialCard
          image={Avatar3}
          name="Sarah Miller"
          city="Miami"
          rating="3"
          review="Great food, but the portions could be a bit larger for the price."
        />
        <TestimonialCard
          image={Avatar4}
          name="Bob Smith"
          city="Detroit"
          rating="5"
          review="Great food, but the portions could be a bit larger for the price."
        />
      </div>
    </section>
  );
};

export default Testimonials;
