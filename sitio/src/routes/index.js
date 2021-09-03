var express = require('express');
const {index, admin, contacto, search} = require("../controllers/indexController")

/** Obtener las paginas
 * URL
 * REQ 
*/

module.exports = express.Router()
	.get('/', index)
	.get('/admin',admin)
	.get("/contact", contacto)
	.get("/search", search)
;