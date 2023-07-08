const checkout = async (req, res) => {
  try {
    const cartData = localStorage.getItem("cart");
    console.log("cartData: ", cartData);
    if (!cartData) {
      res.status(400).json({ message: "Cart is empty!" });
      return;
    }

    const cartEntries = JSON.parse(cartData);
    // Call orderController to create an order:
    // change createOrder to placeOrder
    await orderController.createOrder(cartEntries);
    console.log("Order created successfully! ^.^");

    localStorage.removeItem("cart");

    res.status(200).json({ message: "Successfully checked out!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unable to checkout!" });
  }
};