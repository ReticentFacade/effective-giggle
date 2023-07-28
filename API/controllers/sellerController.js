import Seller from "../models/Seller.js";

const addSeller = async (req, res) => {
  try {
    const sellerData = req.body;
    const newSeller = await Seller.create(sellerData);

    // console.log("Seller created successfully: ", newSeller);
    console.log("Seller created successfully: ");
    console.table(newSeller, ["id", "roleId", "sellerName", "email"]);

    res.status(201).json(newSeller);
  } catch (err) {
    console.log("Unable to create a new seller: ", err);
    res.status(500).json({ message: "Unable to create a new seller." });
  }
};

const sellerController = {
  addSeller,
};
export default sellerController;
