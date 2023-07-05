import Router from "express";
import cartController from "../../controllers/cartController.js";

const cartRouter = Router();

cartRouter.get("/getCart", cartController.getCart);
cartRouter.post("/addToCart", cartController.addToCart);
// cartRouter.put("/:id", cartController.updateCart);
cartRouter.delete("/checkout", cartController.checkout);

export default cartRouter;