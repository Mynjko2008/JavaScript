let typed; // Variável global para acessar os métodos

// Mensagens iniciais
const mensagensIniciais = [
  "Bem vindo à Obra Social Dom Bosco",
  "Desenvolvimento Front-end",
  "Desenvolvimento Back-end",
  "Cadastre-se aqui !!!"
];

// Função para inicializar o Typed
function iniciarTyped(mensagens = mensagensIniciais) {
  if (typed) typed.destroy(); // Remove instância anterior

  typed = new Typed("#typed", {
    strings: mensagens,
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    startDelay: 500,
    smartBackspace: true,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true
  });
}

// Função para alterar as mensagens dinamicamente
function changeMessages() {
  const novasMensagens = [
    "Curso de Programação Web em andamento...",
    "Inscreva-se nas oficinas técnicas!",
    "Tecnologia a serviço da comunidade.",
    "Venha fazer parte da mudança!"
  ];

  iniciarTyped(novasMensagens);
}

// Espera o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
  iniciarTyped();
});
