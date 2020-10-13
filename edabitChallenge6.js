// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function checkInteger (nums){

  if (nums % 5 === 0 ){
    return true;
  }else{
    return false;
  }

}

console.log(checkInteger(25));