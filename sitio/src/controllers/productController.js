const db= require('../database/models');

const capitalizeOneLetter = require('../utils/capitalizeOneLetter');


module.exports = {
    products: (req,res) =>{
        db.Producto.findAll()
        .then(function(productos){
            return res.render('products', {
                productos: productos
            })
        })
    },
    buscar: (req,res) => {
        if(req.query.busqueda){
            db.Product.find.All({
                includes: ['category', 'images'],
                where: {

                }
            })
            return res.render('index',{
                title: 'resultado de la busqueda',
                productos:resultado,
                busqueda:req.query.busqueda

            })
        }
        return res.redirect('/')
               
    },
    productDetail : (req,res) => {
       
        db.Producto.findByPk(req.params.id,{
            include:[
                {
                    association: 'products'
                }
             ]
        })
        .then(function(producto){
            res.render('productDetail',{
                producto:producto
            })
        })
    },

    productCart : (req,res) => res.render("productCart"),

    productAdd : (req,res) => {
       return res.render("productAdd",{
           productos,
       } )
    },
    store : (req,res) => {
       db.Producto.create({
           name:req.body.nombre,
           info: req.body.informacion,
           mark:req.body.marca,
           price:+req.body.precio,
           variety:req.body.variedad,
           stock:+req.body.stock,
           vegan:req.body.vegano,
           celiac:req.body.celiaco,
           category_id:req.body.categoria,
       })
        res.redirect('/admin')
    },

    productEdit : (req,res)=>{
       let pedidoProducto = db.Producto.findByPk(req.params.id)
       let pedidoCategoria = db.Categoria.findAll()
       Promise.all([
           pedidoProducto,pedidoCategoria
       ])
    .then(function([
        producto,categorias
    ])
    {
        res.render('productEdit',{
            producto:producto, categorias:categorias
        })
    })
    },
    update : (req,res) => {
    db.Producto.update({
        name:req.body.nombre,
        info: req.body.informacion,
        mark:req.body.marca,
        price:+req.body.precio,
        variety:req.body.variedad,
        stock:+req.body.stock,
        vegan:req.body.vegano,
        celiac:req.body.celiaco,
        category_id:req.body.categoria,
    },{
        where:{
            id:req.params.id
        }
    })
    res.redirect('/products/detail/'+req.params.id)
    },
    destroy : (req,res) => {
       db.Producto.destroy({
           where:{
               id:req.params.id
           }
       })
       res.redirect('/admin')
    }
}