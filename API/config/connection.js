import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.POSTGRES_PRISMA_URL,
    },
  },
});

export default prisma;

// import { Sequelize } from "sequelize";
// import dotenv from "dotenv";
// dotenv.config();

// const sequelize = new Sequelize(
//   process.env.POSTGRES_DATABASE,
//   process.env.POSTGRES_USER,
//   process.env.POSTGRES_PASSWORD,
//   {
//     host: process.env.POSTGRES_HOST,
//     port: process.env.PORT,
//     dialect: "postgres",
//     dialectOptions: {
//       decimalNumbers: true, // instructs sequelize to parse decimal numbers as floats (Javascript decimal objects) instead of strings - helps avoid rounding errors
//     },
//     logging: false, // Means no query logs will be OUTPUTTED TO THE CONSOLE
//     // It's hidden by default
//   }
// );

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Database connection established successfully");
//   })
//   .catch((err) => {
//     console.log("Unable to connect to the database: ", err);
//   });

// export default sequelize;
