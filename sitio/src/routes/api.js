var express = require('express')
const {show, add, remove, empty, deleteImage, addImage} = require("../controllers/cartController");
const upload = require('../middlewares/imageProductStorage'); 
module.exports = express.Router()
    .get("/show", show)
    .get('/add/:id', add)
    .get('remove/:id',remove)
    .get('/empty',empty)
    .get('/products/delete-image/:id',deleteImage)
    .post('/products/add-images/:id',upload.any(),addImage)
