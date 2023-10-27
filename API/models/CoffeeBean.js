import { prisma } from "../lib/prisma.js";

const createCoffeeBean = async (data) => {
  try {
    const bean = await prisma.coffeeBean.create({
      data: data,
    });
    console.log("Created bean:", bean);
    return bean; // Return bean to be used in the controller
  } catch (error) {
    console.error("Error creating bean:", error);
    throw error; // Rethrow error to be caught in the controller
  }
};

export default { createCoffeeBean };

// import { Sequelize, Model, DataTypes } from "sequelize";
// import sequelize from "../config/connection.js";

// class CoffeeBean extends Model {}

// CoffeeBean.init(
//   {
//     type: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     amount: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     price: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     modelName: "CoffeeBean",
//     tableName: "coffee_bean",
//     timestamps: false,
//   }
// );

// export default CoffeeBean;
