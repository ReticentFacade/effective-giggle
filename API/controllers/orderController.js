import Order from "../models/Order.js";

const calculateTotalAmount = (cartEntries) => {
  let totalAmount = 0;

  for (const cartEntry of cartEntries) {
    totalAmount += cartEntry.beanPrice;
  }

  return totalAmount;
};

const createOrder = async (cartEntries) => {
  try {
    
    const order = await Order.create({
      orderItems: cartEntries,
      totalAmount: calculateTotalAmount(cartEntries),
    });

    // const order = JSON.parse(cartEntries);
    console.log("Order created: ", order);
    console.log("Order total: ", calculateTotalAmount(cartEntries));
    return order;
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to create the order!" });
  }
};

const placeOrder = async (req, res) => {
  try {
    // const { orderId, orderItems, totalAmount } = req.body;

    // Use createOrder to create a new order-
    const order = await createOrder(orderItems);

    console.log("Your order details: ", order);
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

const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    // Delete from database using Order-model:
    let deletedOrder = Order.findByPk(req.params.id);
    Order.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedOrder) => {
        res.json("Removed order from database");
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
  createOrder,
  placeOrder,
  getOrder,
  deleteOrder,
};

export default orderController;
