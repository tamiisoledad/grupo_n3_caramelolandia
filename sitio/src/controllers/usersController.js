const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
let productos = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','productos.json'),'utf-8'));
let users = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','users.json'),'utf-8'));



module.exports = {
    login : (req,res) => res.render("login"),
    processLogin : (req,res) => {
        let errors = validationResult(req)
        if(errors.isEmpty()){
            const {email, remember} = req.body
        let usuario = users.find(usuario=>usuario.email === email)
        req.session.userLogin={
            id: usuario.id,
            nombre: usuario.nombre,
            rol : usuario.rol
        }
        if(remember){
            res.cookie("remember", req.session.userLogin, {maxAge: 3000000*60})
        }
        return res.redirect('/')
        }else{
            return res.render('login',{errores:errors.mapped()})
        }
    },

    register : (req,res) => res.render("register",{
        productos
    }),
    
    processRegister : (req,res) => {
        const {name,email,password,terms,sales} = req.body;

        let user = {
            id : users[users.length-1] ? users[users.length-1].id + 1 : 1,
            name : name,
            email : email,
            password : bcryptjs.hashSync(password, 10),
            image : req.file ? req.file.filename : 'default-image.png',
            rol : "user",
            terms : terms,
            sales : sales
        }

        users.push(user);
        fs.writeFileSync(path.join(__dirname,'..','data','users.json'),JSON.stringify(users,null,2),'utf-8');
        return res.redirect('/users/login')
    },
    logout : (req,res)=> {
        req.session.destroy();
        res.cookie("remember", null, {maxAge: -1});
        return res.redirect('/')
    }
}