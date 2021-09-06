var express = require('express');
const { productDetail,productCart,update,store,destroy,productAdd,productEdit,products,buscar} = require("../controllers/productController")
const uploadFile = require('../middlewares/productAddMulter')

module.exports = express.Router()
	/* GET users listing. */
	.get('/', products)
	.get('/category', buscar)
	.get('/detail/:id', productDetail)
	.get('/cart', productCart)

	/* ADD */
	.get('/add', productAdd)
	.post('/add',uploadFile.single('imagen'),store)

	/* EDIT & UPDATE */
	.get('/edit/:id',productEdit)
	.put('/edit/:id',uploadFile.single('imagen'),update)

	/* DELETE */
	.delete('/delete/:id',destroy)
;
