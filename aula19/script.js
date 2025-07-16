// DOM = Document Object Model
// Esta aula ensina a capturar, validar e manipular dados de formulários usando eventos em JavaScript

// Selecionando elementos do DOM
const formCadastro = document.getElementById('form-cadastro'); // Formulário principal
const inputNome = document.getElementById('nome'); // Campo de nome
const inputEmail = document.getElementById('email'); // Campo de e-mail
const inputSenha = document.getElementById('senha'); // Campo de senha

const divMensagem = document.getElementById('mensagem'); // Onde aparecerão mensagens de erro
const divResultado = document.getElementById('resultado'); // Onde aparecerão os dados preenchidos

// 🔄 Exemplo adicional: confirmação de senha
// Criamos um novo campo no HTML (com ID: senha-confirmacao) e capturamos aqui
const inputSenhaConfirmacao = document.createElement('input'); // Criando dinamicamente o campo
inputSenhaConfirmacao.type = 'password';
inputSenhaConfirmacao.id = 'senha-confirmacao';
inputSenhaConfirmacao.placeholder = 'Confirme sua senha';
inputSenhaConfirmacao.style.marginTop = '0.5rem';
formCadastro.insertBefore(inputSenhaConfirmacao, formCadastro.querySelector('button')); // Inserido antes do botão

// 🔄 Exemplo adicional: checkbox de termos e condições
const termosContainer = document.createElement('div');
const checkboxTermos = document.createElement('input');
checkboxTermos.type = 'checkbox';
checkboxTermos.id = 'termos';
checkboxTermos.style.marginRight = '0.5rem';

const labelTermos = document.createElement('label');
labelTermos.textContent = 'Aceito os termos de uso';
labelTermos.setAttribute('for', 'termos');
labelTermos.style.fontSize = '0.95rem';

termosContainer.style.marginTop = '1rem';
termosContainer.style.display = 'flex';
termosContainer.style.alignItems = 'center';

termosContainer.appendChild(checkboxTermos);
termosContainer.appendChild(labelTermos);
formCadastro.insertBefore(termosContainer, formCadastro.querySelector('button')); // Inserido antes do botão

// Adicionando o evento 'submit' ao formulário
formCadastro.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Impede o envio padrão do formulário e recarregamento da página

    // Capturando os valores digitados
    const nome = inputNome.value.trim(); // Remove espaços vazios
    const email = inputEmail.value.trim();
    const senha = inputSenha.value.trim();
    const senhaConfirmacao = inputSenhaConfirmacao.value.trim();
    const aceitouTermos = checkboxTermos.checked; // true ou false

    // Validação: campos obrigatórios
    if(nome === '' || email === '' || senha === '' || senhaConfirmacao === '') {
        divMensagem.textContent = '⚠️ Todos os campos são obrigatórios.';
        divResultado.innerHTML = '';
        return;
    }

    // Validação: senha e confirmação devem ser iguais
    if(senha !== senhaConfirmacao) {
        divMensagem.textContent = '⚠️ A senha e a confirmação não coincidem.';
        divResultado.innerHTML = '';
        return;
    }

    // Validação: e-mail simples com expressão regular (regex)
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(!emailValido) {
        divMensagem.textContent = '⚠️ O e-mail informado é inválido.';
        divResultado.innerHTML = '';
        return;
    }

    // Validação: aceitar os termos é obrigatório
    if(!aceitouTermos) {
        divMensagem.textContent = '⚠️ Você precisa aceitar os termos de uso.';
        divResultado.innerHTML = '';
        return;
    }

    // Se passou em todas as validações, limpa a mensagem de erro
    divMensagem.textContent = '';

    // Exibindo os dados como prévia
    divResultado.innerHTML = `
        <p>✅ Cadastro realizado com sucesso!</p>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Senha:</strong> ${'*'.repeat(senha.length)}</p>
    `;

    // Limpa os campos do formulário
    formCadastro.reset();
});

// OBSERVAÇÃO:
// - .checked verifica se um checkbox está marcado (true/false)
// - A regex básica para validar e-mails cobre a maioria dos casos reais
// - Criar elementos dinamicamente permite adaptar a estrutura da página sem precisar editar o HTML
// - Use insertBefore() para adicionar um elemento antes de outro dentro do DOM
// - Este formulário agora simula uma lógica completa de cadastro
