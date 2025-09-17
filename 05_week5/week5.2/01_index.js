const express = require("express");
const app= express();

// let requestCount=0;
// function count(req,res,next){
//     requestCount=requestCount+1;
//     next();
// }
// app.use(count);
// app.get("/add",function(req,res){
//     const a=parseInt(req.query.a);
//     const b=parseInt(req.query.b);

//     res.json({
//         ans:a+b
//     })
// });
// app.get("/mul",function(req,res){
//     const a=parseInt(req.query.a)
//     const b=parseInt(req.query.b)

//     res.json({
//         ans:a*b
//     })
// });
// app.listen(3000,()=>{
//     console.log("server is runnin on port http://localhost:3000");
// })

//---------------------------------------------------------------------------------------------------//
//Let see how middleware change the request.and endup with req-res cycle.

let requestCount=0;
function requestIncreaser(req,res,next){
    requestCount=requestCount+1;
    if(req.header.cookie ==="google"){
        next();
    }else{
        console.log("Total no of reques"= +requestCount);
        res.json({
            msg:"I ended the request earlier."
        })
    }
    
}
function realsumhandler(req,res){
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    console.log(req.name)
    res.json({
        ans:a+b
    })
}
app.get("/",requestIncreaser,realsumhandler);
app.listen(3000);