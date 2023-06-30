import express from "express";
import { Router } from "express";
import { saveUser } from "../../middleware/userCheck.js";
import { signUp, login } from "../../controllers/userController.js";

const authRouter = new Router();

authRouter.post("/signup", saveUser, signUp);
authRouter.post("/login", login);

export default authRouter;
