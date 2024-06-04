'use strict';

// Guess My Number Game description
// The game is to guess a number between 1 and 20. If the number is correct, you win the game. If the number is wrong, you lose the game. The game has a high score feature that keeps track of the highest score. The game also has a reset button to reset the game.

// body background color in winning: '#60b347' and width of the number: '30rem'
// body background color in losing: '#222' and width of the number: '15rem'
// when the guess is too high: '📈 Too high!' and when the guess is too low: '📉 Too low!'
// when the guess is correct: '🎉 Correct Number!'
// when the guess is not a number: '⛔ Not A number'

// steps to implement the game
// 1. Select elements
// 2. Generate a random number
// 3. Implement the game logic
// 4. Implement the high score
// 5. Implement the reset button
/*
// Selecting elements
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const again = document.querySelector('.again');
// Random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);

// Initial score
let scoreValue = 20;
let highScoreValue = 0;

// Function to display message
function msgDisplay(msg) {
  message.textContent = msg;
}

const resetGame = function () {
  console.log(`Again button was clicked or you lost the game`);
  document.body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
  msgDisplay('Start guessing...');
  scoreValue = 20;
  score.textContent = scoreValue;
  guess.value = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
};

// Function to check the number
check.addEventListener('click', function () {
  const guessedNumber = Number(guess.value);

  // check if the entered value is not a number
  if (!guessedNumber) {
    msgDisplay('⛔ Not A number');
  } else if (guessedNumber === secretNumber) {
    msgDisplay('🎉 Correct Number!');
    highScoreValue = highScoreValue < scoreValue ? scoreValue : highScoreValue;
    highscore.textContent = highScoreValue;
    number.textContent = guessedNumber;
    document.body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
  } else if (
    guessedNumber !== secretNumber &&
    guessedNumber > 0 &&
    guessedNumber <= 20
  ) {
    msgDisplay(
      `${guessedNumber > secretNumber ? '📈 Too high!' : '📉 Too low!'}`
    );
    scoreValue--;
    score.textContent = scoreValue;

    // checking if you lost the game
    if (scoreValue < 1) {
      msgDisplay(`💥 You lost the game! click again!`);
      score.textContent = `0`;
      number.textContent = secretNumber;
      document.body.style.backgroundColor = '#E67657';
    }
  } else {
    msgDisplay(`Please enter a positive value between 1 and 20!`);
  }
});

// Reset the game
again.addEventListener('click', resetGame);



// get elements by tag name will return an array of elements with the provided tag name
const elementsByTagName = document.getElementsByTagName('p');

// elementsByTagName[0].innerHTML = 'Hello World';
console.log(elementsByTagName[2].innerText);

// get element by id will return the element with the specific ID
let elements = document.getElementById('title').textContent;
console.log(elements);

// get element by class name will return an array of elements with the provided class name
const elemByClassName = document.getElementsByClassName('number')[0];
// elemByClassName.innerText = 12;
console.log(elemByClassName.textContent);



const check = document.querySelector('.check');
check.addEventListener('click', function () {});
console.log(check);
*/

// Modal window challenge
