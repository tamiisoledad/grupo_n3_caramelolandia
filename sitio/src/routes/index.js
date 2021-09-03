var express = require('express');
const {index, admin} = require("../controllers/indexController")

/** Obtener las paginas
 * URL
 * REQ 
*/

module.exports = express.Router()
	.get('/', index)
	.get('/admin',admin)
;