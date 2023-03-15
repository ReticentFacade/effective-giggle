import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/coffee-beans-with-jute-bag.png";
import "../css/Home.css";
import { ShoppingBag } from "@phosphor-icons/react";

function Home() {
    return (
        <div className="page home-page">
            <div className="container">
                <div className="coffee-bean-bag">
                    <img src={Image} alt="Coffee Bean Bag" />
                </div>

                <div className="sub-container">
                    <div className="text-container">
                        <p>
                            Get the best
                            <br />
                            COFFEE
                            <br />
                            ever!
                            <br />
                        </p>
                    </div>
                    <div className="button-container">
                        <Link to="/order">
                            <button className="order-now font-bold py-2 px-4 rounded-full">
                                <ShoppingBag
                                    size={32}
                                    color="#3d2b21"
                                    weight="fill"
                                />
                                Order Now!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
