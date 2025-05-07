const tabuleiro = document.getElementById('tabuleiro');
const mensagem = document.getElementById('mensagem');
const reiniciar = document.getElementById('reiniciar');

let jogadorAtual = 'X';
let jogoAtivo = true;
let estadoJogo = ["", "", "", "", "", "", "", "", ""];

const combinacoesVitoria = [
  [0,1,2], [3,4,5], [6,7,8], // linhas
  [0,3,6], [1,4,7], [2,5,8], // colunas
  [0,4,8], [2,4,6]           // diagonais
];

function criarTabuleiro() {
  tabuleiro.innerHTML = '';
  estadoJogo = ["", "", "", "", "", "", "", "", ""];
  jogoAtivo = true;
  jogadorAtual = 'X';
  mensagem.textContent = `Vez do jogador: ${jogadorAtual}`;

  for (let i = 0; i < 9; i++) {
    const celula = document.createElement('div');
    celula.classList.add('celula');
    celula.dataset.index = i;
    celula.addEventListener('click', clicouCelula);
    tabuleiro.appendChild(celula);
  }
}

function clicouCelula(e) {
  const index = e.target.dataset.index;

  if (estadoJogo[index] !== "" || !jogoAtivo) return;

  estadoJogo[index] = jogadorAtual;
  e.target.textContent = jogadorAtual;

  if (verificarVitoria()) {
    mensagem.textContent = `Jogador ${jogadorAtual} venceu!`;
    jogoAtivo = false;
    return;
  }

  if (!estadoJogo.includes("")) {
    mensagem.textContent = "Empate!";
    jogoAtivo = false;
    return;
  }

  jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
  mensagem.textContent = `Vez do jogador: ${jogadorAtual}`;
}

function verificarVitoria() {
  return combinacoesVitoria.some(combinacao => {
    const [a, b, c] = combinacao;
    return (
      estadoJogo[a] !== "" &&
      estadoJogo[a] === estadoJogo[b] &&
      estadoJogo[a] === estadoJogo[c]
    );
  });
}

reiniciar.addEventListener('click', criarTabuleiro);

criarTabuleiro();
