// Create a function that takes height and width and finds the perimeter of a rectangle.

function findPerimeterRectangle(height, width){
  var x = height;
  var y = width
  return (2*x + 2*y);
}

console.log(findPerimeterRectangle(2,3));

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function returnNextNumber(x){
  return( x + 1);
  

}

console.log(returnNextNumber(5));



// There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
// Two numbers are passed as parameters. The first parameter divided by the second 
// parameter will have a remainder, possibly zero. Return that value.


function remainder(x,y){
  z = x % y;

  return(z);
}

console.log(remainder(3,4));


// Write a function that takes the base and height of a triangle and return its area.

function areaOfTriangle(x, y){
  var height = x;
  var base = y;
  z = 0.5*height*base;
  return(z)

}

console.log(areaOfTriangle(2,4));


// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(x,y){
  var z = x + y;
  if(z < 100){
    return true;
  } else {
    return false;
  }

}

console.log(lessThan100(233,40));

// Create a function that takes two numbers as arguments and return their sum.

function sum(a, b){
  return (a+b);
}

console.log(sum(45,5));
