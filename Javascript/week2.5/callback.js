//callback hell
setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("hello");

    setTimeout(function () {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);


function seTimeoutPromisifed(ms){
  return new Promise(function(resolve){
        setTimeout(resolve,ms)
  });
}

//Promise chaining
setTimeoutPromisified(1000).then(
  function(){
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function(){
    console.log(hello);
    return setTimeoutPromisified(5000);
  })
  .then(function(){
    console.log("hello there");
  });