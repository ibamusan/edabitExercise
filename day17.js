// With ES6, you can assign variables from arrays in a much more succinct way. 
// Create variables a and b from the given array using the ES6 destructuring assignment syntax (check the Resources tab for more examples), where a === 1 and b === 2.

const arr = [1,2,3,4,5,6,7];

var a = arr[0];
var b = arr[1];

console.log(a,b);


// The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and 
// bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.

//The packaging machine is running the getContainer() function to retrieve the container of a product.
// But something is not right...



function getContainer(product) {
	let container
  switch (product) {
		case "Bread":
			container = "bag"
			break;
		case "Beer":
			container = "bottle"
			break;
		case "Milk":
			container = "bottle"
			break;
		case "Cerials":
			container = "box"
			break;
		case "Eggs":
			container = "carton"
			break;
		case "Candy":
			container = "plastic"
			break;
		default:
			container = null
	}

	return container
}

console.log(getContainer());


// Create a function that takes a name and returns a greeting in the form of a string. 
// Don't use a normal function but use an "arrow function".

const helloGreating = name => 'hello ' + name  + '!';

console.log(helloGreating('ibrahim'));



// Create a function that takes an object as an argument and returns a string with facts about the city.
//  The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z 
// (where X is the city name, Y is the population and Z is the continent the city is situated in).


function cityFacts(city) {
	return city.name + " has a population of " + city.population + " and is situation in " + city.continent;
}


console.log(cityFacts({
name: "ade",
population: "234788",
continent:"african",
}));