import { prisma } from "../lib/prisma.js";

const createSeller = async (data) => {
  try {
    const seller = await prisma.seller.create({
      data: data,
    });
    console.log("Created seller:", seller);
    return seller; // Return seller to be used in the controller
  } catch (error) {
    console.error("Error creating seller:", error);
    throw error; // Rethrow error to be caught in the controller
  }
};

export default { createSeller };

// import { Model, DataTypes } from "sequelize";
// import sequelize from "../config/connection.js";

// class Seller extends Model {}

// Seller.init(
//   {
//     roleId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 3, // default roleID for normal users (not admins)
//     },
//     sellerName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     // password: {
//     //     type: DataTypes.STRING,
//     //     allowNull: false,
//     // },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     tableName: "sellers",
//     modelName: "Seller",
//     timestamps: false,
//   }
// );

// export default Seller;
