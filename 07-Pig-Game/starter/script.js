'use strict';

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
let activePlayer;
let currentScore;
//selecting Buttons
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

//
let currentScoreValue = 0;
let diceRandom = 0;

const changeActivePlayer = function () {
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

rollDiceBtn.addEventListener('click', function () {
  activePlayer = document.querySelector('.player--active');
  currentScore = activePlayer.querySelector('.current-score');
  diceRandom = Math.trunc(Math.random() * 6 + 1);
  dice.setAttribute('src', `dice-${diceRandom ? diceRandom : 1}.png`);
  if (diceRandom > 1) {
    currentScoreValue += diceRandom;
    currentScore.textContent = currentScoreValue;
  } else {
    changeActivePlayer();
  }
});

holdBtn.addEventListener('click', function () {
  currentScore.textContent = d;
});
