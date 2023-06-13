import React, { useState } from "react";
import "../css/Order.css";

function Order() {
  const [selectedCoffeeType, setSelectedCoffeeType] = useState("");
  const handleCoffeeTypeChange = (event) => {
    setSelectedCoffeeType(event.target.value); // Update the selected coffee type when a radio button is clicked
  };

  const [selectedCoffeeAmount, setSelectedCoffeeAmount] = useState("");
  const handleCoffeeAmountChange = (event) => {
    setSelectedCoffeeAmount(event.target.value);
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
              checked={selectedCoffeeType === "Arabica"}
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
              checked={selectedCoffeeType === "Robusta"}
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
              checked={selectedCoffeeType === "Liberica"}
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
              checked={selectedCoffeeAmount === "5 kg"}
              onChange={handleCoffeeAmountChange}
            />
          </label>
          <label>
            15 kg
            <input
              type="radio"
              name="coffee-amount"
              value="15 kg"
              checked={selectedCoffeeAmount === "15 kg"}
              onChange={handleCoffeeAmountChange}
            />
          </label>
          <label>
            30 kg
            <input
              type="radio"
              name="coffee-amount"
              value="30 kg"
              checked={selectedCoffeeAmount === "30 kg"}
              onChange={handleCoffeeAmountChange}
            />
          </label>
        </form>

        <form className="delivery-form">
            <h2>Delivery Address</h2>
            <label>
            <input 
                type="text"
                name="delivery-address"
                placeholder="123 Main Street"
                />
            </label>
        </form>
      </div>
      <div className="cart-animation"></div>
    </div>
  );
}

export default Order;
