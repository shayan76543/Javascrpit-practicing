// Get elements from HTML
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

// Generate random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;


// When Guess button is clicked
guessBtn.addEventListener("click", function () {

    const userGuess = Number(guessInput.value);

    // Check if input is valid
    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    attemptsText.textContent = attempts;

    // Compare user's guess with secret number
    if (userGuess === secretNumber) {

        message.textContent = "🎉 Correct! You guessed the number!";

    } else if (userGuess < secretNumber) {

        message.textContent = "Too low! Try again.";

    } else {

        message.textContent = "Too high! Try again.";
    }

});


// Restart the game
restartBtn.addEventListener("click", function () {

    secretNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    attemptsText.textContent = attempts;

    guessInput.value = "";

    message.textContent = "New number generated! Make your guess.";

});