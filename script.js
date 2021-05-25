
let jogoImagem = document.getElementsByClassName('jogoImagem')

let jogadorEscolha = 0;
let jogadorPontuacao = 0;
let computadorPontuacao = 0;
let computadorEscolha = 0;
let ganhador = -1;  // 0: empate - 1: jogador ganhou, 2: computador ganhou

// 1- Pedra
	// 2- Papel
	// 3- Tesoura
	let logicaJogo = function(jogadorEscolha, computadorEscolha) {
	// computadorEscolha = Math.floor(Math.random() * (3 - 1 + 1) + 1);

if((jogadorEscolha == 1 && computadorEscolha == 1) || (jogadorEscolha == 2 && computadorEscolha == 2) || (jogadorEscolha == 3 && computadorEscolha == 3)) {
        ganhador = 0
    } else if(jogadorEscolha == 1 && computadorEscolha == 3) {
        ganhador = 1
    } else if(jogadorEscolha == 2 && computadorEscolha == 1) {
        ganhador = 1
    } else if(jogadorEscolha == 3 && computadorEscolha == 2) {
        ganhador = 1
    } else {
        ganhador = 2
    }
    return ganhador;
}

let quemGanha = function(vencedor) {
	let resultMessage = document.getElementById('messageResult')
	if(vencedor === 0) {
			resultMessage.innerHTML = 'Empate';
	} else if(vencedor === 1) {
			resultMessage.innerHTML = 'Michael ganhou !!!';
			jogadorPontuacao++;
			document.getElementById('Jogador-pontuação').innerHTML = `Pontuação: ${jogadorPontuacao}`
	} else if (vencedor === 2) {
			resultMessage.innerHTML = 'Computador ganhou !!!';
			computadorPontuacao++;
			document.getElementById('Computador-pontuação').innerHTML = `Pontuação: ${computadorPontuacao}`
	}
}

for(let i = 0; i < jogoImagem.length; i++) {
	// A imagem esmaece quando o usuário passa o mouse sobre ela


	jogoImagem[i].style.opacity = '0.2'
	// Adicionando evento de clique às opções do jogador
	jogoImagem[i].addEventListener('click', function(element) {
			let tempId = element.target.parentNode.id;
			let tempPick = tempId.split('-')[0];
			
			if (tempPick === 'player') {
		/*	Todas as imagens terão sua opacidade reduzida,
 mas so o que foram selecionados (jogador / robô) */
					for(let j = 0; j < jogoImagem.length; j++) {
							jogoImagem[j].style.opacity = '0.2';
					}

					escolhaJogador = tempId.split('-')[2];
					document.getElementById('escolha-jogador-' + escolhaJogador).firstChild.style.opacity = '1.0'

     // Randomiza o jogo do robô toda vez que o jogador joga!!
		 randomComputador = Math.floor((Math.random() * 3) + 1)
		 document.getElementById('random-computador-' + randomComputador).firstChild.style.opacity = '1.0'

		 
		 
		 quemGanha(logicaJogo(escolhaJogador, randomComputador));
		 console.log('-----------------------------');
 } else {
		 // O jogador não é capaz de selecionar o lado do computador
		 alert('Não permitido, selecione o player 1 !');
		}
	})
}




//Rever