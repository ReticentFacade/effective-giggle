import { prisma } from "../lib/prisma.js";

const createProduct = async (data) => {
  try {
    const product = await prisma.product.create({
      data: data,
    });
    console.log("Created product:", product);
    return product; // Return product to be used in the controller
  } catch (error) {
    console.error("Error creating product:", error);
    throw error; // Rethrow error to be caught in the controller
  }
  // finally {
  //   await prisma.$disconnect();
  // }
};

export default { createProduct };

// import { Model, DataTypes } from "sequelize";
// import sequelize from "../config/connection.js";

// class Product extends Model {}

// // Add relation 'category' later

// Product.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     product_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     price: {
//       type: DataTypes.DECIMAL(10, 2),
//       allowNull: false,
//       validate: {
//         isDecimal: true,
//       },
//     },
//     stock: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 10,
//       validate: {
//         isNumeric: true,
//       },
//     },
//     // category_id: {
//     //     type: DataTypes.INTEGER,
//     //     references: {
//     //         model: "category",
//     //         key: "id",
//     //     },
//     // },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "Product",
//     tableName: "products",
//   }
// );

// export default Product;
