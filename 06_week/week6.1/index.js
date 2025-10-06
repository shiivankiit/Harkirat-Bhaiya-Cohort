const express=require('express')
const jwt = require("jsonwebtoken")
const JWT_SECRET ="ANJSNDU"
const app=express();
//Express return you a function..and you call that function to create your http app.
app.use(express.json());//converts data into json format in a post requets.

const users=[];
//[ In users array data stores some how like it.
//   {username:"harkirat",password:"asjnju"}
//
//]
//Here we are genrating a token.
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
         'q', 'r', 's', 't', 'u', 'v', 
        'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
        'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post("/signup",function(req,res,){
       const username=req.body.username;
       const password=req.body.password;

       users.push({
        username:username,
        password:password
       })

       res.json({
        message:"You are siggned up."
       })
})
app.post("/signin",function(req,res){
        const username=req.body.username;
        const password=req.body.password;

        //Here finduser is the users  object
        const finduser=users.find(function(u){ //u is the parameter which iterate over the users array
            if(u.username==username && u.password==password){
                return true;
            }else{
                return false
            }
        })

        if(finduser){ //if you find the user then provide them a token.
            //const token=generateToken();//this function return a token and we store them inside a token varibale.
            //another way to genrate a token.
            const token=jwt.sign({
                username:username
            },JWT_SECRET)
            // finduser.token=token;//adding a new property token to the object.
            res.json({
                token:token
            })
        }
})
app.get("/me",function(req,res){
    const token = req.headers.token;
    const decodeInformation=jwt.verify(token,JWT_SECRET);//checks if the toekn is valid using JWT_SECRET.
    const username=decodeInformation.username;  //Here we pull out the username from JWT when it verifies.
    let founduser=null;

    for(let i=0;i<users.length;i++){
        if(users[i].username == username){
            founduser=users[i];
        }
    }
    if(founduser){
        res.json({
            username:founduser.username,
            password:founduser.password
        })
    } else{
        res.json({
            message:"token invalid"
        })
    }
})
app.listen(3000);
