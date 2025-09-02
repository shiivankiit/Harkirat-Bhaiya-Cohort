//Promise class geaves you a promise that i will return you something in a future.

//Defination-: A promise expects a function that prfrm an actual asynchronous task.
// Once the async task is complete,call the argumnet of that function, passing in the
//data obtained from the async task.
//That data will then passed to the function you define in`.then`.

//Topic-01
function name()
{
    console.log("It's harkirat chohort");
}

setTimeout(name,3000); // setTimeout promise you to return something after 3 sec.
//definig a promise is hard while using a promise is easy.

// A promise in javascript is an object that represent the eventual completition (or failure) of an
// asynchronous operation and its resulting value.
function main()//calling the main function is representing the eventual completion of settimeout(asynchronous operation).
{
 console.log("Task done");
 
}
setTimeout(main,3000);//eventual after 3-sec it's called.


//Promisified version===> setTimeoutPromisifed(3000).then(callback);
//callback version ===>  setTimeout(callback,3000);

                                     //Promise.

//instance or object both are same.
//in promsie class is already geaven.

function setTimeoutPromisifed(ms){
    let p = new Promise(resolve=>setTimeout(resolve,ms));//new Promise()..creates a new object(an instance of a promise calss)
    //This will return a promise that resolve after ms.
    return p;/// ✅ 'p' is a Promise object that resolves after the timeout.
    // ✅ So we return a Promise from this function.
    
}
//Topic-02.
function callback(){
    console.log("3 second have passed");
}
setTimeoutPromisifed(3000).then(callback)
//here you first call the function that return the promise. and on that we call .then where we call calback function.
//setTimeoutPromisifed return you a Promise class. which resolve after 3 second.
//This is promised based approach bcz .then is used....inside it we passed a function which logs when our promise get resolve.


                                    //03
function setTimeoutPromisifed(ms){
    return new Promise(); //return instance of the promise class.
}
let pp= setTimeoutPromisifed(5000);//returns you the object of promsie class.
console.log(p);

//1.18.30
                                //04

function promiseCallback(resolve){
    console.log(resolve)
    setTimeout(resolve,3000)//resolve would become main function.
    //calls the resolve function after 3sec..resolve is actually the main function.
}
function main()
{
    console.log("main is called");
}
promiseCallback(main);
//You are passing the main function as an argument to promiseCallback.
//Inside promiseCallback(resolve), the parameter resolve now refers to the function main.
//passing main as an argument to promiseCallback, and that main becomes the resolve parameter.
//so it is same as setTimeout(main,3000).
//first we call the function promiseCallback when it get resolve after 3 sec.
//then we log the content of main function.

                                     //New function

function waitfor3S(resolve){//this resolve is automatically provided by promise constructor.
    setTimeout(resolve,10000)//calling resolve inside setTimeout tells the promise to resolve.
}
function setTimeoutPromisifed(){
    return new Promise(waitfor3S);//waitfor3s is executor function of the promise.
    //Promise class says i will take one function as an input.what  ever the first argument of that  function called
    //resolve ...call .then() function whatever the passed inside .then().
    
}
function main(){
    console.log("main is called");
}
setTimeoutPromisifed().then(main);//promise based approach.

//return new Promise(waitfor3s):Promise class says i will take one function as an input. 
//and the first argument of that function when call ..then we call .then()function.

                                    //next function
function random(){

}
let p = new Promise(random);//supposed to return u something eventually return you a instance of Promise class. 
//Agar tum promise class bana rahe ho to tumhe ye bhi batana ha ki how this promise complete.
function callback(){
    console.log("promise succeded");  
}
p.then(callback);//when promsie get resolve execute .then function.
console.log(p);
//p is a instance of a promise class.

                                   //own promise

function random(resolve){ //resolve is also a function provided by promise constructor.
    setTimeout(resolve,3000);//call resolve after 3sec.
}//when you call resolve you are saying promise is fullfiled.
const a = new Promise (random);//supposed to return u something eventually. 
// a is now a Promise that resolves after 3 sec.

//using the eventual value returned by the promise.
function callback(){
    console.log("promise suceed");
}
a.then(callback);// wait for the promise to be resolved, then call callback


// new Promise(random)
//          │
//          └─▶ random(resolve)
//                 │
//                 └─▶ setTimeout(resolve, 3000)
//                             │
//                             └─▶ After 3 sec: resolve() is called
//                                          │
//                                          └─▶ Promise is now "fulfilled"
//                                                  │
//                                                  └─▶ .then(callback) is triggered
//                                                              ↓
//                                                      callback() logs "promise succeed"


