"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const changeMessage = function (instructions) {
  document.querySelector(".instructions").textContent = instructions;
};

const changeScore = function (score) {
  document.querySelector(".score").textContent = score;
};

// event listener click for check button
// contains: !notanumber to deal with invalid entry
// win condition
// higher or lower check, score diminish, and message change
// lose condition
// set and change highscore

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    changeMessage(`Choice was not a valid number`);
  } else if (guess === secretNumber) {
    changeMessage(`You Guessed my Number!`);
    document.body.style.backgroundColor = "#37de9b";
    document.body.style.color = "#000000";
    document.querySelector(".secret").style.width = "30rem";
    document.querySelector(".secret").textContent = secretNumber;
    let highscore = 0;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      changeMessage(guess > secretNumber ? "Too High" : "Too Low");
      score--;
      changeScore(score);
    } else {
      document.body.style.backgroundColor = "#ad1d46";
      changeMessage(`Score down to Zero, you lose`);
      document.querySelector(".score").textContent = 0;
    }
  }
});

// event listener click for restart button
// resets the board, score, colors, secretNumber, and instructions

document.querySelector(".restart").addEventListener("click", function () {
  document.body.style.backgroundColor = "#085982";
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  changeMessage(`Begin guessing`);
  changeScore(score);
  document.querySelector(".guess").value = "";
  document.querySelector(".secret").textContent = `???`;
  document.querySelector(".secret").style.width = "15rem";
});

// document.querySelector(".secretNumber").textContent = secretNumber;

// console.log(secretNumber);
