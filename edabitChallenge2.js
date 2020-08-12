// Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMesomething(a){
  return "something " + a;
}

console.log(giveMesomething("good is better"));


// Create a function that takes an array of numbers or letters and returns a string.

function convertArraytoString(arr){
  return arr.join("")
}

console.log(convertArraytoString([1,2,3,4,5,6]));