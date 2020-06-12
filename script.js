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



//Write a function that takes an integer minutes and converts it to seconds.

function convertMinutes(y){
  //y is value in minutes
  return (y * 60);
}

console.log(convertMinutes(5));


// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function findThirdEdge(side1, side2){
  return((side1+side2)- 1);
}

console.log(findThirdEdge(5,7));



// Create a function that takes an array and returns the first element.

function takeArray(arr){
  return arr[0];
}

console.log(takeArray([23,45,67]));


// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far. 
// A win receives 3 points, a draw 1 point and a loss 0 points.

function calcPoints(x, y, z){
  let A = x * 3;
  let B = y * 1;
  let C = z * 0

  let sumPoints = A + B + C;
  return sumPoints;
}

console.log(calcPoints(3,5,6));


// Make a function using the && operator.

function testLogic(a,b){
  if (a && b < 6){
    return "hello friend";
  }else {return "who are you"}
}

console.log(testLogic(5,3));


function testLogic2(x,y){
  console.log(x && y < 7)
}

testLogic2(3,5);


// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. 
// The farmer breeds three species:

// chickens = 2 
// legscows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species.
// You have to implement a function that returns the total number of legs of all the animals.

function calcTotalLegs(chickens, cows, pigs){
  x = chickens * 2;
  y = cows * 4;
  z = pigs * 4;

  return (x+y+z);
}

console.log(calcTotalLegs(4,6,10));


// Create a function that takes a string and returns it as an integer.

function stringInt(str){
  return(parseInt(str))
}

console.log(stringInt('100'));


// Write a function that converts hours into seconds.

function hourConverter(hour){
  var seconds = hour * 3600;
  return(seconds);

}

console.log(hourConverter(2));

// Create a function that returns true if a string is empty and false otherwise.

function isEmpty(s){
  if (s === ""){
    return true
  }else{
    return false
  }
}

console.log(isEmpty("5"));


// Write a function that takes two integers (hours, minutes) and converts them into seconds.

function convert(hours, minutes){
  let y = hours * 3600;
  let z = minutes * 60;

  return(y+z);
}

console.log(convert(2,10));


// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function checkSum(a,b){
   let x = a + b;
  if (x < 100){
    return true;
  }else {
    return false;
  }
}

console.log(checkSum(45,7));

// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

function divisibilityCheck(num){
  var x = num;
  var y = 100;
  let z = num % 100;
  if (z === 0){
    return true;
  }else{
    return false;
  }
}

console.log(divisibilityCheck(1000));

// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; 
// otherwise return false.
// To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

function profitableGamble(prob,prize,pay){
  var c = prob * prize;
  console.log(c);
  if (c > pay){
    return true;
  }else{
    return false;
  }
}

console.log(profitableGamble(20,4,10));

// Create a function that returns true when num1 is equal to num2; otherwise return false.

function isNumEqual(num1,num2){
  if (num1 === num2){
    return true;
  }else{
    return false;
  }
}

console.log(isNumEqual(7,5));

// Create a function that takes an equation (e.g. "1+1"), and returns the answer.

function takeQuestion(s){
  let w = eval(s);
  return w;
}

console.log(takeQuestion('3*5+2'));

// Create a function that takes two strings as arguments and return either true or false depending 
// on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function compString(word1, word2){
  var g = word1.length;
  var h = word2.length;
  if(g === h){
    return true;
  }else{
    return false;
  }
}

console.log(compString('hello', 'baby'));




