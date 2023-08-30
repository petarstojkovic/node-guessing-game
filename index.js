const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Welcome to the Guess the Number game!");

function askForGuess() {
  rl.question("Guess a number between 1 and 100: ", (guess) => {
    const num = parseInt(guess);

    if (isNaN(num)) {
      console.log("Please enter a valid number.");
      askForGuess();
      return;
    }

    attempts++;

    if (num === secretNumber) {
      console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
      rl.close();
    } else if (num < secretNumber) {
      console.log("Too low! Try again.");
      askForGuess();
    } else {
      console.log("Too high! Try again.");
      askForGuess();
    }
  });
}

askForGuess();
