//You have been given an express server which has a few endpoints.
//Your task is to create a global middleware (app.use) which will
//rate limit the request from a user to only 5 request per second
//If a user sends more than 5 request in a single second , the server
//should block them with a 404
//User will be sending in their user-id in the header as user-id
//You have been given a number-of-requestForUser object to start off with which
//clears every one second.

const express = require('express');
const app=express();

let numberOfRequestForUser = {};
setInterval(()=>{
    numberOfRequestForUser={};
},1000)

app.use(function(req,res,next){
    const userId = req.headers["user-id"];//get the user-id of the person who is sending the request.
    if(numberOfRequestForUser[userId]){
        numberOfRequestForUser[userId]=numberOfRequestForUser[userId]+1;
        if(numberOfRequestForUser[userId]>5){
            res.status(404).send("no entry");
        } else{
            next();
        }
    } else{
        numberOfRequestForUser[userId]=1;
        next();
    }
})
