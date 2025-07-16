const meuElemento = document.getElementById("meuElemento");

function tornarCirculo() {
    meuElemento.classList.add("circle");
    meuElemento.classList.remove("square");
}

function tornarQuadrado() {
    meuElemento.classList.add("square");
    meuElemento.classList.remove("circle");
}

function alterarFormato() {
    if (meuElemento.classList.contains("square")) {
        tornarCirculo();
    } else {
        tornarQuadrado();
    }
}

function verificarClass() {
    if (meuElemento.classList.contains("square")) {
        alert("O elemento está como QUADRADO");
    } else if (meuElemento.classList.contains("circle")) {
        alert("O elemento está como CÍRCULO");
    } else {
        alert("O elemento não possui classe square nem circle");
    }
}

//toggle = responsavel por verificar o elemento atual ( funciona como um vigia)