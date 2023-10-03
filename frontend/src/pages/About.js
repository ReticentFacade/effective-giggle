import React from "react";
import "../css/About.css";
import { Link } from "react-router-dom";
// import aboutUsBeans from "../assets/aboutUsbeans.png";
import aboutUsMug from "../assets/aboutUsMug.png";

function About() {
  return (
    <div className="about-us-container px-4 pt-12 mt-10 ml-11 mr-32">
      <div className="text-3xl font-bold pb-12 mb-4">About Us</div>
      <div className="about-us-box flex">
        <div className="about-us-picture w-1/2 object-contain mr-8 ml-4">
          {/* <img 
                src={aboutUsBeans} 
                alt="about-us-picture" 
                className="rounded-lg shadow-md"
            /> */}
          <img
            src={aboutUsMug}
            alt="about-us-picture"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="about-us-text text-lg w-1/2 pr-6 text-left">
          Nisi duis quis esse et adipisicing adipisicing duis laborum magna
          consequat eiusmod. Irure cupidatat non esse id non eiusmod ut nulla
          fugiat ipsum cupidatat duis reprehenderit. Ut non elit sunt do velit
          magna cupidatat. Aliquip deserunt culpa reprehenderit qui consectetur
          eu ipsum. Incididunt velit nostrud est esse fugiat mollit. Aliquip
          duis non commodo tempor irure anim ea ipsum amet fugiat. Labore ea
          cupidatat voluptate incididunt.
        </div>
      </div>
      <div className="about-us-btns mt-8">
        <button className="btn login-auth-btn about-us-btn">
          <Link to="/about/mission" className="about-us-btn-link">
            Mission
          </Link>
        </button>
        <button className="btn login-auth-btn about-us-btn">
          <Link to="/about/farmers" className="about-us-btn-link">
            Farmers
          </Link>
        </button>
        <button className="btn login-auth-btn about-us-btn">
          <Link to="/about/beans" className="about-us-btn-link">
            Beans
          </Link>
        </button>
      </div>
    </div>
  );
}

export default About;
