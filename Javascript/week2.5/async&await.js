//It's a different way to write the promise. and it look closer to a synchronous code.

function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// this is actually returning us a promise.
async function solve() {
  await setTimeoutPromisified(1000);
  console.log("hi");

  await setTimeoutPromisified(3000);
  console.log("hi there");

  await setTimeoutPromisified(5000);
  console.log("hello");
}

solve();

const fs=require("fs");


function readfileAsync(){
    return new Promise(function(resolve,reject){
      fs.readFile("aaaaaaaa.txt",'utf-8',function(err,data){
        if(err)
        {
            reject("File not found");
        }
        else{
            resolve(data);
        }
      }
    )
})
}
readfileAsync()
.then(function(x){
    console.log("File has been read"+x);
})
.catch(function(e){
    console.log(e);
})