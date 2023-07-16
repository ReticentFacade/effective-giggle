import express from "express";
import { router } from "./routes/index.js";
import sequelize from "./config/connection.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);

sequelize.sync({ force: false }).then(() => {
  console.log("Database & tables created!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
