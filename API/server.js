import express from "express";
import { router } from "./routes/index.js";
import sequelize from "./config/connection.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);

app.use(morgan("combined"));

sequelize.sync({ force: false }).then(() => {
  console.log("Database & tables created!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
