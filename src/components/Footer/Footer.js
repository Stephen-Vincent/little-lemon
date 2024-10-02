import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/FooterLogo.png";
import Facebook from "../../assets/Facebook.png";
import TwitterX from "../../assets/TwitterX.png";
import Instagram from "../../assets/Instagram.png";

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
      <div>
        <p className="footer-address-title">Socials</p>
        <div>
          <a href="www.instagram.com" target="_blank">
            <img
              className="footer-socials"
              src={Instagram}
              alt="Instagram Logo"
            />
          </a>
          <a href="www.facebook.com" target="_blank">
            <img
              className="footer-socials"
              src={Facebook}
              alt="Facebook Logo"
            />
          </a>
          <a href="www.x.com" target="_blank">
            <img
              className="footer-socials"
              src={TwitterX}
              alt="TwitterX Logo"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
