const express = require('express');
const {UserModel,TodoModel}=require("./db")
const jwt = require('jsonwebtoken')
const JWT_SECRET = "ASSADAD"
const app = express()
app.use(express.json())
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {z} = require("zod");
mongoose.connect("mongodb+srv://username and password mongodb.net/to-doapp");


app.post("/signup", async function(req,res){
    //Here we are sending the request from frontend
    //email,password and name.
    //Input validation

    const requireBody = z.object({
        email:z.string().min(3).max(100).email(),
        name:z.string().min(3).max(100),
        password:z.string().min(3).max(30)
    })
    //const parseData = requireBody.safeParse(req.body);
    const parseDataWithSucess = requireBody.safeParse(req.body);
    if(!parseDataWithSucess.sucess){
        res.json({
            message:"Incorrect format",
            error : parseDataWithSucess.error
        })
    }


    const email = req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    if(typeof email !=="string" || email.length<5 || !email.includes("@")){
        res.json({
            message:"email are incorrect"
        })
    }

    //Promisify the fs function call.
    //try and catch block helps us catch an error.
    let errorThrown = false;
    try{
    const hashedPassword = await bcrypt.hash(password,5);

    //It is an asynchronous function call and here we can apply async and await.
    //We need to await here bcz without await if data insertion is failed then it return the msg..which makes an error.
    //So until user data is inserted in the database.User collections we need to await on it.
    await UserModel.create({
        email:email,
        password:hashedPassword,
        name:name
    })} catch(e){
        res.json(({
            message:"User already exist"}))
    }
    errorThrown=true;
    if(!errorThrown){
        res.json({
        message:"You are signed up"
    })
    }

});
app.post("/signin", async function(req,res){
     const email = req.body.email;
     const password = req.body.password;
    //We are sending the data from frontend request.
    //email and password.
    //Here we are await until the user signed in.
     const user = await UserModel.findOne({
        email:email  
     })
     if(!response){
        res.status(403).json(({
            message:"User not found"
        }))
    }

    const passwordMatch = await bcrypt.compare(password,response.password);

    if(passwordMatch){
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

//Input validation.
/*It means you are sending a right value in the input box.  */