const db= require('../database/models');
const {validationResult} = require("express-validator")
const capitalizeOneLetter = require('../utils/capitalizeOneLetter');


module.exports = {
    products: (req,res) =>{
        db.Product.findAll()
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
       
        db.Product.findByPk(req.params.id,{
            include : [
                {association : 'category'},
                {association : 'images'}
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
        db.Category.findAll({
            order : [
                ['name','ASC']
            ]
        })
            .then(categorias => res.render('productAdd',{
                categorias,
            }))
            .catch(error => console.log(error))
    },
    store : (req,res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            db.Product.create({
                name:req.body.nombre,
                info: req.body.informacion,
                mark:req.body.marca,
                price:+req.body.precio,
                variety:req.body.variedad,
                stock:+req.body.stock,
                vegan:req.body.vegano,
                celiac:req.body.celiaco,
                category_id:req.body.categoria,
            }) .then(product => {
                console.log(product);
                if(req.files.length != 0){
                    let images = req.files.map(image => {
                        let item = {
                            file : image.filename,
                            productId : product.id
                        }
                        return item
                    }) 
                    db.Image.bulkCreate(images,{validate : true})
                    .then( () => console.log('imagenes guardadas satisfactoriamente'))
            }
            return res.redirect('/admin')
        })
        .catch(error => console.log(error))
    }else{
        db.Category.findAll({
            order : [
                ['name','ASC']
            ]
        })
            .then(categorias => res.render('productAdd',{
                categorias,
                errores : errors.mapped(),
                old : req.body
            }))
            .catch(error => console.log(error))
      
    }
},

    productEdit : (req,res)=>{
       let pedidoProducto = db.Product.findByPk(req.params.id, {
        include : ['category','images']
    })
       let pedidoCategoria = db.Category.findAll({
        order : [
            ['name']
        ]
    })
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
    }).catch(error => console.log(error))
    },
    update : (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Product.update({
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
            }) .then( () => {

                db.Product.findByPk(req.params.id,{
                    include : ['images']
                })
                    .then( async product => {
                        if(req.files.length != 0){
                            product.images.forEach(image => {
                                if(fs.existsSync(path.join(__dirname,'../public/images',image.file))){
                                    fs.unlinkSync(path.join(__dirname,'../public/images',image.file))
                                }
                            });

                                await queryInterface.bulkDelete('Images', {
                                    product_id : product.id
                                });
                        


                            let images = req.files.map(image => {
                                let item = {
                                    file : image.filename,
                                    product_id : product.id
                                }
                                return item
                            }) 
    
                            db.Image.bulkCreate(images,{validate : true})
                                .then( () => console.log('imagenes guardadas satisfactoriamente'))
                        }
                        return res.redirect('/admin')
                    })
            })
            .catch(error => console.log(error))

       
    }else{
        let categories = db.Category.findAll({
            order : [
                ['name']
            ]
        })
        let product = db.Product.findByPk(req.params.id, {
            include : ['category','images']
        })
        Promise.all(([categories, product]))
            .then(([categories, product]) => {
                return res.render('productEdit',{
                    categories,
                    product,
                    errores : errors.mapped()
                })
            })
            .catch(error => console.log(error))
    }

    
    },
    destroy : (req,res) => {
        db.Product.findByPk(req.params.id,{
            include : ['images']
        })
            .then(products => {
                products.images.forEach(image => {
                    if(fs.existsSync(path.join(__dirname,'../public/images',image.file))){
                        fs.unlinkSync(path.join(__dirname,'../public/images',image.file))
                    }
                });
                db.Product.destroy({
                    where : {
                        id : req.params.id
                    }
                })
                .then( () => {
                    return res.redirect('/admin')
                })
            })
            .catch(error => console.log(error))
    }
}