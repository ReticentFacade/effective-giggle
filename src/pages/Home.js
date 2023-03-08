import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/coffee-beans-with-jute-bag.png";

function Home(){
    return(
        <div className="page home-page">
            <div className="coffee-jute-bag">
                <img src={Image} width="600" height="600" alt="coffee-jute-bag"/>

                <p className="home-text">
                    Get the best <br />
                    COFFEE <br />
                    ever! <br />
                    
                    <br />
                    Order NOW!
                </p>
            </div>
        </div>
    );
};

export default Home;