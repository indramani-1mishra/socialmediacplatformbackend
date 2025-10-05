const login = require("../service/loginservice");

const logincontroller= async(req,res)=>{
    try{
     const {emailorphone,password}= req.body;
     
    
     const token = await login({
        emailorphone:emailorphone,
        password:password
     });
    
   
     res.cookie('token',token,{
        httponly:true,
        secure: false,
        sameSite:'lax',
        maxAge:24*60*60*1000
     });

     return res.status(200).json({message:"Login successful"});
     

    }catch(error){
        console.log("Error in login controller",error);
        res.status(500).json({message:"Internal server error",error: error.toString()});
    }
}
module.exports= logincontroller;
