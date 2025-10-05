const  cloudinary  = require("../configlayer/cloudneryconfig");
const { getuserbyemailorphone, createuser, getalluser, updateuser, deleteuser, finduserbyid } = require("../repository/userrepository");
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

const getalluserinservicelayer= async()=>{
    try{
        const response= await getalluser();
        return response;
      }
        catch(error){
            console.log("Error in getting all user in service layer",error);
            throw error;
        }}

const updateuserinservicelayer= async(userid,updateddata)=>{
    try{

       const ifuserexits= await finduserbyid(userid);
       if(!ifuserexits){
        throw ("User not found");
       }
       
      const {profilePicture}= updateddata;
      if(profilePicture){
       const uploadimage=  await cloudinary.uploader.upload(profilePicture);
       var imageurl= uploadimage.secure_url;
        
        if(fs.existsSync(profilePicture)){
            fs.unlinkSync(profilePicture);
        }
      }
      updateddata.profilePicture= imageurl;
      const response= await updateuser(userid,updateddata);
      return response;
    }catch(error){
        console.log("Error in updating user in service layer",error);
        throw error;
    }
}
const deleteuserinservicelayer= async(userid)=>{
    try{
       const ifuserexits= await finduserbyid(userid);
       if(!ifuserexits){
        throw ("User not found");
       }
        const response= await deleteuser(userid);
        return response;
    }catch(error){
        console.log("Error in deleting user in service layer",error);
        throw error;
    }
  }

  const  getuserbyidservicelayer= async(userid)=>{
    try{
        const response= await finduserbyid(userid);
        return response;
    }catch(error){
        console.log("Error in finding user by id in service layer",error);
        throw error;
    }
  }

module.exports={
    createuserinservicelayer,
    getalluserinservicelayer,
    updateuserinservicelayer,
    deleteuserinservicelayer,
    getuserbyidservicelayer
}