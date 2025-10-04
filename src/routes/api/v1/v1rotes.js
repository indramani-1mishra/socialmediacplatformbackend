const express = require('express');
const userrouter = require('./userroutes');
const v1router = express.Router();
v1router.use('/user',userrouter);
module.exports= v1router;
