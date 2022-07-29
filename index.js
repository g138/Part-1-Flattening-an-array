// Flattening of array using the JavaScript in built flat() method by passing Depth as Infinuty

const flatenMe = (inputArray) => {
	let flattenArray = inputArray.flat(Infinity);
	console.log(flattenArray);
}

let inputArray = [1, [2, [3]], 4];
flatenMe(inputArray); // [1, 2, 3, 4]

flatenMe([1, [2, 3], [4, [5], [6, [7, 8, 9], 10], 551], [52], 90, [99]]); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 551, 52, 90, 99]
