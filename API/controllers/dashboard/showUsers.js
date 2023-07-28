import User from "../../models/User.js";

const showUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        const userData = users.map((user) => user.dataValues); // Convert to plain array of objects
        console.log("Here are your users: ");
        console.table(userData, ["id", "roleId", "username", "email", "password"]);
        res.status(200).json({ users: userData });
    } catch (err) {
        console.log("Error in showUsers function: ", err);
        res.status(500).json({ message: "Internal server error." });
    }
};

export default showUsers;
