const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { roles } = require("../middleware/authen");
// SIGN UP------------------------------------------------
const signUp = async (req, res) => {
	try {
		const {
			firstName,
			lastName,
			email,
			password,
			phone,
			city,
			role,
			organizer,
		} = req.body;
		// save---
		//console.log('mohamed')
		const newUser = new userModel({
			firstName,
			lastName,
			email,
			password,
			phone,
			city,
			role,
			organizer,
		});
		if (newUser.organizer == true) newUser.role = roles.organizer;
		const savedUser = await newUser.save();
		//console.log(savedUser);
		res.json({ message: "done", savedUser });
	} catch (e) {
		if (e.keyValue?.email) {
			res.json({ message: "Email Exist" });
		} else {
			res.json({ message: "catch signUp error", e });
		}
	}
};
// SIGN IN------------------------------------------------
const signIn = async (req, res) => {
	try {
		const { email, password, status } = req.body;

		// FindeOne-------
		// دورلي بالايميل
		const user = await userModel.findOne({ email });
		if (!user) {
			//null || {}

			res.json({ message: "invalid acount" });
		} else {
			// macth : المقارنه بتاعه الباسورد
			// const match=await bcrypt.compare( body الباسورد الي جاي مالداتا,الباسورد الي انا كاتبه في ال )
			// التشفير
			// this.password=await bcrypt.hash(this.password,parseInt(process.env.SALTROUND))
			// console.log(user);
			const match = await bcrypt.compare(password, user.password);
			console.log(match);
			if (!match) {
				res.json({ message: "sorry you email or pass is error" });
			} else {
				if (status !== "active") {
					res.json({ message: "error of status please contact us" });
				} else {
					// create token----->
					console.log(user._id);
					const token = jwt.sign(
						{ _id: user._id, isLogged: true },
						process.env.SIGNiNTOKEN,
						{ expiresIn: "1h" }
					);

					res.json({ message: "take your token", token });
				}
			}
		}
	} catch (e) {
		res.json({ message: "sign in error", e });
	}
};
module.exports = { signUp, signIn };
