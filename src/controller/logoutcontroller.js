const logoutcontroller = (req,res)=>{
    try{
         res.cookie('token','',{
            httponly:true,
            secure: false,
            sameSite:'lax',
            expires: new Date(0)
         });
        return res.status(200).json({message:"Logout successful"});
    }catch(error){
        console.log("Error in logout controller",error);
        res.status(500).json({message:"Internal server error",error: error.toString()});
    }
}
module.exports= logoutcontroller;
