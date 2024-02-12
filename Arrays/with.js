/*
The with() method changes the value of a given index in the array, returning a new array with the element at the given index replaced with the given value. The original array is not modified. This allows you to chain array methods while doing manipulations.
*/

const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr);

//Chaning ARRAY methods
console.log(arr.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]
