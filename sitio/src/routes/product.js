var express = require('express');
const { productDetail,productCart,update,store,destroy,productAdd,productEdit, products, buscar } = require("../controllers/productController")

module.exports = express.Router()
	/* GET users listing. */
	.get('/', products)
	.get('/category', buscar)
	.get('/detail/:id', productDetail)
	.get('/cart', productCart)

	/* ADD */
	.get('/add', productAdd)
	.post('/add',store)

	/* EDIT & UPDATE */
	.get('/edit/:id', productEdit)
	.put('/update/:id',update)

	/* DELETE */
	.delete('/delete/:id',destroy)
;
