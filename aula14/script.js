// Seleciona os elementos do DOM
const input = document.getElementById("taskInput"); // Campo de digitação da tarefa
const taskList = document.getElementById("taskList"); // Lista visual onde as tarefas aparecem
const addBtn = document.getElementById("addTask"); // Botão de adicionar tarefa
const clearBtn = document.getElementById("clearAll"); // Botão de limpar todas as tarefas
const filterBtns = document.querySelectorAll(".filter-btn"); // Botões de filtro (todos, pendente, concluída)

// Armazena as tarefas em memória (array normal)
let tasks = [];

// Função para desenhar as tarefas na tela
function renderTasks(filter = "all") {
  taskList.innerHTML = ""; // Limpa a lista antes de redesenhar

  tasks.forEach((task, index) => {
    // Aplica filtros de exibição
    if (
      (filter === "pendente" && task.completed) ||
      (filter === "concluida" && !task.completed)
    ) return; // Ignora a renderização se não estiver no filtro atual

    const li = document.createElement("li"); // Cria o item de lista
    li.textContent = task.text; // Define o texto da tarefa

    if (task.completed) li.classList.add("completed"); // Se estiver concluída, aplica estilo

    // Alterna o estado de concluída ao clicar
    li.addEventListener("click", () => {
      task.completed = !task.completed; // Alterna entre true/false
      renderTasks(filter); // Re-renderiza com o filtro atual
    });

    // Botão de remoção individual
    const btn = document.createElement("button");
    btn.textContent = "Remover";
    btn.classList.add("remove-btn");

    // Impede que o clique no botão dispare o evento do <li>
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // Evita conflito de eventos
      tasks.splice(index, 1); // Remove do array com base no índice
      renderTasks(filter); // Atualiza a tela
    });

    li.appendChild(btn); // Adiciona botão ao <li>
    taskList.appendChild(li); // Adiciona o <li> completo à <ul>
  });
}

// Evento de clique para adicionar nova tarefa
addBtn.addEventListener("click", () => {
  const text = input.value.trim(); // Pega o valor e remove espaços

  if (text === "") {
    alert("⚠️ Digite uma tarefa válida!");
    return;
  }

  tasks.push({ text, completed: false }); // Adiciona nova tarefa ao array
  input.value = ""; // Limpa o campo de entrada
  renderTasks(); // Atualiza a lista
});

// Evento de clique para limpar todas as tarefas
clearBtn.addEventListener("click", () => {
  if (confirm("Tem certeza que deseja apagar todas as tarefas?")) {
    tasks = []; // Zera o array
    renderTasks(); // Atualiza a tela
  }
});

// Filtro de tarefas (Todos / Pendentes / Concluídas)
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const filtro = btn.dataset.filter; // Pega o filtro do botão
    renderTasks(filtro); // Chama a função com o filtro escolhido
  });
});

// Primeira renderização ao carregar a página
renderTasks();
