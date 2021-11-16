var express = require('express');
const {login, register, processRegister, processLogin, logout} = require("../controllers/usersController");
const loginValidator = require('../validations/loginValidation');
const uploadFile = require('../middlewares/profileMulter')
const loginUserCheck = require('../middlewares/loginUserCheck')
const registerValidation = require('../validations/registerValidation')
const {show} = require("../controllers/cartController");

module.exports = express.Router()
	// GET users listing.
	.get('/login',loginUserCheck, login)
	.get('/register',loginUserCheck, register)
	.post('/register',uploadFile.single('image'),registerValidation,processRegister)
	.post('/login',loginValidator,processLogin)
	.get('/logout',logout)
	.get("/show", show)
;
