window.onload = () => {
  let gameIsOn = false;
  const walls = document.getElementsByClassName("boundary");
  const game_status = document.getElementById("status");
  // console.log(localStorage);
  let userIndex = localStorage.getItem("userIndex");
  let score = JSON.parse(localStorage.getItem("formData"))[userIndex].score;
  // console.log(userIndex);
  let localstor = JSON.parse(localStorage.getItem("formData")); 
  // console.log(localstor[userIndex].score);
  game_status.innerText = 'Begin by moving your mouse over the "S". Your score is '+ score;

  const gameStart = (value) => {
    if (value === "start") {
      console.log("GAME START");
      defaultCase();
      gameIsOn = true;
    }
  };

  const gameEnd = () => {
    gameIsOn = false;
    localstor[userIndex].score = score;
    localStorage.setItem("formData", JSON.stringify(localstor));
    console.log(localStorage);
  };

  const loosingCase = () => {
    score = score - 10;
    for (let i = 0; i < walls.length; i++) {
      walls[i].style.backgroundColor = "#ff8888";
    }
    game_status.innerText = "You Lost. You score is now " + score;
    game_status.style.color = "red";
  };

  const defaultCase = () => {
    for (let i = 0; i < walls.length; i++) {
      walls[i].style.backgroundColor = "#eeeeee";
    }
    game_status.innerText = 'Begin by moving your mouse over the "S".Your score is '+ score;
    game_status.style.color = "black";
  };

  const winningCase = () => {
    score = score + 5;
    for (let i = 0; i < walls.length; i++) {
      walls[i].style.backgroundColor = "#eeeeee";
    }
    game_status.innerText = "You Won. You score is now " + score;
    game_status.style.color = "red";
  };

  const collisionCheck = (value) => {
    if (value === "" || value === "boundary1") {
      console.log("You Lost");
      loosingCase();
      gameEnd();
    } else if (value === "end") {
      winningCase();
      gameEnd();
    }
  };

  window.addEventListener("mousemove", (e) => {
    let value = e.target.id;
    // console.log(value);
    gameStart(value);
    if (gameIsOn) {
      collisionCheck(value);
    }
  });
};
