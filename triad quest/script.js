function validarIdade() {
    const anoInput = document.getElementById("anoNascimento").value;
    const msgErro = document.getElementById("msgErro");
    const ano = parseInt(anoInput);
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - ano;
    const gameDiv = document.getElementById("game");
    const body = document.body;


    if (isNaN(ano) || ano <= 1900 || ano > anoAtual) {
        msgErro.innerHTML = "Por favor, insira um ano válido.";
    } else if (idade < 18) {
        msgErro.innerHTML = "Você precisa ter pelo menos 18 anos para jogar.";
    } else {
        document.getElementById("validation").style.display = "none";
        gameDiv.style.display = "block";
        body.classList.add("background-ativo");
    }
}

function jogar(escolhaJogador) {
    const opcoes = ["cavaleiro", "mago", "dragao"];
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
    const body = document.body;
    const html = document.documentElement;
    let resultado = "";

    if (escolhaJogador === escolhaComputador) {
        resultado = `Empate! Ambos escolheram ${escolhaJogador}.`;
        body.classList.add("pulse-preto");
    } else if (
        (escolhaJogador === "cavaleiro" && escolhaComputador === "dragao") ||
        (escolhaJogador === "mago" && escolhaComputador === "cavaleiro") ||
        (escolhaJogador === "dragao" && escolhaComputador === "mago")
    ) {
        resultado = `Parabéns, você venceu! Seu ${escolhaJogador} derrotou o ${escolhaComputador}.`;
        body.classList.add("pulse-verde");
    } else {
        resultado = `Que pena, você perdeu! O ${escolhaComputador} superou seu ${escolhaJogador}.`;
        body.classList.add("pulse-vermelho");
        html.classList.add("shake");
    }

    // Remove os efeitos depois de 3s
    setTimeout(() => {
        body.classList.remove("pulse-preto", "pulse-verde", "pulse-vermelho");
        html.classList.remove("shake");
    }, 3000);

    document.getElementById("resultado").innerText = resultado;
}
