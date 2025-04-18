/* As variáveis abaixo são definidas para controlar o estado do jogo, incluindo a rodada atual, o número total de rodadas, a posição da bomba, os pontos do jogador e se o jogo está ativo ou não. */ 
let rodada = 1;
const totalRodadas = 3;
const bomba = Math.floor(Math.random() * 5) + 1;
let pontos = 0;
let jogoAtivo = true;

function jogar(tentativa) {
const mensagem = document.getElementById("mensagem");
const status = document.getElementById("statusRodada");
const resultado = document.getElementById("resultadoFinal");

if (!jogoAtivo) return;

/* A função if abaixo verifica se a tentativa do jogador é válida, ou seja, se o número está entre 1 e 5. Se não for, exibe uma mensagem de erro e retorna. */

if (tentativa === bomba) {
    mensagem.innerHTML = "<i class='fas fa-bomb'></i> Você pisou na bomba!";
    jogoAtivo = false;
    status.textContent = "";
    resultado.innerHTML = "<i class='fas fa-skull-crossbones'></i> <strong>Fim de jogo:</strong> você sobreviveu " + pontos + " rodada(s).";

    //  Efeito tremor
    document.body.classList.add("explosao");

    setTimeout(() => {
        document.body.classList.remove("explosao");
    }, 500); 
    return;
}
pontos++;
status.innerHTML = "<i class='fas fa-shield-alt'></i> <strong>Rodada " + rodada + "</strong>: você avançou com segurança!";
rodada++;

if (rodada > totalRodadas) {
    mensagem.innerHTML = "<i class='fas fa-trophy'></i> <strong>Parabéns!</strong> Você sobreviveu às 3 rodadas!";
    resultado.innerHTML = "Pontuação final: <strong>" + pontos + "</strong>";
    jogoAtivo = false;
}
}
