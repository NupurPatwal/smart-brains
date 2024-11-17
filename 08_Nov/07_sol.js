// Prime Number Checker: Create a function that checks whether a given number is a prime number or not. If the number is prime, the program should return a message saying so; otherwise, it should indicate that the number is not prime.

let number = 29;
// A number less than 2 is not prime
if (number < 2) {
  console.log(`${number} is not a prime number.`);
}

// Check divisors from 2 up to the square root of the number
for (let i = 2; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    console.log`${number} is not a prime number.`();
  }
}

console.log(`${number} is a prime number.`);
