const db= require('../database/models');

module.exports = {
    index : (req,res) => {
        db.Product.findAll({
            include : ['category','images']
        })
        .then(productos => {
                return res.render('index',{
                    productos})
         }) .catch(error => console.log(error)) 
    },
    admin : (req,res) => {
        db.Product.findAll()
        .then(function(productos){
            return res.render('admin/admin', {
                productos: productos
            })
        }).catch(error => console.log(error))
    },
    usuario : (req,res) => {
        db.User.findByPk(req.session.userLogin.id)
        .then(function(usuario){
           return res.render('user',{
                usuario:usuario
            })
        }).catch(error => console.log(error))
    },
    updateUser : (req,res) => {
        const {password} = req.body
        db.User.update(
            {
                name: req.body.name,
                avatar: req.file ? req.file.filename : req.session.userLogin.avatar,
            },
            {
                where : {id : req.session.userLogin.id},
            },
        )
        .then( () => {
            return res.redirect('/')
        })
        .catch(error => console.log(error))
        },
    contacto : (req,res) => res.render("contact")
}