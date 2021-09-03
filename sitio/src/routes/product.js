var express = require('express');
var router = express.Router();


const { productDetail,productCart,update,store,destroy,productAdd,productEdit } = require("../controllers/productController")


/* GET users listing. */
router.get('/detail/:id', productDetail);
router.get('/cart', productCart);

/* ADD */
router.get('/add', productAdd);
router.post('/add',store);

/* EDIT & UPDATE */
router.get('/edit/:id', productEdit);
router.put('/edit/:id',update);

/* DELETE */
router.delete('/delete/:id',destroy);


module.exports = router;