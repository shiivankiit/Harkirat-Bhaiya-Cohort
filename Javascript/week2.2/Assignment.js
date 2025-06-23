// Try to create a promisifed version of settimeout.

function setTimeoutPromisifed(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
    console.log("Call after 3 sec");
}

setTimeoutPromisifed(3000).then(callback);

// new Promise()..creates a Promise object. whihc takes an executor function (resolve,reject=>{})
//Resolve is a function which executes when async opertion is completed.

//setTimeout(resolve,ms)--->ms--wait for a millisec then call resolve() function. making promise fullfiled.

// setTimeoutPromisifed return a promise that resolve after 3 sec.
//.then(callback) means:
//When the promise resolves (i.e., after 3 seconds), run the callback() function.



// ======
//create the promisifed version of fs.readfile,fs.writefile,cleanfile.

const fs = require("fs");
const path = require("path");

function cleanFile(){
    return new Promise((resolve,reject)=>{
        fs.writeFile("A.txt", '', (err) => {
            if (err) reject(err);
            else resolve();
        });
    })
}
function call(){
    console.log("file is cleaned");
}

cleanFile("A.txt").then(call)


                              //Promisifed version of  fs.readfile

//Creating your own promise.
//Whenever you are creating a promise the first argument is a function and uska bhi first argument is  resolve or anything.

const fs = require("fs");

function readTheFile(sendTheFinalValueHere){
    fs.readFile("A.txt","utf-8",function(err,data){
        sendTheFinalValueHere(data);
    })
}
function readFile(fileName){
    //read the file and return its value
    return new Promise(readTheFile);
}
//the function you are passing ...uska jo first argument ha is some how .then ka callback function ho jayega.

const f = readFile();

function callback(contents){
    console.log(contents);
}
f.then(callback);