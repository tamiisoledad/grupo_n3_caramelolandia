const fs = require("fs");
const path = require("path");
const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf-8"));

module.exports = {
    index : (req,res) => res.render("index",{
        productos
    }),
    search: (req, res) => {
        let resultado = productos.filter(producto => producto.Producto.toLowerCase().includes(req.query.buscar.toLowerCase()) || producto.categoria.toLowerCase().includes(req.query.buscar.toLowerCase()))
        return res.render("search",{
            productos: resultado
        })
    },
    admin : (req,res) => {
        return res.render('admin/admin',{
            productos
        })
    },
    contacto : (req,res) => res.render("contact") 
}