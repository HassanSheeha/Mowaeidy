const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 10,
	},
	lastName: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 15,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
	},
	dateOfBirth: {
		type: Date,
		default: null,
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
	},
	token: { type: String },
	phone: {
		type: String,
		required: true,
		match: /^[0-9]{11}$/g,
	},
	city: {
		type: String,
		required: true,
	},
	profilePicture: {
		data: Buffer,
		contentType: String,
	},
	id: {
		type: String, //name#54812
		required: true,
		unique: true,
	},
	organizer: {
		required: true,
		default: false,
		type: Boolean,
	},
	commited: {
		type: Number,
		default: 50,
		min: 0,
		max: 100,
	},
	numberOfAppointment: {
		type: Number,
		default: 0,
		min: 0,
	},
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
