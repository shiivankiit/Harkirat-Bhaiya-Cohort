//Creating our own http server.
const express = require('express');
const app=express();
//express says geave me all your route
// Whenever a request come on /endpoint then you get acess
// to the req & res object endpoint.

//req(request object):Contain information about the incoming request.
//res(response object):Used to send a response back to the client.
app.get("/",function(req,res){
    //req geave you acess to all the things realted to the request.
    //res is responding back
    res.send("Hello world");
})//it has only one route handler.
//On this route we only send GET method.
//On this route we send post request.
app.post("/",function(req,res){
    res.send("hay there")
})
app.listen(3000);
//when you visit google.com it is hitting a process on a server
//whihc is infinitely running on the server.





// //creating an http server
// //express
// const express = require("express")
// const app = express();

// function sum(n) {
//     let ans = 0;
//     for (let i = 1; i <= n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }
// //req,res=>request and response.
// app.get("/", function(req, res) {
//     const n = Number(req.query.n); // Convert n to a number
//     if (isNaN(n)) {
//         res.send("Please provide a valid number for n.");
//         return;
//     }
//     const ans = sum(n);
//     res.send("hi there your ans is " + ans);
// });

// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// }); 
