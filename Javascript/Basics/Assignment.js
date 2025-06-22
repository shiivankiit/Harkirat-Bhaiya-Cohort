// Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like 
// pizza. 
// Use appropriate variable declarations (let, const, or var). Try logging it using console.log

const favcolor="orange";
let height= "5 foot 4 inch";
let pizza = "corn cheese";

console.log(favcolor);
console.log(height);
console.log(pizza);

// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?

function sum (a,b)
{
    return a+b;
}
let ans = sum(3,4);
console.log(ans);

// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){
    return (age>18);
}
console.log(canVote(19));
console.log(canVote(17));

// Write an if/else statement that checks if a number is even or odd. 
// If it's even, print "The number is even." Otherwise, print "The number is odd."

function checkno(num)
{
    if(num%2==0)
    {
        console.log("No is even");
    }
    else{
        console.log("No is odd");
    }
}
  
let evencheck=checkno(4);
console.log(evencheck);
let oddcheck=checkno(5);
console.log(oddcheck);

// Write a function called sum that finds the sum from 1 to a number

function sumofno(number){
    let sum=0;
    for(let i=0;i<=number;i++)
    {
         sum=sum+i;
    }
    return sum;
}
let findsum=sumofno(5);
console.log(findsum);

//Arrays

let name=["sam","andrew","jack","willson"];
for(let i=0;i<name.length;i++)
{
    console.log(name[i]);
}




                                         //Objects Assignment

//Write a function that takes a user as an input and greets them with their name and age

function greet (user)
{
    console.log("Hi "+user.name+" your age is "+user.age);
}
let user=
{
     name:"sam",
     age:"19"
}
greet(user);

// Write a function that takes a new object as input which has name , 
// age  and gender and greets the guest with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greetmee(guest)
{
    console.log("Hi mr "+guest.name+ " your age is " +guest.age+ " and gender is " +guest.gender);
}
let guest =
{
   name:"andrew",
   age:"20",
   gender:"male"
}
greetme(guest);

// Also tell the user if they are legal to vote or not

function greetme(usser)
{
    console.log("Hi mr "+usser.name+ " your age is " +usser.age+ " and gender is " +usser.gender);

    if(usser.age > 18)
    {
        console.log("You can vote");
    }
    else
    {
        console.log("You can not vote");
    }
}
let usser =
{
   name:"andrew",
   age:"20",
   gender:"male"
}
greetme(usser);

                                   //Array of objects.

// Write a function that takes an array of numbers as input, 
// and returns a new array with only even values. Read about filter in JS.

function even(num) {
    return num % 2 === 0; // return true if even
}

let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arr.filter(even);//arr.filter(even) means:
//“Apply the even() function to each element in the array arr and include it in the result if the function returns true.”
console.log(result);  // Output: [2, 4, 6, 8, 10]



// Write a function that takes an array of users as inputs 
// and returns only the users who are more than 18 years old

function check(elem){
    return elem.age > 18;
}
let users=[{
   name:"andrew",
   age:20
},
{
    name:"sam",
    age:22
},
{
    name:"john",
    age:17
}
]
const results = users.filter(check);
console.log(results);

// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male
function checkdata(usr){
    return Number(usr.age>18) && usr.gender==male;  //No cnvrts age to a no while it stored in a string.
    //if you did not put male as string it will search it as a variable in the array.
    //it can also done using if statement the you have to return something from the function.
}
let data=[{name:"andrew",age:"20",gender:"male"},{name:"kelly",age:"10",gender:"female"}];
const find=data.filter(checkdata);
console.log(find);
 