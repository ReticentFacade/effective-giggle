import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class Seller extends Model {}

Seller.init(
  {
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 3, // default roleID for normal users (not admins)
    },
    sellerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // password: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    tableName: "sellers",
    modelName: "Seller",
    timestamps: false,
  }
);

export default Seller;