import jwt from "jsonwebtoken";
import { localStorage } from "../userController.js";
import dotenv from "dotenv";
dotenv.config();

// const localStorage = new LocalStorage("./scratch");

const grabToken = (localstorage) => {
  try {
    const token = localStorage.getItem("jwt");
    if (token) {
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      const userId = decodedToken.id;
      console.log("UserId is: ", userId);
      return userId;
    } else {
      console.log("Token not found!");
      return null;
    }
  } catch (err) {
    console.error(err.message);
    throw new Error("Unable to grab token!");
  }
};

export default grabToken;
