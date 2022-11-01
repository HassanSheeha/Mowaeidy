const appointmentModel = require("../models/appointment");

// deleting an appointment in organizer or user page
const deleteAppointment = async (req, res) => {
	try {
		const updatedAppointment = await appointmentModel
			.findOneAndDelete({ _id: req.query.id })
			.exec();
		updatedAppointment
			? res.json({ message: "appointment deleted" })
			: res.json({ message: "appointment doesn't exist" });
	} catch (err) {
		res.json({ message: "error" });
	}
};

module.exports = {
	deleteAppointment,
};
