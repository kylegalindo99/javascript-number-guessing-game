// get random number from 1-100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// reference to parts of our UI //
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

// VARIABLES
let guessCount = 1;
let resetButton;

// FUNCTIONS
checkGuess = () => {
  let userGuess = Number(guessField.value);

  if (guessCount === 1) {
    guesses.textContent = "previous guesses: ";
  }

  guesses.textContent += userGuess + "";

  if (useGuess === randomNumber) {
    lastResult.textContent = "Congrats, you got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!! GAME OVER !!!";
    setGameOver();
  } else {
    lastResult.textContent = "WRONG!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high! ";
    }
  }
  guessCount++;
  guessField.value = "";
  guessField.focus()
};


// EVENT LISTENERS


