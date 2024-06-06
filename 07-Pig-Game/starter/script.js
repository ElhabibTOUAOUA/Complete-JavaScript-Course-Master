'use strict';

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let dice = document.querySelector('.dice');
let score, activePlayer, gameStatus, currentScore;

const init = function () {
  activePlayer = 0;
  score = [0, 0];
  gameStatus = true;
  dice.classList.add('hidden');
  player0.querySelector('.score').textContent = 0;
  player1.querySelector('.score').textContent = 0;
  player0.querySelector('.current-score').textContent = 0;
  player1.querySelector('.current-score').textContent = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};

const changeActivePlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  currentScore.textContent = 0;
};

init();

btnRoll.addEventListener('click', function () {
  if (gameStatus) {
    let rollDice = Math.trunc(Math.random() * 6) + 1;
    currentScore = document.querySelector(`#current--${activePlayer}`);
    dice.classList.remove('hidden');
    dice.src = `dice-${rollDice}.png`;
    if (rollDice !== 1) {
      currentScore.textContent = Number(currentScore.textContent) + rollDice;
    } else {
      changeActivePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (gameStatus) {
    currentScore = document.querySelector(`#current--${activePlayer}`);
    score[activePlayer] += Number(currentScore.textContent);
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 20) {
      gameStatus = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      dice.classList.add('hidden');
    } else {
      changeActivePlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});
