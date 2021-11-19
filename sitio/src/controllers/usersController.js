const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db= require('../database/models');


module.exports = {

    login : (req,res) => res.render("login"),

    processLogin : (req,res) => {
        let errors = validationResult(req)
        if(errors.isEmpty()){
            const {email, remember} = req.body
        db.User.findOne({
            where: {
                email
            }
        },{
            include : [
                {association : 'users'}]
                }
                ).then(usuario=> {
            req.session.userLogin={
                id: usuario.id,
                name: usuario.name,
                rolId : usuario.rolId,
                avatar: usuario.avatar
            }
            if(remember){
                res.cookie("remember", req.session.userLogin, {maxAge: 3000000*60})
            }
            /* carrito */
            
            req.session.cart = ["hola"];
            console.log(req.session.cart[0])

            return res.redirect('/')
        }).catch(error => console.log(error))
        }else{
            return res.render('login',{errores:errors.mapped()})
        }
    },

    register : (req,res) => res.render("register"),
    
    processRegister : (req,res) => {

        let errors = validationResult(req)

        if(errors.isEmpty()){
            const {name,email,password} = req.body;
            db.User.create({
                name: name.trim(),
                email,
                password: bcryptjs.hashSync(password, 10),
                rolId: 2,
                avatar: req.file ? req.file.filename : "default-img.png"
            }).then(usuario => {
                req.session.userLogin = {
                    id: usuario.id,
                    name: usuario.name,
                    avatar: usuario.avatar,
                    rolId: usuario.rolId
                }
                return res.redirect("/")
            }).catch( error=> console.log(error))
        }else{
            return res.render("register", {errors: errors.mapped()})
        }
    },
    logout : (req,res)=> {
        req.session.destroy();
        res.cookie("remember", null, {maxAge: -1});
        return res.redirect('/')
    }
    
}