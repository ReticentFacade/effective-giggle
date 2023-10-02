import React from "react";
import "../css/Home.css";
import bigCoffee from "../assets/bigCoffee.png";

const Home = () => {
  return (
    <div className="home-container flex justify-center items-center px-4 pt-12 mt-11 ml-11 mr-32">
      <div className="div1 w-2/5 mx-11">
        <div className="bigCoffee">
          <img
            id="bigCoffeeBag"
            src={bigCoffee}
            alt="bigCoffeeBag"
            className="w-40rem"
          />
        </div>
      </div>

      <div className="div2 w-3/5 flex">
        <div className="home-text text-4xl text-left">
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
            Coffee Bean One
          </div>
          <div className="oneCoffee" id="right">
            Coffee Bean Two
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
