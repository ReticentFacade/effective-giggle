// Just importing here again for uniformity
import User from "./User.js";
import Product from "./Product.js";
import CoffeeBean from "./CoffeeBean.js";
import Cart from "./Cart.js";
import Order from "./Order.js";
import Role from "./Role.js";
import UserDetails from "./UserDetails.js";

Order.belongsTo(User, {
  foreignKey: "username",
  targetKey: "username",
});

UserDetails.belongsTo(Order, {
  foreignKey: "username",
  targetKey: "username",
});

User.belongsTo(Role, { foreignKey: "roleId" });
Role.hasMany(User, { foreignKey: "roleId" });

export { User, Product, CoffeeBean, Cart, Order, Role };
