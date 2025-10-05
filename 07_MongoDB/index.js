const express = require('express');
const {UserModel,TodoModel}=require("./db")
const jwt = require('jsonwebtoken')
const JWT_SECRET = "ASSADAD"
const app = express()
app.use(express.json())
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://singhsam771000_db_user:0ag4EDWs2sNtyqCP@cluster1.b03rg69.mongodb.net/to-do kirat");

app.post("/signup", async function(req,res){
    const email = req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    // It is an asynchronous function and here we can apply asynca nd await.
    await UserModel.insert({
        email:email,
        password:password,
        name:name
    })

    res.json({
        message:"You are logged in"
    })

});
app.post("/signin", async function(req,res){
     const email = req.body.email;
     const password = req.body.password;

     const user = await UserModel.findOne({
        email:email,
        password:password     
     })

    if(user){
        const token =jwt.sign({
            id:user._id
        },JWT_SECRET);
        res.json({
              token: token
        })
    } else {
        res.status(403).json({
            message:"Incorrect credentials"
        })
        
    }
})
app.post("/todo",function(req,res){

})
app.post("/todos",function(req,res){

})
app.listen(3000);