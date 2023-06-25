import fs from "fs";
import path from "path";

import { getDirName } from "./libs/helper.js";
const __dirname = getDirName(import.meta.url);

const checkUsername = (username) => {
  const validFormat = /^[a-zA-Z0-9_-]{3,20}$/;

  return validFormat.test(username);
};

const getUsernameRules = () => {
  return [
    "- Length can be from 3 to 20 characters",
    "- Can contain letters, numbers, underscores and hyphens",
    "- Cannot contain spaces or special characters",
    "- Uppercase and lowercase letters are allowed",
  ];
};

const UserName = {
  checkUsername,
  getUsernameRules,
};

export default UserName;
