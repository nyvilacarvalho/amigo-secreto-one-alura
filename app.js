// Lista para armazenar os nomes
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome); // Adiciona o nome na lista
    input.value = ""; // Limpa o campo
    atualizarLista(); // Atualiza a lista na tela
}

// Função para atualizar a lista visível
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa antes de recriar

    amigos.forEach((nome) => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

// Função para sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = ""; // Limpa resultados anteriores
    const item = document.createElement("li");
    item.textContent = `🎉 O amigo secreto é: ${sorteado}`;
    resultado.appendChild(item);
}
