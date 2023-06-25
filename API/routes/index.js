import Router from "express";

const regRoutes = require("./register");

Router.use("/register", regRoutes);

module.exports = Router;
