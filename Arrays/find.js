//find() method returns the first matching element of the array. The find() takes-in a closure

const data = [3, 0, 34, 21, 6, 67];

let found = data.find((element) => element > 20);

console.log(found);