// Variável global para controlar a instância do Typed.js
let typed;

// Mensagens iniciais para digitação animada
const mensagensIniciais = [
  "Bem vindo à Obra Social Dom Bosco",
  "Desenvolvimento Front-end",
  "Desenvolvimento Back-end",
  "Cadastre-se aqui !!!"
];

// Função para inicializar ou reiniciar o Typed.js com um array de mensagens
function iniciarTyped(mensagens = mensagensIniciais) {
  if (typed) typed.destroy(); // Destroi instância anterior para reiniciar

  typed = new Typed("#typed", {
    strings: mensagens,      // Array de frases a serem digitadas
    typeSpeed: 60,           // Velocidade de digitação (ms por caractere)
    backSpeed: 40,           // Velocidade de apagar
    backDelay: 2000,         // Tempo antes de apagar (ms)
    startDelay: 500,         // Atraso antes de começar (ms)
    smartBackspace: true,    // Apaga apenas o necessário
    loop: true,              // Loop infinito das frases
    showCursor: true,        // Mostrar cursor piscante
    cursorChar: '|',         // Caractere do cursor
    autoInsertCss: true      // Insere CSS padrão automaticamente
  });
}

// Função para alterar as mensagens exibidas dinamicamente
function changeMessages() {
  const novasMensagens = [
    "Curso de Programação Web em andamento...",
    "Inscreva-se nas oficinas técnicas!",
    "Tecnologia a serviço da comunidade.",
    "Venha fazer parte da mudança!"
  ];

  iniciarTyped(novasMensagens);
}

// Aguarda o carregamento do DOM para iniciar o Typed.js
document.addEventListener("DOMContentLoaded", () => {
  iniciarTyped();
});
