import User from "../../models/User.js";
import showUsers from "./showUsers.js";
import showSellers from "./showSellers.js";
import addAdmin from "./addAdmin.js"
import deleteSeller from "./deleteSeller.js"

const dashboardController = {
    showUsers,
    showSellers,
    addAdmin,
    deleteSeller,
};

export default dashboardController;