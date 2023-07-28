import Router from "express";
import orderController from "../../controllers/orderController.js";

const orderRouter = new Router();

orderRouter.get("/getOrder/:orderId", orderController.getOrder);

orderRouter.post("/postOrder", orderController.placeOrder);
// -----
// One controller to send it to the seller??
// -----
// orderRouter.put("/orders/:id", orderController.updateOrder);
orderRouter.delete("/orders/:id", orderController.deleteOrder);

export default orderRouter;