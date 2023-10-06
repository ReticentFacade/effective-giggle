import React, { useState } from "react";
import "../css/Order.css";
import "../css/btnEffect.css";
import instance from "../utils/api.js";
import BeanRadio from "../assets/Order/beanRadio.png";
import EmptyCart from "../components/CartPreview/EmptyCart.js";
import BeanTypePreview from "../components/CartPreview/BeanTypes/index.js";

function Order() {
  const required = (value) => {
    if (!value) {
      return <div className="invalid-details">This field is required!</div>;
    }
  };

  const [selectedBeanType, setSelectedBeanType] = useState("EmptyCart");
  const beanTypeMap = {
    EmptyCart: <EmptyCart />,
    ArabicaPreview: <BeanTypePreview.ArabicaPreview />,
    RobustaPreview: <BeanTypePreview.RobustaPreview />,
    LibericaPreview: <BeanTypePreview.LibericaPreview />,
  };

  const [beanType, setBeanType] = useState("");
  const [beanAmount, setBeanAmount] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [selectedType, setSelectedType] = useState(""); // for changing the radio button image // Bean Type
  const [selectedAmount, setSelectedAmount] = useState(""); // for changing the radio button image // Bean Amount

  const handleBeanTypeChange = (event) => {
    setSelectedType(event.target.value);
    setBeanType(event.target.value);
  };
  const handleBeanAmountChange = (event) => {
    setSelectedAmount(event.target.value);
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
        className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
        role="alert"
      >
        <p className="font-bold">Successfully added to cart!</p>
        <p className="text-sm">
          Your items have been added to cart. Checkout to place order!
        </p>
      </div>
    );
  }

  const labelClasses = "flex items-center";
  const radioClasses =
    "radio-btn h-5 w-5 text-indigo-600 form-radio focus:ring-indigo-500";

  return (
    <div className="page ml-10 mr-32">
      <div className="order-side ml-5">
        <h1>Customize your order</h1>

        <h2>Coffee Type</h2>
        <form className="coffee-type pt-4 pb-4">
          <label className={labelClasses}>
            Arabica
            <input
              className={`${beanType === "Arabica" ? "sr-only" : radioClasses}`}
              type="radio"
              name="coffee-type"
              value="Arabica"
              checked={beanType === "Arabica"}
              onClick={() => setSelectedBeanType("ArabicaPreview")}
              onChange={handleBeanTypeChange}
            />
            {selectedType === "Arabica" && (
              <img src={BeanRadio} alt="Bean Radio" className="h-10" />
            )}
          </label>
          {/* <br /> */}
          <label className={labelClasses}>
            Robusta
            <input
              className={`${beanType === "Robusta" ? "sr-only" : radioClasses}`}
              type="radio"
              name="coffee-type"
              value="Robusta"
              checked={beanType === "Robusta"}
              onClick={() => setSelectedBeanType("RobustaPreview")}
              onChange={handleBeanTypeChange}
            />
            {selectedType === "Robusta" && (
              <img src={BeanRadio} alt="Bean Radio" className="h-10" />
            )}
          </label>
          {/* <br /> */}
          <label className={labelClasses}>
            Liberica
            <input
              className={`${
                beanType === "Liberica" ? "sr-only" : radioClasses
              }`}
              type="radio"
              name="coffee-type"
              value="Liberica"
              checked={beanType === "Liberica"}
              onClick={() => setSelectedBeanType("LibericaPreview")}
              onChange={handleBeanTypeChange}
            />
            {selectedType === "Liberica" && (
              <img src={BeanRadio} alt="Bean Radio" className="h-10" />
            )}
          </label>
          {/* <br /> */}
        </form>

        <h2>Coffee Amount</h2>
        <form className="coffee-amount pt-4 pb-4">
          <label className={labelClasses}>
            5 kg
            <input
              className={`${beanAmount === "5 kg" ? "sr-only" : radioClasses}`}
              type="radio"
              name="coffee-amount"
              value="5 kg"
              checked={beanAmount === "5 kg"}
              onChange={handleBeanAmountChange}
            />
            {selectedAmount === "5 kg" && (
              <img src={BeanRadio} alt="Bean Radio" className="h-10" />
            )}
          </label>
          <label className={labelClasses}>
            15 kg
            <input
              className={`${beanAmount === "15 kg" ? "sr-only" : radioClasses}`}
              type="radio"
              name="coffee-amount"
              value="15 kg"
              checked={beanAmount === "15 kg"}
              onChange={handleBeanAmountChange}
            />
            {selectedAmount === "15 kg" && (
              <img src={BeanRadio} alt="Bean Radio" className="h-10" />
            )}
          </label>
          <label className={labelClasses}>
            30 kg
            <input
              className={`${beanAmount === "30 kg" ? "sr-only" : radioClasses}`}
              type="radio"
              name="coffee-amount"
              value="30 kg"
              checked={beanAmount === "30 kg"}
              onChange={handleBeanAmountChange}
            />
            {selectedAmount === "30 kg" && (
              <img src={BeanRadio} alt="Bean Radio" className="h-10" />
            )}
          </label>
        </form>

        <h2>Delivery Address</h2>
        <form className="delivery-form pt-4 pb-6">
          <label>
            <input
              type="text"
              name="delivery-address"
              value={deliveryAddress}
              className="delivery-address"
              placeholder="123 Main Street"
              validations={{ required }}
              onChange={handleDeliveryAddressChange}
              style={{ backgroundColor: "#e5e5cb" }}
            />
          </label>
        </form>

        <button
          className="btn login-auth-btn"
          onClick={handleAddToCart}
          {...cartAlert}
        >
          Add To Cart
        </button>
      </div>
      <div className="cart-animation flex items-center justify-center">
        {/* Render the EmptyCart component */}
        {beanTypeMap[selectedBeanType]}

        {/* <EmptyCart /> */}
        {/* <BeanTypePreview.ArabicaPreview /> */}
        {/* <BeanTypePreview.RobustaPreview /> */}
        {/* <BeanTypePreview.LibericaPreview /> */}
      </div>
    </div>
  );
}

export default Order;
