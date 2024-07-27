const express = require("express");
const Router = express.Router();

const {signup, login, sendEmail, verifyOtp, resetPassword} = require ('../controller/authController');

Router.post('/signup', signup)
Router.post('/login', login)
Router.post('/sendEmail', sendEmail)
Router.post('/verifyOtp', verifyOtp)
Router.post('/resetPassword', resetPassword)

module.exports = Router;