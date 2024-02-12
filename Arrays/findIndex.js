//The findIndex() method takes-in a closure just like the filter(). It returns the index of the first
//array item that matches the function/closure definition

const array1 = [5, 12, 8, 13, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));