import React, { useEffect, useState } from "react";
import "../../../css/Order.css";
import "../../../css/CartContents.css";
import fetchCartData from "../../../utils/cart.js";

const CartContents = () => {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    // Fetch cart data when the component mounts
    fetchCartData()
      .then((data) => {
        setCartData(data.cartEntries);
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
      });
  }, []);

  const maxCartItems = 2;

  // Mapping of bean rates
  const beanRates = {
    Arabica: 20,
    Robusta: 25,
    Liberica: 30,
  };

  // Calculate Subtotal amount
  const calculateSubtotalAmount = () => {
    let total = 0;
    cartData.forEach((item) => {
      total += item.beanPrice;
    });
    return total;
  };
  const calculateTotalAmount = () => {
    let total = 0;
    cartData.forEach((item) => {
      total += item.beanPrice;
    });
    return total + 49;
  };

  return (
    <div className="bg-transparent mb-8 p-10 cart-contents">
      <h1 className="bg-transparent mb-10 text-center text-2xl font-bold">
        Cart Items
      </h1>

      <div className="bg-transparent mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="bg-transparent md:w-2/3">
          <div
            className={`${
              cartData.length > maxCartItems
                ? "bg-transparent max-h-[300px] overflow-y-scroll"
                : ""
            }`}
          >
            {cartData.map((item, index) => (
              <div
                key={index}
                className="bg-transparent justify-between mb-6 rounded-lg p-6 shadow-md"
              >
                <div className="bg-transparent sm:flex sm:w-full sm:justify-between">
                  <div className="bg-transparent mt-5 sm:mt-0">
                    <h2 className="bg-transparent text-left text-lg font-bold">
                      {item.beanType} Coffee Bean
                    </h2>
                    <p className="bg-transparent mt-1 text-center text-xs">
                      {item.beanAmount}
                    </p>
                  </div>
                  <div className="bg-transparent mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="bg-transparent flex items-center border-gray-100">
                      <span className="bean-rate rounded-r py-1 px-3">
                        ₹ {beanRates[item.beanType]} per kg
                      </span>
                    </div>
                    <div className="bg-transparent flex items-center space-x-4">
                      <p className="bg-transparent text-sm">
                        ₹ {item.beanPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {
            cartData.length > maxCartItems
            // && (
            //   <div className="bg-transparent justify-between mb-6 rounded-lg p-6 shadow-md">
            //     <p className="bg-transparent text-center text-red-500">
            //       We're a small company. To ensure quality products are delivered,
            //       we've limited the number of cart items to two.
            //     </p>
            //   </div>
            // )
          }
        </div>

        <div className="bg-transparent mt-6 h-full rounded-lg border p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="bg-transparent mb-2 flex justify-between">
            <p className="bg-transparent">Subtotal</p>
            <p className="bg-transparent">₹ {calculateSubtotalAmount()}</p>
          </div>
          <div className="bg-transparent flex justify-between">
            <p className="bg-transparent">Shipping</p>
            <p className="bg-transparent">₹49</p>
          </div>
          <hr
            className="my-4"
            style={{
              borderColor: "rgba(102, 80, 69, 0.784)",
              borderRadius: "100px",
            }}
          />
          <div className="bg-transparent flex justify-between">
            <p className="bg-transparent text-lg font-bold">Total</p>
            <div className="bg-transparent">
              <p className="bg-transparent mb-1 text-lg font-bold">
                ₹ {calculateTotalAmount()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContents;
