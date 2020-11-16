let multer = require('multer');
let path = require('path');
let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads');
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

const uploads = multer({storage:storage}).single('p_img');
module.exports = uploads;