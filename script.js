'use strict';

/* Javascript code below by Janifer I Cheng, Oct 2020.
This is part of the coursework called "The Complete Javascript Course 2020" by Jonas Schmedtmann, of "Coding Heroes".  Any alternations to his lesson code were made and created by Janifer I Cheng.
Please note that index.html and script.css code associated with this page is from Jonas Schmedtmann.
Permission for publication of this work is given by Jonas Schmedtmann (jonas.io) to Janifer I Cheng (janifer.org) for portfolio use.
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
const displayScore = function (message) {
  document.querySelector(`.score`).textContent = message;
};
const displayNumber = function (message) {
  document.querySelector(`.number`).textContent = message;
};
const bodyColor = function (message) {
  document.querySelector(`body`).style.backgroundColor = message;
};
const numberSize = function (message) {
  document.querySelector(`.number`).style.width = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  //when there's no input
  if (!guess) {
    displayMessage(`⛔ No number!`);
    bodyColor(`#FF573`);

    //when the player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct number!`);
    displayNumber(secretNumber);
    bodyColor(`#60b347`);
    numberSize(`30rem`);
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
    //when the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      score--;
      displayScore(score);
      bodyColor(`#222`);
    }
    //when player loses the game
    else {
      displayMessage(`💥 You lost the game!`);
      displayScore(0);
      bodyColor(`#FF3333`);
      displayNumber(secretNumber);
      numberSize(`30rem`);
    }
  }
});
//game reset
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  displayScore(score);
  displayNumber('?');
  document.querySelector(`.guess`).value = ``;
  bodyColor(`#222`);
  numberSize(`15rem`);
});
