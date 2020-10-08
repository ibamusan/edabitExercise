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

// Write a function that checks whether a person can watch an MA15+ rated movie. 
// One of the following two conditions is required for admittance:
// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.




// The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.

  function has_bugs(buggy_code) {
    if (buggy_code) {
      return `sad days`
    } else{
      return `it's a good day`
    }
  }

//its just to fix the code, its has bug on the edabite website but fix here.