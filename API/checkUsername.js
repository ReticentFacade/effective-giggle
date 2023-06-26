import { readUsernames } from "./libs/helper.js";

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

const isUsernameTaken = async (username) => {
  try {
    const usernames = await readUsernames();
    return usernames.some((user) => user.username === username);
  } catch (error) {
    console.error("Error checking if username is taken:", error);
    return false;
  }
};

const UserName = {
  checkUsername,
  getUsernameRules,
  isUsernameTaken,
};

export default UserName;
