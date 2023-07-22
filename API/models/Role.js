import { Sequelize, Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import User from "./User.js";

class Role extends Model {}

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "roles",
    freezeTableName: true,
    modelName: "Role",
    timestamps: false,
  }
);

// association from Role to User
Role.hasMany(User, { foreignKey: "roleId" });

export default Role;
