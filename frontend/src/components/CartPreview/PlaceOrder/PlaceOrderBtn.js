import "../../../css/Order.css";
import { Link } from "react-router-dom";

const PlaceOrderBtn = () => {
    return (
        <button className="btn login-auth-btn">
            <Link to="https://www.buymeacoffee.com/reticentfacade" className="bg-transparent">
                Continue To Payment
            </Link>
        </button>
    );
};

export default PlaceOrderBtn;