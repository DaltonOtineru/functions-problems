/*
step 1: define a function that accepts a string and letter as an aurgument;
step 2: define a variable for letter occurence count and set initial value
to 0;
step 3: create a for loop that counts everytime the letter occurs in the string;
step 4: return the count variable;
step 5: log the function with the string and letter to the console;
*/


function findOccurences(str, letter){
  let count = 0;
  for(i = 0; i < str.length; i++){
    if(str[i] === letter){
      count++;
    }
  }
  return count;
}

console.log("The targeted letter occurs " + findOccurences("how many times does this letter occur?", "o") + " times in this string!");

// "The targeted letter occurs 3 times in this string!"
