// Js architecture for async code...

console.log("Hi");
setTimeout(function timeout(){
    console.log("click the button");
},5000);
console.log("Welcome to the loop");

// Now we are learning Js architecture for async code.

function timeout(){
   console.log("Clicks the button");
}
console.log("Hii!");
setTimeout(timeout,1000);//setTimeout is passed to webapis which set a timer.after 1000ms the callback is pushed to the callback queue.

console.log("Welcome to loupe");

let c=0;
//3-4s
for(let i=0;i<1000000;i++){//this for loop make thread busy why might delay in execiting setTimeout funcction.
    c=c+1;
}
console.log("Expensive operation done");

// ⏰ Why "Expensive operation done" comes before "Clicks the button"?
// Because:
// setTimeout is not precise — it schedules a task after the specified time, but it must wait until the call stack is empty.
// If a blocking task (like your expensive loop) is running when the timer expires, the callback (timeout) must wait.
// So, even if the 1000ms has passed, the event loop waits for the blocking loop to finish.
// 📌 In Short:
// JavaScript is single-threaded. If the main thread is busy (like with your loop), the timer callback is delayed until the thread is free.


//Call stack---> The current thing which is executing by cpu.
//When callstack is busy they are not taking the things from callback queue until the callstack doesn't free.
//Web-Apis--Something whihc is provided by browser.
