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
