import sequelize from "../config/connection.js";

console.log("Running the seeder to add admin role...");

export const up = async (queryInterface, sequelize) => {
  console.log("Running UP function from the seeder to add admin role...");
  // Define the data to be inserted in the "Roles" table:
  const rolesData = [
    {
      roleId: 1,
      name: "admin",
      // createdAt: new Date(),
      // updatedAt: new Date(),
    },
  ];

  // Insert the data into the "Roles" table:
  await queryInterface.bulkInsert("roles", rolesData);
};

export const down = async (queryInterface, Sequelize) => {
  console.log("Running DOWN function from the seeder to add admin role...");
  await queryInterface.bulkDelete("roles", { name: "admin" });
};

console.log("Finished running the seeder to add admin role.");