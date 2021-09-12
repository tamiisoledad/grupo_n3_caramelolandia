var express = require('express');
const {login, register, processRegister, processLogin, logout} = require("../controllers/usersController");
const loginValidator = require('../validations/loginValidation');
const uploadFile = require('../middlewares/profileMulter')


module.exports = express.Router()
	// GET users listing.
	.get('/login', login)
	.get('/register', register)
	.post('/register',uploadFile.single('image'),processRegister)
	.post('/login',loginValidator,processLogin)
	.get('/logout',logout)
;
