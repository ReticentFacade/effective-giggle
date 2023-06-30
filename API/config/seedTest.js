import sequelize from "./connection.js";
import User from "../models/user.js";
// import userData from "../sample-data/user-sample.js";
import Product from "../models/Product.js";
import productData from "../sample-data/product-sample.js";

async function seedDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully");

    // await User.bulkCreate(userData);
    // console.log("Users seeded successfully");
    // await User.destroy({
      // where: { username: "John Smith" },
    // });
    // await Product.bulkCreate(productData);
    // console.log("Products seeded successfully");

    // await Product.destroy({
      // where: {id: "6"},
    // });
    // console.log("Destroyed successfully");
  } catch (err) {
    console.log("Unable to connect to the database: ", err);
  }
}

seedDatabase();
