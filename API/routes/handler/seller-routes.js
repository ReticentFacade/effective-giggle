import Router from "express";
import sellerController from "../../controllers/sellerController.js";

const sellerRouter = Router();

sellerRouter.post("/addSeller", sellerController.addSeller);
// sellerRouter.get("/showSellers", dashboardController.showSellers);
// sellerRouter.delete("/deleteSeller/:id", dashboardController.deleteSeller);

export default sellerRouter;