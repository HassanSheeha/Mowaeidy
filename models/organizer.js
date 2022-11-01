const mongoose = require("mongoose");

const organizerSchema = new mongoose.Schema({
	//foreign key for user collection
	userIDFK: { type: mongoose.Schema.Types.ObjectId, ref: "user" },

	orgName: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50,
	},
	title: {
		type: String,
		default: null,
		minlength: 4,
		maxlength: 20,
	},
	description: {
		type: String,
		default: null,
		maxlength: 300,
	},
	contact: {
		type: Array,
		default: null,
	},
	//person or company
	individual: {
		type: Boolean,
		required: true,
	},
	//foreign key for industry collection
	industryIDFK: { type: mongoose.Schema.Types.ObjectId, ref: "industry" },
	//the available days for the orginizer
	availDays: {
		type: Array,
		required: true,
		maxItems: 7,
	},
	//the available hours for the orginizer
	availHours: {
		type: Array,
		required: true,
		maxItems: 48,
	},
	//is the amount of required daposit
	amountOfRequiredDaposit: {
		type: Number,
		default: 0,
		min: 0,
	},
	//if the organizer needs to aske the user a question when making an appointment
	question: {
		type: String,
		default: null,
	},
	//the organizer rate
	rate: {
		type: Number,
		default: 5,
		min: 0,
	},
	//total number of organizer appointments
	numbOfAppointments: {
		type: Number,
		default: 0,
		min: 0,
	},
	//total amount of organizer recieved money
	totalPaidMoney: {
		type: Number,
		default: 0,
		min: 0,
	},
});

const OrganizerModel = mongoose.model("organizer", organizerSchema);

module.exports = OrganizerModel;
