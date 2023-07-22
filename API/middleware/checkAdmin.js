import Role from "../models/Role.js";
import User from "../models/User.js";

const checkAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id, // req.userId?
      },
      include: [
        {
          model: Role,
        },
      ],
    });

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (user.Role.name !== "admin") {
      return res.status(403).json({ message: "Forbidden!" });
    }

    next();
  } catch (err) {
    console.log("Error in checkAdmin middleware: ", err);
    return res.status(500).json({ message: "Error in checkAdmin middleware." });
  }
};

export { checkAdmin };
