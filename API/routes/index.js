import { Router } from "express";
import { router as apiRoutes } from "./handler/index.js";

const router = Router();

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

export { router };
