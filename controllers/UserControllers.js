const AppointmentModel = require("../models/appointment");
const userModel = require("../models/user");

// getting one user (personal page & adminpanel)
const getOneUser = async (req, res) => {
	try {
		const foundUser = await userModel
			.findOne({ email: req.query.email })
			.select("-password")
			.exec();
		if (!foundUser) {
			res.json({ message: "organizer doesn't exist" });
		} else {
			res.json(foundUser);
		}
	} catch (err) {
		res.json({ message: "error with one" });
	}
};

// editing a user
const editUser = async (req, res) => {
	try {
		const updatedUser = await userModel
			.findOneAndUpdate({ email: req.query.email }, req.body)
			.exec();
		updatedUser
			? res.json({ message: "user updated" })
			: res.json({ message: "user doesn't exist" });
	} catch (err) {
		res.json({ message: "error" });
	}
};
// editing a user status
const editUserStatus = async (req, res) => {
	try {
		const { status } = req.body;
		const updatedUser = await userModel
			.findOneAndUpdate({ email: req.query.email }, { status })
			.exec();
		updatedUser
			? res.json({ message: "user updated" })
			: res.json({ message: "user doesn't exist" });
	} catch (err) {
		res.json({ message: "error" });
	}
};

// getting all users in admin page
const getAllUsers = async (req, res) => {
	try {
		const foundUsers = await userModel.find({}).select("-password");
		if (!foundUsers) {
			res.json({ message: "organizer doesn't exist" });
		} else {
			res.json(foundUsers);
		}
	} catch (err) {
		res.json({ message: "error" });
	}
};

// getting an appointment in user page
const getAllAppointmentUser = async (req, res) => {
	try {
		const foundAppointment = await AppointmentModel.find({madeByFK: req.query.id,})
			.select("-userFeedback -madeByFK -organiserFeedback")
			.populate({ path: "madeToFK", select: "orgName contact" })
			.populate({ path: "industryIDFK", select: "name" })
			.exec();
		if (!foundAppointment) {
			res.json({ message: "appointment doesn't exist" });
		} else {
			res.json(foundAppointment);
		}
	} catch (err) {
		res.json({ message: "error", err });
	}
};
// adding new User
// expermental
const addUser = async (req, res) => {
	try {
		const newUser = new userModel(req.body);
		const savedUser = await newUser.save();
		res.json({ message: "done", savedUser });
	} catch (err) {
		res.json({ message: "error" });
	}
};

module.exports = {
	getOneUser,
	editUser,
	editUserStatus,
	getAllUsers,
	addUser,
	getAllAppointmentUser,
};
