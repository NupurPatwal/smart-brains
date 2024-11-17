// Guess the Number Game: Develop a program that generates a random number between 1 and 10 and prompts the user to guess it. If the user's guess matches the random number, display a success message; otherwise, ask the user to try again.

function guessTheNumberGame() {
  // Generate a random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  let userGuess = 0;

  while (userGuess !== randomNumber) {
    // Prompt the user for a guess
    userGuess = parseInt(prompt("Guess a number between 1 and 10:"), 10);

    if (userGuess === randomNumber) {
      alert(
        "🎉 Congratulations! You guessed the right number: " + randomNumber
      );
      break;
    } else if (userGuess > randomNumber) {
      alert("Too high! Try again.");
    } else if (userGuess < randomNumber) {
      alert("Too low! Try again.");
    } else {
      alert("Invalid input. Please enter a number between 1 and 10.");
    }
  }
}

// Start the game
guessTheNumberGame();
