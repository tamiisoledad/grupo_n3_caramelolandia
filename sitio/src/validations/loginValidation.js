const {body} = require("express-validator");
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const usuarios = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','users.json'),'utf-8'));


module.exports = [
    body('email')
    .custom((value,{req})=>{
        let usuario= usuarios.find(usuario=>usuario.email===value && bcrypt.compareSync(req.body.password,usuario.password))
        if(usuario){
            return true
        }else{
            return false
        }
    }).withMessage('credenciales invalidas')
]