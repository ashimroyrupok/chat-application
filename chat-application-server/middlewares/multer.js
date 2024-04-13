const multer =require('multer');

const multerUpload= multer({limits:{
    fileSize:1024*20
}})

module.exports=multerUpload