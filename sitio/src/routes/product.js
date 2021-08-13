var express = require('express');
var router = express.Router();
const { productsDetail, productsCart, productAdd, productEdit } = require("../controllers/productController")
/* GET users listing. */
router.get('/Detail', productsDetail);
router.get('/Cart', productsCart);
router.get('/Add', productAdd);
router.get('/Edit', productEdit);

module.exports = router;