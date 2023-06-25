import fs from "fs";
import path from "path";

import { getDirName } from "./libs/helper.js";
const __dirname = getDirName(import.meta.url);

const storePw = (password) => {
  const pw = {
    password: password,
  };

  const filePath = path.join(__dirname, "userDetails", "passwords.json");
  const fileContent = fs.readFileSync(filePath);
  const obj = JSON.parse(fileContent);

  obj.push(pw);
  const json = JSON.stringify(obj);
  fs.writeFileSync(filePath, json);

  console.log("Pw successfully added!");
};

export default storePw;
