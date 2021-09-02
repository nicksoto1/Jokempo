// let gameImg = document.getElementsByClassName('gameimg')

let playerPick = 0;
let playerScore = 0;
let computerPick = 0;
let computerScore = 0;
let winner = -1;  // 0: draw - 1: player wins, 2: computer wins 

// let gameLogic = function(playerOption, computerOption) {
  function player(pick) {
  playerPick = pick; 
  computerPick = Math.floor(Math.random() * 3 + 1);
  

  // 1- Rock
  // 2- Paper
  // 3- Scissor
  if (
    (playerOption == 1 && computerOption == 1) ||
    (playerOption == 2 && computerOption == 2) ||
    (playerOption == 3 && computerOption == 3)
  ) {
    winner = 0;
  } else if (playerOption == 1 && computerOption == 3) {
    winner = 1;
  } else if (playerOption == 2 && computerOption == 1) {
    winner = 1;
  } else if (playerOption == 3 && computerOption == 2) {
    winner = 1;
  } else {
    winner = 2;
  }
  return winner;
}

  document.getElementById("player-pick-1").classList.remove("selected");
  document.getElementById("player-pick-2").classList.remove("selected");
  document.getElementById("player-pick-3").classList.remove("selected");
  document.getElementById("computer-pick-1").classList.remove("selected");
  document.getElementById("computer-pick-2").classList.remove("selected");
  document.getElementById("computer-pick-3").classList.remove("selected");

  document.getElementById("player-pick-" + playerPick)
    .classList.add("selected");
  document.getElementById("computer-pick-" + computerPick)
    .classList.add("selected");

  // let whoWins = function (winner) {
  //   let resultMessage = document.getElementById('messageResult')
    if(winner === 0) {
      document.getElementById('messageResult').innerHTML = 'DRAW';
        // resultMessage.innerHTML = 'DRAW';
    } else if(winner === 1) {
      document.getElementById('messageResult').innerHTML = 'Player Wins';
        // resultMessage.innerHTML = 'Player WINS !!!';
        document.getElementById('player-score').innerHTML = `Score: ${playerScore}`
        playerScore++;

    } else if (winner === 2) {
      document.getElementById('messageResult').innerHTML = 'Computer Wins';
        // resultMessage.innerHTML = 'Computer WINS !!!';
        document.getElementById('computer-score').innerHTML = `Score: ${computerScore}`
        computerScore++;
    }
// }



// for(let i = 0; i < gameImg.length; i++) {
  

//   gameImg[i].style.opacity = '0.2'
//   // Adding click event to player's options
//   gameImg[i].addEventListener('click', function(element) {
//     console.log('addEventListener')
//       let tempId = element.target.parentNode.id;
//       let tempPick = tempId.split('-')[0];
      
//       if (tempPick === 'player') {
//           // All images will have their opacity reduced,
//           // but the ones that were selected (player/robot)
//           for(let j = 0; j < gameImg.length; j++) {
//               gameImg[j].style.opacity = '0.2';
//           }

//           playerPick = tempId.split('-')[2];
//           document.getElementById('player-pick-' + playerPick).firstChild.style.opacity = '1.0'

//           // Randomizes robot's play everytime the player plays!
//           computerPick = Math.floor((Math.random() * 3) + 1)
//           document.getElementById('computer-pick-' + computerPick).firstChild.style.opacity = '1.0'

//           console.log('Yoshimi picks', playerPick);
//           console.log('Computer picks', computerPick);
          
//           whoWins(gameLogic(playerPick, computerPick));
//           console.log('-----------------------------');
//       } else {
//           // Player is not able to select from the Robot's side
//           alert('You are NOT the Robot!');
//       }
//   })
// }
