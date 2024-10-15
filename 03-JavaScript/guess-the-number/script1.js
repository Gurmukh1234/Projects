"use strict";
let again = document.body.querySelector(".btn-again");
//Generate random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

let highscore = 0;
document.querySelector(".highscore").textContent = highscore;

document.querySelector(".number").textContent = "?";
document.querySelector(".score").textContent = score;

const display = function (message) {
  document.querySelector(".message").textContent = message;
};

// Attaching a click event on button  to get the value of input
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (guess === 0) {
    display("No Number!");
  } else if (guess === secretNumber) {
    display("Congratulations! You guessed it right");
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    document.querySelector(".check").disabled = true;
    document.querySelector("body").style.backgroundColor = "green";
  } else if (guess != secretNumber) {
    if (score > 1) {
      score--;
      display(guess > secretNumber ? "Too high!" : "Too low!");
      document.querySelector(".score").textContent = score;
    } else {
      score = 0;
      document.querySelector(".score").textContent = score;
      display("Game Over. You lost!");
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     display("Too high");
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     score = 0;
  //     document.querySelector(".score").textContent = score;
  //     display("Game Over. You lost!");
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     score--;

  //     display("Too low");
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     score = 0;
  //     document.querySelector(".score").textContent = score;
  //     display("Game Over. You lost!");

  //   }
  // }
});

let again_func = () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  // document.querySelector(".highscore").textContent = 0;
  document.querySelector(".check").disabled = false;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").focus();
};

again.addEventListener("click", again_func);
