let meuElemento = document.getElementById("meuElemento"); //aqui estou recuperando o id do html

function tornarCirculo(){
    meuElemento.classList.add("circle"); //adiciono uma classe para tornar o quadrado um circulo
    meuElemento.classList.remove("square"); //removo uma class para arredondar a caixa
}
function tornarQuadrado(){
    meuElemento.classList.add("square");
    meuElemento.classList.remove("circle");
}

