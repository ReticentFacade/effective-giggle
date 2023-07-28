import Seller from "../../models/Seller.js";
import Role from "../../models/Role.js";

const showSellers = async (req, res) => {
  try {
    const sellers = await Seller.findAll();
    const sellerData = sellers.map((seller) => seller.dataValues); // Convert to plain array of objects
    
    console.log("Here are your sellers: ");
    console.table(sellerData, ["id", "roleId", "sellerName", "email"]);
    
    res.status(200).json({ sellers: sellerData });
  } catch (err) {
    console.log("Error in showSellers function: ", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

export default showSellers;
