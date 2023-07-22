import sequelize from "./connection.js";
import User from "../models/User.js";
import Role from "../models/Role.js";
import { up, down } from "../seeders/create-admin-role.js";
import createAdminUser from "../seeders/create-admin-user.js";

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

    // --------------------------------------------------------------------------

    // await Product.destroy({
    // where: {id: "6"},
    // });
    // console.log("Destroyed successfully");

    // --------------------------------------------------------------------------

    // const queryInterface = sequelize.getQueryInterface();

    // // Call the up function to add the admin role to the "roles" table:
    // await up(queryInterface, sequelize);

    // // You can also call the down function here if needed
    // // await down(queryInterface, sequelize);

    // console.log("Finished running the seeder to add admin role.");
    // // process.exit(0); // Exit the process when the seeder is finished.

    // --------------------------------------------------------------------------

    // console.log("Running the seeder to add admin user...");
    // createAdminUser();
    // console.log("Admin user created successfully.");
  } catch (err) {
    console.log("Unable to connect to the database: ", err);
    // process.exit(1); // Exit the process when the seeder is finished.
  }
}

seedDatabase();
