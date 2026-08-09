const express = require('express')
const userroutes=require('./routes/userroutes')
const cookieparser = require('cookie-parser');
const app = express()
app.use(cookieparser())
app.use(express.json())
app.use('/userroutes',userroutes) 
module.exports = app;  