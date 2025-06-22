                                //  Asychronous Js.

 //Normal js function.

 function sum(a,b)
 {
    return a+b;
 }
let ans=sum(2,3);
console.log(ans);



// I/o heavy operation code. for synchronous code.
//here we read two file from operating system.

const fs = require("fs");// Library to read and write the file.//fs refer to file system
const path = require("path");

const filepath= path.join(__dirname, "a.txt");
const contents = fs.readFileSync(filepath,"utf-8");// here fs is object and readfilesync is a key.and it depends on file system for input/Output task so why it is called I/O bound task.
console.log(contents);
const filepath1=path.join(__dirname,"b.txt");
const data = fs.readFileSync(filepath1,"utf-8");
console.log(data);

// Fs is an external library ...external library means. 
// The node js file system allow you to work with the file system on your computer 
//module means an external libray which is written by someone else and i am just requiring their code.

//fs will geave you the two function 1>readfile  2>readfileSync 
//readFile which readfile asynchronously and other one which read file synchronously.



                                // Functional Arguments.

//Passing a function to another function as an functional arguments.

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) { //here we passing a function as an argument.and you can name it anything in js when you pass sum as a function.
//it will pass something like this.
  function sum(){
    return a+b;
  }
  return op(a, b)// Here we are calling the function with its argument.
}

console.log(doOperation(1, 2, sum))

//Doing I/O bound task asynchronously.


const fs=require("fs");
const path=require("path")

function print(err,data){
    console.log(data);
}

const fpath=path.join(__dirname,"a.txt");
fs.readFile(fpath,"utf-8",print);//whenever the input/output sucees it will call the third argument.
const fpath1=path.join(__dirname,"b.txt");
fs.readFile(fpath1,"utf-8",print);//fs.readfile takes callbacks as an input and call that function.

console.log("Done!");

//setTimout async code.

function run() {
	console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immedietely");

