import React from "react";
import Button from "../Button/Button";
import "./Specials.css";
import Card from "../Card/Card";
import GreekSalad from "../../assets/greeksalad.png";
import Bruchetta from "../../assets/bruchetta.png";
import LemonDessert from "../../assets/lemondessert.png";

const Specials = () => {
  return (
    <section className="specials-section">
      <div className="btn-and-title">
        <h2 className="specials-heading">Specials</h2>
        <Button type="primary" label="Online Menu" />
      </div>
      <div className="cards">
        {/* Cards */}
        <Card
          image={GreekSalad}
          title="Greek Salad"
          price="$12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
        />
        <Card
          image={Bruchetta}
          title="Bruchetta"
          price="$5.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
        />
        <Card
          image={LemonDessert}
          title="Lemon Dessert"
          price="$5.00"
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </section>
  );
};

export default Specials;
