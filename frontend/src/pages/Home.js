import React from "react";
import "../css/Home.css";
import bigCoffee from "../assets/bigCoffee.png";
import oneCoffeeBean from "../assets/oneCoffeeBean.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container flex flex-col xl:flex-row justify-center items-center px-4 pt-12 xl:mt-12 mr-2 min-w-[628px] xl:mb-4">
      <div className="div1 xl:w-2/5 mx-2 xl:mx-11 sm:max-md:w-2/3">
        <div className="bigCoffee mr-10">
          <img
            id="bigCoffeeBag"
            src={bigCoffee}
            alt="bigCoffeeBag"
            className="max-w-[550px] max-h-[550px]"
          />
        </div>
      </div>

      <div className="div2 md:w-3/5 flex sm:max-md:w-1/2">
        <div className="home-text text-3xl xl:text-4xl text-left  sm:max-lg:mb-20">
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

        <div className="hidden xl:block home-beans flex flex-col items-center">
          <div>
            <img
              src={oneCoffeeBean}
              alt="oneCoffee"
              id="leftBean"
              className="oneCoffeeBean md:w-32 md:h-24 transform transparent-bg"
            />
          </div>
          <div>
            <img
              src={oneCoffeeBean}
              alt="oneCoffee"
              id="rightBean"
              className="oneCoffeeBean md:w-32 md:h-24 transform transparent-bg md:mt-0 sm:mb-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
