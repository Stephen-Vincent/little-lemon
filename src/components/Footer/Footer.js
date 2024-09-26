import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/FooterLogo.png";

const Footer = () => {
  return (
    <section className="footer-section">
      {/* Image */}
      <div>
        <img src={FooterLogo} alt="Footer Logo" className="footer-logo" />
      </div>

      {/* Nav Links */}
      <div className="footer-links">
        <p className="footer-links-title">Navigation Links</p>
        <ul className="footer-links-list">
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
      </div>

      {/* Address */}
      <div className="footer-address">
        <p className="footer-address-title">Contact</p>

        <div className="footer-postal">
          <p>Little Lemon Restaurant</p>
          <p>456 S. Lemon Street</p>
          <p>Chicago, IL 60607</p>
        </div>

        <p className="footer-phone">Phone: (312) 555-7890</p>

        <p className="footer-email">Email: chicago@littlelemon.com</p>
      </div>

      {/* Socials */}
      <div></div>
    </section>
  );
};

export default Footer;
