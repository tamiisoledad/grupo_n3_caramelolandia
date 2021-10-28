const {check, body} = require('express-validator');
const db = require("../database/models");

module.exports = [
    body("email").custom(value => {
      return  db.User.findOne({
            where: {
                email : value
            }
        }).then(usuario => {
            if(usuario){
                return Promise.reject("El email ya se encuentra registrado")
            }
        })
    }),
    check('name').notEmpty().withMessage('Obligatorio').bail(),
    check('email').isEmail().withMessage('Debes introducir un email valido').bail(),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener minimo 8 caracteres').bail(),
    check('terms').notEmpty().withMessage('Debes aceptar los terminos para continuar')
]