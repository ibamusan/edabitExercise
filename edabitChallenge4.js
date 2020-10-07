// Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
function inchesToFeet(inches){
  return inches/12 + 'ft' ;
}

console.log(inchesToFeet(1));

// Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet. 
// Note: return 0 if inches is less than 12
function inchesToFt(inches){
  if (inches >= 12){
    return inches/12 ;
  }else {
    return 0
  }
}

console.log(inchesToFt(1));

