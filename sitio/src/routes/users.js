var express = require('express');
const {login, register, processRegister, processLogin, logout} = require("../controllers/usersController");
const loginValidator = require('../validations/loginValidation');
const uploadFile = require('../middlewares/profileMulter')
const loginUserCheck = require('../middlewares/loginUserCheck')


module.exports = express.Router()
	// GET users listing.
	.get('/login',loginUserCheck, login)
	.get('/register',loginUserCheck, register)
	.post('/register',uploadFile.single('image'),processRegister)
	.post('/login',loginValidator,processLogin)
	.get('/logout',logout)
;
