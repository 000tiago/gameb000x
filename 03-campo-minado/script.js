let rodada = 1;
const totalRodadas = 3;
const bomba = Math.floor(Math.random() * 5) + 1; // Sorteia onde está a bomba
let pontos = 0;
let jogoAtivo = true;

function jogar(tentativa) {
    // Referências aos elementos da interface
    const mensagem = document.getElementById("mensagem");
    const status = document.getElementById("statusRodada");
    const resultado = document.getElementById("resultadoFinal");

    // Interrompe se o jogo já terminou
    if (!jogoAtivo) return;

    // Desabilita o botão clicado
    const botoes = document.querySelectorAll("#botoes button");
    botoes[tentativa - 1].disabled = true;

    // Verifica se clicou na bomba
    if (tentativa === bomba) {
        mensagem.innerHTML = "<i class='fas fa-bomb'></i> Você pisou na bomba!";
        jogoAtivo = false;
        status.textContent = "";
        resultado.innerHTML = `<i class='fas fa-skull-crossbones'></i> <strong>Fim de jogo:</strong> você sobreviveu ${pontos} rodada(s).`;

        // Exibe o botão de reiniciar
        document.getElementById("reiniciar").style.display = "inline-block"; 

        // Efeito tremor
        document.body.classList.add("explosao");
        setTimeout(() => {
            document.body.classList.remove("explosao");
        }, 500);
        return;
    }

    // Se clicou em caminho seguro
    pontos++;
    status.innerHTML = `<i class='fas fa-shield-alt'></i> <strong>Rodada ${rodada}</strong>: você avançou com segurança!`;
    rodada++;

    // Se venceu o jogo
    if (rodada > totalRodadas) {
        mensagem.innerHTML = "<i class='fas fa-trophy'></i> <strong>Parabéns!</strong> Você sobreviveu às 3 rodadas!";
        resultado.innerHTML = `Pontuação final: <strong>${pontos}</strong>`;
        jogoAtivo = false;

        document.getElementById("reiniciar").style.display = "inline-block"; // Exibe o botão de reiniciar
    }
}

function reiniciarJogo() {
    location.reload(); // Recarrega a página para reiniciar o jogo  
}

