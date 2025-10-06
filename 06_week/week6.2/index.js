// const express = require('express')
// const app=express()
// app.use(express.json())
// const jwt=require('jsonwebtoken');
// const JWT_SECRET="HARKIRAT132"

// const users=[];
// app.post("/signup",function(req,res){
//     const username = req.body.username
//     const password = req.body.password
    
//     users.push({
//         username:username,
//         password:password
//     })
//     res.json({
//         message:"You are good to go"
//     })
// })
// app.post("/signin",function(req,res){
//     const username = req.body.username
//     const password = req.body.password

//     let foundUser=null;
//     for(let i=0;i<users.length;i++){
//         if(users[i].username===username && users[i].password===password){
//             foundUser=users[i];
//         }
//     }
//     if(!foundUser){
//         res.json({
//             message:"Credentials are incorrect"
//         })
//     } else{
//         const token=jwt.sign({
//             username
//         },JWT_SECRET)

//          res.json({
//         token:token
//     })
//     }
   
// })

 //Authentication logic.
//It also passes the data to next function.
//When middleware gets share it can also share their req,res data to.

// function auth (req,res,next){
//     const token = req.headers.token;
//     const decodedata = jwt.verify(token,JWT_SECRET);

//     if(decodedata.username){
//         next()
//     } else{
//         res.json({
//             message:"You are not logged in"
//         })
//     }
// }
//This code finding the user and return back their pswd
//Here we are also passing the data from middleware to /me whihc is username.
// app.get("/me",function(req,res){
   
//         let foundUser=null;
        
//         for(let i=0;i<users.length;i++){
//             if(users[i].username===req.username){//Here we are finding who has sent a request.
                //req.username comes from the auth function.
//                 foundUser=users[i]
//             }
//         }
//         res.json({
//             username:foundUser.username,
//             password:foundUser.password    
//         })
//     }
// )

const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "kirat123123";

const app = express();
app.use(express.json());

const users = [];

function logger(req, res, next) {
    console.log(req.method + " request came");
    next();
}

// localhost:3000
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", logger, function(req, res) {
    const username = req.body.username
    const password = req.body.password
    users.push({
        username: username,
        password: password
    })

    // we should check if a user with this username already exists

    res.json({
        message: "You are signed in"
    })
})

app.post("/signin", logger, function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i]
        }
    }

    if (!foundUser) {
        res.json({
            message: "Credentials incorrect"
        })
        return 
    } else {
        const token = jwt.sign({
            username:foundUser.username
        }, JWT_SECRET);
        res.header("jwt", token);

        res.header("random", "harkirat");

        res.json({
            token: token
        })
    }
})

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username) {
        // req = {status, headers...., username, password, userFirstName, random; ":123123"}
        req.username = decodedData.username
        next()
    } else {
        res.json({
            message: "You are not logged in"
        })
    }
}

app.get("/me", logger, auth, function(req, res) {
    // req = {status, headers...., username, password, userFirstName, random; ":123123"}
    const currentUser = req.username;
    // const token = req.headers.token;
    // const decodedData = jwt.verify(token, JWT_SECRET);
    // const currentUser = decodedData.username
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === currentUser) {
            foundUser = users[i]
        }
    }
    res.json({
        username: foundUser.username,
        password: foundUser.password
    })
})

app.listen(3000);