//You have to create a middleware for logging the no of req
//on a server
const express = require('express')
const app = express();
let requestCount=0;
app.use(function(req,res,next){
    requestCount=requestCount+1;
    next();
})
app.get("/",function(req,res){
   res.status(200).json({name:'john'});
});
app.post("/users",function(req,res){
    res.status(200).json({msg:'created dummy user'});
});
app.get('/requestcount',function(req,res){
    res.status(200).json({requestCount});
})
app.listen(3000,()=>{
    console.log("http://localhost:3000/")
})
