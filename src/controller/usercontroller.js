const { createuserinservicelayer } = require("../service/userservice");

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
           profilePicture:req.file.path
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
module.exports={
    createUserincontroller
}