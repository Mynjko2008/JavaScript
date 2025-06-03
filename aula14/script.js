const input = document.getElementeById("taskInput");
const ul = document.getElementById("teskList");

function addTask(){
    if(input.value !=="") {
        const li = document.createElement("li")
        li.textContent = input.value;

        const removerBotao = document.createElement("button")

        removerBotao.textContent = "Remover";

        removerBotao.onclick = function(){
            ul.removeChild(li);
        }

        ul.appendChild(li); /* Estou add um filho a nossa UL, quando clicar sobre ele */
        li.appendChild(removerBotao); //Aqui chamamos a nossa const "li" e estamos add a ela um filho (appendChild)

        input.value = "";

    }else{
        alert("Calma Parça, vc tem que insirir uma tarefa!.");
    }
}