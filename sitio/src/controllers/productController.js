module.exports = {
    productDetail : (req,res) => res.render("productDetail",{title:"Detalle de producto"}),

    productCart : (req,res) => res.render("productCart", {title: "Carrito"}),

    productAdd : (req,res)=> res.render("productAdd", {title: "Agregar producto"}),

    productEdit : (req,res)=> res.render("productEdit", {title: "Editar producto"})
}