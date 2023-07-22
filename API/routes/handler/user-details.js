import Router from "express";
import { checkAdmin } from "../../middleware/checkAdmin.js";
import userDetailsController from "../../controllers/userDetailsController.js";

const userDetailsRouter = Router();

// this one's just for testing if the function works or not. 
userDetailsRouter.get("/checkIfUsernameExists", userDetailsController.checkIfUsernameExists);
userDetailsRouter.get("/getUsername", userDetailsController.getUsername);

userDetailsRouter.get("/getUserDetails", userDetailsController.getUserDetails);
userDetailsRouter.post("/addUserDetails", userDetailsController.addUserDetails);

// userDetailsRouter.delete("/deleteUserDetails", userDetailsController.deleteUserDetails);

// protecting user_details with checkAdmin middleware: 
userDetailsRouter.get('/', checkAdmin, (req, res) => {
    res.json({ message: "Admin access granted!" });
});

export default userDetailsRouter;