import Router from "express";
import coffeeBeanController from "../../controllers/coffeeBeanController.js";

const coffeeBeanRouter = Router();

coffeeBeanRouter.get("/all-coffee-beans", coffeeBeanController.getAvailableCoffeeBeans);
coffeeBeanRouter.post("/", coffeeBeanController.validateCoffeeBeans);

export default coffeeBeanRouter;