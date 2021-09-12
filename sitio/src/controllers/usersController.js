const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
let productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json'),'utf-8'));
let users = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','users.json'),'utf-8'));



module.exports = {
    login : (req,res) => res.render("login"),

    register : (req,res) => res.render("register",{
        productos
    }),
    
    processRegister : (req,res) => {
        return res.send(req.body)
        const {name,email,password} = req.body;

        let user = {
            id : users[users.length-1] ? users[users.length-1].id + 1 : 1,
            name : name.trim(),
            email : email.trim(),
            password : bcryptjs.hashSync(password, 10),
            image : 'default-image.png',
            rol : "user"
        }

        users.push(user);
        fs.writeFileSync(path.join(__dirname,'..','data','users.json'),JSON.stringify(users,null,2),'utf-8');
        return res.redirect('/users/login')
    },
    processLogin : (req,res) => {
        let errors = validationResult(req)
        if(errors.isEmpty()){
            const {email} = req.body
        let usuario =usuarios.find(usuario=>usuario.email === email)
        req.session.userLogin={
            id: usuario.id,
            nombre: usuario.nombre,
            rol : usuario.rol
        }
        return res.redirect('/')
        }else{
            return res.render('login',{errores:errors.mapped()})
        }
       
    },
    logout : (req,res)=> {
        req.session.destroy()
        return res.redirect('/')
    }
}