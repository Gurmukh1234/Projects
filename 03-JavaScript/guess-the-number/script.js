let number = document.body.querySelector(".number");
let user = document.body.querySelector(".guess");
let check = document.body.querySelector(".btn-check");
let highscore = document.body.querySelector(".label-highscore");
let msg = document.body.querySelector(".message");
let chance = document.body.querySelector(".score");
let max_chance = 16;
let again = document.body.querySelector(".btn-again");
let scr = 0;

let randInt = () => {
  let findNum = Math.floor(Math.random() * 21);
  return findNum;
};

let user_func = (comp_input) => {
  comp_input = randInt();
  console.log("Computer input : ", comp_input);

  let user_input = parseInt(user.value);
  console.log("User input : ", user_input);

  if (user_input == comp_input) {
    console.log("Congratuations, you have guessed it right");
    msg.innerText = "Congrtulations,You guessed right";
    highscore.innerText = scr;
    check.disabled = true;
  } else {
    console.log("Guess Again");
    msg.innerText = "Wrong guess, Try again!";
    chance.innerText = --max_chance;
    user.innerText = "";
  }
};

check.addEventListener("click", user_func);

let again_func = (max_chance) => {
  chance.innerText == max_chance;
  user.value = "";
  user.focus();
  check.disabled = false;
};

again.addEventListener("click", again_func);
