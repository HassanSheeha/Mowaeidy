const { authentication } = require("../middleware/authen");
const express = require("express");
const validation = require("../middleware/validation");
const { endPoint } = require("../middleware/endPoint");
const userModel = require("../models/user");
const {
	singUpValidation,
	singInValidation,
} = require("../helpers/auth.validation");
const { signUp, signIn } = require("../controllers/registerationController");

const authRouter = express.Router();

//authentication(endPoint.user.profile)

authRouter.post("/signUp", validation(singUpValidation), signUp);
authRouter.post("/signIn", validation(singInValidation), signIn);

module.exports = authRouter;
