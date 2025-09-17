// Create a middleware function that logs each incoming request HTTP method,URL,and timestamp to the console.

const express=require('express')
const app=express();

function requestMiddleware(req,res){
     let method=req.method;
     console.log(`Incoming request with http method:${method}`);
     let url=req.protocol+'//'+req.get('host')+req.originalUrl;
     console.log(url);
     const date = Date.now();
     console.log(`Time stamp is ${date}`);
}
app.use(requestMiddleware)
app.get("/home",function(req,res){
    res.json({
       msg:"Hello world"
    })
})
app.listen(3000,()=>{
    console.log("Server is running on port http://localhost:3000");
})
