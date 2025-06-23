const fs = require("fs");

console.log("-------top of the file--------");

function readTheFile(resolve){
    console.log("readThefile called");
    setTimeout(function(){
        console.log("callback based setTimeout completed");
        resolve();
    }, 3000);
}

function setTimeoutPromisifed(fileName){
    console.log("setTimeoutPromisifed called");
    return new Promise(readTheFile);
}

const p = setTimeoutPromisifed();

function callback(){
    console.log("timer is done");
}

p.then(callback)

console.log("---------end of the file------------");



//02_____


function doasyncop(resolve){//inside this we wrap the async op.resolve is same as callback.
    setTimeout(resolve,3000);
}
const f= new Promise(doasyncop);//creating a promise.
//here promise is a class and we call it's constructor using new.

function callback(){
    console.log("3 second have passed");
    
}
f.then(callback);//using the promise

//so in nutshell,Promise will pass the proxy to f
//by calling the function passed to promise and then that function
//will do real async work and then when the result is recived,
//we have to call the first argument of doasyncop with that result.
      //or
// When you create a new Promise, it immediately calls the function you pass to it (i.e., doasyncop).
// The Promise system automatically provides a function (called 'resolve') as the first argument.
// Inside 'doasyncop', you do the actual async work (here, using setTimeout).
// When your async work is done (after 3 seconds), you call 'resolve()'.
// This tells the Promise: "I’m done, you can move on."
// Once the Promise is resolved, the function passed to '.then()' (callback) is executed.


