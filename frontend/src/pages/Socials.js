import React from "react";
import "../css/Socials.css";
import { Link } from "react-router-dom";

function Socials() {
  return (
    <div className="socials-container">
      <span className="text-3xl font-bold underline">
        Connect with us on social media!
      </span>
      <button class="ease-in-out transform hover:scale-125 transition duration-500 bg-teal-400 px-6 py-2 m-6 inline">
        Hover in out
      </button>
    </div>
  );
}

export default Socials;
