// 5. Array Sum Calculator: Write a program that takes an array of numbers and calculates the sum of all its elements. Display the total sum as output.

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }

// console.log(sum);

let arr = prompt("Enter the array.");
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}

console.log(sum);
