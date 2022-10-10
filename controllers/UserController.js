const mongoose = require("mongoose");
const userModel = require("../models/user");

class UserController {
	constructor() {}

	add = function (data, res) {
		const userData = data;
		// if (userData=={}) return res.status(400).json({ Msg: "another error" });
		const user = new userModel(userData);
		user.save((err) => {
			if (!err) {
				return res.json({ Msg: "User Saved Successfully" });
			}
			return res.status(500).json({ errMsg: "error in posting user" });
		});
	};
	listOne = function (id, res) {
		userModel.find({ "_id": id }, (err, data) => {
			if (!err) {
				return res.json(data);
			}
			res.status(500).json({ errMsg: "error in finding user" });
		});
	};
}

module.exports = UserController;
