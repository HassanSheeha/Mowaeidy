const mongoose = require("mongoose");
const userModel = require("../models/user");

class UserController {
	constructor() {}
	hi = function () {
		console.log("hello");
	};
}

module.exports = UserController;
