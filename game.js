let gameIsOn = false;
let userLost = false;
let score = 0;

const gameStart = (value) => {
  if (value === "start") {
    console.log("GAME START");
    gameIsOn = true;
    const walls = document.getElementsByClassName("boundary");
    const game_status = document.getElementById("status");
    for (let i = 0; i < walls.length; i++) {
      walls[i].style.backgroundColor = "#eeeeee";
    }
    game_status.innerText = "Begin by moving your mouse over the \"S\". You current score is "+score;
    game_status.style.color = "black";
  }
};

const gameEnd = () => {
  gameIsOn = false;
  if (userLost) {
    const walls = document.getElementsByClassName("boundary");
    const game_status = document.getElementById("status");
    for (let i = 0; i < walls.length; i++) {
      walls[i].style.backgroundColor = "#ff8888";
    }
    game_status.innerText = "You Lost. You score is now "+ score;
    game_status.style.color = "red";
  }
};

const collisionCheck = (value) => {
  if (value === "" || value === "boundary1") {
    console.log("You Lost");
    userLost = true;
    score -= 10;
    gameEnd();
  } else if (value === "end") {
    score += 5;
    const game_status = document.getElementById("status");
    game_status.innerText = "You Won. Your score is now "+score;
    game_status.style.color = "red";
    userLost = false;
    gameEnd();
  }
};

window.onload = () => {
  window.addEventListener("mousemove", (e) => {
    let value = e.target.id;
    console.log(value);
    gameStart(value);
    if (gameIsOn) {
      collisionCheck(value);
    }
  });
};
