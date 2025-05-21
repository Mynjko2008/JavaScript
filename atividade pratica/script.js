//getAttribute - obter o valor de um atributo(valor da linha)

//setAttribute - definir ou modificar o valor de um atributo(valor da linha)

function changeImage() {
    const img = document.getElementById('myImage'); //aqui conseguimos armazenar o conteúdo da imagem
    const currentSrc = img.getAttribute('src'); //aqui pegamos o atributo SRC da imagem, responsável pela alteração da img

    if (currentSrc === 'image/arthur.jpg') { //se a origem da imagem for igual a 'image/arthur.jpg'
        img.setAttribute('src', 'image/jonh.png'); // usamando o setAttribute, alteramos o valor do atributo src para 'image/jonh.png'
        img.setAttribute('alt', 'imagem do Jonh'); // aqui alteramos o valor do atributo alt para 'Jonh'
    } else { //se não, faz o processo inverso 
        img.setAttribute('src', 'image/arthur.jpg');
        img.setAttribute('alt', 'imagem do Arthur');
    }

}
// if = se a condição for valida execute algo

// else = caso contrário / se não for valida execute algo