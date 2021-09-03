const fs = require('fs');
const path = require('path');
const productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json'),'utf-8'));
const capitalizeOneLetter = require('../utils/capitalizeOneLetter');


module.exports = {
    productDetail : (req,res) => {
        let producto = productos.find(producto => producto.id === +req.params.id)
        return res.render("productDetail",{
            producto,
            capitalizeOneLetter
        })
    },

    productCart : (req,res) => res.render("productCart"),

    productAdd : (req,res) => {
       return res.render("productAdd",{
           productos,
       } )
    },

    productEdit : (req,res)=>{
        let producto = productos.find(producto => producto.id === +req.params.id)
      return res.render("productEdit",{
          productos,
          categorias,
          producto,
      })
    },

    store : (req,res) => {
            let productoNuevo = {
                id: productos[productos.length - 1].id + 1,
                producto,
                informacion,
                marca,
                variedad,
                precio : +precio,
                stock,
                descuento,
                vegano,
                celiaco,
                descripcion,
                imagen : req.file ? req.file.filename : 'default-image.png'
            }
     
            productos.push(productoNuevo)
            fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),JSON.stringify(productos,null,2),'utf-8');
            return res.redirect('/admin')
    },
    update : (req,res) => {    
            const {nombre,informacion,marca,variedad,precio,stock,descuento,vegano,celiaco,descripcion,} = req.body;

            productos.forEach(producto => {
                if(producto.id === +req.params.id){
                    producto.nombre = nombre;
                    producto.informacion = informacion;
                    producto.marca = marca;
                    producto.variedad = variedad;
                    producto.stock = stock;
                    producto.descuento = descuento;
                    producto.vegano = vegano;
                    producto.celiaco = celiaco;
                    producto.descripcion = descripcion;
                    producto.precio = +precio;
                }
            });
    
            fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),JSON.stringify(productos,null,2),'utf-8');
            return res.redirect('/')
    },
    destroy : (req,res) => {
        let productosModificados = productos.filter(producto => producto.id !== +req.params.id);

        fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),JSON.stringify(productosModificados,null,2),'utf-8');
        return res.redirect('/admin')

    }
}