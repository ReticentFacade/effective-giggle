import React from "react";
import "../css/Home.css";
import bigCoffee from "../assets/bigCoffee.png";
import oneCoffeeBean from "../assets/oneCoffeeBean.png";
import { Link } from "react-router-dom";

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
          <div className="order-btn">
            <Link to="/order" className="order-btn-link">
              Order Now!
            </Link>
          </div>
        </div>

        <div className="home-beans flex flex-col items-center">
          <div
          // className="z-10"
          >
            <img
              src={oneCoffeeBean}
              alt="oneCoffee"
              id="leftBean"
              className="oneCoffeeBean w-32 h-24 transform transparent-bg"
            />
          </div>
          <div
          // className="z-0"
          >
            <img
              src={oneCoffeeBean}
              alt="oneCoffee"
              id="rightBean"
              className="oneCoffeeBean w-32 h-24 transform transparent-bg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
