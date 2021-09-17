const express = require('express');
const { index, admin, contacto, usuario, search} = require("../controllers/indexController")
const adminUserCheck = require('../middlewares/adminUserCheck');

module.exports = express.Router()
	/* GET home page. */
	.get('/', index)
	.get('/admin', adminUserCheck, admin)
	.get('/contact', contacto)
	.get('/user', usuario)
	.get('/search', search)
;