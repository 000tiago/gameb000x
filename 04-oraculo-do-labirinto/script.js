// script.js

const perguntas = [
  {
    tema: "Mitologia Grega",
    pergunta: "Qual criatura guarda a entrada do Labirinto de Creta?",
    opcoes: ["Minotauro", "Esfinge", "Cérbero"],
    respostaCorreta: "Minotauro"
  },
  {
    tema: "História Antiga",
    pergunta: "Quem foi o arquiteto do Labirinto?",
    opcoes: ["Platão", "Dédalo", "Sócrates"],
    respostaCorreta: "Dédalo"
  },
  {
    tema: "Mitologia",
    pergunta: "Quem derrotou o Minotauro?",
    opcoes: ["Perseu", "Teseu", "Aquiles"],
    respostaCorreta: "Teseu"
  },
  {
    tema: "Simbolismo",
    pergunta: "O que representa o labirinto na mitologia?",
    opcoes: ["Destino", "Sabedoria", "Confusão interna"],
    respostaCorreta: "Confusão interna"
  },
  {
    tema: "Tradição",
    pergunta: "Para sair do labirinto, Teseu usou:",
    opcoes: ["Espelho mágico", "Corda de ouro", "Fio de Ariadne"],
    respostaCorreta: "Fio de Ariadne"
  }
];

let indiceAtual = 0;
let acertos = 0;

const temaEl = document.getElementById("tema");
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const resultadoEl = document.getElementById("resultado");
const contadorEl = document.getElementById("contador");
const jogoEl = document.getElementById("jogo");
const telaFinalEl = document.getElementById("telaFinal");

function carregarPergunta() {
  const perguntaAtual = perguntas[indiceAtual];
  temaEl.textContent = perguntaAtual.tema;
  perguntaEl.textContent = perguntaAtual.pergunta;
  resultadoEl.textContent = "";
  contadorEl.textContent = perguntas.length - indiceAtual -1;

  opcoesEl.innerHTML = "";

  perguntaAtual.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.classList.add("botao-opcao");
    botao.addEventListener("click", () => verificarResposta(botao, opcao, perguntaAtual.respostaCorreta));
    opcoesEl.appendChild(botao);
  });
}

function verificarResposta(botaoSelecionado, respostaEscolhida, respostaCorreta) {
  const botoes = document.querySelectorAll(".botao-opcao");

  botoes.forEach(botao => {
    botao.disabled = true;
    if (botao.textContent === respostaCorreta) {
      botao.classList.add("certa");
    } else {
      botao.classList.add("errada");
    }
  });

  if (respostaEscolhida === respostaCorreta) {
    resultadoEl.textContent = "Resposta correta!";
    acertos++;
  } else {
    resultadoEl.textContent = `Errado! A resposta certa é: ${respostaCorreta}`;
  }

  // setTimeout para mostrar a resposta correta antes de carregar a próxima pergunta 
  setTimeout(() => {
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
      carregarPergunta();
    } else {
      mostrarTelaFinal();
    }
  }, 1500);
}

function mostrarTelaFinal() {
  jogoEl.style.display = "none";
  telaFinalEl.classList.remove("hidden");

  const tituloFinal = telaFinalEl.querySelector("h2");
  const textoFinal = telaFinalEl.querySelector("p");
  const imagemFinal = telaFinalEl.querySelector("img");

  // Faz o header desaparecer
  const header = document.getElementById("header");
  header.classList.add("hidden");

  if (acertos >= 3) {
    tituloFinal.textContent = "Você venceu!";
    textoFinal.textContent = "Conseguiu sair do labirinto!";
    imagemFinal.src = "/04-oraculo-do-labirinto/imagens/labirinto-saida.jpg";
    imagemFinal.alt = "Saída do Labirinto";
  } else {
    tituloFinal.textContent = "Você falhou!";
    textoFinal.textContent = "Ficou preso no labirinto...";
    imagemFinal.src = "/04-oraculo-do-labirinto/imagens/labirinto-perdido.png"; 
    imagemFinal.alt = "Preso no Labirinto";
  }
}

function reiniciarJogo() {
  indiceAtual = 0;
  acertos = 0;
  telaFinalEl.classList.add("hidden");
  jogoEl.style.display = "block";

  // Reexibe o header
  const header = document.getElementById("header");
  header.classList.remove("hidden"); // Remove a classe 'hidden'

  carregarPergunta();
}

carregarPergunta();
