import { prisma } from "../lib/prisma.js";

const createUserDetails = async (data) => {
  try {
    const userDetails = await prisma.userDetails.create({
      data: data,
    });
    console.log("Created userDetails:", userDetails);
    return userDetails; // Return UserDetails to be used in the controller
  } catch (error) {
    console.error("Error creating userDetails:", error);
    throw error; // Rethrow error to be caught in the controller
  }
};

export default { createUserDetails };

// import { DataTypes, Model } from "sequelize";
// import sequelize from "../config/connection.js";

// // username: username,
// // userAddress: req.body.userAddress,
// // userPhoneNumber: req.body.userPhoneNumber,

// class UserDetails extends Model {}

// UserDetails.init(
//   {
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       references: {
//         model: "Order",
//         key: "username",
//       },
//     },
//     userAddress: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     tableName: "userDetails",
//     modelName: "UserDetails",
//     freezeTableName: true,
//     timestamps: false,
//   }
// );

// export default UserDetails;

// // userPhoneNumber: {
// //     type: DataTypes.INTEGER,
// //     allowNull: false,
// // },
