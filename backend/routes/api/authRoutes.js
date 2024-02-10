const express = require('express');
const _ = express.Router();
const registrationController = require("../../controllers/registrationController")
const otpController = require("../../controllers/otpController");
const loginController = require('../../controllers/loginController');
const forgotPasswordController = require('../../controllers/forgotPasswordController');
const changePasswordController = require('../../controllers/changePasswordController');
const allUserController = require('../../controllers/allUserController');


_.post("/registration", registrationController)
_.post("/otpverify", otpController)
_.post("/login", loginController)
_.post("/forgotpassword", forgotPasswordController)
_.post("/changepassword", changePasswordController)
_.get("/alluser", allUserController)
// _.get("/registration", function (req, res) {
//     res.send("done")
// })

module.exports = _;