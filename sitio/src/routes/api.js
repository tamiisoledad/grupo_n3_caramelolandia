var express = require('express')
const {show, add} = require("../controllers/cartController");

module.exports = express.Router()
    .get("/show", show)
    .get('/add/:id', add)
