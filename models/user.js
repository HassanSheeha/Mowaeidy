const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { string } = require("joi/lib");
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
		type: String,
		default:
			"https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
	},

	organizer: {
		required: true,
		type: Boolean,
	},
	role: {
		type: String,
		default: "user",
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
	status: { type: String, default: "active" },
});

userSchema.pre("save", async function (next) {
	this.password = await bcrypt.hash(
		this.password,
		parseInt(process.env.SALTROUND)
	);

	next();
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
