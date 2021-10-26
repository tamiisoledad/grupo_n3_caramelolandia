const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');


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
        }).then(usuario=> {
            req.session.userLogin={
                id: usuario.id,
                name: usuario.name,
                rol_id : usuario.rol_id,
                avatar_id: usuario.avatar_id
            }
            if(remember){
                res.cookie("remember", req.session.userLogin, {maxAge: 3000000*60})
            }
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
                rol_id: 2,
                avatar_id: req.file ? req.file.filename : "default-img.png"
            }).then(usuario => {
                req.session.userLogin = {
                    id: usuario.id,
                    name: user.name,
                    avatar_id: user.avatar_id,
                    rol_id: user.rol_id
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