import React from "react";
import Button from "../Button/Button";
import "./Hero.css";
import HeroImg from "../../assets/heroimg.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="content">
        <article className="article-content">
          <div>
            <h1>Little Lemon</h1>
            <h2 className="secondary-heading">Chicago</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button type="primary" label="Reserve a Table" to="/booking" />
        </article>
        <div className="heroimg-section ">
          <img
            className="heroimg"
            src={HeroImg}
            alt="Image of Little Lemons' offerings."
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
