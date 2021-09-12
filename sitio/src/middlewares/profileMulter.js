const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'./public/images/profiles')
    },filename:(req,file,cb) => {
        cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`)}
    });

const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){
        req.fileValidationError = "Solo se permite imágenes";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}


const uploadFile = multer({
    storage,
    fileFilter
});

module.exports = uploadFile