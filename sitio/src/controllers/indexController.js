const db= require('../database/models');

module.exports = {
    index : (req,res) => {
        let productos = db.Product.findAll({
                include : [
                    {association : 'category'},
                    {association : 'images'}
                ]
           });
        let categorias = db.Category.findAll({
                include : [
                    {association : 'products'}
                    
                ]
            });
        let imagenes = db.Image.findAll({
                include : [
                    {association : 'product'}
                    
                ]
            
        });

        Promise.all([productos, categorias, imagenes])
        .then(([productos, categorias, imagenes])=> {
            return res.render('index',{
                productos: productos.category && productos.images,
                categorias: categorias.products,
                imagenes:imagenes.product
            })
        }) .catch(error => console.log(error)) 
    },
    admin : (req,res) => {
        db.Product.findAll()
        .then(function(productos){
            return res.render('admin/admin', {
                productos: productos
            })
        })
    },
    usuario : (req,res) => {
        db.User.findByPk(req.params.id)
        .then(function(usuario){
            res.render('user',{
                usuario:usuario
            })
        })
    },
    updateUser : (req,res) => {
        const {password} = req.body
        db.User.update({
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