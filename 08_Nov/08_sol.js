// 8. Factorial Calculator: Write a program that calculates the factorial of a given number. For instance, if the input is 5, the program should output 120.

let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact *= i;
}
console.log(fact);
