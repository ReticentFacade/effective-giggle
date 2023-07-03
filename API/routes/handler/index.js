import { Router } from "express";
import authRouter from "./auth-routes.js";
import productRouter from "./product-routes.js";
import coffeeBeanRouter from "./coffee-bean-routes.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/products", productRouter);
router.use("/coffee-beans", coffeeBeanRouter);

export { router };