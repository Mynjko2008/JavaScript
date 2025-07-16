// DOM = Document Object Model
// O DOM é uma representação da estrutura do HTML da página em forma de objetos que podem ser acessados e manipulados via JavaScript.

// Selecionando elementos do DOM com getElementById:
// Esse método retorna o elemento HTML que possui o id especificado.

const textoCor = document.getElementById('texto-cor'); // Seleciona o <p> que terá a cor alterada
const botaoCor = document.getElementById('botao-cor'); // Seleciona o botão que, ao clicar, muda a cor do texto

// Adicionando um evento de clique (click) ao botão:
// addEventListener é o método que "ouve" um evento específico em um elemento.
// No caso, quando o usuário clicar no botão, a função callback será executada.
botaoCor.addEventListener('click', () => {
    // Alteramos a propriedade 'style.color' do elemento textoCor.
    // style é uma propriedade que acessa os estilos CSS diretamente via JavaScript.
    // Aqui alternamos a cor entre azul (#00bcd4) e laranja (orange).
    if(textoCor.style.color === 'orange') {
        textoCor.style.color = '#00bcd4'; // Define cor azul
    } else {
        textoCor.style.color = 'orange'; // Define cor laranja
    }
});


// Exemplo 2: Mostrar texto digitado em tempo real

const inputTexto = document.getElementById('input-texto'); // Campo de entrada de texto
const mostrarTexto = document.getElementById('mostrar-texto'); // Parágrafo que exibirá o texto digitado

// Evento 'input' é acionado sempre que o valor do campo de texto muda (a cada tecla pressionada ou apagada).
inputTexto.addEventListener('input', (event) => {
    // event.target representa o elemento que disparou o evento (inputTexto).
    // A propriedade 'value' contém o texto digitado no momento.
    mostrarTexto.textContent = event.target.value; // Atualiza o texto do parágrafo em tempo real
});


// Exemplo 3: Alerta ao clicar no botão

const botaoAlerta = document.getElementById('botao-alerta'); // Seleciona o botão que disparará o alerta

botaoAlerta.addEventListener('click', () => {
    // Quando o botão for clicado, será exibido um alerta (popup) para o usuário.
    alert('Você clicou no botão! Parabéns!');
});

// --- Exemplo 4: Alternar classe CSS para estilizar um elemento ---

const caixa = document.getElementById('caixa');
const btnToggleClasse = document.getElementById('btn-toggle-classe');

// addEventListener para escutar clique no botão e alternar a classe 'ativo'
btnToggleClasse.addEventListener('click', () => {
    // classList.toggle adiciona a classe se não existir, ou remove se existir
    caixa.classList.toggle('ativo');
});


// --- Exemplo 5: Criar e remover elementos dinamicamente ---

const btnCriarElemento = document.getElementById('btn-criar-elemento');
const btnRemoverElemento = document.getElementById('btn-remover-elemento');
const container = document.getElementById('container');

btnCriarElemento.addEventListener('click', () => {
    // Criar um novo elemento <p>
    const novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = 'Parágrafo criado dinamicamente.';
    // Adiciona ao container
    container.appendChild(novoParagrafo);
});

btnRemoverElemento.addEventListener('click', () => {
    // Remove o último filho do container se existir
    if(container.lastChild) {
        container.removeChild(container.lastChild);
    }
});


// --- Exemplo 6: Manipulação de atributos e eventos de imagem ---

const btnAlterarImagem = document.getElementById('btn-alterar-imagem');
const imagem = document.getElementById('imagem');

// Assume que existem duas imagens imagem1.jpg e imagem2.jpg na mesma pasta
btnAlterarImagem.addEventListener('click', () => {
    if(imagem.getAttribute('src') === 'imagem1.jpg') {
        imagem.setAttribute('src', 'imagem2.jpg');
        imagem.setAttribute('alt', 'Imagem 2');
    } else {
        imagem.setAttribute('src', 'imagem1.jpg');
        imagem.setAttribute('alt', 'Imagem 1');
    }
});


// --- Exemplo 7: Eventos mouseover e mouseout para alterar estilo ---

const caixaHover = document.getElementById('caixa-hover');

caixaHover.addEventListener('mouseover', () => {
    caixaHover.style.backgroundColor = '#00bcd4'; // muda para azul ao passar mouse
});

caixaHover.addEventListener('mouseout', () => {
    caixaHover.style.backgroundColor = '#333'; // volta para cinza quando mouse sai
});


// --- Exemplo 8: Evento keydown para detectar tecla pressionada ---

document.addEventListener('keydown', (event) => {
    // event.key retorna a tecla pressionada em formato string
    console.log(`Tecla pressionada: ${event.key}`);

    // Exemplo: alerta ao pressionar Enter
    if(event.key === 'Enter') {
        alert('Você pressionou a tecla Enter!');
    }
});


// --- Exemplo 9: Formulário com evento submit e prevenção do comportamento padrão ---

const formContato = document.getElementById('form-contato');

formContato.addEventListener('submit', (event) => {
    // Impede o comportamento padrão de recarregar a página ao enviar o formulário
    event.preventDefault();

    // Seleciona os valores dos inputs
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if(nome && email) {
        alert(`Obrigado pelo contato, ${nome}! Em breve entraremos em contato pelo email: ${email}`);
        // Aqui poderia limpar o formulário ou enviar para um servidor via fetch/AJAX
    } else {
        alert('Por favor, preencha todos os campos antes de enviar.');
    }
});


// OBSERVAÇÃO:
// Usar o DOM para manipular elementos permite criar interfaces dinâmicas,
// onde o conteúdo e estilo da página podem mudar conforme a interação do usuário.

// Outras maneiras comuns de selecionar elementos:
// - document.querySelector() - retorna o primeiro elemento que corresponde a um seletor CSS
// - document.querySelectorAll() - retorna uma lista de todos os elementos que correspondem ao seletor
// Essas funções dão mais flexibilidade, mas getElementById é mais performático para IDs únicos.

// Manipulação comum via DOM:
// - Alterar texto com textContent ou innerHTML
// - Modificar atributos como src, href, className
// - Alterar estilos CSS via style
// - Adicionar, remover ou alternar classes com classList (add, remove, toggle)
// - Criar e remover elementos com createElement e removeChild
