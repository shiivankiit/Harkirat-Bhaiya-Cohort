// # Create an HTTP Server
// It should have 4 routes
// 1. http://localhost:3000/multiply?a=1&b=2
// 2. [http://localhost:3000/add?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
// 3. [http://localhost:3000/divide?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
// 4. [http://localhost:3000/subtract?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
// Inputs given at the end after `?` are known as query parameters (usually used in GET requests)
// The way to get them in an HTTP route is by extracting them from the `req` argument (req.query.a , req.query.b)

const express = require('express');
const app = express();

app.get("/sum",function(req,res){
     const a=parseInt(req.query.a);
     const b=parseInt(req.query.b);

     res.json({
        answer:a+b
     })
})
app.get("/mul",function(req,res){
     const a=req.query.a;
     const b=req.query.b;

     res.json({
        answer:a*b  
     })
})
app.get("/sub",function(req,res){
     const a=req.query.a;
     const b=req.query.b;

     res.json({
        answer:a-b  
     })
})
app.get("/div",function(req,res){
     const a=req.query.a;
     const b=req.query.b;

     res.json({
        answer:a/b
     })
})
app.listen(3000,()=>{
    console.log(" http://localhost:3000")
});
//to take input using /10/20 we need to add this in route "add/:a/:b" using req.params.a  req.params.b