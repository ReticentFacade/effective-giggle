import { prisma } from "../lib/prisma.js";

const createAdmin = async (data) => {
  try {
    const admin = await prisma.Admin.create({
      data: data,
    });
    console.log("Created admin:", admin);
    return admin; // Return admin to be used in the controller
  } catch (error) {
    console.error("Error creating admin:", error);
    throw error; // Rethrow error to be caught in the controller
  }
};

export default { createAdmin };

// import { Model, DataTypes } from "sequelize";
// import sequelize from "../config/connection.js";

// class Admin extends Model {}

// Admin.init(
//   {
//     roleId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 1,
//     },
//     adminName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     tableName: "admins",
//     freezeTableName: true,
//     modelName: "Admin",
//     timestamps: false,
//   }
// );

// export default Admin;
