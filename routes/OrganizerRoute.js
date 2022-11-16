const industryModel = require("../models/industry");

const {
	getOneOrganizer,
	addOrganizer,
	getAllOrganizers,
	editOrganizer,
	getOneOrganizerToView,
	addAppointmentOrganizer,
	editAppointmentStatus,
	getAllAppointmentOrganizer,
	getAllOrganizersSearch,
	getAllAppointmentOrganizerView,
} = require("../controllers/OrganizerControllers");
const express = require("express");
const { deleteAppointment } = require("../controllers/AppointmentControllers");
const organizerRouter = express.Router();

// getting one organizer (personal page)
organizerRouter.get("/me", getOneOrganizer);

// getting one organizer (view page)
organizerRouter.get("/view", getOneOrganizerToView);

// editing an organizer
organizerRouter.put("/me/edit", editOrganizer);

// adding an appointment
organizerRouter.post("/appointments/add", addAppointmentOrganizer);

// editing an appointment status
organizerRouter.put("/appointments/edit", editAppointmentStatus);

// deleting an appointment
organizerRouter.delete("/appointments/delete", deleteAppointment);

// getting all appointments in personal Page
organizerRouter.get("/appointments", getAllAppointmentOrganizer);

// getting all appointments in view Page
organizerRouter.get("/appointments/view", getAllAppointmentOrganizerView);

// getting all organizer in search in industries page
organizerRouter.get("/search", getAllOrganizersSearch);

// getting all organizer
// expermental
organizerRouter.get("/", getAllOrganizers);

// adding new organizer
// expermental
organizerRouter.post("/", addOrganizer);

module.exports = organizerRouter;
