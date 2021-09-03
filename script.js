let gameImg = document.getElementsByClassName("gameImg");

let playerPick = 0;
let playerScore = 0;
let computerPick = 0;
let computerScore = 0;
let winner = -1; // 0: draw - 1: player wins, 2: computer wins

// 1- Rock
// 2- Paper
// 3- Scissor
let gameLogic = function (playerOption, robotOption) {
  // function player(pick) {
  // playerPick = pick;
  // computerPick = Math.floor(Math.random() * 3 + 1);

  if (
    (playerOption == 1 && robotOption == 1) ||
    (playerOption == 2 && robotOption == 2) ||
    (playerOption == 3 && robotOption == 3)
  ) {
    winner = 0;
  } else if (playerOption == 1 && robotOption == 3) {
    winner = 1;
  } else if (playerOption == 2 && robotOption == 1) {
    winner = 1;
  } else if (playerOption == 3 && robotOption == 2) {
    winner = 1;
  } else {
    winner = 2;
  }
  return winner;
};

// document.getElementById("player-pick-1").classList.remove("selected");
// document.getElementById("player-pick-2").classList.remove("selected");
// document.getElementById("player-pick-3").classList.remove("selected");
// document.getElementById("computer-pick-1").classList.remove("selected");
// document.getElementById("computer-pick-2").classList.remove("selected");
// document.getElementById("computer-pick-3").classList.remove("selected");

// document.getElementById("player-pick-" + playerPick)
//   .classList.add("selected");
// document.getElementById("computer-pick-" + computerPick)
//   .classList.add("selected");

let whoWins = function (winner) {
  let resultMessage = document.getElementById("messageResult");
  if (winner === 0) {
    resultMessage.innerHTML = "Draw";
  } else if (winner === 1) {
    resultMessage.innerHTML = "Player Wins !!!";
    playerScore++;
    document.getElementById("player-score").innerHTML = `Score: ${playerScore}`;
  } else if (winner === 2) {
    resultMessage.innerHTML = "Computer Wins !!!";
    computerScore++;
    document.getElementById(
      "computer-score"
    ).innerHTML = `Score: ${computerScore}`;
  }
};

for (let i = 0; i < gameImg.length; i++) {
  gameImg[i].style.opacity = "0.2";
  //   // Adding click event to player's options
  gameImg[i].addEventListener("click", function (element) {
    let tempId = element.target.parentNode.id;
    let tempPick = tempId.split("-")[0];

    if (tempPick === "player") {
      //           // All images will have their opacity reduced,
      //           // but the ones that were selected (player/robot)
      for (let j = 0; j < gameImg.length; j++) {
        gameImg[j].style.opacity = "0.2";
      }

      playerPick = tempId.split("-")[2];
      document.getElementById(
        "player-pick-" + playerPick
      ).firstChild.style.opacity = "1.0";

      //           // Randomizes robot's play everytime the player plays!
      computerPick = Math.floor(Math.random() * 3 + 1);
      document.getElementById(
        "computer-pick-" + computerPick
      ).firstChild.style.opacity = "1.0";

      console.log("Player picks", playerPick);
      console.log("Computer picks", computerPick);

      whoWins(gameLogic(playerPick, computerPick));
      console.log("-----------------------------");
    } else {
      //           // Player is not able to select from the Robot's side
      alert("You are NOT the Computer!");
    }
  });
}
