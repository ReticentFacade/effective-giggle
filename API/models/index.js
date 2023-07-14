// Just exporting User here again for uniformity 
import User from "User.js";
import Product from "Product.js";
import CoffeeBean from "CoffeeBean.js";
import Cart from "Cart.js";
import Order from "Order.js";

Order.belongsTo(User, {
    foreignKey: "username",
    targetKey: "username",
});

UserDetails.belongsTo(Order, {
  foreignKey: "username",
  targetKey: "username",
});

export { 
    User,
    Product,
    CoffeeBean,
    Cart,
    Order,
};