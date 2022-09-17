let gameIsOn = false;
const gameStart = (value) =>{
    if(value === "start"){
        console.log("GAME START");
        gameIsOn = true;
    }
}

const gameEnd = () => {
    gameIsOn = false;
}

const collisionCheck = (value) => {
    if((value === "") || (value === "boundary1")){
        console.log("You Lost")
        alert("You Lost");
        gameEnd();
    }
    else if(value === "end"){
        alert("You Won");
        gameEnd();
    }
}

window.onload = () => {
    window.addEventListener("mousemove", (e) => {
        let value = e.target.id;
        console.log(value);
        gameStart(value);
        if(gameIsOn){
            collisionCheck(value);
        }
    });
}