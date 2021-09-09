var express = require('express');
const {login, register, processRegister} = require("../controllers/usersController");

module.exports = express.Router()
	// GET users listing.
	.get('/login', login)
	.get('/register', register)
	.post('/register',processRegister)
;