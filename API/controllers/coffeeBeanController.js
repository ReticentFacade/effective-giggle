import CoffeeBean from "../models/CoffeeBean.js";

const validateCoffeeBeans = async (type, amount) => {
  try {
    const validType = ["Arabica", "Robusta", "Liberica"];
    const validAmount = ["5kg", "15kg", "30kg"];

    if (!validType.includes(type) || !validAmount.includes(amount)) {
      throw new Error("Invalid type or amount!");
    }
    res.status(200).json({ message: "Bean type & amount validated!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { validateCoffeeBeans };
