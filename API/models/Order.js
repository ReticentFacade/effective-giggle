import sequelize from "../config/connection.js";
import { Model, DataTypes } from "sequelize";

class Order extends Model {};

Order.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "User",
        key: "username",
      },
    },
    orderItems: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "orders",
    freezeTableName: true,
    timestamps: false,
  }
);

export default Order;
