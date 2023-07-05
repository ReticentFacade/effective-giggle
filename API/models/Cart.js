import { Model, DataTypes } from "sequelize";
import sequelize from "sequelize";
import CoffeeBean from "./CoffeeBean.js";
import UserDetails from "./UserDetails.js";

class Cart extends Model {}

Cart.init(
  {
    beanType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    beanAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // userAddress: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "Cart",
    tableName: "cart",
    timestamps: false,
  }
);

export default Cart;