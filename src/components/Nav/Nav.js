import React, { useState } from "react";
import "./Nav.css";
import Logo from "../../assets/Logo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="Little Lemon Logo" className="logo" />
      <button className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger Icon */}
      </button>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
