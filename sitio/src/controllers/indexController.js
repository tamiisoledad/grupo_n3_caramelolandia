const db= require('../database/models');
const nodemailer = require("nodemailer");

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
    contacto : (req,res) => res.render("contact"),
    send: async (req, res) =>{
        try {
            const {name, email, comentario} = req.body;
        const mensaje = contentHTML = `
        <h1> Informacion de usuario </h1>
        <ul>
         <li>Nombre: ${name}</li>
         <li>Email: ${email}</li>
        </ul>
        <p>Mensaje: ${comentario}</p>
        `;

        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: 'caramelolandia@outlook.com',
                pass: '123caramelo'
            }
        })
        const messageMail = {
            from: "Cliente",
            to: "caramelolandia@outlook.com",
            subject: "E-ccomercer",
            text: mensaje
        }
        await transporter.sendMail(messageMail, (error, info)=>{
            if (error) {
                console.log(error)
            }else{
                console.log("Email enviado")
                res.status(200).jsop(req.body)
                res.redirect("/")
            }
        })
        
        } catch (error) {
            console.log(error)
        }
        
    }
}