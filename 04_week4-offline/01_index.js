const express = require("express")
const app = express();

function isoldage(age){
    if(age>=14){
        return true;
    } else {
        return false;
    }
}
function isoldEnoughMiddleware(req,res,next){
    if(age>=14){
        next();
    } else {
        res.json({
            msg:"Sorry you are not of age yet", 
        })
    }
}
//You can mention middleware in two ways in your function
//01--By mentioning them in every function.
//02--By using app.use()
app.use(isoldEnoughMiddleware);
app.get("/ride1",function(req,res){
    if(isoldage(req.query.age)){
         res.json({
       msg:"You have sucessfully ride the ride 1"
    })} else{
        res.status(411).json({
            msg:"Sorry you are not of age yet"
        })
    }
})
app.listen(3000,()=>{
   console.log("Server is running on port http://localhost:3000");
   
})
