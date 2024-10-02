import React, { useState } from "react";
import "./Card.css";
import deliveryIcon from "../../assets/deliveryIcon.png";

const Card = ({ image, title, price, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />

      <div className="card-content">
        <div className="title-and-price">
          <h2 className="card-title">{title}</h2>
          <p className="card-price">{price}</p>
        </div>
        <p className={`card-description ${isExpanded ? "expanded" : ""}`}>
          {description}
        </p>
        <button onClick={toggleExpand} className="read-more-btn">
          {isExpanded ? "Read less" : "Read more"}
        </button>
        <div className="delivery-section">
          <a href="/">
            Order for Delivery
            <span>
              <img src={deliveryIcon} alt="Delivery Icon" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
