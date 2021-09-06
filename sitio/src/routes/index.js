var express = require('express');
const { index, admin, contacto, search} = require("../controllers/indexController")

module.exports = express.Router()
	/* GET home page. */
	.get('/', index)
	.get('/admin',admin)
	.get('/contact', contacto)
	.get('/search', search)
;