
function check_even(arr) {
   let result = arr.filter((a)=>{
        return a%2 == 0;
    })
    return result;
}

let new_array = [1, 0, -4, 9, 2];

console.log(check_even(new_array));