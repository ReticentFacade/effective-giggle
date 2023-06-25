import express from "express";
import fs from "fs";
import path from "path";

import { getDirName } from "./libs/helper.js";
const __dirname = getDirName(import.meta.url);

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.post("/api/user-registered", (req, res) => {
  const userDetails = {
    username: req.body.username,
    // password: req.body.password,
  };

  console.log(userDetails);

  const filePath = path.join(__dirname, "userDetails", "users.json");
  const fileData = fs.readFileSync(filePath);
  const existingData = JSON.parse(fileData);

  existingData.push(userDetails);

  fs.writeFileSync(filePath, JSON.stringify(existingData));

  res.send("User registered successfully!");
});

app.listen(3001);
