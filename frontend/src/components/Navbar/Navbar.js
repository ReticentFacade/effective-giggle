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
import "../css/CollapsedNavbar.css";
import { XCircle } from "phosphor-react";
// import { DotsThreeCircleVertical } from "@phosphor-icons/react";
import { List } from "phosphor-react";

export default function Navbar() {
  return (
    <div className="bg-transparent navbar fixed top-0 right-0 mt-20 pl-0 mr-2">
      <ul className="bg-transparent navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
        <Link to="/" className="logo">
          {/* <h3 className="font-bold text-2xl">LOGO</h3> */}
        </Link>
        <input type="checkbox" id="check" className="bg-transparent" />

        <span className="bg-transparent menu [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
          <li className="bg-transparent">
            <button className="bg-transparent login-btn">
              <Link to="login" className="bg-transparent">
                <img src={loginBeforeHover} alt="loginBeforeHover" />
                <img
                  className="login-btn-hover"
                  src={loginOnHover}
                  alt="login-btn-hover"
                />
              </Link>
            </button>
          </li>

          <li className="bg-transparent">
            <button className="bg-transparent house-btn">
              <Link to="/" className="bg-transparent">
                <img src={houseBeforeHover} alt="house-btn" />
                <img
                  className="house-btn-hover"
                  src={houseOnHover}
                  alt="house-btn-hover"
                />
              </Link>
            </button>
          </li>

          <li className="bg-transparent">
            <button className="bg-transparent cart-btn">
              <Link to="/order" className="bg-transparent">
                <img src={cartBeforeHover} alt="cartBeforeHover" />
                <img
                  className="cart-btn-hover"
                  src={cartOnHover}
                  alt="cart-btn-hover"
                />
              </Link>
            </button>
          </li>

          <li className="bg-transparent">
            <button className="bg-transparent about-btn">
              <Link to="/about" className="bg-transparent">
                <img src={aboutBeforeHover} alt="aboutBeforeHover" />
                <img
                  className="about-btn-hover"
                  src={aboutOnHover}
                  alt="about-btn-hover"
                />
              </Link>
            </button>
          </li>

          <li className="bg-transparent">
            <button className="bg-transparent socials-btn">
              <Link to="/socials" className="bg-transparent">
                <img src={socialsBeforeHover} alt="socialsBeforeHover" />
                <img
                  className="socials-btn-hover"
                  src={socialsOnHover}
                  alt="socials-btn-hover"
                />
              </Link>
            </button>
          </li>

          <label htmlFor="check" className="bg-transparent close-menu">
            <XCircle
              size={52}
              color="#e5e4ca"
              weight="fill"
              className="bg-transparent"
            />
          </label>
        </span>

        <label htmlFor="check" className="bg-transparent open-menu">
          {/* <DotsThreeCircleVertical size={52} color="#3d2b21" weight="bold" className="bg-transparent"/> */}
          <List
            size={52}
            color="#3d2b21"
            weight="bold"
            className="bg-transparent"
          />
        </label>
      </ul>
    </div>
  );
}
