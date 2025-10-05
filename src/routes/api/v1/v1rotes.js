const express = require('express');
const userrouter = require('./userroutes');
const loginrouter = require('./loginroutes');
const v1router = express.Router();
v1router.use('/user',userrouter);
v1router.use('/login',loginrouter);

module.exports= v1router;
