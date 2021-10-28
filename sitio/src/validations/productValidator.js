const { check } = require('express-validator');

module.exports = [

    check('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({min:5}).withMessage('El nombre debe tener minimo 5 caracteres').bail(),

    check('informacion')
    .notEmpty().withMessage('Se requiere una descripción'),

    check('precio')
    .notEmpty().withMessage('Debes indicar el precio')
    .isDecimal().withMessage('Debe ser un número')
]