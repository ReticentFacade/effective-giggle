import "../../css/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    // const [isHouseHovering, setOnHouseHovering] = useState(false);
    // const [isCartHovering, setOnCartHovering] = useState(false);
    // const [isInfoHovering, setOnInfoHovering] = useState(false);
    // const [isAtHovering, setOnAtHovering] = useState(false);

    // const onHouseMouseEnter = () => {
    //     // console.log("Mouse entered");
    //     setOnHouseHovering(true);
    // };
    // const onCartMouseEnter = () => {
    //     setOnCartHovering(true);
    // };
    // const onInfoMouseEnter = () => {
    //     setOnInfoHovering(true);
    // };
    // const onAtMouseEnter = () => {
    //     setOnAtHovering(true);
    // };

    // const onHouseMouseLeave = () => {
    //     // console.log("Mouse left");
    //     setOnHouseHovering(false);
    // };
    // const onCartMouseLeave = () => {
    //     setOnCartHovering(false);
    // };
    // const onInfoMouseLeave = () => {
    //     setOnInfoHovering(false);
    // };
    // const onAtMouseLeave = () => {
    //     setOnAtHovering(false);
    // };

    // const houseWeight = isHouseHovering ? 'bold' : 'fill';
    // const cartWeight = isCartHovering ? 'bold' : 'fill';
    // const infoWeight = isInfoHovering ? 'bold' : 'fill';
    // const atWeight = isAtHovering ? 'bold' : 'fill';

    // return (
    //     <div className="navbar">
    //         <Link to="login">
    //             <button className="login-button">
    //             <SignIn size={32} color="#3c2a21" weight="bold" onMouseEnter={onHouseMouseEnter} onMouseLeave={onHouseMouseLeave} />
    //             </button>
    //         </Link>

    //         <Link to="/">
    //             <button className="house-button">
    //                 <House size={32} color="#3c2a21" weight={houseWeight} onMouseEnter={onHouseMouseEnter} onMouseLeave={onHouseMouseLeave} />
    //             </button>
    //         </Link>

    //         <Link to="order">
    //             <button className="cart-button">
    //                 <ShoppingCart size={32} color="#3c2a21" weight={cartWeight} onMouseEnter={onCartMouseEnter} onMouseLeave={onCartMouseLeave} />
    //             </button>
    //         </Link>

    //         <Link to="about">
    //             <button className="info-button">
    //                 <Info size={32} color="#3c2a21" weight={infoWeight} onMouseEnter={onInfoMouseEnter} onMouseLeave={onInfoMouseLeave} />
    //             </button>
    //         </Link>

    //         <Link to="socials">
    //             <button className="at-button">
    //                 <At size={32} color="#3c2a21" weight={atWeight} onMouseEnter={onAtMouseEnter} onMouseLeave={onAtMouseLeave} />
    //             </button>
    //         </Link>

    //     </div>
    // );

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
