// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, "error", 9, 5];
// temperatures array where all values are below zero;
// const temperatures = [-3, -2, -6, -1, -9, -13, -17, -15, -14, -9, -5];
// temperatures array where all values are above zero;
// const temperatures = [3, 2, 6, 1, 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem

// 2) Breaking up into sub-problems

const remError = function (arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "error") arr.splice(i, 1);
	}
	return arr;
};

const getMax = function (arr) {
	let max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		max = max < arr[i] ? arr[i] : max;
	}
	return max;
};

const getMin = function (arr) {
	let min = arr[0];
	for (let i = 1; i < arr.length; i++) {
		min = min > arr[i] ? arr[i] : min;
	}
	return min;
};

const temAmplitude = function (arr) {
	// remove error values from the array
	const arrNoError = remError(arr);
	const max = getMax(arrNoError);
	const min = getMin(arrNoError);
	// return min < 0 && (max > 0 || max < 0)
	// 	? max + min
	// 	: max > 0 && min > 0
	// 	? max - min
	// 	: -1;
	if (max > 0 && min > 0) return max - min;
	else if (max > 0 && min < 0) return max + min;
	else if (max < 0 && min < 0) return -max + min;
	else return -1;
};

// let temNoError = remError(temperatures);
// console.log(temNoError);

// console.log(`Max: ${getMax(temNoError)}
// Min: ${getMin(temNoError)}`);

console.log(temAmplitude(temperatures));
