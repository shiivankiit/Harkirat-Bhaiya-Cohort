// Using the fs library again, try to write to the contents of a file.
//  You can use the fs library to as a black box, the goal is to understand async tasks.

const fs=require("fs");
console.log("Step 1: Starting file write...");
fs.writeFile("A.txt","Change content","utf-8",(err)=>{
     console.log("Step 4: Inside the callback now — file write completed ✅");
    if(err){
        console.log("Error writting to the file",err);
        return;
    }
    else{
        console.log("File has been sucessfully written.");
    }
})
console.log("Step 2: File write requested, Node.js is moving on...");
console.log("Step 3: Doing other tasks while file is being written...");


//Bsically we understand this by puting some logs to the code that how nodes move on and exectuing 
//other piece of code.

// ✅ Real-World Analogy:
// Imagine you’re at a restaurant:
// You order food (fs.writeFile starts writing).
// You don’t stand at the counter — you go sit down and do something else (Node moves on).
// When the food is ready, the waiter calls you (the callback is executed).

