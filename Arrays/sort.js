const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

//sort() IS NOT ADVISABLE WITH NUMBERS.
//YOU NEED TO PASS A FUNCTION AS AN ARGUMENT TO SOLVE THE PROBLEM

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);


//CORRECTED implementation of sort()
const array2 = [1, 30, 4, 21, 100000];
array1.sort(function(a, b) {
    return a - b;
});
console.log(array1);

// Expected output: Array [1, 100000, 21, 30, 4]