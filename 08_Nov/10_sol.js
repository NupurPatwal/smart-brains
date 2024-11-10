// Guess the Number Game: Develop a program that generates a random number between 1 and 10 and prompts the user to guess it. If the user's guess matches the random number, display a success message; otherwise, ask the user to try again.

let num = Math.floor(Math.random() * 10);
console.log(num);
let guess = prompt("Guess the random Number.");
if (guess == num) {
  alert("Success");
} else {
  prompt("Try again");
  guess();
}
