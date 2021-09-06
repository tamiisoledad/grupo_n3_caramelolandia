const fs = require('fs');
const path = require('path');
const productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json'),'utf-8'));
const capitalizeOneLetter = require('../utils/capitalizeOneLetter');


module.exports = {
    products: (req,res) => res.render("products",{productos}),
    buscar: (req,res) => {
        let busqueda = productos.filter(producto => producto.categoria.toLowerCase().includes(req.query.categoria.toLowerCase()))
        return res.render("products", {productos: busqueda})
    },
    productDetail : (req,res) => {
        let producto = productos.find(producto => producto.id === +req.params.id)
        return res.render("productDetail",{
            producto,
            productos,
            capitalizeOneLetter
        })
    },

    productCart : (req,res) => res.render("productCart"),

    productAdd : (req,res) => {
       return res.render("productAdd",{
           productos,
       } )
    },
    store : (req,res) => {
        const {producto,categoria,informacion,marca,precio,variedad,stock,descuento,vegano,celiaco} = req.body
        let productoNuevo = {
            id: productos[productos.length - 1].id + 1,
            Producto : producto,
            categoria : categoria,
            Informacion : informacion,
            Marca : marca,
            Precio : +precio,
            Variedad : variedad,
            Stock : +stock,
            Descuento : +descuento,
            imagen : req.file ? req.file.filename : 'default-image.png',
            Vegano : vegano,
            Celiaco : celiaco ,
        }
        productos.push(productoNuevo)
        fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),JSON.stringify(productos,null,2),'utf-8');
        return res.redirect('/admin')
    },

    productEdit : (req,res)=>{
        let producto = productos.find(producto => producto.id === +req.params.id)
      return res.render("productEdit",{
          productos : producto
      })
    },
    update : (req,res) => {
        const {nombre,categoria,informacion,marca,precio,variedad,stock,descuento,vegano,celiaco} = req.body
        productos.forEach(item => {
                if(item.id === +req.params.id){
                    item.Producto = nombre;
                    item.categoria = categoria;
                    item.Informacion = informacion;
                    item.Marca = marca;
                    item.Variedad = variedad;
                    item.Stock = +stock;
                    item.Imagen = req.file;
                    item.Descuento = +descuento;
                    item.Vegano = vegano;
                    item.Celiaco = celiaco;
                    item.Precio = +precio;
                }
            });
    
            fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),JSON.stringify(productos,null,2),'utf-8');
            return res.redirect('/admin')
    },
    destroy : (req,res) => {
        let productosModificados = productos.filter(producto => producto.id !== +req.params.id);

        fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),JSON.stringify(productosModificados,null,2),'utf-8');
        return res.redirect('/admin')

    }
}