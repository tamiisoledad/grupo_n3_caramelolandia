const fs = require("fs");
const path = require("path");

const DataBase = {
    /** Regresa la base de datos completa.
     * fileName : String
    */
    get : (fileName) => JSON.parse(fs.readFileSync(path.join(__dirname, "..", "data", fileName + '.json'), "utf-8"))
}

const productos = DataBase.get("productos")

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
            productos : DataBase.get("productos").reverse(),
            usuarios : DataBase.get("users").reverse()
        })
    },
    usuario : (req,res) => {
        return res.render("user", {
            usuario : req.session.userLogin,
            usuarios : DataBase.get("users")
        })
    },
    contacto : (req,res) => res.render("contact")
}