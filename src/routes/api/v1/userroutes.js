const express = require('express');
const { createUserincontroller } = require('../../../controller/usercontroller');
const upload = require('../../../middlerware/multer');
const userrouter = express.Router();
userrouter.post('/',upload.single('profilepicture'),createUserincontroller);
module.exports= userrouter;
