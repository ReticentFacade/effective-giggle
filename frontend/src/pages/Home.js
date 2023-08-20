import React from "react";
import "../css/Home.css";
import bigCoffee from "../assets/bigCoffee.png";

const Home = () => {
  return (
    <div className="container">
      <div className="div1">
        <div className="bigCoffee">
          <img id="bigCoffeeBag" src={bigCoffee} alt="bigCoffeeBag" />
        </div>
      </div>

      <div className="div2">
        <div className="home-text">
          <p>
            Get the perfect <br />
            <b>COFFEE BEANS</b> <br />
            for your coffee <br />
            straight from <b>farmers!</b>
          </p>
          <div className="order-btn">Order Now!</div>
        </div>

        <div className="home-beans">
          <div className="oneCoffee" id="left">
            Coffee Bean
          </div>
          <div className="oneCoffee" id="right">
            Coffee Bean
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
