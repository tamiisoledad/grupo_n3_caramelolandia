module.exports = {
    index : (req,res) => res.render("index", {title: "Caramelolandia"}),
    contacto : (req,res) => res.render("contact",{title:"Contacto"}) 
}