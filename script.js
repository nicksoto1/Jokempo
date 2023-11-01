let pontuacaoJogador1 = 0;
let pontuacaoJogador2 = 0;

function play(escolhaUsuario) {
  const opcao = ["pedra", "papel", "tesoura"];
  const escolhaComputador = opcao[Math.floor(Math.random() * 3)];

  let resultado;

  if (escolhaUsuario === escolhaComputador) {
    resultado = "<br>Empate!";
  } else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
  ) {
    resultado = "<br>Jogador 1 ganhou!";
    pontuacaoJogador1 += 10;
  } else {
    resultado = "<br>Jogador 2 ganhou!";
    pontuacaoJogador2 += 10;
  }

  document.getElementById(
    "resultado"
  ).innerHTML = `Jogador 1 escolheu ${escolhaUsuario}<br>  Jogador 2 escolheu ${escolhaComputador} ${resultado}`;
  document.getElementById(
    "pontuacao"
  ).innerHTML = `Pontuação: Jogador 1 (${pontuacaoJogador1}) - Jogador 2 (${pontuacaoJogador2})`;
}
