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



// Objects

let elhabib = {
	firstName: "Elhabib",
	lastName: "TOUAOUA",
	birthDay: 1996,
	job: "Computer Science Engineer",
	friends: ["Mohammed", "Ali", "Ahmed", "Anas", "Omar"],
	hasDriverLicense: true,
	calcAge() {
		this.age = 2024 - this.birthDay;
		return this.age;
	},
	getSummary() {
		return `${this.firstName} ${this.lastName} is a ${this.age} years old ${
			this.job
		} that was born in ${this.birthDay}. Elhabib has ${
			this.friends.length
		} friends, and he has ${
			this.hasDriverLicense ? "a" : "no"
		} driver license`;
	},
};

console.log(elhabib.calcAge());

// console.log("elhabib", elhabib);
console.log(elhabib.getSummary());


let mark = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	},
};
let john = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	},
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi)
	console.log(
		`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
	);
else
	console.log(
		`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
	);

// Contact management system

let contacts = [
	{
		firstName: "Elhabib",
		lastName: "TOUAOUA",
		email: "elhabib-touaoua@univ-eloued.dz",
		phone: "0559592791",
	},
	{
		firstName: "Mohamed",
		lastName: "Goutoubi",
		email: "test@gmail.com",
		phone: "05593545863",
	},
	{
		firstName: "Ahmed",
		lastName: "said",
		email: "ahmed-said@gmail.com",
		phone: "06634589634",
	},
];

let addContact = function (firstName, lastName, email, phone) {
	contacts.push({ firstName, lastName, email, phone });
};

// console.log(contacts);
addContact("Samy", "Youcef", "samy.youcef@gmail.com", "0663134554");
// console.log(contacts);

const getContactByName = function (firstName) {
	for (let i = 0; i < contacts.length; i++) {
		if (contacts[i]["firstName"] == firstName) return contacts[i];
	}
	return -1;
};

const displayContact = function (obj) {
	console.log(`
  First Name: ${obj.firstName},
  Last Name: ${obj.lastName},
  Email: ${obj.email},
  Phone: ${obj.phone}`);
};

const foundContact = getContactByName("Elhabib");
displayContact(foundContact);


// Todo List

const todos = [
	{
		description: "Buy groceries",
		dueDate: "2024-05-15",
		completed: true,
	},
	{
		description: "Finish project report",
		dueDate: "2024-05-20",
		completed: true,
	},
	{
		description: "JavaScript Complete course",
		dueDate: "2024-07-20",
		completed: true,
	},
];

const addTodo = function (description, dueDate, completed) {
	todos.push({ description, dueDate, completed });
};

const getIncompleteTodos = function () {
	let incomplete = [];
	for (let i = 0; i < todos.length; i++) {
		if (todos[i].completed == false) incomplete.push(todos[i]);
	}
	return incomplete.length != 0 ? incomplete : -1;
};

const displayTodos = function (todoList) {
	console.log(todoList);
};

// Example usage:
addTodo("Read a book", "2024-05-18", false);
const incompleteTodos = getIncompleteTodos();
displayTodos(todos);
displayTodos(incompleteTodos);



// Library Catalog

const library = [
	{
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		genre: "Classic",
		isAvailable: true,
	},
	{
		title: "1984",
		author: "George Orwell",
		genre: "Dystopian",
		isAvailable: false,
	},
	{
		title: "Rich Dad Poor Dad",
		author: "Robert T. Kiyosaki",
		genre: "Self Development",
		isAvailable: true,
	},
	{
		title: "Make It Stick",
		author: "Peter C. Brown",
		genre: "Self Development",
		isAvailable: false,
	},
	{
		title: "Atomic Habits",
		author: "James Clear",
		genre: "Habits",
		isAvailable: true,
	},
];

const checkoutBook = function (bookTitle) {
	for (let i = 0; i < library.length; i++) {
		if (library[i].title == bookTitle) {
			library[i].isAvailable = false;
			console.log("The book Successfully Checkout!");
			return 1;
		}
	}
	console.log("Book does not exist!");
	return -1;
};

const returnBook = function (bookTitle) {
	for (let i = 0; i < library.length; i++) {
		if (library[i].title == bookTitle) {
			library[i].isAvailable = true;
			console.log("The book is now available for booking");
			return 1;
		}
	}
	console.log("Book does not exist!");
	return -1;
};

const searchByGenre = function (genre) {
	let neededBooks = [];
	for (let i = 0; i < library.length; i++) {
		if (library[i].genre == genre) neededBooks.push(library[i]);
	}
	return neededBooks.length != 0 ? neededBooks : -1;
};

const displayAvailableBooks = function (listOfBooks) {
	console.log(listOfBooks);
};

// Example usage:
checkoutBook("1984");
returnBook("To Kill a Mockingbird");

const classicBooks = searchByGenre("Self Development");
displayAvailableBooks(library);
displayAvailableBooks(classicBooks);



// TodoList with Categories

const todos = [
	{
		description: "Buy groceries",
		dueDate: "2024-05-15",
		completed: true,
		categories: ["Personal", "Shopping"],
	},
	{
		description: "Finish project report",
		dueDate: "2024-05-20",
		completed: true,
		categories: ["Work"],
	},
	{
		description: "JavaScript Complete course",
		dueDate: "2024-07-20",
		completed: true,
		categories: ["Self-Development", "Career", "Work"],
	},
];

const addTodo = function (description, dueDate, completed) {
	todos.push({ description, dueDate, completed });
};

const getIncompleteTodos = function () {
	let incomplete = [];
	for (let i = 0; i < todos.length; i++) {
		if (todos[i].completed == false) incomplete.push(todos[i]);
	}
	return incomplete.length != 0 ? incomplete : -1;
};

const displayTodos = function (todoList) {
	console.log(todoList);
};

const getTodosByCategory = function (category) {
	let neededTodos = [];
	for (let i = 0; i < todos.length; i++) {
		if (todos[i].categories.includes(category)) neededTodos.push(todos[i]);
	}
	return neededTodos.length != 0 ? neededTodos : -1;
};

// Example usage:
const personalTodos = getTodosByCategory("Work");
console.log(personalTodos);
// displayCategories(personalTodos);
*/
