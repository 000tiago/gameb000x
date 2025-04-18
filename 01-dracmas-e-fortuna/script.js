// Pegando os elementos
let inputDracmas = document.getElementById("dracmas");
let botaoConverter = document.getElementById("converter");
let botaoResetar = document.getElementById("resetar");
let resultado = document.getElementById("resultado");

// Função para converter dracmas em galeões
function converter() {
    let valor = Number(inputDracmas.value); 
    if (valor <= 0 || isNaN(valor)) {
        resultado.innerHTML = "Por favor, insira um valor válido.";
        return;
    }
    inputDracmas.style.border = ""; // Remove o destaque se o valor for válido
    

    let taxaConversao = 130; //  1 Dracma = 130 Reais
    let valorConvertido = valor * taxaConversao;

    resultado.textContent = `Você tem R$ ${valorConvertido.toFixed(2)} Reais.`;
    resultado.style.display = "block"; // Exibe o resultado
    inputDracmas.value = ""; // Limpa o campo de entrada
    }

// Função para resetar o campo de entrada e o resultado
function resetar() {
    inputDracmas.value = ""; // Limpa o campo de entrada
    resultado.style.display = "none"; // Esconde o resultado
    resultado.textContent = ""; // Limpa o texto do resultado
}

// Adicionando eventos aos botões
botaoConverter.addEventListener("click", converter); // Evento ao clicar em "Converter"
botaoResetar.addEventListener("click", resetar); // Evento ao clicar em "Resetar"

const input = document.getElementById("dracmas");

input.addEventListener("mouseover", () => {
input.placeholder = "1 dracma = 300R$";
});

input.addEventListener("mouseout", () => {
input.placeholder = "Digite o valor em dracmas";
});

let numeroSorteado = null; // Variável para armazenar o número da sorte

document.getElementById("sorte").addEventListener("click", () => {
    if (numeroSorteado === null) { // Só gera se ainda não tiver um número
        numeroSorteado = Math.floor(Math.random() * (13 - 3 + 1)) + 3;
        document.getElementById("dracmas").value = numeroSorteado;
    }
});
