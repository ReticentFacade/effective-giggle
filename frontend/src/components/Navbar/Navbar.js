import React from "react";
import "../../css/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <button className="login-btn">
                <Link to="login">
                    <img
                        src={require("./beforeHover_icons/loginBeforeHover.png")}
                        alt="loginBeforeHover"
                    />
                    <img
                        className="login-btn-hover"
                        src={require("./onHover_icons/loginOnHover.png")}
                        alt="login-btn-hover"
                    />
                </Link>
            </button>

            <button className="house-btn">
                <Link to="/">
                    <img
                        src={require("./beforeHover_icons/houseBeforeHover.png")}
                        alt="house-btn"
                    />
                    <img
                        className="house-btn-hover"
                        src={require("./onHover_icons/houseOnHover.png")}
                        alt="house-btn-hover"
                    />
                </Link>
            </button>

            <button className="cart-btn">
                <Link to="order">
                    <img
                        src={require("./beforeHover_icons/cartBeforeHover.png")}
                        alt="cartBeforeHover"
                    />
                    <img
                        className="cart-btn-hover"
                        src={require("./onHover_icons/cartOnHover.png")}
                        alt="cart-btn-hover"
                    />
                </Link>
            </button>

            <button className="about-btn">
                <Link to="about">
                    <img
                        src={require("./beforeHover_icons/aboutBeforeHover.png")}
                        alt="aboutBeforeHover"
                    />
                    <img
                        className="about-btn-hover"
                        src={require("./onHover_icons/aboutOnHover.png")}
                        alt="about-btn-hover"
                    />
                </Link>
            </button>

            <button className="socials-btn">
                <Link to="socials">
                    <img
                        src={require("./beforeHover_icons/socialsBeforeHover.png")}
                        alt="socialsBeforeHover"
                    />
                    <img
                        className="socials-btn-hover"
                        src={require("./onHover_icons/socialsOnHover.png")}
                        alt="socials-btn-hover"
                    />
                </Link>
            </button>
        </div>
    );
}
