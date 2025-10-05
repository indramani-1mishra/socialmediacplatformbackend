const { getuserbyemailorphone } = require("../repository/userrepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../configlayer/config");
const login =async(details)=>{
    try{
    const {emailorphone,password}=details;
    if(!emailorphone || !password){
        throw ("Email/Phone and Password are required");
    }
    const isuserexits = await getuserbyemailorphone(emailorphone);
    if(!isuserexits){
        throw ("User not found, please sign up");
    }
    const ispasswordcorrect = await bcrypt.compare(password,isuserexits.password);
    if(!ispasswordcorrect){
        throw ("Invalid credentials please try again");
    }
    const payload ={
        id:isuserexits._id,
        emailorphone:isuserexits.emailorphone,}

    const token = jwt.sign(payload,JWT_SECRET,{expiresIn:'1d'});
    return token;

    }catch(error){
        console.log(error);
        throw error;
    }
}
module.exports = login;