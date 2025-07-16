const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addTask");
const clearBtn = document.getElementById("clearAll");
const filterBtns = document.querySelectorAll(".filter-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(filter = "all") {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    if (
      filter === "pendente" && task.completed ||
      filter === "concluida" && !task.completed
    ) return;

    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) li.classList.add("completed");

    li.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks(filter);
    });

    const btn = document.createElement("button");
    btn.textContent = "Remover";
    btn.classList.add("remove-btn");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      saveTasks();
      renderTasks(filter);
    });

    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") {
    alert("⚠️ Digite uma tarefa válida!");
    return;
  }

  tasks.push({ text, completed: false });
  input.value = "";
  saveTasks();
  renderTasks();
});

clearBtn.addEventListener("click", () => {
  if (confirm("Tem certeza que deseja apagar todas as tarefas?")) {
    tasks = [];
    saveTasks();
    renderTasks();
  }
});

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    renderTasks(filter);
  });
});

renderTasks();
