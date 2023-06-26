import fs from "fs/promises";
import path from "path";
import { getDirName, readUsernames, readPasswords } from "./libs/helper.js";

const __dirname = getDirName(import.meta.url);

// // Read contents of both files
// // Parse JSON content of both files into javascript objects
// Create new object with username as key and password as value
// Add that obj into a new file
// Check if the entered username & password match
// // Use pw as needed (e.g., compare to user input)

const storeUsersPasswords = async (username, password) => {
  try {
    const userData = {
      username: username,
      password: password,
    };

    const filePath = path.join(__dirname, "userDetails", "usernamesPws.json");

    let fileContent = "[]";
    try {
      fileContent = await fs.readFile(filePath, "utf-8");
    } catch (err) {
      if (err.code === "ENOENT") {
        // Create the file if it doesn't exist
        await fs.writeFile(filePath, "[]");
      } else {
        throw err;
      }
    }

    const obj = JSON.parse(fileContent);

    obj.push(userData);
    const json = JSON.stringify(obj);

    await fs.writeFile(filePath, json);

    console.log("Username and password stored successfully.");
  } catch (err) {
    console.error("Error storing username and password: ", err);
  }
};
const getUsernameByPassword = (password) => {
  // // Iterate over the file to find the object with the matching password
  // const foundUser = usernamesPws.find((user) => user.password === password);

  // // Retrieve the username
  // if (foundUser) {
  //   return `Username found: ${foundUser.username}`;
  // } else {
  //   return "Password not found!";
  // }
  try {
    const usernames = readUsernames();
    const passwords = readPasswords();

    // Assuming usernames and passwords are arrays of same length
    const index = passwords.indexOf(password);

    if (index !== -1) {
      return usernames[index];
    }
    return null;
  } catch (err) {
    console.error("Error retrieving username:", err);
    return null;
  }
};

export { storeUsersPasswords, getUsernameByPassword };
