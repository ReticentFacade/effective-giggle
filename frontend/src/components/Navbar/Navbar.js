import React from "react";
import "../../css/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import loginBeforeHover from "./beforeHover_icons/loginBeforeHover.png";
import loginOnHover from "./onHover_icons/loginOnHover.png";
import houseBeforeHover from "./beforeHover_icons/houseBeforeHover.png";
import houseOnHover from "./onHover_icons/houseOnHover.png";
import cartBeforeHover from "./beforeHover_icons/cartBeforeHover.png";
import cartOnHover from "./onHover_icons/cartOnHover.png";
import aboutOnHover from "./onHover_icons/aboutOnHover.png";
import aboutBeforeHover from "./beforeHover_icons/aboutBeforeHover.png";
import socialsBeforeHover from "./beforeHover_icons/socialsBeforeHover.png";
import socialsOnHover from "./onHover_icons/socialsOnHover.png";

export default function Navbar() {
  return (
    <div className="navbar mt-20 pl-0 mr-2">
      <button className="login-btn">
        <Link to="login">
          <img
            // src={require("./beforeHover_icons/loginBeforeHover.png")}
            src={loginBeforeHover}
            alt="loginBeforeHover"
          />
          <img
            className="login-btn-hover"
            // src={require("./onHover_icons/loginOnHover.png")}
            src={loginOnHover}
            alt="login-btn-hover"
          />
        </Link>
      </button>

      <button className="house-btn">
        <Link to="/">
          <img
            // src={require("./beforeHover_icons/houseBeforeHover.png")}
            src={houseBeforeHover}
            alt="house-btn"
          />
          <img
            className="house-btn-hover"
            // src={require("./onHover_icons/houseOnHover.png")}
            src={houseOnHover}
            alt="house-btn-hover"
          />
        </Link>
      </button>

      <button className="cart-btn">
        <Link to="order">
          <img
            // src={require("./beforeHover_icons/cartBeforeHover.png")}
            src={cartBeforeHover}
            alt="cartBeforeHover"
          />
          <img
            className="cart-btn-hover"
            // src={require("./onHover_icons/cartOnHover.png")}
            src={cartOnHover}
            alt="cart-btn-hover"
          />
        </Link>
      </button>

      <button className="about-btn">
        <Link to="about">
          <img
            // src={require("./beforeHover_icons/aboutBeforeHover.png")}
            src={aboutBeforeHover}
            alt="aboutBeforeHover"
          />
          <img
            className="about-btn-hover"
            // src={require("./onHover_icons/aboutOnHover.png")}
            src={aboutOnHover}
            alt="about-btn-hover"
          />
        </Link>
      </button>

      <button className="socials-btn">
        <Link to="socials">
          <img
            // src={require("./beforeHover_icons/socialsBeforeHover.png")}
            src={socialsBeforeHover}
            alt="socialsBeforeHover"
          />
          <img
            className="socials-btn-hover"
            // src={require("./onHover_icons/socialsOnHover.png")}
            src={socialsOnHover}
            alt="socials-btn-hover"
          />
        </Link>
      </button>
    </div>
  );
}
