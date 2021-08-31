var express = require('express');
var router = express.Router();


const { productDetail, productCart, productAdd, productEdit } = require("../controllers/productController")


/* GET users listing. */
router.get('/Detail', productDetail);
router.get('/Cart', productCart);
router.get('/Add', productAdd);
router.get('/Edit', productEdit);

module.exports = router;