//You have given an express server which has some endpoints .
//Your task is to create a global middleware(app.use)which will
//maintain a count of the number of requests made to the server in the global requestCount variable.

const express = require('express')
const app = express();
let requestCount = 0;

app.use(function(req,res,next){
    requestCount = requestCount+1;
    next();
})
app.get('/users',function(req,res){
   res.status(200).json({msg:'create dummy users'});
});

app.post('/users',function(req,res){
    res.status(200).json({msg:'created dummy user'});
});

app.get('/requestCount',function(req,res){
    res.status(200).json({requestCount})
})
app.listen(4000,()=>{
    console.log("Server is running on the port http://localhost:4000")
})
module.exports = app;