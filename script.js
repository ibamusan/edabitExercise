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


// Write a function that uses the ternary operator to return "yeah" if the condition is true, and "nope" otherwise.

function checkTernary(x){
  return(x ? "yeah" : "nope");
}
console.log(checkTernary(2<5));


// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

function divideEvenly(Num1, Num2){
  if ( Num1 % Num2 === 0){
    return true;
  }else {
    return false;
  }
}

console.log(divideEvenly(27,4));


// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function calcFPS(minutes, fps){
  var fpsPerminutes = minutes * 60;
  var numberFrames = fps * fpsPerminutes;
  return numberFrames; 
}

console.log(calcFPS(10, 25));


// Implement a function that returns true if the parameters are equal, and false if they are different.

function isConfirmation(spec1, spec2){
  if(spec1 === spec2){
    return true;
  }else {
    return false;
  }
}

console.log(isConfirmation(2, '2'));

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanEqualTo(number){
  if (number <= 0){
    return true;
  }else{
    return false;
  }
}

console.log(lessThanEqualTo(-1));

// Booleans can also be written as integers, where 1 = True and 0 = False. 
// Make a function that returns the opposite of the boolean given.

function checkBoolean(flipbool){
    
  if (flipbool == true){
    return 0;
  }else {
    return 1;
  } 
  
}

console.log(checkBoolean(1));


// Create a function that takes a word and returns the new word without including the first character.

function returnNewWord(str){
  return str.substring(1);
}

console.log(returnNewWord('John'));

// Create a function that returns the middle character of the string.
function detectMiddle(txt){
  var y = txt.length;
  var mnValue = y / 2;

  return txt.charAt(mnValue - 1);

}

console.log(detectMiddle('himani'));


// Write a function that returns the length of a string. Make your function recursive.

function retLenght(strg){
  return strg.length;
  retLenght();
}
//note recursive here means calling the function inside itself.
console.log(retLenght('Apple'));


// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(int){
  var y = int % 5
  if (y === 0){
    return true;
  }else{
    return false;
  }
}

console.log(divisibleByFive(585));

// Create a function to concatenate two integer arrays.

function arrayConcat(arr1, arr2){
  return arr1.concat(arr2);
}

console.log(arrayConcat([1,2,3], [4,5,6,7]));


// Create a function that evaluates an equation.

function equationEval(evaluate){
  return eval(evaluate);
}

console.log(equationEval('3*5'));


// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

function testType(num3){
  var x1 = num3 % 2;
  if (x1 === 0){
    return 'even';
  }else{
    return 'odd';
  }
}

console.log(testType(8));


// Create a function that accepts an array and returns the last item in the array.

function returnLast(arr3){
  return arr3[arr3.length - 1];
}

console.log(returnLast(['dog', 'cat', 'sheep', 'horse']));



// Given two strings, firstName and lastName, return a single string in the format "last, first".

function combStr(first,last){
 
  return last + "," + first;

  }

console.log(combStr('goke','jide'));


// Create a function that takes an array and a string as arguments and return the index of the string.

function returnIndexOf(arr, str){
  return arr.indexOf(str);
}

console.log(returnIndexOf([3,6,8,12,23], 12));

// Create a function that finds the index of a given item.

function findIndex(arr, num){
  return arr.indexOf(num);
}

console.log(findIndex([3,5,6,7,8,9], 8));


// Create a function that takes a base number and an exponent number and returns the calculation.

function calcPower(base,n){
  return Math.pow(base, n)
}

console.log(calcPower(2,2));

// Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

function calcStack(n){
  return (n*n);
}

console.log(calcStack(3));