const express = require('express');
const userrouter = require('./userroutes');
const loginrouter = require('./loginroutes');
const logoutrouter = require('./logoutrouter');
const v1router = express.Router();
v1router.use('/user',userrouter);
v1router.use('/login',loginrouter);
v1router.use('/logout',logoutrouter);
module.exports= v1router;
