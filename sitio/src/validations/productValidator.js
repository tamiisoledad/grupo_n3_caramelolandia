const { check } = require('express-validator');

module.exports = [

    check('nombre')
    .notEmpty().withMessage('El nombre es obligatorio').bail()
    .isLength({min:5}).withMessage('El nombre debe tener minimo 5 caracteres').bail(),

    check('marca')
    .notEmpty().withMessage('La marca es obligatoria ')
    .isLength({min:5}).withMessage('El nombre debe tener minimo 5 caracteres').bail(),

    check('variedad')
    .notEmpty().withMessage('Se requiere una variedad')
    .isLength({min:5}).withMessage('El nombre debe tener minimo 5 caracteres').bail(),



    check('informacion')
    .notEmpty().withMessage('Se requiere una descripción'),

    check('precio')
    .notEmpty().withMessage('Debes indicar el precio')
    .isDecimal().withMessage('Debe ser un número'),

    check('stock')
    .notEmpty().withMessage('Debes indicar el stock')
    .isDecimal().withMessage('Debe ser un número'),

    check('descuento')
    .notEmpty().withMessage('Debes indicar el descuento')
    .isDecimal().withMessage('Debe ser un número'),
]