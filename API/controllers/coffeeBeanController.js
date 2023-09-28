import CoffeeBean from "../models/CoffeeBean.js";

const validateCoffeeBeans = async (type, amount, res) => {
  try {
    // Need to fix this. 
    const validType = ["Arabica", "Robusta", "Liberica"];
    const validAmount = ["5 kg", "15 kg", "30 kg"];

    if (!validType.includes(type) || !validAmount.includes(amount)) {
      throw new Error("Invalid type or amount!");
    }
    console.log("Bean type & amount validated!");
    // res.status(200).json({ message: "Bean type & amount validated!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAvailableCoffeeBeans = async (req, res) => {
  try {
    const coffeeBeans = CoffeeBean.findAll();
    res.json(coffeeBeans);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const coffeeBeanController = {
  validateCoffeeBeans,
  getAvailableCoffeeBeans,
};

export default coffeeBeanController;
