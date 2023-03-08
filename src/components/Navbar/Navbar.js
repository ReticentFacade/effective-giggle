import { House } from "@phosphor-icons/react";
import { ShoppingCart } from "@phosphor-icons/react";
import { Info } from "@phosphor-icons/react";
import { At } from "@phosphor-icons/react";
import { useState } from "react";

import { Link } from "react-router-dom";


export default function Navbar() {
    const [isHouseHovering, setOnHouseHovering] = useState(false);
    const [isCartHovering, setOnCartHovering] = useState(false);
    const [isInfoHovering, setOnInfoHovering] = useState(false);
    const [isAtHovering, setOnAtHovering] = useState(false);

    const onHouseMouseEnter = () => {
        // console.log("Mouse entered");
        setOnHouseHovering(true);
    };
    const onCartMouseEnter = () => {
        setOnCartHovering(true);
    };
    const onInfoMouseEnter = () => {
        setOnInfoHovering(true);
    };
    const onAtMouseEnter = () => {
        setOnAtHovering(true);
    };



    const onHouseMouseLeave = () => {
        // console.log("Mouse left");
        setOnHouseHovering(false);
    };
    const onCartMouseLeave = () => {
        setOnCartHovering(false);
    };
    const onInfoMouseLeave = () => {
        setOnInfoHovering(false);
    };
    const onAtMouseLeave = () => {
        setOnAtHovering(false);
    };

    const houseWeight = isHouseHovering ? 'bold' : 'fill';
    const cartWeight = isCartHovering ? 'bold' : 'fill';
    const infoWeight = isInfoHovering ? 'bold' : 'fill';
    const atWeight = isAtHovering ? 'bold' : 'fill';

    return (
        <div className="navbar">
            <Link to="home">
                <button className="house-button">
                    <House size={32} color="#3c2a21" weight={houseWeight} onMouseEnter={onHouseMouseEnter} onMouseLeave={onHouseMouseLeave} />
                    {/* <House size={32} color="#3c2a21" weight="bold" /> */}
                </button>
            </Link>    

            <Link to="order">
                <button className="cart-button">
                    <ShoppingCart size={32} color="#3c2a21" weight={cartWeight} onMouseEnter={onCartMouseEnter} onMouseLeave={onCartMouseLeave} />
                </button>
            </Link>
            


            <Link to="about">
                <button className="info-button">
                    <Info size={32} color="#3c2a21" weight={infoWeight} onMouseEnter={onInfoMouseEnter} onMouseLeave={onInfoMouseLeave} />
                </button>
            </Link>

            <Link to="socials">
                <button className="at-button">
                    <At size={32} color="#3c2a21" weight={atWeight} onMouseEnter={onAtMouseEnter} onMouseLeave={onAtMouseLeave} />
                </button>
            </Link>

        </div>
    );
}
