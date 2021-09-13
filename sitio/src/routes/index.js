const express = require('express');
const { index, admin, contacto, search} = require("../controllers/indexController")
const adminUserCheck = require('../middlewares/adminUserCheck');

module.exports = express.Router()
	/* GET home page. */
	.get('/', index)
	.get('/admin', adminUserCheck, admin)
	.get('/contact', contacto)
	.get('/search', search)
;