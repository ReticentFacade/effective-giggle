import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import UserName from "./checkUsername.js";
import Pw from "./checkPassword.js";
import storeUsername from "./store-username.js";
import storePw from "./store-pw.js";
import store_both_username_pw from "./store-both-username-pw.js";
import sanitizedUsername from "./sanitizedUsername.js";

const app = express();
const port = 3002; // Change the port number if needed

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// POST /api/username route handler
const readUsers = (req, res) => {
  const { username, password } = req.body;

  if (!UserName.checkUsername(username)) {
    const usernameRules = UserName.getUsernameRules();
    res.status(400).json({ error: "Username is required", usernameRules });
    return;
  }

  if (!Pw.checkPassword(password)) {
    const passwordRules = Pw.getPasswordRules();
    res.status(401).json({error: "Invalid password!", passwordRules});
    return;
  }

  // Perform authentication logic here (e.g., check in a database)
  if (sanitizedUsername(username)) {
    res.status(401).json({error: "Username already exists!"});
    return;
  } else {
    res.status(200).json({message: "Username is available to use!"});
  }
  
  
  // store_both_username_pw(username, password);
  storeUsername(username);
  storePw(password);

  res.json({
    auth_status: 
        `Got username --> ${username} 
        Got password --> ${password}`
  });
};

app.post("/api/usernames", readUsers);

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
