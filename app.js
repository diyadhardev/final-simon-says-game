//Initialize game variables
let gameSeq = [];
let userSeq = [];
let level = 0;
let highscore = 1;
let started = false;
let colors = ["red", "green", "yellow", "blue"];

//DOM elements
let buttons = document.querySelectorAll(".gameB");
let reset = document.querySelector("#reset-button");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

//To reset and start the game
function spacebar() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
reset.addEventListener("click", () => {
  if (started == false) {
    console.log("Game Started");
    started = true;
    levelUp();
  }
});

//To get the game's choice of button
function levelUp() {
  level++;
  userSeq = [];
  if (level >= highscore) {
    highscore = level;
  }
  h2.innerText = `Level ${level}`;
  let idx = Math.floor(Math.random() * 4);
  let randomcolor = colors[idx];
  let randomBtn = document.querySelector(`.${randomcolor}`);
  console.log(randomBtn);
  gameSeq.push(randomcolor);
  flashbtn(randomBtn);
}

//Event listeners to check user clicked buttons
for (but of buttons) {
  but.addEventListener("click", btnPress);
}
function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);

  checkButton(userSeq.length - 1);
}
function checkButton(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 500);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press Spacebar to Start.`;
    h3.innerHTML = `Highest Score =  ${highscore}`;
    let body = document.querySelector("body");
    body.classList.add("flash");
    setTimeout(function () {
      body.classList.remove("flash");
    }, 500);
    spacebar();
  }
}

//to flash out buttons when is selected
function flashbtn(btn) {
  btn.classList.add("compFlash");
  setTimeout(function () {
    btn.classList.remove("compFlash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}
