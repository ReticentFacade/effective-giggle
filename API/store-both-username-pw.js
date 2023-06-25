import fs from "fs";
import path from "path";

import { getDirName } from "./libs/helper.js";
const __dirname = getDirName(import.meta.url);

/**
 * sanitize user input and check if username already exists or not
 * do not store data (username, password) if username already exists
 * 
 * access only the passwords that are on same index as username
 * every username should be unique
 * 
 * connect to a database (use sequalize [NPM package])
 * register -> "/api/register" (username, password, email)
 * login -> "/api/login" (username, password) [forget password -> (email)] ---> userID [crypto] -> cookie
 * cart -> "/api/cart" (products added to cart, number of products)
 * logout -> "/api/logout" -> if !cookie -> logout.
 * */

const store_both_username_pw = (username, password) => {
    const userData = {
        "username": username,
        "password": password
    }

    const filePath = path.join(__dirname, 'userDetails', 'both.js');
    const fileContent = fs.readFileSync(filePath);
    const obj = JSON.parse(fileContent);

    obj.push(userData);
    const json = JSON.stringify(obj);
    fs.writeFileSync(filePath, json);
};

export default store_both_username_pw;