require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const app = express();

app.use(express.json());

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const auth = require("./middleware/authentication");

//Sign-up
//Log-in

// Allmodels
// const UserModel = require("./model/user");

module.exports = app;
