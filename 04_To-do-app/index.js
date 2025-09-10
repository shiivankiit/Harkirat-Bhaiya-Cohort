//Express is an external library so we need to install it.
const express = require("express");
const app = express(); //app is a fresh variable on it.

let todos = [];
//store the data in a file to learn about database 
//Now we are defining our rout handler.
app.get("/",function(req,res){ //express geaves you acess to response and request object.
    res.send('Hello world');
})
app.post("/",function(req,res){
    res.send("Hello world from the post end point");
})
app.listen(3000); //on which port do you want to listen.