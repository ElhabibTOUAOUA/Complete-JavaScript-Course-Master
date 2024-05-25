"use strict";
/*
// function with no return value, just log something to the console.
function greeting(yourName) {
	console.log(`Hello ${yourName}, welcome!!!`);
}

greeting("Elhabib");

// function that returns the sum of two entered numbers
function addNum(a, b) {
	return a + b;
}

console.log(addNum(3, 5));



//function declaration
function addNum(a, b) {
	return a + b;
}

//function expression
let addNum2 = function (a, b) {
	return a + b;
};

console.log(addNum(10, 2));
console.log(addNum2(23, 5));


let calcAge = (birthDay) => 2024 - birthDay;
console.log(calcAge(1996));

let yearsUntilRetirement = (birthDay, firstName) => {
	const age = 2024 - birthDay;
	let retirement = 65 - age;
	return `${firstName} retires in ${retirement} years from now`;
};

console.log(yearsUntilRetirement(1996, "Elhabib"));
*/

const cutPieces = function (fruits) {
	return fruits * 4;
};

const fruitProcessor = function (apples, oranges) {
	const applePieces = cutPieces(apples);
	const orangePieces = cutPieces(oranges);

	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
	return juice;
};

console.log(fruitProcessor(2, 4));
