

/*
step 1: define a javascript function that accepts a string as a parameter;
step 2: split the string that is passed in, into an array of each individual letter & 
store it inside of a variable;
step 3: define a variable named vowelCount and set the initial value to 0;
step 4: define a variable that defines what a vowel is;
step 5: start looping through the array of letters to see if each letter is a vowel;
step 6: increase the vowelCount variable by one each time our letter is a vowel;
step 7: return vowelCount;
*/


function vowelCount(str) {
  let vowelCount = 0;
  const vowels = ["a", "e", "i", "o", "u"] 
  for(var i = 0; i < str.length; i++){
    if (vowels.indexOf(str[i]) > -1){
      vowelCount++;
    }
  }
  
  return "There are " + vowelCount + " vowels in this sentence";
}

console.log(vowelCount("Using roots technology to become a professional developer.".toLowerCase()));

// 21