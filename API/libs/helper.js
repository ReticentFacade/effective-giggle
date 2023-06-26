import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const getDirName = function(moduleUrl) {
  const filename = fileURLToPath(moduleUrl);
  return path.dirname(filename);
};

const __dirname = getDirName(import.meta.url);

const getUsersFilePath = () => {
  return path.join(__dirname, "userDetails", "users.json");
};

const readUsernames = async () => {
  try {
    const filePath = getUsersFilePath();
    const fileContent = await fs.readFile(filePath);
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading usernames:", error);
    return [];
  }
};

const writeUsernames = async (usernames) => {
  try {
    const filePath = getUsersFilePath();
    const existingUsernames = JSON.stringify(usernames);
    await fs.writeFile(filePath, existingUsernames);
    console.log("Usernames added successfully!");
  } catch (error) {
    console.error("Error writing usernames:", error);
  }
};

const getPwFilePath = () => {
  return path.join(__dirname, "userDetails", "passwords.json");
};

const readPasswords = async () => {
  try {
    const filePath = getPwFilePath();
    const fileContent = await fs.readFile(filePath);
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading passwords:", error);
    return [];
  }
};

const writePasswords = async (passwords) => {
  try {
    const filePath = getPwFilePath();
    const existingPasswords = JSON.stringify(passwords);
    await fs.writeFile(filePath, existingPasswords);
    console.log("Passwords added successfully!");
  } catch (error) {
    console.error("Error writing passwords:", error);
  }
};

export {
  getDirName,
  getUsersFilePath,
  readUsernames,
  writeUsernames,
  getPwFilePath,
  readPasswords,
  writePasswords,
};
