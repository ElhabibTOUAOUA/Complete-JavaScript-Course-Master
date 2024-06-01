'use strict';

// Guess My Number Game description
// The game is to guess a number between 1 and 20. If the number is correct, you win the game. If the number is wrong, you lose the game. The game has a high score feature that keeps track of the highest score. The game also has a reset button to reset the game.

// body background color in winning: '#60b347' and width of the number: '30rem'
// body background color in losing: '#222' and width of the number: '15rem'

// steps to implement the game
// 1. Select elements
// 2. Generate a random number
// 3. Implement the game logic
// 4. Implement the high score
// 5. Implement the reset button

// Selecting elements
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');

// Random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// Initial score
let scoreValue = 20;
let highScoreValue = 0;

// Function to display message
function msgDisplay(msg) {
  message.textContent = msg;
}

// Function to check the number
check.addEventListener('click', function () {
  const guessedNumber = Number(guess.value);
  console.log(guessedNumber);

  // check if the entered value is not a number
  if (!guessedNumber) {
    msgDisplay('⛔ Not A number');
  }
});

// Reset the game
