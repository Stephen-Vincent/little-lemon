import React, { useState } from "react";
import "./TestimonialCard.css";
import Star from "../../assets/Star.png"; // Assuming Star.png is a filled star icon

const TestimonialCard = ({ image, name, city, rating, review }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to render the stars based on rating value
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img
          key={i}
          src={Star}
          alt="star"
          className={i < rating ? "filled-star" : "empty-star"}
          style={{ width: "10px", height: "10px", marginRight: "2px" }}
        />
      );
    }
    return stars;
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="testimonials-card">
      <h4 className="person-rating">
        Rating: <span>{renderStars(rating)}</span>
      </h4>
      <div className="person-details">
        <img src={image} alt="Picture of person" />
        <div className="person-text">
          <p className="person-name">{name}</p>
          <p className="person-city">{city}</p>
        </div>
      </div>

      <p className={`person-review ${isExpanded ? "expanded" : ""}`}>
        {review}
      </p>
      <button onClick={toggleExpand} className="read-more-btn">
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
};

export default TestimonialCard;
