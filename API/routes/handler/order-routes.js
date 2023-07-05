import Router from "express";
import orderController from "../../controllers/orderController.js";

const orderRouter = new Router();

orderRouter.get("/orders", orderController.getOrder);
orderRouter.post("/orders", orderController.placeOrder);
// -----
// One controller to send it to the seller??
// -----
// orderRouter.put("/orders/:id", orderController.updateOrder);
orderRouter.delete("/orders/:id", orderController.deleteOrder);

export default orderRouter;