const { check } = require('express-validator');

module.exports = [

    check('nombre')
    .notEmpty().withMessage('El nombre es obligatorio'),

    check('informacion')
    .notEmpty().withMessage('Se requiere una descripción'),

    check('precio')
    .notEmpty().withMessage('Debes indicar el precio')
    .isDecimal().withMessage('Debe ser un número')
]