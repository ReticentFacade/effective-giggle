import Router from "express";
// import addAdmin from "../../controllers/dashboard/addAdmin.js";
// import showSellers from "../../controllers/dashboard/showSellers.js";
// import showUsers from "../../controllers/dashboard/showUsers.js";
import dashboardController from "../../controllers/dashboard/dashboardController.js";

const dashboardRouter = Router();


dashboardRouter.get("/showUsers", dashboardController.showUsers);
dashboardRouter.get("/showSellers", dashboardController.showSellers);
dashboardRouter.post("/addAdmin", dashboardController.addAdmin);
dashboardRouter.delete("/deleteSeller/:id", dashboardController.deleteSeller);

export default dashboardRouter;