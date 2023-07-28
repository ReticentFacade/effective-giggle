// import UserDetails from "../models/UserDetails";
import User from "../models/User.js";

const checkIfUsernameExists = async (req, next) => {
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

    next();
  } catch (err) {
    console.error(err.message);
    return false;
  }
};

export { checkIfUsernameExists };