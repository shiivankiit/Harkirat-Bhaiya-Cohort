const express = require("express")
const app=express();

//Now we are sending the post request.
//In express if you want to send json data.
//Then you need to first parse the json data. 
//And for it you have to use express libraray 
app.use(express.json())

app.post("/",function(req,res){
    //Instead of sending data into query form now we are sending data into the body on same url.
    //when you send data in put and post request then it will send using body.
    console.log(req.body);
    const a=req.query.a
    const b=req.query.b

    res.json({
        ans:a+b
    })
})
app.listen(3000,()=>{
    console.log("Server is running on port http://localhost:3000")
})
