/*
step 1: Define a function that accepts a string as a parameter;
step 2: Define a variable that splits that string that is being passed in, into an array of individual letters;
step 3: Define a variable that reverses the string passed in;
step 4: Define a variable that joins the reversed array back into a single word;
step 5: Create an if, else statement that returns either true or false if the string is a palindrome;
*/


function palindrome(str) {
  const arrayLetters = str.split('');
  const reverseArray = arrayLetters.reverse();
  const reverseString = arrayLetters.join('');
  if(str.toLowerCase() === reverseString.toLowerCase()) {
    return true;
  } else { return false; }
    
}

console.log(palindrome('RAceCar')); 
// true
  
console.log(palindrome('Roots tech'));
// false