import { Model, DataTypes } from "sequelize";
import sequelize from "sequelize";

class CoffeeBean extends Model {}

CoffeeBean.init(
  {
    type: {
      type: DataTypes.ENUM("Arabica", "Robusta", "Liberica"),
      allowNull: false,
    },
    amount: {
      type: DataTypes.ENUM("5kg", "15kg", "30kg"),
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
