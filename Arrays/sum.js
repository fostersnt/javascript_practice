//This function adds all the elements in the given array

function add_array_numbers(arr) {
  var sum_result = 0;
  for (let index = 0; index < arr.length; index++) {
    sum_result += arr[index];
  }
  return sum_result;
}

new_array = [1, 0, -4, 9, 2];
console.log(add_array_numbers(new_array));