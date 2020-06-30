// Create a function that return a function.

function returnStrg(el){
  var a = " mood "
   return function (str){
     console.log(str + a + el);
   }
}

var y = returnStrg("today");
y("I am having a good");



// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

function isPlural(word) {
	return word.endsWith("s");
}

console.log(isPlural("girls"))