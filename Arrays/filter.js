//Filters the given to select all the numbers that leaves a remainder of 0 when divided by 2

function check_even(arr) {
   let result = arr.filter((a)=>{
        return a%2 == 0;
    })
    return result;
}

let new_array = [1, 0, -4, 9, 2];

console.log(check_even(new_array));