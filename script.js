"use strict";
const number = document.querySelector(".number");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const guessInput = document.querySelector(".guess");
const score = document.querySelector(".score");
const message = document.querySelector(".message");
const highscore = document.querySelector(".highscore");
const body = document.querySelector("body");

let newRandom = Math.floor(Math.random() * 20) + 1;
let newHighscore = 0;

const displayMessage = (m) => {
  message.textContent = m;
};

const checkNumber = () => {
  let newScore = Number(score.textContent);
  let localHighscore;

  if (!guessInput.value) {
    displayMessage("⛔ No number selected!");
    return;
  }
  if (newScore === 1) {
    displayMessage("💔 Game over!");
    return;
  }

  if (+guessInput.value > newRandom) {
    displayMessage("📈 too high!");
    newScore -= 1;
    score.textContent = newScore;
  } else if (+guessInput.value < newRandom) {
    displayMessage("📉 too low");
    newScore -= 1;
    score.textContent = newScore;
  } else {
    body.style.backgroundColor = "#60b347";
    number.textContent = newRandom;
    displayMessage("🎉 Correct number!");
    localHighscore = newScore;
    if (localHighscore > newHighscore) {
      newHighscore = localHighscore;
      highscore.textContent = newHighscore;
    }
  }
  guessInput.value = "";
};

const restartGame = (e) => {
  e.preventDefault();
  displayMessage("Start guessing...");
  number.textContent = "?";
  body.style.backgroundColor = "#222";
  score.textContent = 20;
  newRandom = Math.floor(Math.random() * 20) + 1;
};

btnCheck.addEventListener("click", checkNumber);
btnAgain.addEventListener("click", restartGame);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") checkNumber();
});
