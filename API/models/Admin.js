import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

class Admin extends Model {}

Admin.init(
  {
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    adminName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: "admins",
    freezeTableName: true,
    modelName: "Admin",
    timestamps: false,
  }
);

export default Admin;
