import Router from "express";
import { coffeeBeanController } from "../../controllers/coffeeBeanController.js";

const coffeeBeanRouter = Router();

coffeeBeanRouter.post("/", coffeeBeanController.validateCoffeeBeans);

export default coffeeBeanRouter;