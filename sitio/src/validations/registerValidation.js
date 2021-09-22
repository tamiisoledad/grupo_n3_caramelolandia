const {check} = require('express-validator');

module.exports = [
    check('name').notEmpty().withMessage('Obligatorio').bail(),
    check('email').isEmail().withMessage('Debes introducir un email valido').bail(),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener minimo 8 caracteres').bail(),
    check('terms').notEmpty().withMessage('Debes aceptar los terminos para continuar')
]