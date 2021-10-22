/*
step 1: define a javascript function that accepts a string as a parameter;
step 2: split the string passed in, turn it into an array of individual words &
store it in a variable;
step 3: define a variable called longestWord and set the initial value to an empty string ' ';
step 4: start looping through your array of strings, so the longest word is set as the 
value of longestWord variable;
step 5: return the longestWord variable;
*/

 


function findLongestWord(str) {
  const strSplit = str.split('');
  let longestWord = ' '; 
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord.length){
      longestWord = strSplit[i];
    }
  }
   return longestWord;
}


console.log(findLongestWord('Using Roots Technology to become a professional developer.'));

// 'professional'