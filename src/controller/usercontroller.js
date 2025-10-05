const { createuserinservicelayer, getalluserinservicelayer, updateuserinservicelayer, deleteuserinservicelayer, getuserbyidservicelayer } = require("../service/userservice");

const createUserincontroller =async(req,res)=>{
    try{
      const user= req.body;
      const data={
         emailorphone:user.emailorphone,
          password:user.password,
           firstName:user.firstName,
           lastName:user.lastName,
           dateOfBirth:user.dateOfBirth,
           gender:user.gender,
           bio:user.bio,
           interests:user.interests,
           profilePicture:req?.file?.path
        }

    const response= await createuserinservicelayer(data);
     res.status(201).json({
        message:"User created successfully",
        data:response,
        status:"201",
        error:{},
    });   
        

    }catch(error){
        console.log("Error in creating user in controller",error);
        res.status(500).json({
            message:"Error in creating user",
            data:{},
            status:"500",
            error:error,
        });

    }
}
const getalluserincontroller= async(req,res)=>{
    try{
        const response= await getalluserinservicelayer();
        res.status(200).json({
            message:"All users fetched successfully",
            data:response,
            status:"200",
            error:{},
        });
      }catch(error){
          
          res.status(500).json({
            message:"Error in getting all users",
            data:{},
            status:"500",
            error:error,
        });
    }
}
const updateuserincontroller= async(req,res)=>{
    try{
        const userid= req.params.id;
        const user= req.body;
         const data={
         emailorphone:user.emailorphone,
          password:user.password,
           firstName:user.firstName,
           lastName:user.lastName,
           dateOfBirth:user.dateOfBirth,
           gender:user.gender,
           bio:user.bio,
           interests:user.interests,
           profilePicture:req?.file?.path
        }
        const updateddata=data;
        const response= await updateuserinservicelayer(userid,updateddata);
        res.status(200).json({
            message:"User updated successfully",
            data:response,
            status:"200",
            error:{},
        });
    }catch(error){
        
        res.status(500).json({
            message:"Error in updating user",
            data:{},
            status:"500",
            error:error,
        });
    }
}
const deleteuserincontroller= async(req,res)=>{
    try{
        const userid= req.params.id;
        const response= await deleteuserinservicelayer(userid);
        res.status(200).json({
            message:"User deleted successfully",
            data:response,
            status:"200",
            error:{},
        });
    }catch(error){
        
        res.status(500).json({
            message:"Error in deleting user",
            data:{},
            status:"500",
            error:error,
        });
    }
}
const getuserbyidcontroller= async(req,res)=>{
    try{
        const userid= req.params.id;
        const response= await getuserbyidservicelayer(userid);
        res.status(200).json({
            message:"User fetched successfully",
            data:response,
            status:"200",
            error:{},
        });
    }catch(error){
        res.status(500).json({
            message:"Error in fetching user",
            data:{},
            status:"500",
            error:error,
        });
    }
}
module.exports={
    createUserincontroller,
    getalluserincontroller,
    updateuserincontroller,
    deleteuserincontroller,
    getuserbyidcontroller
}