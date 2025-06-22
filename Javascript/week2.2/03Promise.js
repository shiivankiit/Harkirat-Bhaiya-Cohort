//Promise class geaves you a promise that i will return you something in a future.

function name()
{
    console.log("It's harkirat chohort");
}

setTimeout(name,3000); // setTimeout promise you to return something after 3 sec.
//definig a promise is hard while using a promise is easy.

// A promise in javascript is an object that represent the eventual completition (or failure) of an
// asynchronous operation and its resulting value.


function main()
{

}
setTimeout(main,3000);//eventual after 3-sec it's called.
//calling the main function is eventual completion of settimeout asynchronous operation.

//Promisified version===> setTimeoutPromisifed(3000).then(callback);
//callback version ===>  setTimeout(callback,3000);

                                     //Promise.

//instance or object both are same.

function setTimeoutPromisifed(ms){
    let p = new Promise(resolve=>setTimeout(resolve,ms));//new Promise()..creates a new object(i.e an instance of a promise class)..Basically this will return you the object of promise class.
    return p;// P will return a instance or object of promise class...Here P is an object.
    //return an object of the promise class.
    
}
function callback(){
    console.log("3 second have passed");
}
setTimeoutPromisifed(3000).then(callback)//syntactically cleaner.
//setTimeoutPromisifed return you a Promise class. which resolve after 3 second.


function promiseCallback(resolve){
    setTimeout(resolve,3000);//resolve is actually the main function.
}//this schedule to run after 3sec.
function main()
{
    console.log("main is called");
}
promiseCallback(main);

//1.18.30
