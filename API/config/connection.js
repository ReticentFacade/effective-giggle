import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      decimalNumbers: true, // instructs sequelize to parse decimal numbers as floats (Javascript decimal objects) instead of strings - helps avoid rounding errors
    },
    logging: false, // Means no query logs will be OUTPUTTED TO THE CONSOLE
    // It's hidden by default
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established successfully");
  })
  .catch((err) => {
    console.log("Unable to connect to the database: ", err);
  });

export default sequelize;
