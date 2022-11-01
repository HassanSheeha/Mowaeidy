const express = require("express");
const {
	addAdmin,
	getAlladmins,
	deleteAdmin,
} = require("../../controllers/AdminControllers");
const {
	getAllIndustriesDashboard,
	addIndustry,
	editIndustry,
	deleteIndustry,
} = require("../../controllers/IndustryControllers");
const {
	editUserStatus,
	getAllUsers,
} = require("../../controllers/UserControllers");
const dashboardRouter = express.Router();

// editing a user status
dashboardRouter.put("/users/edit", editUserStatus);

// getting all users
dashboardRouter.get("/users", getAllUsers);

// getting all industries
dashboardRouter.get("/industries", getAllIndustriesDashboard);

// adding an industry
dashboardRouter.post("/industries/add", addIndustry);

// editing an industry
dashboardRouter.put("/industries/edit", editIndustry);

// delete an industry
dashboardRouter.delete("/industries/delete", deleteIndustry);

// getting all admins
dashboardRouter.get("/admins", getAlladmins);

// adding an admin
dashboardRouter.post("/admins/add", addAdmin);

// delete an admin
dashboardRouter.delete("/admins/delete", deleteAdmin);

module.exports = dashboardRouter;
