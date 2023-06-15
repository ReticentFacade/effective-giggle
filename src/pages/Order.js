import React, { useState } from "react";
import "../css/Order.css";
import "../css/btnEffect.css";
// import OrderDetails from "../handlers/Order";
// import { placeOrder } from "../handlers/Order";

function Order() {
  const [coffeeType, setCoffeeType] = useState("");
  const [coffeeAmount, setCoffeeAmount] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const handleCoffeeTypeChange = (event) => {
    setCoffeeType(event.target.value);
  };
  const handleCoffeeAmountChange = (event) => {
    setCoffeeAmount(event.target.value);
  };
  const handleDeliveryAddressChange = (event) => {
    setDeliveryAddress(event.target.value);
  };
  const handlePlaceOrder = () => {
    // Create an object with the user input data:
    const orderData = {
      coffeeType,
      coffeeAmount,
      deliveryAddress,
    };

    // Call the handler function in Order.js from handler-directory and just pass the orderData:
    placeOrder(orderData);
  };

  return (
    <div className="page">
      <div className="order-side">
        <h1>Customize your order</h1>

        <h2>Coffee Type</h2>
        <form className="coffee-type">
          <label>
            Arabica
            <input
              type="radio"
              name="coffee-type"
              value="Arabica"
              checked={coffeeType === "Arabica"}
              onChange={handleCoffeeTypeChange}
            />
          </label>
          {/* <br /> */}
          <label>
            Robusta
            <input
              type="radio"
              name="coffee-type"
              value="Robusta"
              checked={coffeeType === "Robusta"}
              onChange={handleCoffeeTypeChange}
            />
          </label>
          {/* <br /> */}
          <label>
            Liberica
            <input
              type="radio"
              name="coffee-type"
              value="Liberica"
              checked={coffeeType === "Liberica"}
              onChange={handleCoffeeTypeChange}
            />
          </label>
          {/* <br /> */}
        </form>

        <h2>Coffee Amount</h2>
        <form className="coffee-amount">
          <label>
            5 kg
            <input
              type="radio"
              name="coffee-amount"
              value="5 kg"
              checked={coffeeAmount === "5 kg"}
              onChange={handleCoffeeAmountChange}
            />
          </label>
          <label>
            15 kg
            <input
              type="radio"
              name="coffee-amount"
              value="15 kg"
              checked={coffeeAmount === "15 kg"}
              onChange={handleCoffeeAmountChange}
            />
          </label>
          <label>
            30 kg
            <input
              type="radio"
              name="coffee-amount"
              value="30 kg"
              checked={coffeeAmount === "30 kg"}
              onChange={handleCoffeeAmountChange}
            />
          </label>
        </form>

        <h2>Delivery Address</h2>
        <form className="delivery-form">
          <label>
            <input
              type="text"
              name="delivery-address"
              value={deliveryAddress}
              className="delivery-address"
              placeholder="123 Main Street"
              onChange={handleDeliveryAddressChange}
            />
          </label>
        </form>

        <button className="btn place-order-btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
      <div className="cart-animation"></div>
    </div>
  );
}

export default Order;
