import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ type, label, to }) => {
  // Conditional class name based on button type
  const getButtonClass = () => {
    switch (type) {
      case "primary":
        return "btn-primary";
      case "secondary":
        return "btn-secondary";
      case "danger":
        return "btn-danger";
      default:
        return "btn-default";
    }
  };

  // If the 'to' prop is provided, use the Link component for navigation
  if (to) {
    return (
      <Link to={to} className={getButtonClass()}>
        {label}
      </Link>
    );
  }

  // Default button element if 'to' prop is not provided
  return <button className={getButtonClass()}>{label}</button>;
};

export default Button;
