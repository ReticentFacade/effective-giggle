import sequelize from "../config/connection.js";
import { Model, DataTypes } from "sequelize";

class Order extends Model {
  getTotalAmount() {
    const orderItems = this.orderItems; // assuming orderItems is an array of order items
    let totalAmount = 0;
    if (orderItems && orderItems.length > 0) {
      totalAmount = orderItems.reduce((acc, item) => acc + item.price, 0);
    }
    return totalAmount;
  }
}

Order.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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
