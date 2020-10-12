// In this series we're going to see common redundancies and superfluities that make our code unnecessarily complicated and less readable, and we're going to learn how to avoid them.

// In line with the spirit of the series, we can summarize the general rules of minimalist code in two simple principles:

// Keep your code clean and readable.
// While not violating the first principle: get rid of everything superfluous.
// In order to achieve this you should:

// Deepen your knowledge of logics.
// Deepen your understanding of the particular language you're coding with.
// I would also add: observe and learn from the pros. Make a habit of checking the Solutions tab after solving a challenge on Edabit. There is absolutely nothing wrong in assimilating features of someone else's coding style, especially if yours is not yet fully developed.

// Goal
// In the Code tab you will find a code that is missing a single character in order to pass the tests. However, YOUR GOAL is to submit a function as minimalist as possible. Use the tips in the Tips section down below.

// Write a function that returns true if the given integer is even, and false if it's odd.

function isEven(n) {
	if (n % 2 === 0) {
		return true
	}
	else{
		return false
	}
}

console.log(isEven(231));


// Write a template string according to the following example:
const a = "John";
const b = "Joe";
const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."

const nameTemplate = `Their names were: ${a}, ${b} and ${c}`;

console.log(nameTemplate);

function format(a, b, c) {
	// the result string must give: "Their names were: a, b and c."
		const template =  `Their names were ${a}, ${b} and ${c}.`;
		return template
	}

	console.log(format('John', 'Joel','Babel'));

	
