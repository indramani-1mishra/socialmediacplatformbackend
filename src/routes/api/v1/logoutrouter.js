const express = require('express');
const logoutcontroller = require('../../../controller/logoutcontroller');
const  logoutrouter = express.Router();
logoutrouter.post('/',logoutcontroller);
module.exports= logoutrouter;