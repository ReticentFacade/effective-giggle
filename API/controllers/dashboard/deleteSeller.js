import Seller from "../../models/Seller.js";

const deleteSeller = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSeller = await Seller.destroy({
      where: {
        id,
      },
    });

    if (deleteSeller) {
      console.log("Seller deleted successfully.");
      res.status(204).end();
    } else {
      console.log("Seller not found.");
      res.status(404).json({ message: "Seller not found." });
    }
  } catch (err) {
    console.log("Error deleting the seller: ", err);
    res.status(500).json({ message: "Error deleting the seller." });
  }
};

export default deleteSeller;