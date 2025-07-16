// DOM = Document Object Model
// Esta aula foca em criar, listar, remover e interagir com elementos HTML de forma dinâmica usando JS

// Exemplo 1: Gerar uma lista de Pokémons dinamicamente com base em um array

const listaPokemons = document.getElementById('lista-pokemons');
const botaoCarregar = document.getElementById('carregar-lista');

// Array com nomes de pokémons
const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle', 'Snorlax'];

botaoCarregar.addEventListener('click', () => {
    listaPokemons.innerHTML = ''; // Limpa a lista antes de adicionar os itens novamente

    pokemons.forEach(pokemon => {
        const li = document.createElement('li'); // Cria um novo elemento <li>
        li.textContent = pokemon; // Define o texto com o nome do pokémon
        listaPokemons.appendChild(li); // Adiciona o <li> dentro da <ul>
    });
});


// Exemplo 2: Adicionar itens dinamicamente a uma lista

const listaItens = document.getElementById('lista-itens');
const botaoAdicionar = document.getElementById('adicionar-item');
const inputNovoItem = document.getElementById('novo-item');

botaoAdicionar.addEventListener('click', () => {
    const textoDigitado = inputNovoItem.value.trim(); // Remove espaços em branco

    if (textoDigitado === '') {
        alert('Digite um item antes de adicionar.');
        return;
    }

    const li = document.createElement('li'); // Cria novo <li>
    li.textContent = textoDigitado;

    // Criando botão de remoção
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';

    // Evento para remover o item da lista
    botaoRemover.addEventListener('click', () => {
        listaItens.removeChild(li); // Remove o próprio <li> da lista
    });

    li.appendChild(botaoRemover); // Adiciona o botão dentro do <li>
    listaItens.appendChild(li); // Adiciona o <li> completo na <ul>
    inputNovoItem.value = ''; // Limpa o campo de texto
});


// Exemplo 3: Limpar toda a lista

const botaoLimpar = document.getElementById('limpar-lista');

botaoLimpar.addEventListener('click', () => {
    listaItens.innerHTML = ''; // Remove todos os <li> da lista
});

// Exemplo 4: Alternar destaque no item clicado

const listaDestaque = document.getElementById('lista-destaque');

// Percorre todos os <li> da lista e adiciona um evento de clique
listaDestaque.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        // Remove o destaque de todos os itens
        listaDestaque.querySelectorAll('li').forEach(li => {
            li.classList.remove('destaque');
        });

        // Adiciona destaque apenas ao item clicado
        item.classList.add('destaque');
    });
});

// Exemplo 5: Contador com lista de cliques

let contador = 0;
const botaoContador = document.getElementById('botao-contador');
const paragrafoContador = document.getElementById('contador');
const listaCliques = document.getElementById('lista-cliques');

botaoContador.addEventListener('click', () => {
    contador++; // Incrementa o contador
    paragrafoContador.textContent = `Número de cliques: ${contador}`;

    // Cria um item na lista com a data e hora do clique
    const li = document.createElement('li');
    const dataHora = new Date().toLocaleString(); // Pega data e hora atual formatada
    li.textContent = `Clique ${contador} - ${dataHora}`;
    listaCliques.appendChild(li);
});

// OBSERVAÇÃO:
// Métodos importantes usados:
// - createElement(tag): Cria um novo elemento HTML
// - appendChild(element): Adiciona um filho ao elemento pai
// - removeChild(element): Remove um elemento filho
// - textContent: Define ou obtém o conteúdo textual de um elemento
// - innerHTML: (não usado aqui) serve para adicionar conteúdo HTML

// O uso de eventos e manipulação do DOM cria páginas web interativas e dinâmicas.
