// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, "error", 9, 5];
// temperatures array where all values are below zero;
// const temperatures = [-3, -2, -6, -1, -9, -13, -17, -15, -14, -9, -5];
// temperatures array where all values are above zero;
// const temperatures = [3, 2, 6, 1, 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem

// 2) Breaking up into sub-problems

const tempAmplitude = function (arr) {
	let min = arr[0];
	let max = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (typeof arr[i] !== "number") continue;
		min = min > arr[i] ? arr[i] : min;
		max = max < arr[i] ? arr[i] : max;
	}

	return max > 0 && min > 0
		? max - min
		: max > 0 && min < 0
		? max + min
		: max < 0 && min < 0
		? -max + min
		: -1;
};

console.log(tempAmplitude(temperatures));


// Debugging with the Console and Breakpoints
const measureKelvin = function () {
	const measurement = {
		type: "temp",
		unit: "celsius",
		// value: Number(prompt("Degrees celsius:")),
		value: 10,
	};

	// console.warn(measurement.value);
	// console.error(measurement.value);
	console.table(measurement);

	const kelvin = measurement.value + 273;
	return kelvin;
};

console.log(measureKelvin());
10;

// Using a Debugger
const calcTempAmplitudeBug = function (t1, t2) {
	const temps = t1.concat(t2);
	console.log(temps);

	let min = temps[0];
	let max = temps[0];

	for (let i = 1; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== "number") continue;
		// debugger; this line lunch a debugger in the console at this point of code
		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}

	console.log(max, min);
	return max - min;
};

const amplitude = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitude);

*/

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. 

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. 

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForecast = function (arr) {
	let printString = "... ";
	for (let i = 0; i < arr.length; i++) {
		printString += `${arr[i]}ºC in ${i + 1} days ...`;
	}
	return printString;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
