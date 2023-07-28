import { Sequelize } from "sequelize";
import sequelize from "../config/connection.js";
import Role from "../models/Role.js";

console.log("Running the seeder to create Seller role...");

export const up = async (queryInterface, sequelize) => {
    console.log("Running UP function from the seeder to create Seller role...");
    // Define the data to be inserted in the "Roles" table:
    const rolesData = [
        {
            name: "seller",
        },
    ];

    // Insert the data into the "Roles" table:
    await queryInterface.bulkInsert("roles", rolesData);
};

export const down = async (queryInterface, Sequelize) => {
    console.log("Running DOWN function from the seeder to create Seller role...");
    await queryInterface.bulkInsert("roles", { name: "seller" });
};

console.log("Finished running the seeder to create Seller role.");