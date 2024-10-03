import React from "react";
import "./About.css";
import MarioAndAdrian from "../../assets/Mario-and-Adrian-A.png";
import RestaurantChef from "../../assets/restaurant-chef-B.png";

const About = () => {
  return (
    <section className="about-section">
      <article className="about-content">
        <div>
          <h1 className="about-heading">Little Lemon</h1>
          <h2 className="sub-heading">Chicago</h2>
        </div>
        <div>
          <p className="about-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.{" "}
          </p>
        </div>
      </article>
      <div className="about-images">
        <img
          className="image1"
          src={MarioAndAdrian}
          alt="image of offerings 1"
        />
        <img
          className="image2"
          src={RestaurantChef}
          alt="image of offerings 2"
        />
      </div>
    </section>
  );
};

export default About;
