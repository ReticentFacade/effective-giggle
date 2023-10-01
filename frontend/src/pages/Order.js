import React, { useState } from "react";
import "../css/Order.css";
import "../css/btnEffect.css";
import instance from "../utils/api.js";

function Order() {
  const required = (value) => {
    if (!value) {
      return <div className="invalid-details">This field is required!</div>;
    }
  };

  const [beanType, setBeanType] = useState("");
  const [beanAmount, setBeanAmount] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const handleBeanTypeChange = (event) => {
    setBeanType(event.target.value);
  };
  const handleBeanAmountChange = (event) => {
    setBeanAmount(event.target.value);
  };
  const handleDeliveryAddressChange = (event) => {
    setDeliveryAddress(event.target.value);
  };
  const handleAddToCart = async () => {
    // Create an object with the user input data:
    const orderData = {
      beanType,
      beanAmount,
      deliveryAddress,
    };

    console.log("Order data: ", orderData);

    try {
      // Send order data to the backend
      const response = await instance.post("/cart/addToCart", orderData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("This is the response after `Order data`: ", response);

      if (response.status === 200) {
        alert("Added to cart successfully!");
        console.log("Added to cart successfully!");
      }
    } catch (error) {
      console.error("Error adding to cart: ", error.response.data);
    }
  };

  function cartAlert() {
    return (
      <div
        class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
        role="alert"
      >
        <p class="font-bold">Successfully added to cart!</p>
        <p class="text-sm">
          Your items have been added to cart. Checkout to place order!
        </p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="order-side">
        <h1>Customize your order</h1>

        <h2>Coffee Type</h2>
        <form className="coffee-type">
          <label>
            Arabica
            <input
              className="radio-btn"
              type="radio"
              name="coffee-type"
              value="Arabica"
              checked={beanType === "Arabica"}
              onChange={handleBeanTypeChange}
            />
          </label>
          {/* <br /> */}
          <label>
            Robusta
            <input
              className="radio-btn"
              type="radio"
              name="coffee-type"
              value="Robusta"
              checked={beanType === "Robusta"}
              onChange={handleBeanTypeChange}
            />
          </label>
          {/* <br /> */}
          <label>
            Liberica
            <input
              className="radio-btn"
              type="radio"
              name="coffee-type"
              value="Liberica"
              checked={beanType === "Liberica"}
              onChange={handleBeanTypeChange}
            />
          </label>
          {/* <br /> */}
        </form>

        <h2>Coffee Amount</h2>
        <form className="coffee-amount">
          <label>
            5 kg
            <input
              className="radio-btn"
              type="radio"
              name="coffee-amount"
              value="5 kg"
              checked={beanAmount === "5 kg"}
              onChange={handleBeanAmountChange}
            />
          </label>
          <label>
            15 kg
            <input
              className="radio-btn"
              type="radio"
              name="coffee-amount"
              value="15 kg"
              checked={beanAmount === "15 kg"}
              onChange={handleBeanAmountChange}
            />
          </label>
          <label>
            30 kg
            <input
              className="radio-btn"
              type="radio"
              name="coffee-amount"
              value="30 kg"
              checked={beanAmount === "30 kg"}
              onChange={handleBeanAmountChange}
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
              validations={{ required }}
              onChange={handleDeliveryAddressChange}
            />
          </label>
        </form>

        <button
          className="btn place-order-btn"
          onClick={handleAddToCart}
          {...cartAlert}
        >
          Add To Cart
        </button>
      </div>
      <div className="cart-animation"></div>
    </div>
  );
}

export default Order;
