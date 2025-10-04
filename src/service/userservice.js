const  cloudinary  = require("../configlayer/cloudneryconfig");
const { getuserbyemailorphone, createuser } = require("../repository/userrepository");
const fs = require('fs');
const createuserinservicelayer = async(user)=>{
    try{
      const {emailorphone}= user;
        //check if user already exists
        const existinguser= await getuserbyemailorphone(emailorphone);
        if(existinguser){
            throw ('User already exists');
        }
        const {profilePicture}= user;
        if(profilePicture){
         const uploadimage=  await cloudinary.uploader.upload(profilePicture);
         var imageurl= uploadimage.secure_url;
     
         }
         if(fs.existsSync(profilePicture)){
            fs.unlinkSync(profilePicture);
         }
        user.profilePicture= imageurl;
        const response= await createuser(user);
        return response;
     }catch(error){
       console.log("Error in creating user in service layer",error);
         throw error;
    }
}
module.exports={
    createuserinservicelayer
}