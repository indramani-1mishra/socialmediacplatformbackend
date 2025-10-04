const express = require('express');
const apirouter = express.Router();
const v1router = require('./v1/v1rotes');
apirouter.use('/v1',v1router);
module.exports= apirouter;
