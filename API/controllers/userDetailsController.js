import User from "../models/User.js";
import UserDetails from "../models/UserDetails.js";

const checkIfUsernameExists = async (req) => {
  try {
    const { username } = req.body;
    // First find if a user with that username exists in the DB
    const user = await User.findOne({
      where: {
        username: username,
      },
    });
    // If it exists, then return the username else return null
    if (user) {
      console.log(`User ${username} exists!`);
    } else if (!user) {
      console.log(`User ${username} does not exist ^.^`);
    }
    return user ? user.username : null;
  } catch (err) {
    console.error(err.message);
    return false;
  }
};

const getUsername = async (req) => {
  try {
    const { username } = req.body;
    const usernameExists = await checkIfUsernameExists(req);
    if (usernameExists) {
      console.log("Fetching username...");
      const user = await User.findOne({
        where: {
          username: username,
        },
      });
      console.log(
        "Here's your username: ",
        JSON.stringify(user.username, null, 2)
      );
      return user.username;
    } else {
      console.log("Please signUp first");
      return null;
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Unable to fetch username!" });
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
      res.status(201).json({ message: "User details added successfully!" });
    } else {
      console.log("Username doesn't exist");
      res.status(404).json({ message: "Please signUp first :)" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "User details cannot be added!😙" });
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
      res
        .status(200)
        .json({
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
