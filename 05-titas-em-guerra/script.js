const personagens = [
    { nome: "Dionisio", forca: 7, imagem: "imagem/img (1).png" },
    { nome: "Poseidon", forca: 10, imagem: "imagem/img (2).png" },
    { nome: "Prometeu", forca: 8, imagem: "imagem/img (3).png" },
    { nome: "Apolo", forca: 8, imagem: "imagem/img (4).png" },
    { nome: "Zeus", forca: 10, imagem: "imagem/img (5).png" },
    { nome: "Afrodite", forca: 6, imagem: "imagem/img (6).png" },
    { nome: "Atlas", forca: 9, imagem: "imagem/img (7).png" },
    { nome: "Cronos", forca: 9, imagem: "imagem/img (8).png" },
    { nome: "Hades", forca: 9, imagem: "imagem/img (9).png" },
    { nome: "Hecate", forca: 7, imagem: "imagem/img (10).png" }
];

    
    const galeria = document.getElementById("galeria");
    const jogadorEl = document.getElementById("jogador");
    const computadorEl = document.getElementById("computador");
    const resultadoEl = document.getElementById("resultado");
    const timesEl = document.getElementById("times");
    
    let timeJogador = [];
    let timeComputador = [];
    
    // p significa personagem
    // s significa soma
    // forcaC significa força computador
    // forcaJ significa força jogador

    // personagens.forEach((p) significa que para cada personagem p, faça o seguinte:
    // const card = document.createElement("div") significa que crie um elemento div e armazene na variável card
    // card.classList.add("card") significa que adicione a classe card ao elemento card
    // card.innerHTML = `...` significa que adicione o conteúdo HTML dentro do elemento card
    personagens.forEach((p) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="${p.imagem}" alt="${p.nome}">
        <p>${p.nome}</p>
        `;
    
        // Adiciona um evento de clique ao card
        // card.addEventListener("click", () significa que quando o card for clicado, faça o seguinte:
        // if (timeJogador.length < 3 && !timeJogador.includes(p)) significa que se o time do jogador tiver menos de 3 personagens
        //  e o personagem p não estiver no time do jogador, faça o seguinte:
        // timeJogador.push(p) significa que adicione o personagem p ao time do jogador
        // card.classList.add("selecionado") significa que adicione a classe selecionado ao card
        // if (timeJogador.length === 3) iniciarBatalha() significa que se o time do jogador tiver 3 personagens, inicie a batalha
        card.addEventListener("click", () => {
        if (timeJogador.length < 3 && !timeJogador.includes(p)) {
            timeJogador.push(p);
            card.classList.add("selecionado");
        }
        if (timeJogador.length === 3) iniciarBatalha();
        });
    
        // galeria.appendChild(card) significa que adicione o card à galeria
        galeria.appendChild(card);
    });
    
    // let opcoes = personagens.filter(p => !timeJogador.includes(p)) significa que crie uma variável opcoes que contém todos os personagens que não estão no time do jogador
    // const index = Math.floor(Math.random() * opcoes.length) significa que crie uma variável index que contém um número aleatório entre 0 e o tamanho da variável opcoes
    // timeComputador.push(opcoes[index]) significa que adicione o personagem opcoes[index] ao time do computador
    // opcoes.splice(index, 1) significa que remova o personagem opcoes[index] da variável opcoes

    function iniciarBatalha() {
        let opcoes = personagens.filter(p => !timeJogador.includes(p));
        for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * opcoes.length);
        timeComputador.push(opcoes[index]);
        opcoes.splice(index, 1);
        }
    
        galeria.style.display = "none";
        timesEl.style.display = "flex";
        mostrarTimes();
        mostrarResultado();
    }
    
    // criarCardPersonagem(p) significa que crie um card para o personagem p
    // const card = document.createElement("div") significa que crie um elemento div e armazene na variável card
    // <p>${p.nome} (Força: ${p.forca})</p> significa que adicione o nome e a força do personagem p dentro do elemento card
    function criarCardPersonagem(p) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="${p.imagem}" alt="${p.nome}">
        <p>${p.nome} (Força: ${p.forca})</p>
        `;
        return card;
    }
    
    // mostrarTimes() significa que mostre os times do jogador e do computador
    // timeJogador.forEach(p => jogadorEl.appendChild(criarCardPersonagem(p))) significa que para cada personagem p do time do jogador, adicione o card do personagem p ao elemento jogadorEl
    // timeComputador.forEach(p => computadorEl.appendChild(criarCardPersonagem(p))) significa que para cada personagem p do time do computador, adicione o card do personagem p ao elemento computadorEl
    function mostrarTimes() {
        timeJogador.forEach(p => {
        jogadorEl.appendChild(criarCardPersonagem(p));
        });
    
        timeComputador.forEach(p => {
        computadorEl.appendChild(criarCardPersonagem(p));
        });
    }
    
    function mostrarResultado() {
        const forcaJ = timeJogador.reduce((s, p) => s + p.forca, 0);
        const forcaC = timeComputador.reduce((s, p) => s + p.forca, 0);
    
        if (forcaJ > forcaC) resultadoEl.innerText = "Parabéns! Você venceu!";
        else if (forcaC > forcaJ) resultadoEl.innerText = "Não foi dessa vez, você perdeu.";
        else resultadoEl.innerText = "Empate!";
    }
    