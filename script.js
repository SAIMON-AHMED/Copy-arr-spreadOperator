/*
We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments.
The function is supposed to return a new array made up of num copies of arr. Modify the function using spread
syntax so that it returns num copies of it
*/

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push(arr.slice([...arr]));
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2)); // prints [ [ true, false, true ], [ true, false, true ] ]
