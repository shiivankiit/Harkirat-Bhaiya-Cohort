// check string is a plaindrome or not 


function isPalindrome(str)
{
  const reverse = str.split(' ').reverse().join();
  return str === reverse;
}
console.log(isPalindrome("madam"));
