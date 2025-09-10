const express = require("express");
const app = express();

// //function that returna a boolean if the age of person more than 14.
// function checkage(age){
//   if(age>=14)
//   {
//     return true;
//   } else{
//     return false;
//   }
// }
function isOldEnoughMiddleware(req,res,next)//The middleware itseff does the age check.
//If the check passes ->next() is called ->the router handler runs.
//if fail send error response.
//This middleware check age and rsponse both
{
    const age = req.query.age;
    if(age>=14)
    {
        next(); //passes control to the next handler.
    } else{
        res.json({
            msg:"Sorry you are not of age",
        })
    }
}
//when whole app wants to use middleware function for every route then we use.
app.use(isOldEnoughMiddleware); //new way to introduce middleware in each one of your routes and order matters to.

app.get("/ride2",function(req,res){
        res.json({
        msg:"You have sucessfully riden the ride 2"
    });
    })
app.get("/ride1",function(req,res){
        res.json({
        msg:"You have sucessfully riden the ride 1"
    })
})
app.listen(5000,()=>{
    console.log("Server running on port http://localhost:5000")
});