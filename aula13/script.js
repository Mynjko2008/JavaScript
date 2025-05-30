let meuElemento = document.getElementById("meuElemento"); //aqui estou recuperando o id do html

function tornarCirculo(){
    meuElemento.classList.add("circle"); //adiciono uma classe para tornar o quadrado um circulo
    meuElemento.classList.remove("square"); //removo uma class para arredondar a caixa
}
function tornarQuadrado(){
    meuElemento.classList.add("square");
    meuElemento.classList.remove("circle");
}


function alterarFormato(){
    if(meuElemento.classList.contains("square")){ // contais = verifica se tem a classe square
        // Se tiver a classe square, vamos torná-lo um círculo
        tornarCirculo();
    } 
    else {
        // Se não tiver a classe square, vamos torná-lo um quadrado
        tornarQuadrado();
    }
}

function verificarClass(){
    if(meuElemento.classList.contains("square")){ // Verifica se o elemento tem a classe square
        alert("O elemento está como QUADRADO"); // exibe um alerta se for quadrado
    } 
    else if(meuElemento.classList.contains("circle")){ // Verifica se o elemento tem a classe circle
        alert("O elemento está como CÍRCULO"); // exibe um alerta se for círculo
    }
    else { // Se não tiver nenhuma das classes
        alert("O elemento não possui classe square nem circle"); // exibe um alerta se não tiver nenhuma das classes
    }
}

//toggle = responsavel por verificar o elemento atual ( funciona como um vigia)
//function alternarFormato(){
  //  meuElemento.classList.toggle("circle"); // Adiciona ou remove a classe circle
  //  meuElemento.classList.toggle("square"); // Adiciona ou remove a classe square
// }