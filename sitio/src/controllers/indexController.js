const fs = require("fs");
const path = require("path");
const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf-8"));

module.exports = {
    index : (req,res) => res.render("index",{
        productos
    }),
    admin : (req,res) => res.render("admin/admin"),
    contacto : (req,res) => res.render("contact") 
}