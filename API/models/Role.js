import { prisma } from "../lib/prisma.js";

const createRole = async (data) => {
  try {
    const role = await prisma.role.create({
      data: data,
    });
    console.log("Created role: ", role);
    return product; // Return product to be used in the controller
  } catch (error) {
    console.error("Error creating product:", error);
    throw error; // Rethrow error to be caught in the controller
  }
};

export default { createRole };

// import { Model, DataTypes } from "sequelize";
// import sequelize from "../config/connection.js";

// class Role extends Model {}

// Role.init(
//   {
//     roleId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       // defaultValue: 2, // default roleID for normal users (not admins)
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//   },
//   {
//     sequelize,
//     tableName: "roles",
//     freezeTableName: true,
//     modelName: "Role",
//     timestamps: false,
//   }
// );

// // association from Role to User
// // Role.hasMany(User, { foreignKey: "roleId" });

// export default Role;
