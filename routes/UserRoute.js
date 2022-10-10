const Usercontroller = require("../controllers/UserController");
const express = require("express");
const userRouter = express.Router();
const users = new Usercontroller();

// getting one user
userRouter.get("/", (req, res) => {
	const userdata = req.query.id;
	users.listOne(userdata, res);
});

// adding new user
userRouter.post("/", (req, res) => {
	const userdata = req.body;
	users.add(userdata, res);
});
userRouter.patch("/", (req, res) => {
	users.hi();
});
userRouter.delete("/", (req, res) => {
	users.hi();
});

module.exports = userRouter;
