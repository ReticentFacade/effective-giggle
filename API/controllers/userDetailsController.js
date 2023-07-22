import jwt from "jsonwebtoken";
import User from "../models/User.js";
import UserDetails from "../models/UserDetails.js";
import { checkIfUsernameExists } from "../middleware/checkIfUsernameExists.js";
import dotenv from "dotenv";
import grabToken from "./helpers/grabToken.js";
// import { localStorage } from "./userController.js";

dotenv.config();

const getUsername = async () => {
  // console.log("Started getUsername");
  // const userId = grabToken();
  // console.log("userId: ", userId);
  // const user = await User.findByPk(userId);
  // const username = user ? user.dataValues.username : null;
  // console.log("Username: ", username);
  // console.log("Ended getUsername");
  try {
    const userId = grabToken();
    const user = await User.findByPk(userId);
    const username = user ? user.dataValues.username : null;
    console.log("Username: ", username);
    return username;
  } catch (err) {
    console.error(err.message);
    return null;
  }
};

const addUserDetails = async (req, res) => {
  try {
    const { username, userAddress } = req.body;
    const usernameExists = await checkIfUsernameExists(req);
    if (usernameExists) {
      console.log("User exists! Adding user details...");

      const userDetails = {
        username: username,
        userAddress: userAddress,
      };

      const newUserDetails = await UserDetails.create(userDetails);
      console.log(
        "User details added successfully",
        JSON.stringify(newUserDetails, null, 2)
      );
      res.status(201).json({ message: "User details added successfully! 👌" });
    } else {
      console.log("Username doesn't exist");
      res.status(404).json({ message: "Please signUp first :)" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "User details cannot be added! 😙" });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const { username } = req.body;
    const usernameExists = await checkIfUsernameExists(req);
    // console.log(usernameExists);
    if (usernameExists) {
      console.log("Fetching userDetails...");
      const userDetails = await UserDetails.findOne({
        where: {
          username: username,
        },
      });
      console.log(
        "Here are your details: ",
        JSON.stringify(userDetails.userAddress, null, 2)
      );
      res.status(200).json({
        message: "User details fetched successfully!",
        userAddress: userDetails.userAddress,
      });
    } else {
      console.log("Username doesn't exist");
      res.status(404).json({ message: "Please signUp to get details" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "User details cannot be fetched!" });
  }
};

export default {
  checkIfUsernameExists,
  getUsername,
  addUserDetails,
  getUserDetails,
};
