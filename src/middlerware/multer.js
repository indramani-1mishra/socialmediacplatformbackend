const multer=require('multer');
const path=require('path');
const fs= require('fs');
//create uploads folder if not exists
const uploadDir= path.join(__dirname,'../../uploads');
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

const diskStorage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,uploadDir);  
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix= Date.now() + '-' + Math.round(Math.random()*1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});
const upload= multer({storage:diskStorage});
module.exports= upload;