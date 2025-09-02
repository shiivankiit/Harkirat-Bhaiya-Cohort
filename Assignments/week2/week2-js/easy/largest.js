/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
//Find max in an array
const arr= [3, 7, 2, 9, 1]
let max=arr[0];

function findLargestElement(arr){
          for(let i=0;i<arr.length;i++){
              if(arr[i]>max){
                max=arr[i]
              }
          }
}
findLargestElement(arr);
console.log(max);

//we can also use inbuilt max function to find the largest.
