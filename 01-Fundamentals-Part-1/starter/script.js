"use strict";
/*
const country = "Algeria";
const continent = "Africa";
let population = 45;

console.log(country, continent, population);

const isIsland = false;
let language;

console.log(
	typeof isIsland,
	typeof language,
	typeof country,
	typeof population
);

language = "Arabic";
// country = "Egypt";
console.log(language);

console.log("Half of the country population =", population / 2);
population += 1;
console.log("New Population= ", population);
console.log("Algeria population more that Finland: ", population > 6);
console.log("Algeria population have less than average: ", population < 33);
let description =
	country +
	" is in " +
	continent +
	", and its " +
	population +
	" million people speak " +
	language;

console.log(description);

let firstName = "Elhabib";
let lastName = "TOUAOUA";
let birthday = 1996;
const year = 2024;
let job = "Computer Science Engineer";

const elhabib =
	"I'm " +
	lastName +
	" " +
	firstName +
	", a " +
	(year - birthday) +
	" years old " +
	job +
	"!";

console.log(elhabib);

let elhabib2 = `I'm ${lastName} ${firstName}, a ${
	year - birthday
} years old ${job}!`;

console.log(elhabib2);

console.log(`String
with multiple
lines`);

let massMark = 78,
	heightMark = 1.69;
let massJohn = 92,
	heightJohn = 1.95;

// let massMark = 95,
// 	heightMark = 1.88;
// let massJohn = 85,
// 	heightJohn = 1.76;

let BMIMark = (massMark / (heightMark * heightMark)).toFixed(2);
let BMIJohn = (massJohn / (heightJohn * heightJohn)).toFixed(2);

console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;

if (markHigherBMI) {
	console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
} else {
	console.log(`John's's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`);
}



// Type Conversion
let inputYear = "1996";
let currentYear = "2010";
console.log(Number(currentYear) + Number(inputYear));

// Type coercion
// Type Coercion
console.log("I'm " + 27 + " years old");
// Output " I'm 27 years old" String
console.log(("23" * "3") / 10);
// Output 10 number

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));


const age = 18;
if (age === 18) console.log("You are an Adult Now!!");
else console.log("You Still Minor");

if ("18" == 18) console.log("The are equal !!!");
else console.log("They are not ");


const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = false;

if (hasDriverLicense && hasGoodVision && !isTired)
	console.log("Can Drive safely");
else console.log("Someone else should drive");


const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;

if (scoreDolphins > scoreKoalas) console.log(`Dolphins wins the trophy`);
else if (scoreDolphins < scoreKoalas) console.log(`Koalas wins the trophy`);
else console.log(`Both win the trophy`);


// BONUS 1

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100)
	console.log(`Dolphins wins the trophy 🏆`);
else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100)
	console.log(`Koalas wins the trophy 🏆`);
else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100)
	console.log(`Both win the trophy`);
else console.log("No one wins");

const day = "monday";
switch (day) {
	case "saturday":
		console.log("Write a plan of the New week");
		break;
	case "sunday":
		console.log("Execute the first task of the plan");
		break;
	case "monday":
	case "tuesday":
		console.log("Watching some lectures of JS course");
		break;
	case "wednesday":
		console.log("practice what I've learned New");
		break;
	case "thursday":
	case "friday":
		console.log("Relaxing and worshiping time");
		break;
	default:
		console.log("Not a day!! Try again please");
}


function getUsername() {
	return prompt("Enter your user name please!");
}

// let username = getUsername() || "Guest";
let username = getUsername() ? getUsername() : "Guest";
console.log(username);

const day = "monday";

switch (day) {
	case "monday": // here it does a strict === comparison with day variable
		console.log("Making Week Plan");
		break;
	case "tuesday":
		console.log("Taking JS course");
		break;
	case "wednesday":
	case "thursday":
		console.log("Doing some side projects");
		break;
	case "friday":
	case "saturday":
		console.log("Study days of Quran and Sunnah");
	default:
		console.log("Not a valid day !");
}


const age = 17;

const drink = age >= 18 ? "Coffee" : "Water";
console.log(drink);

const bill = 275;
let tip =
	bill > 0 && bill >= 50 && bill <= 300
		? bill * 0.15
		: bill > 300
		? bill * 0.2
		: 0;

console.log(
	`The bill was ${bill}, the tip was ${tip}, and the total value ${
		bill + tip
	}`
);
*/
