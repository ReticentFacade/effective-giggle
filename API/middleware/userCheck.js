// Contains func: saveUser - uses sequelize methods to find if username & email already exist

// It's a middleware, so it'll have req, res & next parameters

// To check username & email, use sequelize's `findOne` method
// if username & email aren't found - move on to `next` middleware & save the new user.

import User from "../models/User.js";

const saveUser = async (req, res, next) => {
  try {
    const userCheck = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (userCheck) {
      return res.status(401).send({ message: "Username already taken!" });
    }

    const emailCheck = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (emailCheck) {
      return res.status(401).send({ message: "Email already used!" });
    }

    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { saveUser };
