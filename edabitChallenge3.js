// Create a function that takes the age and return the age in days.
function convertAge(age){
  return age*365;
}

console.log(convertAge(70));

// Given a string, return true if its length is even or false if the length is odd.

function stringTest(str){
  if((str.length % 2) == 0){
    return true;
  }else{
    return false;
  }
}

console.log(stringTest('apple'));
x  