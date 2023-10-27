import React, { useState } from "react";
import "../css/Order.css";
import "../css/btnEffect.css";
import instance from "../utils/api.js";
import BeanRadio from "../assets/Order/beanRadio.png";
import EmptyCart from "../components/CartPreview/EmptyCart.js";
import BeanTypePreview from "../components/CartPreview/BeanTypes/index.js";
import DeliveryTruckPreview from "../components/CartPreview/Delivery/DeliveryTruck.js";
import PlaceOrder from "../components/CartPreview/PlaceOrder/index.js";

function Order() {
  const required = (value) => {
    if (!value) {
      return <div className="invalid-details">This field is required!</div>;
    }
  };

  const [selectedPreviewOption, setSelectedPreviewOption] =
    useState("EmptyCart");
  const previewOptionMap = {
    EmptyCart: <EmptyCart />,

    // Bean Types:
    ArabicaPreview: <BeanTypePreview.ArabicaPreview />,
    RobustaPreview: <BeanTypePreview.RobustaPreview />,
    LibericaPreview: <BeanTypePreview.LibericaPreview />,

    // Delivery:
    DeliveryTruckPreview: <DeliveryTruckPreview />,

    // Place Order:
    PlaceOrder: <PlaceOrder />,
  };

  // State variable to track if the delivery input has been clicked
  const [deliveryInputClicked, setDeliveryInputClicked] = useState(false);

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
  // Handle the delivery input click event
  const handleDeliveryInputClick = () => {
    setDeliveryInputClicked(true);
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
    <div className="page mt-10 ml-10 mr-32 min-w-[440px] min-h-max">
      <div className="order-side ml-5 -mt-10 sm:mt-4">
        <h1>Customize your order</h1>

        {/* <h2>Coffee Type</h2> */}
        <h2 className="text-2lg">Coffee Type</h2>
        <form className="coffee-type pt-4 min-w-[580px]">
          <label className={labelClasses}>
            Arabica
            <input
              className={`${beanType === "Arabica" ? "sr-only" : radioClasses}`}
              type="radio"
              name="coffee-type"
              value="Arabica"
              checked={beanType === "Arabica"}
              onClick={() => setSelectedPreviewOption("ArabicaPreview")}
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
              onClick={() => setSelectedPreviewOption("RobustaPreview")}
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
              onClick={() => setSelectedPreviewOption("LibericaPreview")}
              onChange={handleBeanTypeChange}
            />
            {selectedType === "Liberica" && (
              <img src={BeanRadio} alt="Bean Radio" className="h-10" />
            )}
          </label>
          {/* <br /> */}
        </form>

        <h2 className="text-2lg">Coffee Amount</h2>
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

        <h2 className="text-2lg">Delivery Address</h2>
        <form className="delivery-form pt-4 pb-6">
          <label>
            <input
              type="text"
              name="delivery-address"
              value={deliveryAddress}
              className="delivery-address min-w-[250px]"
              placeholder="123 Main Street"
              // TODO: Fix `required` attribute. Check if it's working??
              required // Use the 'required' attribute directly
              onChange={handleDeliveryAddressChange}
              onClick={() => {
                setSelectedPreviewOption("DeliveryTruckPreview");
                handleDeliveryInputClick();
              }}
              style={{ backgroundColor: "#e5e5cb" }}
            />
          </label>
        </form>

        <button
          className="btn login-auth-btn min-w-[250px]  sm:m-0 md:m-2"
          onClick={() => {
            handleAddToCart();
            setSelectedPreviewOption("PlaceOrder");
          }}
          {...cartAlert}
        >
          Add To Cart
        </button>
      </div>
      <div className="cart-animation flex items-center justify-center">
        {/* Render the EmptyCart component */}
        {previewOptionMap[selectedPreviewOption]}
      </div>
    </div>
  );
}

export default Order;
