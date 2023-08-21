import { LocalStorage } from "node-localstorage";
import coffeeBeanController from "./coffeeBeanController.js";
import orderController from "./orderController.js";
import userDetailsController from "./userDetailsController.js";
import { calculateBeanPrice } from "./helpers/calculations.js";
// import UserDetails from "../models/UserDetails.js";

// Just to check if localStorage's working or not, using curl. Delete later.
const localStorage = new LocalStorage("./scratch");

const addToCart = async (req, res) => {
  try {
    let { beanType, beanAmount } = req.body;
    coffeeBeanController.validateCoffeeBeans(beanType, beanAmount, res);

    // Checking existing localStorage:
    let cartData = localStorage.getItem("cart");
    if (!cartData) {
      // create it!
      cartData = [];
    }
    // else, parse it:
    else {
      cartData = JSON.parse(cartData);
    }

    /**
     * for items in beanType [Array]
     * add all the amounts
     * 3 (5, 10, 15) -> 50, 125, 175
     */

    let beanPrice = calculateBeanPrice(beanType, beanAmount);
    let cart = {
      beanType,
      beanAmount,
      beanPrice,
    };
    console.log(cart);

    cartData.push(cart);
    // Add it to localStorage:
    localStorage.setItem("cart", JSON.stringify(cartData));

    console.log("Cart: ", cartData);
    res.status(200).json({ message: "Successfully added to cart!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unable to add it to cart :(" });
  }
};

const getCart = async (req, res) => {
  try {
    const cartData = localStorage.getItem("cart");
    if (!cartData) {
      // return empty array:
      res.status(200).json({ message: "Cart is empty!", cartEntries: [] });
    } else {
      // Parse:
      const cartEntries = JSON.parse(cartData);
      res.status(200).json({ cartEntries });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unable to get cart!" });
  }
};

const checkout = async (req, res) => {
  try {
    // // Get username:
    // const username = await userDetailsController.getUsername(token);
    // console.log("Username is: ", username);

    const cartData = localStorage.getItem("cart");
    if (!cartData) {
      res.status(400).json({ message: "Cart is empty!" });
      return;
    }

    const cartEntries = JSON.parse(cartData);

    // Access jwt token: 
    const token = req.cookies.jwt;

    // Call orderController to create an order:
    // await orderController.createOrder(cartEntries, username);
    await orderController.createOrder(cartEntries, token);
    console.log("Order created successfully! ^.^");

    localStorage.removeItem("cart");

    console.log("Cart cleared successfully!");
    res.status(200).json({ message: "Successfully checked out!" });
  } catch (err) {
    console.log(err.response.data);
    res.status(500).json({ message: "Unable to checkout!" });
  }
};

const cartController = {
  addToCart,
  getCart,
  checkout,
};

export default cartController;
