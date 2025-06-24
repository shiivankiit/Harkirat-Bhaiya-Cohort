// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output.
//  Make the expensive operation more and more expensive and see how it affects the output.


const fs=require("fs");

fs.readFile("A.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error reading file",err);
        return;
    }
    else{
        console.log("File contents",data);
    }
})

console.log("Expensive operation started");

let sum=0;
for(let i=0;i<5e9;i++){
    sum=sum+i;
}
console.log(sum);

console.log("Expensive operation finsihed");



//
//when file is asynchronous it expect a callback function as third argument.
//expensive means which takes a lot of time to do any task.

// 🎯 Final Conclusion:
// When the main thread (the call stack) is busy with an expensive (CPU-heavy) synchronous task, 
// even if an asynchronous operation like fs.readFile() has finished and its callback is sitting in the callback queue, 
// it cannot be executed until the main thread is free.