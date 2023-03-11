import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/coffee-beans-with-jute-bag.png";
import "../css/Home.css";

function Home(){
    return(
        <div className="page home-page">
            <div className="container">
                <div className="coffee-bean-bag">
                    <img src={Image} alt="coffee-bean-bag"/>
                </div>

                <p className="home-text">
                    Get the best 
                    <br />
                    COFFEE 
                    <br />
                    ever! 
                    <br />
                    <br />
                    Order NOW!
                </p>
            </div>
        </div>
    );
};

export default Home;