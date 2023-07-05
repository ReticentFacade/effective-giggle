import Order from "../models/Order.js";

const placeOrder = async (req, res) => {
  try {
    const { orderId, orderItems, totalAmount } = req.body;

    // User Order-model to create a new order:
    const order = await Order.create({
      orderId,
      orderItems,
      totalAmount,
    });

    res.status(200).json({ message: "Order placed successfully!", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to place the order!" });
  }
};

const getOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    // Find in database using Order-model:
    const order = await Order.findOne({
      where: { orderId },
    });

    res.status(200).json({ message: "Order fetched successfully!", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to get the order!" });
  }
};

const orderController = {
    placeOrder,
    getOrder,
};

export default orderController;