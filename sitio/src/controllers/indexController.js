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
    updateUser : (req,res) => {
        const {password} = req.body
        db.Usuario.update({
            name:req.body.nombre,
            email: req.body.email,
            password: bcryptjs.hashSync(password, 10)
        },{
            where:{
                id:req.params.id
            }
        })
        res.redirect('/user')
        },
    contacto : (req,res) => res.render("contact")
}