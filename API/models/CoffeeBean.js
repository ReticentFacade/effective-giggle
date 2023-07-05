import { Sequelize, Model, DataTypes } from "sequelize";
import sequelize from '../config/connection.js';

class CoffeeBean extends Model {}

CoffeeBean.init(
  {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "CoffeeBean",
    tableName: "coffee_bean",
    timestamps: false,
  }
);

export default CoffeeBean;
