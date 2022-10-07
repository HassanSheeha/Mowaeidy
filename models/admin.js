const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
	name: {
		type: String,
		default: null,
		minlength: 3,
		maxlength: 14,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
	},

	password: {
		type: String,
		require: true,
		minlength: 8,
	},
});

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = AdminModel;
