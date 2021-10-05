const express = require('express');
const { index, admin, contacto, usuario, search} = require("../controllers/indexController")
const User = {
	isAdmin : require('../middlewares/user/isAdmin'),
	isLoger : require('../middlewares/user/isLoger')
}

module.exports = express.Router()
	/* GET home page. */
	.get('/', index)
	.get('/user', User.isLoger, usuario)
	.post('/user')
		// &&
		.get('/admin', User.isAdmin, admin)
	.get('/contact', contacto)
	.get('/search', search)
;