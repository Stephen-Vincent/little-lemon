import React from "react";
import "./Button.css";

const Button = ({ type, label }) => {
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

  return <button className={getButtonClass()}>{label}</button>;
};

export default Button;
