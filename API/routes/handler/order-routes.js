import Router from "express";
import orderController from "../../controllers/order-controller.js";

const orderRouter = new Router();

orderRouter.get("/orders", orderController.getOrders);
orderRouter.post("/orders", orderController.createOrder);
// -----
// One controller to send it to the seller??
// -----
orderRouter.put("/orders/:id", orderController.updateOrder);
orderRouter.delete("/orders/:id", orderController.deleteOrder);

export default orderRouter;