import { LocalStorage } from "node-localstorage";
import coffeeBeanController from "./coffeeBeanController.js";
// import UserDetails from "../models/UserDetails.js";

// Just to check if localStorage's working or not, using curl. Delete later. 
const localStorage = new LocalStorage('./scratch');

const addToCart = async (req, res) => {
    try {
        const { beanType, beanAmount } = req.body;
        coffeeBeanController.validateCoffeeBeans(beanType, beanAmount, res);

        // Checking existing localStorage:
        let cartData = localStorage.getItem("cart");
        if (!cartData){
            // create it!
            cartData = [];
        }
        // else, parse it:
        else {
            cartData = JSON.parse(cartData);
        }
        let cart = {
            beanType,
            beanAmount,
        };
        cartData.push(cart);
        // Add it to localStorage: 
        localStorage.setItem("cart", JSON.stringify(cartData));

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
            res.status(200).json({ cartEntries: []})
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
        // ...
        localStorage.removeItem("cart");
        res.status(200).json({ message: "Successfully checked out!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Unable to checkout!" });
    }
};

const cartController = {
    addToCart,
    getCart,
    checkout
};

export default cartController;