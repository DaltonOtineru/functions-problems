/*
step 1: define a javascript function that accepts a string as a parameter;
step 2: split the string passed in, turn it into an array of individual words &
store it in a variable;
step 3: define a variable called longestWord and set the initial value to 0;
step 4:
step 5:
*/

 


function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = ' '; 
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord.length){
      longestWord = strSplit[i];
    }
  }
   return longestWord;
}


console.log(findLongestWord('Using Roots Technology to become a professional developer.'));