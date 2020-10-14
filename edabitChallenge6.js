// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function checkInteger (nums){

  if (nums % 5 === 0 ){
    return true;
  }else{
    return false;
  }

}

console.log(checkInteger(25));

// In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

// Write five adder functions:

// add2(x) should return 2 + x.
// add3(x) should return 3 + x.
// add5(x) should return 5 + x.
// add7(x) should return 7 + x.
// add11(x) should return 11 + x.

const add2 = x => x+2
const add3 = x => x+3
const add5 = x => x+5
const add7 = x => x+7
const add11 = x => x+11

console.log(add2(5));
console.log(add11(5));
