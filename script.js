'use strict';
const score0 = document.getElementById(`score--0`);
const score1 = document.getElementById(`score--1`);
const dice = document.querySelector('.dice');
const newButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

dice.classList.add('hidden');
score0.textContent = 0;
score1.textContent = 0;
let playerNo = 0;
let currentscore = 0;
let score = [0, 0];
let playing = true;
const init = function () {
  dice.classList.add('hidden');
  score0.textContent = 0;
  score1.textContent = 0;
  playerNo = 0;
  currentscore = 0;
  score = [0, 0];
  playing = true;
  dice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
};

const playerChange = function () {
  playerNo = playerNo == 0 ? 1 : 0;
  currentscore = 0;
  document.querySelector(`#current--${playerNo}`).textContent = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
rollButton.addEventListener('click', function () {
  if (playing) {
    const randomeNo = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${randomeNo}.png`;
    if (randomeNo != 1) {
      currentscore = currentscore + randomeNo;
      document.querySelector(`#current--${playerNo}`).textContent =
        currentscore;
    } else {
      playerChange();
    }
  }
});
holdButton.addEventListener('click', function () {
  if (playing) {
    score[playerNo] += currentscore;
    document.querySelector(`#score--${playerNo}`).textContent = score[playerNo];
    document.querySelector(`#current--${playerNo}`).textContent = 0;
    // playerChange();
    if (score[playerNo] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${playerNo}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${playerNo}`)
        .classList.remove('player--active');
    } else {
      playerChange();
    }
  }
});
newButton.addEventListener('click', function () {
  init();
});
