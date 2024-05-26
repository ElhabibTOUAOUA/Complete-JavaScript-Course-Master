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


let calcAge = (birthDay) => 2024 - birthDay;

let yearsUntilRetirement = function (birthDay, firstName) {
	const age = calcAge(birthDay);
	let retirement = 65 - age;

	if (retirement > 0) {
		console.log(`${firstName} retires in ${retirement} years from now`);
		return retirement;
	} else {
		console.log(`${firstName} has already retired!`);
		return -1;
	}
};

console.log(yearsUntilRetirement(1996, "Elhabib"));
console.log(yearsUntilRetirement(1952, "Mohammed"));


// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;

// if (scoreDolphins > scoreKoalas) console.log(`Dolphins wins the trophy`);
// else if (scoreDolphins < scoreKoalas) console.log(`Koalas wins the trophy`);
// else console.log(`Both win the trophy`);

// BONUS 1

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100)
// 	console.log(`Dolphins wins the trophy 🏆`);
// else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100)
// 	console.log(`Koalas wins the trophy 🏆`);
// else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100)
// 	console.log(`Both win the trophy`);
// else console.log("No one wins");

let calcAverage = (x, y, z) => (x + y + z) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

let checkWinner = function (avgDolphins, avgKoalas) {
	// the winner must have at least double the average of the other team
	if (avgDolphins >= avgKoalas * 2) {
		console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
	} else if (avgKoalas >= avgDolphins * 2) {
		console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
	} else console.log(`No team wins...`);
};

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);


// Arrays Data structure

let birthYears = [1991, 1996, 1839, 2005];
let birthYears2 = new Array(1991, 1996, 1839, 2005);

console.log(birthYears);
console.log(birthYears2);



// adding elements to an array
let friends = ["Mohammed", "Ali", "Ahmed", "Anas", "Omar"];

// to the end of the list
friends.push("Aymen");
console.log(friends);

// to the beginning of the list
friends.unshift("Salim");
console.log(friends);

// removing elements from the array

// from the end
friends.pop();
console.log(friends);

// from the beginning
friends.shift();
console.log(friends);

// getting the index of an item in the array
console.log(friends.indexOf("Ahmed"));

// checking if the array contains an element
console.log(friends.includes("Anas"));
console.log(friends.includes(23));



const bill = 100;

let calcTip = function (bill) {
	if (bill >= 50 && bill <= 300) return bill * 0.15;
	else if (bill > 300 || bill < 50) return bill * 0.2;
	else return -1;
};

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

*/

// Objects

let elhabib = {
	firstName: "Elhabib",
	lastName: "TOUAOUA",
	birthDay: 1996,
	job: "Computer Science Engineer",
	friends: ["Mohammed", "Ali", "Ahmed", "Anas", "Omar"],
	calcAge() {
		return 2024 - this.birthDay;
	},
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	},
};

elhabib.age = elhabib.calcAge();

console.log("elhabib", elhabib);
console.log(elhabib.getFullName());
