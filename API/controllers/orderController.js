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

const deleteOrder = async(req, res) => {
  try {
    const { orderId } = req.params;

    // Delete from database using Order-model:
    let deletedOrder = Order.findByPk(req.params.id);
    Product.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedOrder) => {
        res.json("Removed order from database")
      })
      .catch((err) => {
        res.json(err);
      });
    // const order = await Order.destroy({
    //   where: { orderId:  },
    // });

    res.status(200).json({ message: "Order deleted successfully!", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to delete the order!" });
  }
};

const orderController = {
    placeOrder,
    getOrder,
    deleteOrder,
};

export default orderController;