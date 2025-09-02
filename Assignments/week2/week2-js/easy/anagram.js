/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function anagrams(str1, str2) {
  if (str1.length !== str2.length) {
    console.log("false");
    return;
  }

  let sortedStr1 = str1.split('').sort().join('');
  let sortedStr2 = str2.split('').sort().join('');

  if (sortedStr1 === sortedStr2) {
    console.log("true");
  } else {
    console.log("false");
  }
}

let str1 = "ankit";
let str2 = "nkita";

anagrams(str1, str2); 


//Copied from the gpt.


//But what i learned is.

//if you want sort any string in a order then use sort() method.
//for join the string without space use join() method.
//and to seprate the string letter wise use spli() method.


