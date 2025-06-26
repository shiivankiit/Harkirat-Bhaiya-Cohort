//write a promisifed version of setTimeout



function setTimeoutPromisified(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms)
    });
}
function callback(){
    console.log("Promise resolve sucessfully");
    
}
setTimeoutPromisified(3000).then(callback)
