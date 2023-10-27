import React, { useState } from "react";
import "../css/About.css";
import AboutUs from "../components/AboutUs/AboutUs.js";
import Mission from "../components/AboutUs/Mission.js";
import Farmers from "../components/AboutUs/Farmers.js";
import Beans from "../components/AboutUs/Beans.js";

function About() {
  const [selectedContent, setSelectedContent] = useState("AboutUs");

  const contentMap = {
    AboutUs: <AboutUs />,
    Mission: <Mission />,
    Farmers: <Farmers />,
    Beans: <Beans />,
  };

  return (
    <div className="about-us-container px-4 pt-12 mt-10 ml-11 mr-32 min-w-[820px] overflow-y-auto">
      {/* Render the selected content */}
      {contentMap[selectedContent]}

      {/* Buttons:  */}
      <div className="about-us-btns mt-8 sm:flex-col mb-10">
        <button
          className="btn login-auth-btn"
          onClick={() => setSelectedContent("Mission")}
        >
          Mission
        </button>
        <button
          className="btn login-auth-btn"
          onClick={() => setSelectedContent("Farmers")}
        >
          Farmers
        </button>
        <button
          className="btn login-auth-btn"
          onClick={() => setSelectedContent("Beans")}
        >
          Beans
        </button>
      </div>
    </div>
  );
}

export default About;
