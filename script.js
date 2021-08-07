let gameImg = document.getElementsByClassName("gameImg");

let playerPick = 0;
let playerScore = 0;
let computerPick = 0;
let computerScore = 0; // 0: draw - 1: player wins, 2: computer wins

// 1- Rock
// 2- Paper
// 3- Scissor
let gameLogic = function (playerOption, computerOption) {
  // computerOption = Math.floor(Math.random() * (3 - 1 + 1) + 1);

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
};

let whoWins = function (winner) {
  let resultMessage = document.getElementById("messageResult");
  if (winner === 0) {
    resultMessage.innerHTML = "Draw";
  } else if (winner === 1) {
    resultMessage.innerHTML = "You wins !!!";
    playerScore++;
    document.getElementById("player-score").innerHTML = `Score: ${playerScore}`;
  } else if (winner === 2) {
    resultMessage.innerHTML = "Computer Wins !!!";
    computer++;
    document.getElementById("computer-score").innerHTML = `Score: ${computerScore}`;
  }
};

for (let i = 0; i < gameImg.length; i++) {
  // A imagem esmaece quando o usuário passa o mouse sobre ela

  gameImg[i].style.opacity = "0.2";
  // Adicionando evento de clique às opções do jogador
  gameImg[i].addEventListener("click", function (element) {
    let tempId = element.target.parentNode.id;
    let tempPick = tempId.split("-")[0];

    if (tempPick === "player") {
      /*	Todas as imagens terão sua opacidade reduzida,
 mas so o que foram selecionados (jogador / robô) */
      for (let j = 0; j < gameImg.length; j++) {
        gameImg[j].style.opacity = "0.2";
      }

      playerPick = tempId.split("-")[2];
      document.getElementById(
        "player-pick-" + playerPick
      ).firstChild.style.opacity = "1.0";

      // Randomiza o jogo do robô toda vez que o jogador joga!!
      computerPick = Math.floor(Math.random() * 3 + 1);
      document.getElementById("computer-pick-" + computerPick).firstChild.style.opacity = "1.0";

			console.log('You picks', playerPick);
			console.log('Computer picks', computerPick);


      whoWins(gameLogic(playerPick, computerPick));
      console.log("-----------------------------");
    } else {
      // O jogador não é capaz de selecionar o lado do computador
      alert("Não permitido, selecione o player 1 !");
    }
  });
}


