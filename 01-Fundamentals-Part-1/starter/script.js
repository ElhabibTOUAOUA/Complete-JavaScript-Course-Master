"use strict";

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
