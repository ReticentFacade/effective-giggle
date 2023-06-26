import fs from "fs/promises";
import { getUsersFilePath } from "./libs/helper.js";

const sortUsernames = async () => {
  try {
    const filePath = getUsersFilePath();
    const fileContent = await fs.readFile(filePath);
    const usernames = JSON.parse(fileContent);

    usernames.sort((a, b) => {
      const usernameA = a.username.toLowerCase();
      const usernameB = b.username.toLowerCase();
      return usernameA.localeCompare(usernameB);
    });

    const sortedUsernames = JSON.stringify(usernames);
    await fs.writeFile(filePath, sortedUsernames);

    console.log("Usernames sorted successfully!");
  } catch (error) {
    console.error("Error sorting usernames:", error);
  }
};

const sanitizedUsername = (username) => {
  // remove leading and trailing whitespace
  username = username.trim();

  // convert the username to lowercase
  username = username.toLowerCase();

  // remove any special characters or symbols
  username = username.replace(/[^\w\s]/gi, "");

  // replace spaces with underscores
  username = username.replace(/\s+/g, "_");

  // limit username length to a certain number of characters (here -> 20)
  const maxLength = 20;
  username = username.slice(0, maxLength);

  // return the sanitized username
  return username;
};

export { sortUsernames, sanitizedUsername };
