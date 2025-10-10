const express = require('express');
const {UserModel,TodoModel}=require("./db")
const jwt = require('jsonwebtoken')
const JWT_SECRET = "ASSADAD"
const app = express()
app.use(express.json())
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.connect("mongodb+srv://username & password @cluster1.b03rg69.mongodb.net/to-doapp");


app.post("/signup", async function(req,res){
    //Here we are sending the request from frontend
    //email,password and name.
    const email = req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    const hashedPassword = await bcrypt.hash(password,5);

    //It is an asynchronous function call and here we can apply async and await.
    //We need to await here bcz without await if data insertion is failed then it return the msg..which makes an error.
    //So until user data is inserted in the database.User collections we need to await on it.
    await UserModel.create({
        email:email,
        password:hashedPassword,
        name:name
    })

    res.json({
        message:"You are logged in"
    })

});
app.post("/signin", async function(req,res){
     const email = req.body.email;
     const password = req.body.password;
    //We are sending the data from frontend request.
    //email and password.
    //Here we are await until the user signed in.
     const user = await UserModel.findOne({
        email:email,
        password:password     
     })

    if(user){
        const token =jwt.sign({
            id:user._id  //Here we are sending the user id in payload to uniquely identify the user.
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
app.post("/todo",auth,function(req,res){
       const userId = req.userId;
       const title = req.body.title;
       TodoModel.create({
        title,
        userId
       })
       res.json({
        userId:userId
       })
})
app.post("/todos",auth, async function(req,res){
       const userId = req.userId;
       const todos = await TodoModel.find({//here we are finding the todo for specific user.
        userId
       })
       res.json({
        todos
       })
})
//User Authentication.
function auth(req,res,next){
    const token = req.headers.token;   
    const decodedData = jwt.verify(token,JWT_SECRET);
    if(decodedData){
        req.userId = decodedData.id;//Using this id we can hit the database and get the details of user.
        next();
    } else{
        res.status(403).json({
            message:"Credentials are incorrect"
        })
    }
}
app.listen(3000,()=>{
    console.log("Server is running on port http://localhost:3000");
})