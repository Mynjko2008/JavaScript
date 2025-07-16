const images = [
  { src: 'image/arthur.jpg', alt: 'Imagem do Arthur', name: 'Arthur' },
  { src: 'image/jonh.png', alt: 'Imagem do Jonh', name: 'Jonh' },
  { src: 'image/Mary.png', alt: 'Imagem da Mary', name: 'Mary' }
];

let currentIndex = 0;

function nextImage() {
  const img = document.getElementById('myImage');
  const name = document.getElementById('personName');

  // Animação fade-out
  img.classList.add('fade-out');

  setTimeout(() => {
    // Atualiza índice
    currentIndex = (currentIndex + 1) % images.length;
    
    const current = images[currentIndex];

    img.src = current.src;
    img.alt = current.alt;
    name.textContent = current.name;

    // Remove fade-out para mostrar fade-in
    img.classList.remove('fade-out');
  }, 400);
}


// if = se a condição for valida execute algo

// else = caso contrário / se não for valida execute algo

// else if = se a condição for valida execute algo, se não for valida execute outra coisa

// getAttribute - obter o valor de um atributo(valor da linha)

// setAttribute - definir ou modificar o valor de um atributo(valor da linha)

// src = source (origem) - é o caminho da imagem, onde ela está armazenada

// alt = alternativa - é o texto alternativo que aparece quando a imagem não carrega 
// ou quando o mouse passa por cima da imagem