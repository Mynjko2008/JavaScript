// DOM = Document Object Model
// Esta aula ensina a salvar, recuperar, atualizar e remover dados usando localStorage no navegador.

// -------- Exemplo 1: Armazenar e Recuperar Nome --------
const inputNome = document.getElementById('input-nome');
const btnSalvarNome = document.getElementById('btn-salvar-nome');
const pNomeSalvo = document.getElementById('nome-salvo');

// Ao carregar a página, verificar se já existe um nome salvo e mostrar
const nomeSalvo = localStorage.getItem('nome');
if (nomeSalvo) {
    pNomeSalvo.textContent = `Nome salvo: ${nomeSalvo}`;
}

// Salvar nome no localStorage ao clicar no botão
btnSalvarNome.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    if (nome === '') {
        alert('Por favor, digite um nome antes de salvar.');
        return;
    }
    localStorage.setItem('nome', nome);
    pNomeSalvo.textContent = `Nome salvo: ${nome}`;
    inputNome.value = '';
});


// -------- Exemplo 2: Lista de Tarefas com Persistência --------
const inputTarefa = document.getElementById('input-tarefa');
const btnAdicionarTarefa = document.getElementById('btn-adicionar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

// Função para renderizar tarefas da lista (do localStorage)
function renderizarTarefas() {
    // Recupera array de tarefas do localStorage ou cria vazio
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    
    // Limpa a lista HTML para renderizar novamente
    listaTarefas.innerHTML = '';

    // Para cada tarefa cria um <li> com texto e botão para remover
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.textContent = tarefa;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';

        // Evento para remover tarefa clicada
        btnRemover.addEventListener('click', () => {
            removerTarefa(index);
        });

        li.appendChild(btnRemover);
        listaTarefas.appendChild(li);
    });
}

// Adicionar tarefa nova
btnAdicionarTarefa.addEventListener('click', () => {
    const tarefa = inputTarefa.value.trim();
    if (tarefa === '') {
        alert('Digite uma tarefa para adicionar.');
        return;
    }
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    inputTarefa.value = '';
    renderizarTarefas();
});

// Função para remover uma tarefa pelo índice
function removerTarefa(index) {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.splice(index, 1); // Remove 1 item na posição index
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    renderizarTarefas();
}

// Carrega lista de tarefas ao abrir a página
renderizarTarefas();


// -------- Exemplo 3: Remover um item específico do localStorage --------
const btnRemoverNome = document.getElementById('btn-remover-nome');
btnRemoverNome.addEventListener('click', () => {
    localStorage.removeItem('nome'); // Remove só o nome salvo
    pNomeSalvo.textContent = '';
    alert('Nome salvo removido com sucesso!');
});


// -------- Exemplo 4: Limpar todo o localStorage --------
const btnLimparStorage = document.getElementById('btn-limpar-storage');
btnLimparStorage.addEventListener('click', () => {
    localStorage.clear(); // Remove todos os dados armazenados
    pNomeSalvo.textContent = '';
    listaTarefas.innerHTML = '';
    alert('Todos os dados do localStorage foram removidos!');
});

/*
OBSERVAÇÕES:
- localStorage.setItem(chave, valor): salva dados como string
- localStorage.getItem(chave): recupera o dado salvo
- localStorage.removeItem(chave): remove um dado específico
- localStorage.clear(): remove tudo do armazenamento local
- Para armazenar arrays/objetos, converta para JSON com JSON.stringify e use JSON.parse para recuperar
- Persistência localStorage mantém dados mesmo após fechar/recarregar a página
*/
