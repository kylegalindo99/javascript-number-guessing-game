
// get random number from 1-100
let randomNumber = Math.floor(Math.random() * 100) +1

// reference to parts of our UI // 
const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const guessField = document.querySelector('.guessField')
const guessSubmit = document.querySelector('.guessSubmit')


// variables
let guessCount = 1;
let resetButton;




