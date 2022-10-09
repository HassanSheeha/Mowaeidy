const Usercontroller = require("../controllers/UserController");
const express = require("express");
const userRouter = express.Router();
const users = new Usercontroller();

userRouter.get("/", (req, res) => {
	users.hi();
});
userRouter.post("/", (req, res) => {
	users.hi();
});
userRouter.patch("/", (req, res) => {
	users.hi();
});
userRouter.delete("/", (req, res) => {
	users.hi();
});

module.exports = userRouter;
