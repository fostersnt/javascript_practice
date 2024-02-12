//every(): tests whether all elements in the array pass the test implemented by the provided function
//The every() function returns a bolean value of true or false

let pass_mark = 1;
function isPassMark(current_element) {
    return current_element >= pass_mark;
}

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isPassMark));