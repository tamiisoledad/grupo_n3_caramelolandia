var express = require('express');
const { productDetail,productCart,update,store,destroy,productAdd,productEdit,products,buscar} = require("../controllers/productController")
const uploadFile = require('../middlewares/productAddMulter')
const productValidator = require('../validations/productValidator');
const isAdmin =  require('../middlewares/user/isAdmin')
const user = require("../middlewares/user/isLoger")

module.exports = express.Router()
	/* GET users listing. */
	.get('/', products)
	.get('/search', buscar)
	.get('/detail/:id', productDetail)
	.get('/cart', user, productCart)

	/* ADD */
	.get('/add', isAdmin, productAdd)
	.post('/add',uploadFile.array('imagen'),productValidator,store)

	/* EDIT & UPDATE */
	.get('/edit/:id',isAdmin, productEdit)
	.put('/edit/:id',uploadFile.single('imagen'),productValidator,update)

	/* DELETE */
	.delete('/delete/:id',isAdmin, destroy)
;
