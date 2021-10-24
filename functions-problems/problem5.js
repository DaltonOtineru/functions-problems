/*

Function #5 

multiples of 3 print fizz
multiples of 5 print buzz
multiples of 3 & 5 print fizzbuzz


step 1: create a for loop;
step 2: set the initial value of the variable to 1 that will go up to 100 by 1 number at a time
step 3: create an if, else if, else statement that prints buzzfizz if its a multiple of
        5&3, fizz if a multiple of 3, and buzz if a multiple of 5;
*/


  for(let i = 1; i <= 100; i++){
    if(i%3 === 0 && i%5 === 0){
      console.log("FizzBuzz");
    }
    else if(i%3 === 0){
      console.log("Fizz");
    }
    else if(i%5 === 0){
      console.log("Buzz");
    }
    else {
      console.log();
    }
  }
