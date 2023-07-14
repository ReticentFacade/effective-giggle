import { Router } from "express";
import authRouter from "./auth-routes.js";
import productRouter from "./product-routes.js";
import coffeeBeanRouter from "./coffee-bean-routes.js";
import cartRouter from "./cart-routes.js";
import orderRouter from "./order-routes.js"
import userDetailsRouter from "./user-details.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/products", productRouter);
router.use("/coffee-beans", coffeeBeanRouter);
router.use('/cart', cartRouter);
router.use('/orders', orderRouter);
router.use('/userDetails', userDetailsRouter);

export { router };