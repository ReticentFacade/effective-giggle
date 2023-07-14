import { DataTypes, Model } from "sequelize";
import sequelize from "../config/connection.js";

// username: username,
// userAddress: req.body.userAddress,
// userPhoneNumber: req.body.userPhoneNumber,

class UserDetails extends Model {}

UserDetails.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "Order",
        key: "username",
      },
    },
    userAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "userDetails",
    modelName: "UserDetails",
    freezeTableName: true,
    timestamps: false,
  }
);

export default UserDetails;

// userPhoneNumber: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
// },
