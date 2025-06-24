/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


function setTimeoutPromisified(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise is resolved");
      resolve();
    }, n * 1000); // convert seconds to milliseconds
  });
}

setTimeoutPromisified(3).then(() => {
  console.log("Successfully completed");
});


// setTimeoutPromisifed(3000).then(function callback(){
// TypeError: Cannot read properties of undefined (reading 'then') at object.<anonymous>