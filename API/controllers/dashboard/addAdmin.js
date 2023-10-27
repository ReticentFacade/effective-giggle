// import Admin from "../../models/Admin.js";
// import Role from "../../models/Role.js";
import { prisma } from "../../lib/prisma.js";

const addAdmin = async (req, res) => {
  try {
    const adminData = req.body;

    // Check if the admin already exists
    const existingAdmin = await prisma.Admin.findUnique({
      where: {
        email: adminData.email,
      },
    });

    if (existingAdmin) {
      console.log("Admin already exists.");
      return res.status(409).json({ message: "Admin already exists." });
    } else {
      // Create a new admin:
      const newAdmin = await prisma.Admin.create(adminData);

      // console.log("New admin created: ", newAdmin);

      // Just making it look better:
      console.log("New admin created: ");
      console.table(newAdmin, ["id", "roleId", "adminName", "email"]);
      res.status(201).json({ message: "New admin created successfully." });
    }
  } catch (err) {
    console.log("Error in the addAdmin function: ", err);
    res.status(500).json({ message: "Internal server error." });
  }
};

export default addAdmin;
