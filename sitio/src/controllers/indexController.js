const db= require('../database/models');

module.exports = {
    index : (req,res) => {
        db.Producto.findAll()
        .then(function(productos){
            return res.render('products', {
                productos: productos
            })
        })
    },
    admin : (req,res) => {
        db.Producto.findAll()
        .then(function(productos){
            return res.render('admin/admin', {
                productos: productos
            })
        })
    },
    usuario : (req,res) => {
        db.Usuario.findByPk(req.params.id)
        .then(function(usuario){
            res.render('user',{
                usuario:usuario
            })
        })
    },
    contacto : (req,res) => res.render("contact")
}