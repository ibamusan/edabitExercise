// Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMesomething(a){
  return "something " + a;
}

console.log(giveMesomething("good is better"));

// Create a function that takes voltage and current and returns the calculated power.

function calcPower(I,V){
  return I*V;
}

console.log(calcPower(4,8));
console.log(calcPower(10,9));

// Given two arguments, return an array which contains these two arguments.

function cretArray (x,y){
  let arr = []
  arr.push(x,y);
  return arr;
}

console.log(cretArray(2,3));