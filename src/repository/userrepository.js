const User = require("../model/userschema");

const createuser = async(userdata)=>{
try{
    const response =await User.create(userdata);
    return response;
}catch(error){
    console.log("Error in creating user",error);
    throw error;
}
}
const getuserbyemailorphone= async(emailorphone)=>{
    try{
        const response= await User.findOne({emailorphone:emailorphone});
        return response;
    }catch(error){
        console.log("Error in getting user by email or phone",error);
        throw error;
    }
}
const getalluser= async()=>{
    try{
        const response= await User.find();
        return response;
    }catch(error){
        console.log("Error in getting all user",error);
        throw error;
    }
}
const updateuser =async(userid,updateddata)=>{
    try{
        const response = await findByIdAndUpdate(userid,updateddata,{new:true});
        return response;
    }catch(error){
        console.log("Error in updating user",error);
        throw error;
    }
}
const deleteuser= async(userid)=>{
    try{
     const response= await User.findByIdAndDelete(userid);
     return response;
    }catch(error){
        console.log("Error in deleting user",error);
        throw error;
    }
}
const finduserbyid= async(userid)=>{
    try{
        const response= await User.findById(userid);
        return response;
    }catch(error){
        console.log("Error in finding user by id",error);
        throw error;
    }
}
module.exports={
    createuser,
    getuserbyemailorphone,  
    getalluser,
    updateuser,
    deleteuser,
    finduserbyid
  
};