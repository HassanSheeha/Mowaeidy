const express = require("express");
const { deleteAppointment } = require("../controllers/AppointmentControllers");
const { getOneOrganizerToView } = require("../controllers/OrganizerControllers");
const {
	addUser,
	getOneUser,
	editUser,
	getAllAppointmentUser,
} = require("../controllers/UserControllers");
const userRouter = express.Router();

// getting one user (personal page)
userRouter.get("/me", getOneUser);

// editing a user
userRouter.put("/me/edit", editUser);

// deleting an appointment
userRouter.delete("/appointments/delete", deleteAppointment);

// getting an appointment
userRouter.get("/appointments", getAllAppointmentUser);

// getting an organizer
userRouter.get("/organzier", getOneOrganizerToView);

// adding new user
// expermental
userRouter.post("/", addUser);

module.exports = userRouter;
