require('dotenv').config();
const PORT= process.env.PORT || 3000;
const MONGODB_URL= process.env.MONGODB_URL;
const CLOUDINARY_CLOUD_NAME= process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY= process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET= process.env.CLOUDINARY_API_SECRET;
const JWT_SECRET= process.env.JWT_SECRET;

module.exports={
    PORT,
    MONGODB_URL
    ,CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET
    ,JWT_SECRET
}