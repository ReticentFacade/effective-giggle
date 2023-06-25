import fs from "fs";
import path from "path";
// import checkUsername from "./checkUsername";
import { getDirName } from "./libs/helper.js";

const __dirname = getDirName(import.meta.url);

const sortUsernames = () => {
  const filePath = path.join(__dirname, "userDetails", "users.json");
  const fileContent = fs.readFileSync(filePath);
  const usernames = JSON.parse(fileContent);

  // Sort the array of usernames alphabetically
  usernames.sort((a, b) => {
    // Assuming the username property is stored as "username" in each object
    const usernameA = a.username.toLowerCase(); // ensuring sorting is case-insensitive
    const usernameB = b.username.toLowerCase();
    return usernameA.localeCompare(usernameB); // returns negative value if usernameA should be sorted before usernameB & positive if usernameB before usernameA
  });

  // Write the sorted array back to the users.json file
  const sortedUsernames = JSON.stringify(usernames);
  fs.writeFileSync(filePath, sortedUsernames);

  console.log("Usernames sorted successfully!");
};

const ifUsernameExists = (username) => {
  // const usernames = [];
  const filePath = path.join(__dirname, "userDetails", "users.json");
  const fileContent = fs.readFileSync(filePath);
  const usernames = JSON.parse(fileContent);

  sortUsernames();

  // Binary search
  let start = 0;
  let end = usernames.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const currUsername = usernames[mid];

    if (currUsername === username) {
      return true;
    } else if (currUsername < username) {
      start = mid + 1; // Right half
    } else {
      end = mid - 1; // Left half
    }
  }

  // Username doesn't exist
  return false;
};

const sanitizedUsername = (username) => {
  if (!ifUsernameExists(username)) {
    console.log("Username already exists!");
    return false;
  } else {
    console.log("Username does not exist, it is available to use!");
    return true;
  }
};

export default sanitizedUsername;
