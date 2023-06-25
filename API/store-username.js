import fs from "fs";
import path from "path";

import { getDirName } from "./libs/helper.js";
const __dirname = getDirName(import.meta.url);

const storeUsername = (username) => {
  const userName = {
    username: username,
  };

  const filePath = path.join(__dirname, "userDetails", "users.json");
  const fileContent = fs.readFileSync(filePath);
  const obj = JSON.parse(fileContent);

  obj.push(userName);
  const json = JSON.stringify(obj);
  fs.writeFileSync(filePath, json);
};

export default storeUsername;
