// Create a function that return a function.

function returnStrg(el){
  var a = " mood "
   return function (str){
     console.log(str + a + el);
   }
}

var y = returnStrg("today");
y("I am having a good");