import fs from "fs/promises";
import path from "path";
import { getDirName } from "./libs/helper.js";

const __dirname = getDirName(import.meta.url);

const storeUsername = async (username) => {
  const userName = {
    username: username,
  };

  try {
    const filePath = path.join(__dirname, "userDetails", "users.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    const obj = JSON.parse(fileContent);

    obj.push(userName);
    const json = JSON.stringify(obj);
    await fs.writeFile(filePath, json);

    console.log("Username stored successfully!");
  } catch (err) {
    console.error("Error storing username:", err);
  }
};

export default storeUsername;
