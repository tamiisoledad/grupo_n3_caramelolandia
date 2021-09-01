var express = require('express');
var router = express.Router();


const { productDetail,productCart,update,store,destroy,productAdd,productEdit } = require("../controllers/productController")


/* GET users listing. */
router.get('/Detail', productDetail);
router.get('/Cart', productCart);

/* ADD */
router.get('/Add', productAdd);
router.post('/add',store);

/* EDIT & UPDATE */
router.get('/Edit', productEdit);
router.put('/edit/:id',update);

/* DELETE */
router.delete('/delete/:id',destroy);


module.exports = router;